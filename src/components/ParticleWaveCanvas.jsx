import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleWaveCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 320, 500);
    camera.lookAt(0, 0, -100);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x030712, 1);
    container.appendChild(renderer.domElement);

    // 3. Particle Grid Geometry Construction
    const numX = 100;
    const numZ = 60;
    const separation = 28;
    const count = numX * numZ;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialY = new Float32Array(count);

    let i = 0;
    const colorCyan = new THREE.Color(0x00f0ff);
    const colorBlue = new THREE.Color(0x3b82f6);
    const colorPurple = new THREE.Color(0xa855f7);

    for (let ix = 0; ix < numX; ix++) {
      for (let iz = 0; iz < numZ; iz++) {
        const x = (ix - numX / 2) * separation;
        const z = (iz - numZ / 2) * separation - 200;
        const y = 0;

        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
        initialY[i / 3] = y;

        // Gradient color interpolation based on position
        const mixRatio = ix / numX;
        const vertexColor = new THREE.Color();
        if (mixRatio < 0.5) {
          vertexColor.copy(colorCyan).lerp(colorBlue, mixRatio * 2);
        } else {
          vertexColor.copy(colorBlue).lerp(colorPurple, (mixRatio - 0.5) * 2);
        }

        colors[i] = vertexColor.r;
        colors[i + 1] = vertexColor.g;
        colors[i + 2] = vertexColor.b;

        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Texture Canvas for Glowing Circular Dots
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)');
    gradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 7.5,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 4. Mouse Tracking & Smooth Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX - window.innerWidth / 2) * 0.15;
      targetMouseY = (event.clientY - window.innerHeight / 2) * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Animation Loop
    let countTime = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      countTime += 0.035;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY + 320 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, -100);

      const posArray = geometry.attributes.position.array;

      let idx = 0;
      for (let ix = 0; ix < numX; ix++) {
        for (let iz = 0; iz < numZ; iz++) {
          // Complex 3D sine wave calculation with mouse reactivity
          const wave1 = Math.sin(ix * 0.25 + countTime) * 35;
          const wave2 = Math.cos(iz * 0.25 + countTime * 0.8) * 35;
          const distFromCenter = Math.sqrt(
            Math.pow(ix - numX / 2, 2) + Math.pow(iz - numZ / 2, 2)
          );
          const ripple = Math.sin(distFromCenter * 0.2 - countTime * 1.2) * 15;

          posArray[idx + 1] = wave1 + wave2 + ripple;
          idx += 3;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]"
    />
  );
}
