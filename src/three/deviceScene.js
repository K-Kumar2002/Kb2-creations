// 3D Smartphone and Device Showcase - Three.js
import * as THREE from 'three';
import { isWebGLAvailable, disposeThreeScene } from './threeUtils.js';

export function initDeviceScene(container, deviceType = 'phone') {
  if (!container || !isWebGLAvailable()) return null;

  const width = container.clientWidth || 360;
  const height = container.clientHeight || 420;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.5);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  const deviceGroup = new THREE.Group();
  scene.add(deviceGroup);

  // Chassis
  const bodyWidth = 1.9;
  const bodyHeight = 3.8;
  const bodyDepth = 0.16;

  const chassisGeo = new THREE.BoxGeometry(bodyWidth, bodyHeight, bodyDepth);
  const chassisMat = new THREE.MeshStandardMaterial({
    color: 0x111B2D,
    metalness: 0.9,
    roughness: 0.2
  });
  const chassis = new THREE.Mesh(chassisGeo, chassisMat);
  deviceGroup.add(chassis);

  // Bezel & Screen
  const screenGeo = new THREE.PlaneGeometry(bodyWidth * 0.92, bodyHeight * 0.92);
  
  // Create high-res dynamic canvas for realistic phone screen interface
  const screenCanvas = document.createElement('canvas');
  screenCanvas.width = 512;
  screenCanvas.height = 1024;
  const ctx = screenCanvas.getContext('2d');
  
  function drawPhoneUI() {
    // Dark UI background
    ctx.fillStyle = '#070B14';
    ctx.fillRect(0, 0, 512, 1024);

    // Top status bar
    ctx.fillStyle = '#A4B0C3';
    ctx.font = '22px sans-serif';
    ctx.fillText('9:41', 40, 48);
    ctx.fillText('5G  100%', 380, 48);

    // App Header
    ctx.fillStyle = '#FF7A30';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('A.K. CREATION', 40, 110);
    ctx.fillStyle = '#36CFFF';
    ctx.font = '18px monospace';
    ctx.fillText('MOBILE COMPANION OS', 40, 140);

    // Live Metrics Card
    ctx.fillStyle = '#111B2D';
    roundRect(ctx, 36, 175, 440, 140, 16);
    ctx.fill();
    ctx.strokeStyle = '#36CFFF';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#F5F7FC';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('ACTIVE TELEMETRY', 60, 220);
    ctx.fillStyle = '#806BFF';
    ctx.font = '36px monospace';
    ctx.fillText('99.98% SYNC', 60, 275);

    // Service Nodes
    const services = ['AI Core Assistant', 'Real-time WebSocket', 'Encrypted Local DB', 'Cloud Sync Gateway'];
    services.forEach((s, i) => {
      ctx.fillStyle = '#0B1220';
      roundRect(ctx, 36, 340 + i * 120, 440, 95, 14);
      ctx.fill();
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#36CFFF';
      ctx.beginPath();
      ctx.arc(75, 388 + i * 120, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#F5F7FC';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(s, 110, 395 + i * 120);

      ctx.fillStyle = '#A4B0C3';
      ctx.font = '16px monospace';
      ctx.fillText('ONLINE', 380, 395 + i * 120);
    });

    // Bottom Navigation Bar
    ctx.fillStyle = '#111B2D';
    roundRect(ctx, 36, 910, 440, 60, 30);
    ctx.fill();
    ctx.fillStyle = '#FF7A30';
    ctx.fillRect(200, 955, 112, 4);
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  }

  drawPhoneUI();

  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.anisotropy = 4;

  const screenMat = new THREE.MeshBasicMaterial({
    map: screenTexture
  });

  const screenMesh = new THREE.Mesh(screenGeo, screenMat);
  screenMesh.position.z = bodyDepth / 2 + 0.005;
  deviceGroup.add(screenMesh);

  // Metallic rim
  const rimGeo = new THREE.BoxGeometry(bodyWidth + 0.05, bodyHeight + 0.05, bodyDepth * 0.8);
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0x36CFFF,
    metalness: 0.95,
    roughness: 0.15
  });
  const rimMesh = new THREE.Mesh(rimGeo, rimMat);
  rimMesh.position.z = 0;
  deviceGroup.add(rimMesh);

  // Lights
  const ambLight = new THREE.AmbientLight(0x0B1220, 2.0);
  scene.add(ambLight);

  const keyLight = new THREE.DirectionalLight(0x36CFFF, 3.0);
  keyLight.position.set(3, 4, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xFF7A30, 2.2);
  fillLight.position.set(-3, -2, 3);
  scene.add(fillLight);

  let animId = null;
  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Gentle floating and subtle rotation
    deviceGroup.rotation.y = Math.sin(elapsed * 0.8) * 0.35;
    deviceGroup.rotation.x = Math.cos(elapsed * 0.6) * 0.15;
    deviceGroup.position.y = Math.sin(elapsed * 1.2) * 0.1;

    renderer.render(scene, camera);
  }
  animate();

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
    destroy: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      disposeThreeScene(scene, renderer);
    }
  };
}
