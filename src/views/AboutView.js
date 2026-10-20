// About Us View - Where Technology Meets Creativity
import * as THREE from 'three';
import { isWebGLAvailable, disposeThreeScene } from '../three/threeUtils.js';
import anime from 'animejs';

export class AboutView {
  constructor() {
    this.sceneInstance = null;
  }

  async render() {
    return `
      <section class="section service-detail-hero" aria-label="About Kb2 Creations" style="position: relative; overflow: hidden;">
        <!-- Three.js Ambient Geometric Backdrop -->
        <div id="about-three-backdrop" style="position: absolute; inset: 0; pointer-events: none; z-index: 0; opacity: 0.65;"></div>

        <div class="container" style="position: relative; z-index: 1;">
          <div class="section-header text-center" style="max-width: 860px; margin-inline: auto;">
            <div style="display: flex; justify-content: center; margin-bottom: 1.5rem;">
              <div style="width: 84px; height: 84px; border-radius: 20px; overflow: hidden; border: 2px solid rgba(212, 175, 55, 0.5); box-shadow: 0 0 30px rgba(212, 175, 55, 0.35); background: #0A0E17;">
                <img src="/assets/kb2-logo.png" alt="Kb2 Creations Official Emblem" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
              </div>
            </div>
            <div class="eyebrow">STUDIO IDENTITY & PHILOSOPHY</div>
            <h1 class="section-title">WHERE TECHNOLOGY MEETS CREATIVITY.</h1>
            <p class="lead" style="color: var(--text-primary); font-size: 1.25rem; line-height: 1.7; margin-top: 1.25rem;">
              Kb2 Creations combines software engineering, artificial intelligence, digital experiences, marketing, and creative production to help transform ideas into practical digital solutions.
            </p>
          </div>

          <!-- Studio Core Pillars Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-top: 4rem;">
            <!-- Pillar 1: Our Approach -->
            <div class="card about-card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="12 8 8 12 12 16 16 12 12 8"></polygon>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Our Approach</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                We approach digital challenges from first principles. By deconstructing complex technical problems and understanding user behavior, we design systems that are both intuitively elegant and architecturally durable.
              </p>
            </div>

            <!-- Pillar 2: Technical Craftsmanship -->
            <div class="card about-card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: var(--accent-orange); background: rgba(255, 122, 48, 0.1); border-color: rgba(255, 122, 48, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Technical Craftsmanship</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                We treat code as an engineering craft. Strict type-safety, documented API contracts, automated unit and integration suites, and optimized WebGL/Three.js render loops ensure superior performance.
              </p>
            </div>

            <!-- Pillar 3: Creative Collaboration -->
            <div class="card about-card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: var(--accent-violet); background: rgba(128, 107, 255, 0.1); border-color: rgba(128, 107, 255, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Creative Collaboration</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                Great digital products require seamless synergy between designers, engineers, and stakeholders. We work in tight iterative sprint cycles with clear deliverables and transparent milestones.
              </p>
            </div>

            <!-- Pillar 4: Business-Focused Delivery -->
            <div class="card about-card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: #4ade80; background: rgba(74, 222, 128, 0.1); border-color: rgba(74, 222, 128, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Business-Focused Delivery</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                Technology is built to drive tangible business growth. Whether building custom automation tools or lead-generating digital marketing campaigns, our focus remains on business value and user adoption.
              </p>
            </div>

            <!-- Pillar 5: Continuous Improvement -->
            <div class="card about-card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border-color: rgba(56, 189, 248, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Continuous Improvement</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                The AI and web landscapes evolve at a rapid pace. We invest heavily in our internal innovation lab, continuously stress-testing emerging models, rendering techniques, and cloud architectures.
              </p>
            </div>

            <!-- Pillar 6: Unified Multidisciplinary Team -->
            <div class="card about-card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: var(--accent-orange); background: rgba(255, 122, 48, 0.1); border-color: rgba(255, 122, 48, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Our Capabilities</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                One unified studio delivering 12 distinct capabilities—from backend infrastructure and native Android apps to AI video commercials, audio branding, and print-ready physical collateral.
              </p>
            </div>
          </div>

          <!-- Bottom Action Banner -->
          <div class="card" style="margin-top: 5rem; text-align: center; padding: 3.5rem 2rem; border-color: rgba(54, 207, 255, 0.35);">
            <div class="eyebrow">READY TO COLLABORATE?</div>
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">Let’s Transform Your Next Ambitious Idea</h2>
            <p style="max-width: 640px; margin-inline: auto; color: var(--text-secondary); margin-bottom: 2.2rem; font-size: 1.1rem;">
              Partner directly with our engineering and creative team. We build for reliability, scalability, and impact.
            </p>
            <a href="#/contact" class="btn btn-primary btn-lg">START A PROJECT CONVERSATION</a>
          </div>
        </div>
      </section>
    `;
  }

  afterRender() {
    const container = document.getElementById('about-three-backdrop');
    if (container && isWebGLAvailable()) {
      this.initAboutBackdrop(container);
    }

    anime({
      targets: '.about-card',
      opacity: [0, 1],
      translateY: [25, 0],
      delay: anime.stagger(100),
      duration: 650,
      easing: 'easeOutQuad'
    });
  }

  initAboutBackdrop(container) {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 800;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Connected geometric crystal structure
    const geo = new THREE.IcosahedronGeometry(4.5, 2);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x36CFFF,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Inner orange ring
    const ringGeo = new THREE.TorusGeometry(3.2, 0.02, 16, 60);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xFF7A30,
      transparent: true,
      opacity: 0.2
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ringMesh);

    let animId = null;
    function animate() {
      animId = requestAnimationFrame(animate);
      mesh.rotation.y += 0.002;
      mesh.rotation.x += 0.001;
      ringMesh.rotation.z += 0.003;
      ringMesh.rotation.y -= 0.002;
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

    this.sceneInstance = {
      destroy: () => {
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        disposeThreeScene(scene, renderer);
      }
    };
  }

  destroy() {
    if (this.sceneInstance && typeof this.sceneInstance.destroy === 'function') {
      this.sceneInstance.destroy();
      this.sceneInstance = null;
    }
  }
}
