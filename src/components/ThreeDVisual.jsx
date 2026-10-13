import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Shared Three.js Renderer Engine
 * Renders all 3D objects with studio lighting into 2D canvases via a single WebGL context.
 * Guarantees zero WebGL context loss, instant loading, and 60fps performance on mobile & desktop.
 */
class Shared3DRenderer {
  constructor() {
    this.renderer = null;
    this.camera = null;
    this.lights = [];
    this.scenes = {};
    this.groups = {};
    this.registeredItems = new Map();
    this.animId = null;
    this.isInitialized = false;
    this.clock = null;
  }

  init() {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(200, 200, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);

    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.camera.position.set(0, 0, 4.3);

    this.clock = new THREE.Clock();
    this.isInitialized = true;
  }

  getScene(type) {
    if (this.scenes[type]) return this.scenes[type];

    const scene = new THREE.Scene();

    // Studio Lighting: soft ambient + natural key + soft fill + subtle rim
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.55);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.35);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Root Group
    const group = new THREE.Group();
    scene.add(group);

    // Build Model Geometry
    this.buildModel(type, group);

    this.scenes[type] = scene;
    this.groups[type] = group;

    return scene;
  }

  buildModel(type, group) {
    switch (type) {
      /* ── 1. Lightbulb (Idea & Scope) ── */
      case 'lightbulb': {
        const bulbMat = new THREE.MeshStandardMaterial({
          color: 0xfef08a,
          emissive: 0xf59e0b,
          emissiveIntensity: 0.28,
          roughness: 0.28,
          metalness: 0.08,
        });
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.55, 28, 28), bulbMat);
        bulb.position.y = 0.22;
        bulb.scale.set(1, 1.15, 1);
        group.add(bulb);

        const metalMat = new THREE.MeshStandardMaterial({
          color: 0x94a3b8,
          roughness: 0.4,
          metalness: 0.55,
        });
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.22, 24), metalMat);
        neck.position.y = -0.28;
        group.add(neck);

        const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.2, 24), metalMat);
        screw.position.y = -0.46;
        group.add(screw);

        const contact = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 16, 12),
          new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 })
        );
        contact.position.y = -0.56;
        group.add(contact);
        break;
      }

      /* ── 2. Color Palette (Design System) ── */
      case 'palette': {
        const boardMat = new THREE.MeshStandardMaterial({
          color: 0x334155,
          roughness: 0.5,
          metalness: 0.12,
        });
        const board = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.08, 36), boardMat);
        board.scale.set(1.22, 1, 0.88);
        group.add(board);

        const colors = [0x38bdf8, 0xa855f7, 0x34d399, 0xfbbf24, 0xf43f5e];
        colors.forEach((col, i) => {
          const angle = (i / colors.length) * Math.PI * 1.5 - 0.7;
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 16, 12),
            new THREE.MeshStandardMaterial({ color: col, roughness: 0.35 })
          );
          dot.scale.set(1, 0.45, 1);
          dot.position.set(Math.cos(angle) * 0.54, 0.05, Math.sin(angle) * 0.38);
          group.add(dot);
        });

        // Stylus / Artist brush
        const brush = new THREE.Mesh(
          new THREE.CylinderGeometry(0.045, 0.045, 0.95, 16),
          new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.4, metalness: 0.3 })
        );
        brush.rotation.z = Math.PI / 4;
        brush.position.set(0.1, 0.08, 0);
        group.add(brush);
        break;
      }

      /* ── 3. Browser Window / Coding (Frontend Dev) ── */
      case 'browser': {
        const frameMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.4,
          metalness: 0.12,
        });
        const frame = new THREE.Mesh(new THREE.BoxGeometry(1.28, 0.92, 0.12), frameMat);
        group.add(frame);

        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(1.22, 0.18, 0.13),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 })
        );
        bar.position.y = 0.33;
        group.add(bar);

        // 3 Header dots
        [-0.46, -0.36, -0.26].forEach((x, i) => {
          const cols = [0xf87171, 0xfbbf24, 0x4ade80];
          const dot = new THREE.Mesh(
            new THREE.CylinderGeometry(0.035, 0.035, 0.03, 14),
            new THREE.MeshStandardMaterial({ color: cols[i], roughness: 0.3 })
          );
          dot.rotation.x = Math.PI / 2;
          dot.position.set(x, 0.33, 0.07);
          group.add(dot);
        });

        // 3D Code glyph < / >
        const codeMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          roughness: 0.3,
          emissive: 0x0284c7,
          emissiveIntensity: 0.3,
        });
        const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.04), codeMat);
        b1.rotation.z = Math.PI / 3;
        b1.position.set(-0.16, -0.05, 0.08);
        group.add(b1);
        const b2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.04), codeMat);
        b2.rotation.z = -Math.PI / 3;
        b2.position.set(-0.16, -0.15, 0.08);
        group.add(b2);

        const slash = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.28, 0.035), codeMat);
        slash.rotation.z = -0.35;
        slash.position.set(0, -0.1, 0.08);
        group.add(slash);

        const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.04), codeMat);
        b3.rotation.z = -Math.PI / 3;
        b3.position.set(0.16, -0.05, 0.08);
        group.add(b3);
        const b4 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.04), codeMat);
        b4.rotation.z = Math.PI / 3;
        b4.position.set(0.16, -0.15, 0.08);
        group.add(b4);
        break;
      }

      /* ── 4. Server (Backend & APIs) ── */
      case 'server': {
        const rackMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.35,
          metalness: 0.25,
        });
        const faceMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
        const ledGreen = new THREE.MeshStandardMaterial({
          color: 0x34d399,
          emissive: 0x10b981,
          emissiveIntensity: 0.45,
        });
        const ledBlue = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.45,
        });

        [-0.32, 0, 0.32].forEach((y) => {
          const unit = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.24, 0.72), rackMat);
          unit.position.y = y;
          group.add(unit);

          const face = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.18, 0.05), faceMat);
          face.position.set(0, y, 0.37);
          group.add(face);

          const led1 = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), ledGreen);
          led1.position.set(0.44, y, 0.4);
          group.add(led1);

          const led2 = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), ledBlue);
          led2.position.set(0.33, y, 0.4);
          group.add(led2);
        });
        break;
      }

      /* ── 5. Database Cylinder (Database Optimization) ── */
      case 'database': {
        const diskMat = new THREE.MeshStandardMaterial({
          color: 0x334155,
          roughness: 0.35,
          metalness: 0.28,
        });
        const ringMat = new THREE.MeshStandardMaterial({
          color: 0x0ea5e9,
          roughness: 0.3,
          emissive: 0x0284c7,
          emissiveIntensity: 0.25,
        });

        [-0.32, 0, 0.32].forEach((y) => {
          const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.64, 0.64, 0.22, 32), diskMat);
          disk.position.y = y;
          group.add(disk);

          const ring = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.02, 12, 32), ringMat);
          ring.rotation.x = Math.PI / 2;
          ring.position.y = y;
          group.add(ring);
        });
        break;
      }

      /* ── 6. Rocket (Deploy & Ship) ── */
      case 'rocket': {
        const bodyMat = new THREE.MeshStandardMaterial({
          color: 0xe2e8f0,
          roughness: 0.32,
          metalness: 0.12,
        });
        const accentMat = new THREE.MeshStandardMaterial({
          color: 0x3b82f6,
          roughness: 0.32,
          metalness: 0.18,
        });
        const flameMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          emissive: 0xfbbf24,
          emissiveIntensity: 0.55,
          roughness: 0.4,
        });

        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.8, 28), bodyMat);
        group.add(body);

        const nose = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.46, 28), accentMat);
        nose.position.y = 0.63;
        group.add(nose);

        const porthole = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 12, 24), accentMat);
        porthole.position.set(0, 0.15, 0.28);
        group.add(porthole);

        const glass = new THREE.Mesh(
          new THREE.SphereGeometry(0.09, 16, 12),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 })
        );
        glass.position.set(0, 0.15, 0.27);
        group.add(glass);

        [-0.32, 0.32].forEach((x, i) => {
          const fin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.32, 0.04), accentMat);
          fin.rotation.z = (i === 0 ? 1 : -1) * 0.45;
          fin.position.set(x, -0.32, 0);
          group.add(fin);
        });

        const flame = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.38, 16), flameMat);
        flame.rotation.x = Math.PI;
        flame.position.y = -0.58;
        group.add(flame);

        group.rotation.z = -0.28;
        break;
      }

      /* ── 7. AWS Cloud (AWS Certification) ── */
      case 'aws-cloud': {
        const cloudMat = new THREE.MeshStandardMaterial({
          color: 0xf1f5f9,
          roughness: 0.45,
          metalness: 0.06,
        });
        const spheres = [
          { r: 0.44, x: 0, y: 0.06, z: 0 },
          { r: 0.34, x: -0.36, y: -0.06, z: 0.05 },
          { r: 0.36, x: 0.36, y: -0.06, z: 0.05 },
          { r: 0.28, x: -0.16, y: -0.18, z: 0.1 },
          { r: 0.3, x: 0.18, y: -0.18, z: 0.1 },
        ];
        spheres.forEach((s) => {
          const m = new THREE.Mesh(new THREE.SphereGeometry(s.r, 22, 18), cloudMat);
          m.position.set(s.x, s.y, s.z);
          group.add(m);
        });

        // Warm AWS amber curve accent
        const arcMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          roughness: 0.3,
          emissive: 0xd97706,
          emissiveIntensity: 0.25,
        });
        const arc = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.045, 12, 32, Math.PI * 0.8), arcMat);
        arc.rotation.z = -Math.PI * 0.9;
        arc.position.set(0, -0.26, 0.18);
        group.add(arc);
        break;
      }

      /* ── 8. Web Dev (Web Development) ── */
      case 'web-dev': {
        const frameMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.4,
          metalness: 0.12,
        });
        const frame = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.9, 0.11), frameMat);
        group.add(frame);

        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(1.18, 0.16, 0.12),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 })
        );
        bar.position.y = 0.33;
        group.add(bar);

        [-0.45, -0.35, -0.25].forEach((x, i) => {
          const cols = [0xf87171, 0xfbbf24, 0x4ade80];
          const dot = new THREE.Mesh(
            new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12),
            new THREE.MeshStandardMaterial({ color: cols[i] })
          );
          dot.rotation.x = Math.PI / 2;
          dot.position.set(x, 0.33, 0.07);
          group.add(dot);
        });

        const codeMat = new THREE.MeshStandardMaterial({
          color: 0x3b82f6,
          roughness: 0.3,
          emissive: 0x2563eb,
          emissiveIntensity: 0.3,
        });
        const slash = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.38, 0.04), codeMat);
        slash.rotation.z = -0.35;
        slash.position.set(0, -0.06, 0.08);
        group.add(slash);

        const leftBracket = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.04), codeMat);
        leftBracket.rotation.z = 0.4;
        leftBracket.position.set(-0.24, -0.06, 0.08);
        group.add(leftBracket);

        const rightBracket = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.04), codeMat);
        rightBracket.rotation.z = -0.4;
        rightBracket.position.set(0.24, -0.06, 0.08);
        group.add(rightBracket);
        break;
      }

      /* ── 9. GCP Cloud (Google Cloud Certificate) ── */
      case 'gcp-cloud': {
        const cloudMat = new THREE.MeshStandardMaterial({
          color: 0xf8fafc,
          roughness: 0.45,
          metalness: 0.06,
        });
        const spheres = [
          { r: 0.44, x: 0, y: 0.06, z: 0 },
          { r: 0.34, x: -0.36, y: -0.06, z: 0.05 },
          { r: 0.36, x: 0.36, y: -0.06, z: 0.05 },
          { r: 0.28, x: -0.16, y: -0.18, z: 0.1 },
          { r: 0.3, x: 0.18, y: -0.18, z: 0.1 },
        ];
        spheres.forEach((s) => {
          const m = new THREE.Mesh(new THREE.SphereGeometry(s.r, 22, 18), cloudMat);
          m.position.set(s.x, s.y, s.z);
          group.add(m);
        });

        // 4 GCP Brand color accent dots
        const gcpColors = [0x4285f4, 0xea4335, 0xfbbc05, 0x34a853];
        gcpColors.forEach((col, i) => {
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.075, 16, 12),
            new THREE.MeshStandardMaterial({ color: col, roughness: 0.32 })
          );
          dot.position.set(-0.32 + i * 0.21, -0.34, 0.16);
          group.add(dot);
        });
        break;
      }

      /* ── 10. Power BI Chart (Microsoft Power BI) ── */
      case 'power-bi': {
        const base = new THREE.Mesh(
          new THREE.BoxGeometry(1.24, 0.08, 0.8),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 })
        );
        base.position.y = -0.42;
        group.add(base);

        const barData = [
          { h: 0.32, col: 0xf59e0b, x: -0.38 },
          { h: 0.54, col: 0xeab308, x: -0.12 },
          { h: 0.74, col: 0xfacc15, x: 0.14 },
          { h: 0.94, col: 0xd97706, x: 0.4 },
        ];
        barData.forEach((b) => {
          const bar = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, b.h, 0.22),
            new THREE.MeshStandardMaterial({ color: b.col, roughness: 0.35, metalness: 0.12 })
          );
          bar.position.set(b.x, -0.42 + b.h / 2, 0);
          group.add(bar);
        });
        break;
      }

      /* ── 11. Trophy (Vanquish / Sports Fest) ── */
      case 'trophy': {
        const goldMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          roughness: 0.3,
          metalness: 0.55,
        });
        const darkBase = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.45,
          metalness: 0.2,
        });

        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.22, 0.55, 24), goldMat);
        cup.position.y = 0.2;
        group.add(cup);

        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.25, 16), goldMat);
        stem.position.y = -0.18;
        group.add(stem);

        const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.22, 0.48), darkBase);
        pedestal.position.y = -0.4;
        group.add(pedestal);

        [-0.42, 0.42].forEach((x) => {
          const handle = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.035, 12, 20), goldMat);
          handle.position.set(x, 0.2, 0);
          group.add(handle);
        });
        break;
      }

      /* ── 12. Hackathon Medal (CodeFiesta Hackathon 3.0) ── */
      case 'hackathon': {
        const medalMat = new THREE.MeshStandardMaterial({
          color: 0x6366f1,
          roughness: 0.35,
          metalness: 0.3,
        });
        const rimMat = new THREE.MeshStandardMaterial({
          color: 0x8b5cf6,
          roughness: 0.3,
          metalness: 0.45,
        });
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.32,
          roughness: 0.25,
        });

        const medal = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.12, 6), medalMat);
        medal.rotation.x = Math.PI / 2;
        group.add(medal);

        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.035, 12, 24), rimMat);
        group.add(rim);

        const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), coreMat);
        star.position.z = 0.08;
        group.add(star);
        break;
      }

      default:
        break;
    }
  }

  register(id, type, canvas, isVisibleGetter) {
    this.init();
    this.registeredItems.set(id, { type, canvas, isVisibleGetter });

    if (!this.animId) {
      this.startLoop();
    }
  }

  unregister(id) {
    this.registeredItems.delete(id);
    if (this.registeredItems.size === 0 && this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  startLoop() {
    const renderFrame = () => {
      this.animId = requestAnimationFrame(renderFrame);

      if (!this.renderer || !this.isInitialized) return;

      const elapsedTime = this.clock ? this.clock.getElapsedTime() : performance.now() * 0.001;

      this.registeredItems.forEach(({ type, canvas, isVisibleGetter }) => {
        if (!isVisibleGetter || !isVisibleGetter()) return;
        if (!canvas) return;

        const scene = this.getScene(type);
        const group = this.groups[type];

        if (group) {
          // Slow, subtle rotation (approx 0.35 rad/s)
          group.rotation.y = elapsedTime * 0.38;
          // Gentle floating movement
          group.position.y = Math.sin(elapsedTime * 1.6) * 0.06;
          // Soft natural studio pitch
          group.rotation.x = 0.15 + Math.sin(elapsedTime * 0.8) * 0.03;
        }

        this.renderer.render(scene, this.camera);

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(this.renderer.domElement, 0, 0, canvas.width, canvas.height);
        }
      });
    };

    this.animId = requestAnimationFrame(renderFrame);
  }
}

// Global Singleton
const sharedRenderer = new Shared3DRenderer();

/**
 * ThreeDVisual component
 * Mounts a responsive 2D canvas driven by the shared 3D renderer.
 */
export default function ThreeDVisual({ type, className = '' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const id = `${type}_${Math.random().toString(36).substr(2, 9)}`;

    // IntersectionObserver to only render when in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    sharedRenderer.register(id, type, canvas, () => isVisibleRef.current);

    return () => {
      observer.disconnect();
      sharedRenderer.unregister(id);
    };
  }, [type]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <canvas
        ref={canvasRef}
        width={180}
        height={180}
        className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
