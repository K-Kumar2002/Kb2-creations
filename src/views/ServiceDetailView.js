// Individual Service Details View - Kb2 Creations
import { servicesData } from '../data/services.js';
import { aiVideosData } from '../data/aiVideos.js';
import { initDeviceScene } from '../three/deviceScene.js';
import { AIVideoShowcase } from '../components/AIVideoShowcase.js';

export class ServiceDetailView {
  constructor(params) {
    this.serviceId = params.id;
    this.service = servicesData.find(s => s.id === this.serviceId) || servicesData[0];
    this.sceneInstance = null;
    this.videoShowcase = new AIVideoShowcase('service-detail-video-showcase');
  }

  async render() {
    const s = this.service;
    const isMobileApp = s.id === 'android-development';
    const associatedVideo = s.hasVideo ? aiVideosData.find(v => v.id === s.videoId) : null;

    // Find other related services
    const relatedServices = servicesData.filter(item => item.id !== s.id).slice(0, 3);

    return `
      <section class="section service-detail-hero" aria-label="${s.title}">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <!-- Breadcrumb Navigation -->
          <div style="display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 2rem;">
            <a href="#/" class="footer-link">HOME</a>
            <span>/</span>
            <a href="#/services" class="footer-link">SERVICES</a>
            <span>/</span>
            <span style="color: var(--accent-cyan);">${s.shortTitle.toUpperCase()}</span>
          </div>

          <!-- Hero Heading -->
          <div style="max-width: 880px;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <span class="service-num" style="font-size: 1.8rem;">SERVICE ${s.number}</span>
              <span class="badge-tag badge-cyan">${s.category}</span>
            </div>
            <h1 style="margin-bottom: 1.25rem;">${s.title}</h1>
            <p class="lead" style="color: var(--text-primary); font-size: 1.25rem; line-height: 1.6;">
              ${s.description}
            </p>
          </div>

          <!-- Two-Column Grid: In-depth Detail + Interactive Sidebar -->
          <div class="service-detail-grid">
            <div class="service-detail-content">
              <!-- In-depth Technical Architecture & Sample Media -->
              <div class="card detail-section-block">
                <div class="eyebrow">ENGINEERING & CRAFTSMANSHIP</div>
                <h3>Technical Overview & Verified Deliverable</h3>
                <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">
                  ${s.inDepth}
                </p>

                <!-- High-Resolution Sample Showcase Banner -->
                <div class="service-detail-sample-showcase">
                  <img src="${s.image}" alt="${s.title} sample production showcase" class="service-detail-sample-img" />
                  <div class="service-detail-sample-caption">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <span class="badge-tag badge-cyan">STUDIO PRODUCTION SAMPLE</span>
                      <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #FFF; font-weight: 600;">
                        ${s.sampleTag || 'Verified Deliverable Architecture'}
                      </span>
                    </div>
                    ${associatedVideo ? `
                      <button class="btn btn-primary btn-sm play-video-trigger" data-play-id="${associatedVideo.id}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.35rem;">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        WATCH AI VIDEO PRODUCTION (${associatedVideo.duration})
                      </button>
                    ` : `
                      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-orange); font-weight: 600;">
                        READY FOR PRODUCTION DEPLOYMENT
                      </span>
                    `}
                  </div>
                </div>

                <!-- 3D Smartphone Device Mockup specifically for Android service -->
                ${isMobileApp ? `
                  <div style="margin-block: 2rem; background: #0B1220; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-orange); margin-bottom: 0.75rem;">
                      INTERACTIVE 3D ANDROID ARCHITECTURE DEMONSTRATOR
                    </div>
                    <div id="service-device-canvas" style="width: 100%; height: 380px;"></div>
                    <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
                      Real-time Three.js viewport rendering sample biometric & sync OS architecture
                    </p>
                  </div>
                ` : `
                  <div style="padding: 1.5rem; background: rgba(11, 18, 32, 0.7); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); margin-top: 1.5rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); margin-bottom: 0.5rem;">
                      VISUAL ARCHITECTURE SPECIFICATION
                    </div>
                    <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                      ${s.visual}
                    </p>
                  </div>
                `}
              </div>

              <!-- Deliverables Checklist -->
              <div class="card detail-section-block">
                <div class="eyebrow" style="color: var(--accent-orange); border-color: rgba(255, 122, 48, 0.3); background: rgba(255, 122, 48, 0.08);">
                  CORE SCOPE & DELIVERABLES
                </div>
                <h3>What We Deliver</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.25rem;">
                  ${s.deliverables.map(d => `
                    <div style="display: flex; align-items: center; gap: 0.75rem; background: rgba(11, 18, 32, 0.6); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#36CFFF" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span style="font-size: 0.92rem; color: var(--text-primary); font-weight: 500;">${d}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Workflow Stages for this service -->
              <div class="card detail-section-block">
                <div class="eyebrow" style="color: var(--accent-violet); border-color: rgba(128, 107, 255, 0.3); background: rgba(128, 107, 255, 0.08);">
                  EXECUTION BLUEPRINT
                </div>
                <h3>Standard Delivery Workflow</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1.25rem;">
                  ${s.workflowSteps.map((step, idx) => `
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(11, 18, 32, 0.6); border-radius: 8px; border-left: 3px solid ${idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-orange)'};">
                      <span style="font-family: var(--font-mono); font-weight: 700; color: var(--text-primary); font-size: 0.9rem;">
                        PHASE 0${idx + 1}
                      </span>
                      <p style="font-size: 0.95rem; color: var(--text-secondary); margin: 0;">${step}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Tech Stack Badges -->
              <div class="card detail-section-block">
                <h3>Technologies & Tooling</h3>
                <div class="tech-stack-badges">
                  ${s.techStack.map(t => `
                    <span class="badge-tag" style="background: rgba(54, 207, 255, 0.08); border-color: rgba(54, 207, 255, 0.25); color: #F5F7FC; font-size: 0.85rem; padding: 0.4rem 0.85rem;">
                      ${t}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Sticky Right Sidebar -->
            <div class="service-sidebar-col">
              <div class="card sidebar-sticky-box">
                <div class="eyebrow">SERVICE METRICS</div>
                <h4 style="margin-bottom: 1.25rem;">Capability Summary</h4>

                <div class="metric-row">
                  <span class="metric-label">Starting Investment</span>
                  <span class="metric-val" style="color: var(--accent-orange); font-family: var(--font-mono); font-weight: 700;">${s.startingPrice}</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Average Delivery</span>
                  <span class="metric-val">2 - 6 Weeks</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Engagement Model</span>
                  <span class="metric-val">Milestone / Sprint</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Intellectual Property</span>
                  <span class="metric-val" style="color: var(--accent-cyan);">100% Client Owned</span>
                </div>
                <div class="metric-row">
                  <span class="metric-label">Code Quality</span>
                  <span class="metric-val">Documented & Tested</span>
                </div>

                <div style="margin-top: 1.75rem; margin-bottom: 1.25rem;">
                  <a href="#/contact" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;">
                    DISCUSS ${s.shortTitle.toUpperCase()}
                    <span class="btn-icon-right">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </a>

                  <a href="#/services" class="btn btn-secondary btn-sm" style="width: 100%;">
                    VIEW ALL SERVICES
                  </a>
                </div>

                <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
                    EXPLORE RELATED CAPABILITIES
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    ${relatedServices.map(rel => `
                      <a href="#/services/${rel.id}" class="footer-link" style="font-size: 0.9rem; display: flex; align-items: center; justify-content: space-between;">
                        <span>${rel.title}</span>
                        <span style="color: var(--accent-cyan);">&rarr;</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Cinema Modal Instance if needed on Service Detail -->
      ${this.videoShowcase.render()}
    `;
  }

  afterRender() {
    if (this.service.id === 'android-development') {
      const devContainer = document.getElementById('service-device-canvas');
      if (devContainer) {
        this.sceneInstance = initDeviceScene(devContainer, 'phone');
      }
    }

    if (this.videoShowcase) {
      this.videoShowcase.initListeners();
    }
  }

  destroy() {
    if (this.sceneInstance && typeof this.sceneInstance.destroy === 'function') {
      this.sceneInstance.destroy();
      this.sceneInstance = null;
    }
    if (this.videoShowcase) {
      this.videoShowcase.closeTheater();
    }
  }
}
