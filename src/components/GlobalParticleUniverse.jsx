import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ─── CONFIG ────────────────────────────────────────────────────────────────
const isMobile = () => window.innerWidth < 768;
const isTablet = () => window.innerWidth < 1024;

function getParticleCount() {
  if (isMobile()) return 600;
  if (isTablet()) return 1000;
  return 1800;
}

// Portfolio accent palette: deep navy bg, soft blue, indigo, slate
const COLORS = [
  new THREE.Color(0x3b82f6), // blue-500
  new THREE.Color(0x60a5fa), // blue-400
  new THREE.Color(0x818cf8), // indigo-400
  new THREE.Color(0x6366f1), // indigo-500
  new THREE.Color(0x93c5fd), // blue-300
  new THREE.Color(0xa5b4fc), // indigo-300
  new THREE.Color(0xcbd5e1), // slate-300 (dim stars)
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────
export default function GlobalParticleUniverse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Scene / Camera / Renderer ──────────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 0, 80);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,        // off for perf on global canvas
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);   // fully transparent — portfolio bg shows through

    // ── Particle geometry ──────────────────────────────────────────────────
    const COUNT = getParticleCount();

    const positions    = new Float32Array(COUNT * 3);
    const colors       = new Float32Array(COUNT * 3);
    const sizes        = new Float32Array(COUNT);
    // Velocity/phase arrays — never uploaded to GPU, used only in JS
    const velX         = new Float32Array(COUNT);
    const velY         = new Float32Array(COUNT);
    const velZ         = new Float32Array(COUNT);
    const phaseX       = new Float32Array(COUNT);
    const phaseY       = new Float32Array(COUNT);
    const phaseZ       = new Float32Array(COUNT);
    const ampX         = new Float32Array(COUNT);
    const ampY         = new Float32Array(COUNT);
    const ampZ         = new Float32Array(COUNT);
    // Base (origin) positions for returning after burst
    const baseX        = new Float32Array(COUNT);
    const baseY        = new Float32Array(COUNT);
    const baseZ        = new Float32Array(COUNT);
    // Per-particle burst offset (blends back to 0)
    const burstX       = new Float32Array(COUNT);
    const burstY       = new Float32Array(COUNT);
    const burstZ       = new Float32Array(COUNT);

    // Spread particles in a deep 3D volume matching the camera frustum
    for (let i = 0; i < COUNT; i++) {
      // Random position in a wide/tall/deep box
      const x = (Math.random() - 0.5) * 260;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;

      baseX[i] = x; baseY[i] = y; baseZ[i] = z;
      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Random accent color from portfolio palette
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Mix of large dim stars + small bright specks
      sizes[i] = Math.random() < 0.15 ? 0.8 + Math.random() * 0.8 : 0.2 + Math.random() * 0.5;

      // Individual movement parameters — all different, creating organic feel
      velX[i] = (Math.random() - 0.5) * 0.004;
      velY[i] = (Math.random() - 0.5) * 0.003;
      velZ[i] = (Math.random() - 0.5) * 0.002;

      phaseX[i] = Math.random() * Math.PI * 2;
      phaseY[i] = Math.random() * Math.PI * 2;
      phaseZ[i] = Math.random() * Math.PI * 2;

      ampX[i] = 0.8 + Math.random() * 1.2;
      ampY[i] = 0.6 + Math.random() * 1.0;
      ampZ[i] = 0.4 + Math.random() * 0.8;
    }

    const geo = new THREE.BufferGeometry();
    const posAttr   = new THREE.BufferAttribute(positions, 3);
    const colAttr   = new THREE.BufferAttribute(colors, 3);
    const sizeAttr  = new THREE.BufferAttribute(sizes, 1);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);
    geo.setAttribute('color',    colAttr);
    geo.setAttribute('size',     sizeAttr);

    const mat = new THREE.PointsMaterial({
      vertexColors:  true,
      sizeAttenuation: true,
      size:          0.5,
      transparent:   true,
      opacity:       0.75,
      depthWrite:    false,
      blending:      THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ── Mouse state ────────────────────────────────────────────────────────
    let mouseNX = 0, mouseNY = 0;   // normalized [-1, 1]
    let mouseWorldX = 0, mouseWorldY = 0;
    const BURST_RADIUS_SQ = 900;    // 30 units radius in world space

    const onMouseMove = (e) => {
      mouseNX = (e.clientX / window.innerWidth)  * 2 - 1;
      mouseNY = -(e.clientY / window.innerHeight) * 2 + 1;
      // Approximate world position at z=0 plane for burst calc
      mouseWorldX = mouseNX * (window.innerWidth  / window.innerHeight) * 80;
      mouseWorldY = mouseNY * 80;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ── Camera parallax lerp targets ───────────────────────────────────────
    let camTargetX = 0, camTargetY = 0;

    // ── Resize ────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // ── Animation loop ────────────────────────────────────────────────────
    let rafId;
    let lastTime = 0;
    const WRAP = 130; // half-box wrap boundary (X)
    const WRAPY = 100;
    const WRAPZ = 100;

    const animate = (time) => {
      rafId = requestAnimationFrame(animate);
      const t = time * 0.001;          // seconds
      const dt = Math.min(t - lastTime, 0.05);
      lastTime = t;

      // -- Camera subtle parallax --
      camTargetX += (mouseNX * 4 - camTargetX) * 0.03;
      camTargetY += (mouseNY * 3 - camTargetY) * 0.03;
      camera.position.x += (camTargetX - camera.position.x) * 0.05;
      camera.position.y += (camTargetY - camera.position.y) * 0.05;

      // -- Update each particle independently --
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;

        // Sinusoidal drift in X/Y/Z — each particle has its own phase & amp
        const nx = baseX[i]
          + Math.sin(t * 0.3 + phaseX[i]) * ampX[i]
          + velX[i] * t * 60;
        const ny = baseY[i]
          + Math.cos(t * 0.25 + phaseY[i]) * ampY[i]
          + velY[i] * t * 60;
        const nz = baseZ[i]
          + Math.sin(t * 0.2 + phaseZ[i]) * ampZ[i]
          + velZ[i] * t * 60;

        // Wrap-around so particles never escape the volume
        const wx = ((nx + WRAP)  % (WRAP * 2) + (WRAP * 2)) % (WRAP * 2) - WRAP;
        const wy = ((ny + WRAPY) % (WRAPY * 2) + (WRAPY * 2)) % (WRAPY * 2) - WRAPY;
        const wz = ((nz + WRAPZ) % (WRAPZ * 2) + (WRAPZ * 2)) % (WRAPZ * 2) - WRAPZ;

        // -- Local burst / repulsion from cursor --
        const dx = wx - mouseWorldX;
        const dy = wy - mouseWorldY;
        const distSq = dx * dx + dy * dy;

        if (distSq < BURST_RADIUS_SQ) {
          const dist  = Math.sqrt(distSq) + 0.001;
          const force = (1 - dist / Math.sqrt(BURST_RADIUS_SQ)) * 6.0;
          burstX[i] += (dx / dist) * force * dt;
          burstY[i] += (dy / dist) * force * dt;
        }

        // Decay burst offset back to 0 smoothly
        burstX[i] *= 0.92;
        burstY[i] *= 0.92;
        burstZ[i] *= 0.92;

        positions[i3]     = wx + burstX[i];
        positions[i3 + 1] = wy + burstY[i];
        positions[i3 + 2] = wz + burstZ[i];
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate(0);

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',   // never blocks clicks/scroll
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}
