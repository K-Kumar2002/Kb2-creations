// Hero 3D AI Innovation Universe - Three.js Scene
import * as THREE from 'three';
import { isWebGLAvailable, disposeThreeScene } from './threeUtils.js';

export function initHeroScene(container) {
  if (!container) return null;

  if (!isWebGLAvailable()) {
    container.innerHTML = `
      <div class="webgl-fallback-card">
        <div class="eyebrow" style="margin-bottom: 0.75rem;">SYSTEM VISUALIZATION</div>
        <h3 style="margin-bottom: 0.5rem; color: #F5F7FC;">Kb2 Creations AI UNIVERSE</h3>
        <p style="font-size: 0.9rem; max-width: 320px; color: #A4B0C3;">
          Hardware-accelerated 3D core running in static compatibility mode. Explore full software, AI, and creative capabilities below.
        </p>
      </div>
    `;
    return null;
  }

  const isMobile = window.innerWidth < 768;
  const width = container.clientWidth || (isMobile ? window.innerWidth : 600);
  const height = container.clientHeight || (isMobile ? 400 : 580);

  // Scene & Camera
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x070B14, 0.025);

  const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
  camera.position.set(0, 0, isMobile ? 6.8 : 6.2);

  // High-performance Renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;

  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Group to hold all universe components
  const universeGroup = new THREE.Group();
  scene.add(universeGroup);

  // 1. Central AI Core: Nested Geometric Polyhedrons
  // Outer Faceted Metallic Icosahedron
  const coreGeo = new THREE.IcosahedronGeometry(isMobile ? 1.25 : 1.45, 1);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x162A4A,
    emissive: 0x0C1C36,
    emissiveIntensity: 0.55,
    metalness: 0.88,
    roughness: 0.18,
    wireframe: false,
    flatShading: true
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  universeGroup.add(coreMesh);

  // Outer Core Glowing Cyan Wireframe Lattice
  const coreWireGeo = new THREE.IcosahedronGeometry(isMobile ? 1.3 : 1.5, 1);
  const coreWireMat = new THREE.MeshBasicMaterial({
    color: 0x36CFFF,
    wireframe: true,
    transparent: true,
    opacity: 0.7
  });
  const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
  universeGroup.add(coreWireMesh);

  // Inner Radiant Molten Orange AI Octahedron
  const innerGeo = new THREE.OctahedronGeometry(isMobile ? 0.78 : 0.9, 0);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0xFF7A30,
    emissive: 0xFF7A30,
    emissiveIntensity: 1.8,
    metalness: 0.9,
    roughness: 0.1,
    wireframe: false
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  universeGroup.add(innerMesh);

  // Inner Octahedron Glowing Wireframe Accent
  const innerWireGeo = new THREE.OctahedronGeometry(isMobile ? 0.82 : 0.94, 0);
  const innerWireMat = new THREE.MeshBasicMaterial({
    color: 0xFFB074,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  const innerWireMesh = new THREE.Mesh(innerWireGeo, innerWireMat);
  universeGroup.add(innerWireMesh);

  // 2. Interconnected Glowing Orbital Rings
  const rings = [];
  const ringConfigs = [
    { radius: isMobile ? 2.1 : 2.5, tube: isMobile ? 0.03 : 0.036, color: 0x36CFFF, rotX: 1.1, rotY: 0.4, speed: 0.008 },
    { radius: isMobile ? 2.5 : 3.0, tube: isMobile ? 0.026 : 0.032, color: 0xFF7A30, rotX: -0.8, rotY: 0.9, speed: -0.007 },
    { radius: isMobile ? 2.9 : 3.5, tube: isMobile ? 0.034 : 0.04, color: 0x806BFF, rotX: 0.5, rotY: -1.2, speed: 0.006 }
  ];

  ringConfigs.forEach((cfg) => {
    const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: cfg.color,
      emissive: cfg.color,
      emissiveIntensity: 1.2,
      roughness: 0.25,
      metalness: 0.85
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.set(cfg.rotX, cfg.rotY, 0);
    universeGroup.add(ringMesh);
    rings.push({ mesh: ringMesh, speed: cfg.speed });
  });

  // 3. Neural-Network Nodes & Glowing Connection Lines
  const nodeCount = isMobile ? 28 : 50;
  const nodePositions = [];
  const sphereGeo = new THREE.SphereGeometry(isMobile ? 0.06 : 0.075, 12, 12);
  const cyanNodeMat = new THREE.MeshStandardMaterial({
    color: 0x36CFFF,
    emissive: 0x36CFFF,
    emissiveIntensity: 1.0
  });
  const orangeNodeMat = new THREE.MeshStandardMaterial({
    color: 0xFF7A30,
    emissive: 0xFF7A30,
    emissiveIntensity: 1.2
  });

  for (let i = 0; i < nodeCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = (isMobile ? 1.9 : 2.3) + Math.random() * (isMobile ? 1.1 : 1.6);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    nodePositions.push(new THREE.Vector3(x, y, z));

    const sphereMesh = new THREE.Mesh(sphereGeo, i % 3 === 0 ? orangeNodeMat : cyanNodeMat);
    sphereMesh.position.set(x, y, z);
    universeGroup.add(sphereMesh);
  }

  // Interconnection Lines between proximate nodes
  const linePositions = [];
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dist = nodePositions[i].distanceTo(nodePositions[j]);
      if (dist < (isMobile ? 1.2 : 1.45)) {
        linePositions.push(
          nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
          nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
        );
      }
    }
  }

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x36CFFF,
    transparent: true,
    opacity: 0.45
  });
  const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
  universeGroup.add(lineMesh);

  // 4. Floating Translucent Cyber Software Panels
  const panelGroup = new THREE.Group();
  const panelGeo = new THREE.PlaneGeometry(0.8, 0.52);
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0x11213D,
    roughness: 0.15,
    metalness: 0.9,
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide
  });

  const panelWireMat = new THREE.MeshBasicMaterial({
    color: 0x36CFFF,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });

  const panelCount = isMobile ? 3 : 6;
  const panels = [];

  for (let i = 0; i < panelCount; i++) {
    const angle = (i / panelCount) * Math.PI * 2;
    const pRadius = isMobile ? 2.3 : 2.9;
    const px = Math.cos(angle) * pRadius;
    const py = (Math.sin(angle * 2) * 0.75) + (Math.random() * 0.4 - 0.2);
    const pz = Math.sin(angle) * pRadius;

    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(px, py, pz);
    panel.lookAt(0, 0, 0);

    const wirePanel = new THREE.Mesh(panelGeo, panelWireMat);
    wirePanel.position.set(px, py, pz);
    wirePanel.lookAt(0, 0, 0);

    panelGroup.add(panel);
    panelGroup.add(wirePanel);
    panels.push({ mesh: panel, wire: wirePanel, basePos: new THREE.Vector3(px, py, pz), seed: Math.random() * 10 });
  }
  universeGroup.add(panelGroup);

  // 5. Procedural Glowing Particles Starfield / Data Streams
  const particleCount = isMobile ? 450 : 950;
  const particleGeo = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  const cCyan = new THREE.Color(0x36CFFF);
  const cOrange = new THREE.Color(0xFF7A30);
  const cViolet = new THREE.Color(0x806BFF);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 2.0 + Math.random() * 6.5;
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);

    particlePos[i3] = radius * Math.sin(phi) * Math.cos(theta);
    particlePos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlePos[i3 + 2] = radius * Math.cos(phi);

    const pick = Math.random();
    const chosenColor = pick < 0.6 ? cCyan : pick < 0.85 ? cOrange : cViolet;
    particleColors[i3] = chosenColor.r;
    particleColors[i3 + 1] = chosenColor.g;
    particleColors[i3 + 2] = chosenColor.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: isMobile ? 0.042 : 0.052,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // 6. High-Luminance Cyber Lighting
  // Ambient Navy-Cyan Fill
  const ambientLight = new THREE.AmbientLight(0x1B2C4E, 2.6);
  scene.add(ambientLight);

  // Vibrant Cyan Key/Rim Light
  const cyanRim = new THREE.DirectionalLight(0x36CFFF, 4.2);
  cyanRim.position.set(5, 5, 4);
  scene.add(cyanRim);

  // Radiant Studio Orange Fill Light
  const orangeFill = new THREE.DirectionalLight(0xFF7A30, 3.8);
  orangeFill.position.set(-5, -4, 3);
  scene.add(orangeFill);

  // AI Violet Interior Core Point Light
  const coreLight = new THREE.PointLight(0x806BFF, 8.0, 15);
  coreLight.position.set(0, 0, 0);
  universeGroup.add(coreLight);

  // Molten Orange Interior Core Light
  const orangeCoreLight = new THREE.PointLight(0xFF7A30, 6.0, 10);
  orangeCoreLight.position.set(0, 0, 0);
  universeGroup.add(orangeCoreLight);

  // Pointer & Touch Parallax Interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;

  function handleInteraction(clientX, clientY) {
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    mouseX = (px - 0.5) * 2;
    mouseY = (py - 0.5) * 2;
  }

  function onPointerMove(e) {
    handleInteraction(e.clientX, e.clientY);
  }

  function onTouchMove(e) {
    if (e.touches && e.touches[0]) {
      handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });

  // Animation Loop & Performance optimization
  let animationFrameId = null;
  const clock = new THREE.Clock();
  let isVisible = true;

  // Viewport visibility observer with generous margin
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
  }, { threshold: 0, rootMargin: '300px' });
  observer.observe(container);

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    if (!isVisible) return;

    const elapsedTime = clock.getElapsedTime();

    // Rotate Central AI Core
    coreMesh.rotation.x += 0.004;
    coreMesh.rotation.y += 0.007;
    coreWireMesh.rotation.x -= 0.005;
    coreWireMesh.rotation.y += 0.004;

    innerMesh.rotation.y += 0.015;
    innerMesh.rotation.z -= 0.01;
    innerWireMesh.rotation.y -= 0.012;

    // Harmonic Core Light Pulsing
    const pulseFactor = Math.sin(elapsedTime * 2.8);
    coreLight.intensity = 7.0 + pulseFactor * 2.5;
    orangeCoreLight.intensity = 5.0 + Math.cos(elapsedTime * 3.2) * 2.0;

    // Rotate Orbital Rings
    rings.forEach((r) => {
      r.mesh.rotation.z += r.speed;
    });

    // Floating panels harmonic movement
    panels.forEach((p) => {
      const floatY = Math.sin(elapsedTime * 1.5 + p.seed) * 0.12;
      p.mesh.position.y = p.basePos.y + floatY;
      p.wire.position.y = p.basePos.y + floatY;
    });

    // Slow particle starfield drift
    particleSystem.rotation.y = elapsedTime * 0.025;
    particleSystem.rotation.x = Math.sin(elapsedTime * 0.012) * 0.06;

    // Smooth pointer parallax
    targetRotationY = mouseX * 0.4;
    targetRotationX = mouseY * 0.4;
    universeGroup.rotation.y += (targetRotationY - universeGroup.rotation.y) * 0.05;
    universeGroup.rotation.x += (targetRotationX - universeGroup.rotation.x) * 0.05;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Listener
  function onResize() {
    if (!container) return;
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    if (newWidth === 0 || newHeight === 0) return;

    camera.aspect = newWidth / newHeight;
    camera.position.set(0, 0, newWidth < 768 ? 6.8 : 6.2);
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }

  window.addEventListener('resize', onResize);

  // Return cleanup method
  return {
    destroy: () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      disposeThreeScene(scene, renderer);
    }
  };
}
