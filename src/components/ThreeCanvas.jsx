import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Custom GLSL Fragment Shader for Background Plasma Waves
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec2 vUv;

      void main() {
        vec2 st = vUv;
        float dist = length(st - uMouse);
        
        float wave = sin(st.x * 10.0 + uTime * 1.5) * cos(st.y * 10.0 + uTime * 1.5);
        vec3 purple = vec3(0.58, 0.20, 0.92);
        vec3 orange = vec3(1.0, 0.33, 0.0);
        vec3 darkBg = vec3(0.02, 0.03, 0.04);

        vec3 color = mix(purple, orange, wave * 0.5 + 0.5);
        color = mix(color, darkBg, smoothstep(0.1, 0.6, dist));

        gl_FragColor = vec4(color, 0.12);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }
    };

    // Background Shader Plane
    const bgGeo = new THREE.PlaneGeometry(16, 10);
    const bgMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });
    const bgMesh = new THREE.Mesh(bgGeo, bgMat);
    bgMesh.position.z = -2;
    scene.add(bgMesh);

    // 3. 3D Floating Geometric Object (TorusKnot)
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      wireframe: true,
      emissive: 0xa855f7,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.position.set(2.2, 0, 0);
    scene.add(knotMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff7700, 2, 50);
    pointLight.position.set(-2, 2, 4);
    scene.add(pointLight);

    // Mouse Movement Tracking
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      uniforms.uMouse.value.set(x, y);

      // Faint rotation tilt
      knotMesh.rotation.x = (y - 0.5) * 1.5;
      knotMesh.rotation.y = (x - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      uniforms.uTime.value = elapsedTime;

      knotMesh.rotation.z = elapsedTime * 0.2;
      knotMesh.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}
