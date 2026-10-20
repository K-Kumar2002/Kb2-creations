// AI Innovation Lab 3D Spatial Pipeline Scene - Three.js
import * as THREE from 'three';
import { isWebGLAvailable, disposeThreeScene } from './threeUtils.js';

export function initLabNodeScene(container, activeIndex = 0, onNodeClick = null) {
  if (!container || !isWebGLAvailable()) return null;

  const width = container.clientWidth || 500;
  const height = container.clientHeight || 320;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Group
  const pipelineGroup = new THREE.Group();
  scene.add(pipelineGroup);

  // 4 Main Stage Coordinates: INPUT (-3.3), PROCESSING (-1.1), AI WORKFLOW (1.1), OUTPUT (3.3)
  const stages = [
    { name: "INPUT", x: -3.0, color: 0x36CFFF, baseColor: 0x1E3A5F },
    { name: "PROCESSING", x: -1.0, color: 0x806BFF, baseColor: 0x2A1F5E },
    { name: "AI WORKFLOW", x: 1.0, color: 0xFF7A30, baseColor: 0x4A2411 },
    { name: "OUTPUT", x: 3.0, color: 0x36CFFF, baseColor: 0x1E3A5F }
  ];

  const nodeMeshes = [];
  const nodePointers = [];

  stages.forEach((st, idx) => {
    // Outer Torus Ring
    const torusGeo = new THREE.TorusGeometry(0.55, 0.03, 16, 40);
    const torusMat = new THREE.MeshStandardMaterial({
      color: st.color,
      emissive: st.color,
      emissiveIntensity: idx === activeIndex ? 0.9 : 0.25,
      metalness: 0.8,
      roughness: 0.2
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(st.x, 0, 0);
    pipelineGroup.add(torusMesh);

    // Inner Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.32, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: idx === activeIndex ? 0xFFFFFF : st.color,
      emissive: st.color,
      emissiveIntensity: idx === activeIndex ? 1.0 : 0.4,
      metalness: 0.9,
      roughness: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(st.x, 0, 0);
    pipelineGroup.add(coreMesh);

    nodeMeshes.push({ torus: torusMesh, core: coreMesh, stage: st, index: idx });
  });

  // Connecting Data Stream Lines
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x36CFFF,
    transparent: true,
    opacity: 0.5
  });

  const lineGeo = new THREE.BufferGeometry();
  const linePoints = [];
  stages.forEach((st, i) => {
    if (i < stages.length - 1) {
      linePoints.push(st.x, 0, 0);
      linePoints.push(stages[i + 1].x, 0, 0);
    }
  });
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
  const streamLines = new THREE.LineSegments(lineGeo, lineMat);
  pipelineGroup.add(streamLines);

  // Traveling Data Pulses (small spheres that move along pipeline)
  const pulseCount = 6;
  const pulseSpheres = [];
  const pulseGeo = new THREE.SphereGeometry(0.06, 8, 8);
  const pulseMat = new THREE.MeshBasicMaterial({ color: 0xFF7A30 });

  for (let i = 0; i < pulseCount; i++) {
    const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
    pMesh.position.set(-3.0 + (i / pulseCount) * 6.0, 0, 0);
    pipelineGroup.add(pMesh);
    pulseSpheres.push(pMesh);
  }

  // Lighting
  const ambLight = new THREE.AmbientLight(0x0B1220, 1.5);
  scene.add(ambLight);

  const dirLight1 = new THREE.DirectionalLight(0x36CFFF, 2.5);
  dirLight1.position.set(2, 4, 3);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0xFF7A30, 2.0);
  dirLight2.position.set(-2, -3, 2);
  scene.add(dirLight2);

  let animId = null;
  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Rotate nodes
    nodeMeshes.forEach((item, idx) => {
      item.core.rotation.y += 0.015;
      item.core.rotation.x += 0.008;
      item.torus.rotation.z += (idx % 2 === 0 ? 0.01 : -0.01);

      if (idx === activeIndex) {
        item.core.scale.setScalar(1.0 + Math.sin(elapsed * 4) * 0.1);
      } else {
        item.core.scale.setScalar(1.0);
      }
    });

    // Move pulses along X axis
    pulseSpheres.forEach((p, i) => {
      let nx = p.position.x + 0.035;
      if (nx > 3.0) nx = -3.0;
      p.position.x = nx;
      p.position.y = Math.sin(elapsed * 3 + i) * 0.08;
    });

    renderer.render(scene, camera);
  }
  animate();

  function setActive(newIndex) {
    activeIndex = newIndex;
    nodeMeshes.forEach((item, idx) => {
      const isActive = idx === activeIndex;
      item.torus.material.emissiveIntensity = isActive ? 1.0 : 0.25;
      item.core.material.color.setHex(isActive ? 0xFFFFFF : item.stage.color);
      item.core.material.emissiveIntensity = isActive ? 1.0 : 0.4;
    });
  }

  function onResize() {
    if (!container) return;
    const nw = container.clientWidth;
    const nh = container.clientHeight;
    if (nw === 0 || nh === 0) return;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh);
  }

  window.addEventListener('resize', onResize);

  return {
    setActive,
    destroy: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      disposeThreeScene(scene, renderer);
    }
  };
}
