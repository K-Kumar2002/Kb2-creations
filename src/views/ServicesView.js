// Services Overview View - All 12 Company Services & AI Video Productions
import { servicesData } from '../data/services.js';
import { animateStaggeredCards } from '../animations/motion.js';
import { AIVideoShowcase } from '../components/AIVideoShowcase.js';

export class ServicesView {
  constructor() {
    this.videoShowcase = new AIVideoShowcase('services-ai-video-showcase');
  }

  async render() {
    return `
      <section class="section service-detail-hero" aria-label="Services Catalog">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">COMPLETE CAPABILITIES DIRECTORY</div>
            <h1 class="section-title">ONE STUDIO. MULTIPLE DIGITAL CAPABILITIES.</h1>
            <p class="section-subtitle">
              We bring software engineering, AI, digital design, marketing, and creative production together to help businesses build, launch, and grow.
            </p>
          </div>

          <!-- 12 Services Editorial Grid with Sample Demonstrations -->
          <div class="services-editorial-grid" id="services-grid">
            ${servicesData.map(s => `
              <div class="card service-card">
                <!-- Service Sample Image Demonstration -->
                <div class="service-sample-media-wrap">
                  <img src="${s.image}" alt="${s.title} sample" class="service-sample-img" loading="lazy" />
                  <div class="service-sample-overlay">
                    <span class="sample-badge-tag">${s.sampleTag || 'Production Sample'}</span>
                    ${s.hasVideo ? `
                      <span class="sample-video-pill">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        AI VIDEO
                      </span>
                    ` : ''}
                  </div>
                </div>

                <div class="service-card-top">
                  <div class="service-card-header">
                    <span class="service-num">${s.number}</span>
                    <span class="badge-tag badge-cyan">${s.category}</span>
                  </div>
                  <h2 class="service-card-title" style="font-size: 1.45rem;">${s.title}</h2>
                  <p class="service-card-desc">${s.description}</p>
                  
                  <div style="margin-top: 1.25rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-orange); letter-spacing: 0.08em; margin-bottom: 0.6rem; text-transform: uppercase;">
                      Key Deliverables
                    </div>
                    <ul class="deliverables-list">
                      ${s.deliverables.map(d => `
                        <li class="deliverable-item">
                          <span class="deliverable-bullet"></span>
                          ${d}
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <div class="service-card-footer">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.8rem;">
                    <span style="color: var(--text-muted);">Starting from:</span>
                    <strong style="color: var(--accent-orange); font-size: 0.95rem;">${s.startingPrice}</strong>
                  </div>
                  <a href="#/services/${s.id}" class="btn btn-secondary btn-sm" style="width: 100%;">
                    ${s.ctaText}
                    <span class="btn-icon-right">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- AI Video & Cinematics Showcase on Services Page -->
      ${this.videoShowcase.render()}

      <!-- Bottom Contact Callout -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="card" style="text-align: center; padding: 3rem 2rem; border-color: rgba(54, 207, 255, 0.3);">
            <div class="eyebrow">CUSTOM REQUIREMENTS?</div>
            <h3 style="font-size: 1.8rem; margin-bottom: 0.75rem;">Need a Multi-Service Solution?</h3>
            <p style="max-width: 600px; margin-inline: auto; color: var(--text-secondary); margin-bottom: 2rem;">
              Many of our client engagements span multiple disciplines—such as integrating custom AI assistants with bespoke Android applications, AI video commercials, and full brand design.
            </p>
            <a href="#/contact" class="btn btn-primary btn-lg">START A MULTI-DISCIPLINE PROJECT</a>
          </div>
        </div>
      </section>
    `;
  }

  afterRender() {
    animateStaggeredCards('#services-grid .service-card');
    if (this.videoShowcase) {
      this.videoShowcase.initListeners();
    }
  }

  destroy() {
    if (this.videoShowcase) {
      this.videoShowcase.closeTheater();
    }
  }
}
