import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xccff00, 4, 30);
    pointLight1.position.set(4, 5, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffcc, 2.5, 30);
    pointLight2.position.set(-4, -4, -2);
    scene.add(pointLight2);

    // Central 3D Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Icosahedron core with glossy deep cyber surface & neon lime specular
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x0f1710,
      emissive: 0x112905,
      specular: 0xccff00,
      shininess: 90,
      wireframe: false,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const coreMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(coreMesh);

    // 2. Wireframe outer shell glowing neon lime
    const wireGeo = new THREE.IcosahedronGeometry(1.85, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // 3. Floating orbit rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.018, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    group.add(ringMesh1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.014, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 5;
    group.add(ringMesh2);

    // 4. Floating tech particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xccff00,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    group.add(particleSystem);

    // Mouse interaction tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetRotY += (mouseX * 0.8 - targetRotY) * 0.05;
      targetRotX += (mouseY * 0.8 - targetRotX) * 0.05;

      coreMesh.rotation.y = elapsedTime * 0.25 + targetRotY;
      coreMesh.rotation.x = elapsedTime * 0.15 + targetRotX;

      wireMesh.rotation.y = -elapsedTime * 0.2 + targetRotY * 1.2;
      wireMesh.rotation.z = elapsedTime * 0.1;

      ringMesh1.rotation.z = elapsedTime * 0.35;
      ringMesh2.rotation.z = -elapsedTime * 0.25;

      particleSystem.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      style={{ minHeight: '440px' }}
    />
  );
}
