import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';

// ─── Responsive particle counts ──────────────────────────────────────────────
function getCount() {
  const w = window.innerWidth;
  if (w < 640)  return 700;
  if (w < 1024) return 1200;
  return 2000;
}

// ─── Portfolio palette: dark navy bg, blue/indigo/cyan accent ─────────────────
const PALETTE = [
  new THREE.Color(0x3b82f6), // blue-500
  new THREE.Color(0x60a5fa), // blue-400
  new THREE.Color(0x93c5fd), // blue-300
  new THREE.Color(0x6366f1), // indigo-500
  new THREE.Color(0x818cf8), // indigo-400
  new THREE.Color(0xa5b4fc), // indigo-300
  new THREE.Color(0x22d3ee), // cyan-400 (rare accent)
  new THREE.Color(0xe2e8f0), // slate-200 (dim stars)
  new THREE.Color(0x94a3b8), // slate-400 (mid stars)
];

function UniverseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // fully transparent — body bg shows through

    // ── Camera ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65, window.innerWidth / window.innerHeight, 0.5, 2000
    );
    camera.position.set(0, 0, 90);

    // ── Build particle system ────────────────────────────────────────────────
    const COUNT = getCount();

    // Per-particle data (CPU only — never re-allocated)
    const basePos  = new Float32Array(COUNT * 3); // resting position
    const pos      = new Float32Array(COUNT * 3); // live GPU position
    const col      = new Float32Array(COUNT * 3);
    const sz       = new Float32Array(COUNT);
    const phX      = new Float32Array(COUNT);
    const phY      = new Float32Array(COUNT);
    const phZ      = new Float32Array(COUNT);
    const ampX     = new Float32Array(COUNT);
    const ampY     = new Float32Array(COUNT);
    const ampZ     = new Float32Array(COUNT);
    const spd      = new Float32Array(COUNT); // gentle constant drift speed
    const driftX   = new Float32Array(COUNT);
    const driftY   = new Float32Array(COUNT);
    const driftZ   = new Float32Array(COUNT);
    const burstDX  = new Float32Array(COUNT); // burst offset (decays to 0)
    const burstDY  = new Float32Array(COUNT);

    // 3 depth layers: far/mid/near — gives real perspective depth feel
    const LAYERS = [
      { count: Math.floor(COUNT * 0.55), zMin: -120, zMax: -30, sizeMin: 0.18, sizeMax: 0.5, opacityBase: 0.45 },
      { count: Math.floor(COUNT * 0.30), zMin: -30,  zMax:  30, sizeMin: 0.3,  sizeMax: 0.9, opacityBase: 0.70 },
      { count: COUNT - Math.floor(COUNT * 0.55) - Math.floor(COUNT * 0.30),
               zMin:  30,  zMax:  90, sizeMin: 0.5,  sizeMax: 1.4, opacityBase: 0.85 },
    ];

    let idx = 0;
    for (const layer of LAYERS) {
      for (let k = 0; k < layer.count; k++, idx++) {
        const x = (Math.random() - 0.5) * 280;
        const y = (Math.random() - 0.5) * 200;
        const z = layer.zMin + Math.random() * (layer.zMax - layer.zMin);

        basePos[idx*3]   = x;
        basePos[idx*3+1] = y;
        basePos[idx*3+2] = z;
        pos[idx*3]   = x;
        pos[idx*3+1] = y;
        pos[idx*3+2] = z;

        // Mostly blue/indigo, rare cyan accent
        const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        // Darken far particles slightly for depth feel
        const depthFade = layer.opacityBase;
        col[idx*3]   = c.r * depthFade;
        col[idx*3+1] = c.g * depthFade;
        col[idx*3+2] = c.b * depthFade;

        // Larger, brighter foreground particles; smaller, dimmer background
        sz[idx] = layer.sizeMin + Math.random() * (layer.sizeMax - layer.sizeMin);

        // Unique phases and amplitudes for each particle
        phX[idx] = Math.random() * Math.PI * 2;
        phY[idx] = Math.random() * Math.PI * 2;
        phZ[idx] = Math.random() * Math.PI * 2;
        ampX[idx] = 0.6 + Math.random() * 1.8;
        ampY[idx] = 0.5 + Math.random() * 1.4;
        ampZ[idx] = 0.3 + Math.random() * 1.0;

        // Tiny independent constant drift
        spd[idx]    = 0.6 + Math.random() * 0.8;
        driftX[idx] = (Math.random() - 0.5) * 0.0025;
        driftY[idx] = (Math.random() - 0.5) * 0.0018;
        driftZ[idx] = (Math.random() - 0.5) * 0.0012;
      }
    }

    const geo = new THREE.BufferGeometry();
    const posAttr  = new THREE.BufferAttribute(pos, 3);
    const colAttr  = new THREE.BufferAttribute(col, 3);
    const szAttr   = new THREE.BufferAttribute(sz,  1);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);
    geo.setAttribute('color',    colAttr);
    geo.setAttribute('size',     szAttr);

    const mat = new THREE.PointsMaterial({
      size:           0.6,
      sizeAttenuation: true,
      vertexColors:   true,
      transparent:    true,
      opacity:        0.82,
      depthWrite:     false,
      blending:       THREE.AdditiveBlending, // glow-like overlap effect
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ── Mouse / parallax ────────────────────────────────────────────────────
    let mNX = 0, mNY = 0;      // normalized -1..1
    let mWX = 0, mWY = 0;      // approximate world coords at z=0
    const BURST_R2 = 1600;     // 40 unit radius²

    const onMouse = (e) => {
      mNX = (e.clientX / window.innerWidth)  * 2 - 1;
      mNY = -(e.clientY / window.innerHeight) * 2 + 1;
      mWX = mNX * (window.innerWidth / window.innerHeight) * 90;
      mWY = mNY * 90;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    // Camera parallax lerp targets
    let camTX = 0, camTY = 0;

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // ── Wrap bounds ──────────────────────────────────────────────────────────
    const WX = 140, WY = 100, WZ = 100;
    function wrap(v, half) {
      const full = half * 2;
      return ((v + half) % full + full) % full - half;
    }

    // ── Animation loop ───────────────────────────────────────────────────────
    let rafId;
    let lastT = 0;

    const animate = (ts) => {
      rafId = requestAnimationFrame(animate);
      const t  = ts * 0.001;
      const dt = Math.min(t - lastT, 0.05);
      lastT = t;

      // Camera gentle parallax
      camTX += (mNX * 5 - camTX) * 0.025;
      camTY += (mNY * 4 - camTY) * 0.025;
      camera.position.x += (camTX - camera.position.x) * 0.04;
      camera.position.y += (camTY - camera.position.y) * 0.04;

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;

        // Base sinusoidal drift + linear velocity drift
        const nx = basePos[i3]   + Math.sin(t * 0.25 * spd[i] + phX[i]) * ampX[i] + driftX[i] * t * 60;
        const ny = basePos[i3+1] + Math.cos(t * 0.20 * spd[i] + phY[i]) * ampY[i] + driftY[i] * t * 60;
        const nz = basePos[i3+2] + Math.sin(t * 0.15 * spd[i] + phZ[i]) * ampZ[i] + driftZ[i] * t * 60;

        // Wrap so particles never escape the volume
        const wx = wrap(nx, WX);
        const wy = wrap(ny, WY);
        const wz = wrap(nz, WZ);

        // Local burst repulsion
        const dx = wx - mWX;
        const dy = wy - mWY;
        const d2 = dx*dx + dy*dy;
        if (d2 < BURST_R2 && d2 > 0.01) {
          const d    = Math.sqrt(d2);
          const force = (1 - d / Math.sqrt(BURST_R2)) * 8.0;
          burstDX[i] += (dx / d) * force * dt;
          burstDY[i] += (dy / d) * force * dt;
        }
        burstDX[i] *= 0.90;
        burstDY[i] *= 0.90;

        pos[i3]   = wx + burstDX[i];
        pos[i3+1] = wy + burstDY[i];
        pos[i3+2] = wz;
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
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
        width: '100vw',
        height: '100vh',
        zIndex: 2,            // above Preloader bg, below Preloader content (z-50) & portfolio content (z-10+)
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}

// ─── Portal wrapper — renders directly into <body>, bypassing ALL React
//     stacking contexts (including the Preloader's fixed z-50 layer)
export default function GlobalParticleUniverse() {
  return createPortal(<UniverseCanvas />, document.body);
}
