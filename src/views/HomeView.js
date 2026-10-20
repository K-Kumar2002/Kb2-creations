// Home View - Enter the AI Innovation Universe
import { servicesData } from '../data/services.js';
import { projectsData } from '../data/projects.js';
import { processStages } from '../data/process.js';
import { initHeroScene } from '../three/heroScene.js';
import { animateHeroEntrance, animateStaggeredCards } from '../animations/motion.js';
import { AIVideoShowcase } from '../components/AIVideoShowcase.js';

export class HomeView {
  constructor() {
    this.heroSceneInstance = null;
    this.videoShowcase = new AIVideoShowcase('home-ai-video-showcase');
  }

  async render() {
    // Top 6 services for home showcase
    const featuredServices = servicesData.slice(0, 6);
    // Featured projects
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

    return `
      <!-- 1. CINEMATIC 3D HERO SECTION -->
      <section class="section section-hero" aria-label="A.K. Creation AI Universe Hero">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="hero-layout">
            <!-- Hero Top Header Content -->
            <div class="hero-header-block">
              <div class="eyebrow">AI INNOVATION / SOFTWARE ENGINEERING / CREATIVE TECHNOLOGY</div>
              
              <h1 class="hero-headline">
                WE ENGINEER THE <span class="headline-highlight">FUTURE OF DIGITAL.</span>
              </h1>

              <p class="hero-supporting-text">
                From intelligent software and AI-powered tools to immersive digital experiences and creative production, we transform ambitious ideas into practical digital solutions.
              </p>
            </div>

            <!-- Hero 3D AI Universe Visualization (Interactive Centerpiece) -->
            <div class="hero-canvas-wrapper" id="hero-canvas-container">
              <div id="hero-canvas-mount" class="hero-canvas-mount"></div>

              <!-- Floating Scientific Technical Labels -->
              <div class="hero-floating-badge hero-badge-1">
                <span class="badge-dot" style="background: #36CFFF; box-shadow: 0 0 10px #36CFFF;"></span>
                AI SYSTEMS
              </div>
              <div class="hero-floating-badge hero-badge-2">
                <span class="badge-dot" style="background: #FF7A30; box-shadow: 0 0 10px #FF7A30;"></span>
                SOFTWARE ENGINEERING
              </div>
              <div class="hero-floating-badge hero-badge-3">
                <span class="badge-dot" style="background: #806BFF; box-shadow: 0 0 10px #806BFF;"></span>
                DIGITAL EXPERIENCES
              </div>
              <div class="hero-floating-badge hero-badge-4">
                <span class="badge-dot" style="background: #36CFFF; box-shadow: 0 0 10px #36CFFF;"></span>
                CREATIVE INTELLIGENCE
              </div>
            </div>

            <!-- Hero Actions Block (CTAs & Technical Strip) -->
            <div class="hero-actions-block">
              <div class="hero-cta-group">
                <a href="#/services" class="btn btn-primary btn-lg">
                  EXPLORE OUR SERVICES
                  <span class="btn-icon-right">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
                <a href="#/contact" class="btn btn-secondary btn-lg">START A PROJECT</a>
              </div>

              <!-- Technical Capability Labels -->
              <div class="hero-technical-strip">
                <div class="tech-strip-item"><span>01</span> SOFTWARE</div>
                <div class="tech-strip-item"><span>02</span> AI TOOLS</div>
                <div class="tech-strip-item"><span>03</span> DESIGN</div>
                <div class="tech-strip-item"><span>04</span> DIGITAL GROWTH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. CORE CAPABILITIES STRIP -->
      <section class="capabilities-strip-section" aria-label="Core Capabilities">
        <div class="container">
          <div class="capabilities-strip-grid">
            <div class="capability-item">
              <span class="capability-indicator"></span>
              CUSTOM SOFTWARE
            </div>
            <div class="capability-item">
              <span class="capability-indicator" style="background: #36CFFF;"></span>
              AI SOLUTIONS
            </div>
            <div class="capability-item">
              <span class="capability-indicator" style="background: #806BFF;"></span>
              WEB & MOBILE
            </div>
            <div class="capability-item">
              <span class="capability-indicator" style="background: #FF7A30;"></span>
              DIGITAL MARKETING
            </div>
            <div class="capability-item">
              <span class="capability-indicator" style="background: #36CFFF;"></span>
              CREATIVE PRODUCTION
            </div>
            <div class="capability-item">
              <span class="capability-indicator" style="background: #806BFF;"></span>
              GRAPHIC DESIGN & PRINT
            </div>
          </div>
        </div>
      </section>

      <!-- 3. SERVICES PREVIEW SECTION -->
      <section class="section" id="services-preview">
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">MULTIDISCIPLINARY CAPABILITIES</div>
            <h2 class="section-title">ONE STUDIO. MULTIPLE DIGITAL CAPABILITIES.</h2>
            <p class="section-subtitle">
              We bring software engineering, AI, digital design, marketing, and creative production together to help businesses build, launch, and grow.
            </p>
          </div>

          <div class="services-editorial-grid">
            ${featuredServices.map(s => `
              <div class="card service-card">
                <!-- Service Sample Image Demonstration -->
                <div class="service-sample-media-wrap">
                  <img src="${s.image}" alt="${s.title} sample" class="service-sample-img" loading="lazy" />
                  <div class="service-sample-overlay">
                    <span class="sample-badge-tag">${s.sampleTag || 'Studio Sample'}</span>
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
                  <h3 class="service-card-title">${s.title}</h3>
                  <p class="service-card-desc">${s.description}</p>
                  
                  <ul class="deliverables-list">
                    ${s.deliverables.slice(0, 4).map(d => `
                      <li class="deliverable-item">
                        <span class="deliverable-bullet"></span>
                        ${d}
                      </li>
                    `).join('')}
                  </ul>
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

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#/services" class="btn btn-outline-cyan btn-lg">
              VIEW ALL 12 STUDIO SERVICES
              <span class="btn-icon-right">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <!-- 4. AI GENERATED VIDEO & CINEMATICS SHOWCASE -->
      ${this.videoShowcase.render()}

      <!-- 5. AI INNOVATION LAB TEASER -->
      <section class="section" style="background: rgba(11, 18, 32, 0.6); border-block: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="hero-layout" style="align-items: center;">
            <div>
              <div class="eyebrow" style="color: var(--accent-violet); border-color: rgba(128, 107, 255, 0.3); background: rgba(128, 107, 255, 0.1);">
                INTERACTIVE DEMONSTRATIONS
              </div>
              <h2>EXPLORE THE SYSTEMS BEHIND THE IDEAS.</h2>
              <p style="margin: 1.25rem 0 2rem; font-size: 1.1rem; line-height: 1.7;">
                Step inside our experimental laboratory to inspect interactive demonstrations of software architecture, intelligent RAG workflows, connected responsive viewports, and creative production pipelines.
              </p>
              
              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
                <span class="badge-tag badge-cyan">Demo A: AI Workflow</span>
                <span class="badge-tag badge-violet">Demo B: Architecture</span>
                <span class="badge-tag badge-orange">Demo C: Responsive Lab</span>
                <span class="badge-tag badge-cyan">Demo D: Creative Pipeline</span>
              </div>

              <a href="#/lab" class="btn btn-primary">
                ENTER THE LAB
                <span class="btn-icon-right">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            <div class="card" style="padding: 2.5rem; border-color: rgba(128, 107, 255, 0.3); background: rgba(17, 27, 45, 0.85);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <span class="badge-tag badge-violet">LAB EXPERIMENT: ACTIVE</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan);">SIMULATION NODE</span>
              </div>
              <h3 style="font-size: 1.3rem; margin-bottom: 0.75rem; color: #F5F7FC;">Autonomous Pipeline Flow</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
                INPUT &rarr; TOKENIZATION &rarr; VECTOR SEARCH &rarr; GENERATION &rarr; VERIFIED OUTPUT
              </p>
              <div style="height: 140px; background: #0B1220; border-radius: 8px; border: 1px dashed rgba(54, 207, 255, 0.3); display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent-cyan); display: flex; align-items: center; gap: 0.5rem;">
                  <span class="footer-status-dot"></span>
                  READY FOR INTERACTION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. FEATURED PROJECTS PREVIEW -->
      <section class="section" id="featured-projects">
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">ENGINEERING SHOWCASE</div>
            <h2 class="section-title">DESIGNED WITH PURPOSE. BUILT WITH PRECISION.</h2>
            <p class="section-subtitle">
              Inspect selected production architectures and conceptual blueprints across software, artificial intelligence, and creative media.
            </p>
          </div>

          <div class="portfolio-grid">
            ${featuredProjects.map(p => `
              <div class="card project-card">
                <div class="project-preview-box">
                  <img src="${p.image}" alt="${p.title}" class="project-preview-img" />
                  <div class="project-preview-gradient"></div>
                  <div style="position: absolute; bottom: 12px; left: 14px; z-index: 2;">
                    <span class="badge-tag badge-cyan">${p.category}</span>
                  </div>
                </div>

                <div class="project-meta">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${p.conceptType}</span>
                </div>

                <h3 class="project-title">${p.title}</h3>
                <p class="project-tagline">${p.tagline}</p>

                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                  ${p.metrics.map(m => `
                    <div style="background: rgba(11, 18, 32, 0.8); border: 1px solid var(--border-subtle); padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.75rem;">
                      <span style="color: var(--text-muted);">${m.label}:</span>
                      <strong style="color: var(--accent-orange); margin-left: 3px;">${m.value}</strong>
                    </div>
                  `).join('')}
                </div>

                <div style="margin-top: auto;">
                  <a href="#/projects/${p.id}" class="btn btn-secondary btn-sm" style="width: 100%;">
                    VIEW CASE STUDY
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

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#/projects" class="btn btn-outline-cyan btn-lg">
              EXPLORE FULL PORTFOLIO & BLUEPRINTS
            </a>
          </div>
        </div>
      </section>

      <!-- 6. WHY CHOOSE A.K. CREATION (SECTION 12) -->
      <section class="section" style="background: rgba(11, 18, 32, 0.4); border-block: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">OUR PHILOSOPHY</div>
            <h2 class="section-title">ONE PARTNER FOR YOUR DIGITAL JOURNEY.</h2>
            <p class="section-subtitle">
              We bridge the gap between rigorous technical engineering and high-impact creative storytelling.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div class="card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Technology-Led Solutions</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                We choose suitable technologies to meet actual requirements rather than adding unnecessary complexity. Every dependency is evaluated for performance and longevity.
              </p>
            </div>

            <div class="card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: var(--accent-orange); background: rgba(255, 122, 48, 0.1); border-color: rgba(255, 122, 48, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Purposeful Design</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                We build clear, usable interfaces and creative materials that communicate effectively. Aesthetic excellence always serves usability and audience conversion.
              </p>
            </div>

            <div class="card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: var(--accent-violet); background: rgba(128, 107, 255, 0.1); border-color: rgba(128, 107, 255, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Connected Capabilities</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                Bring software engineering, AI tooling, growth marketing, and creative production together under one coordinated studio team, eliminating friction between siloed vendors.
              </p>
            </div>

            <div class="card">
              <div class="contact-icon-box" style="margin-bottom: 1.25rem; color: #4ade80; background: rgba(74, 222, 128, 0.1); border-color: rgba(74, 222, 128, 0.25);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Structured Collaboration</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                Clear project scope, transparent communication, regular sprint reviews, and agreed milestone deliverables keep your project strictly on budget and on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. PROCESS PREVIEW (SECTION 11) -->
      <section class="section" id="process-preview">
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">OUR METHODOLOGY</div>
            <h2 class="section-title">FROM CONCEPT TO CREATION.</h2>
            <p class="section-subtitle">
              A disciplined six-stage methodology designed for precision, velocity, and measurable outcomes.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1.25rem;">
            ${processStages.map(st => `
              <div class="card" style="padding: 1.5rem; text-align: center; border-top: 3px solid ${st.accent};">
                <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 700; color: ${st.accent};">${st.step}</span>
                <h4 style="margin: 0.5rem 0 0.4rem; font-size: 1.1rem;">${st.title}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">${st.tagline.slice(0, 48)}...</p>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="#/process" class="btn btn-secondary">INSPECT COMPLETE PROCESS ROADMAP</a>
          </div>
        </div>
      </section>

      <!-- 8. TRANSPARENCY & VERIFIED RELIABILITY (SECTION 13) -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="card" style="text-align: center; padding: 3rem 2rem; border-color: rgba(54, 207, 255, 0.25);">
            <span class="badge-tag badge-cyan" style="margin-bottom: 1rem;">VERIFIED STUDIO TRANSPARENCY</span>
            <h3 style="font-size: 1.6rem; margin-bottom: 0.85rem;">Authentic Engineering & Direct Partnership</h3>
            <p style="max-width: 680px; margin-inline: auto; color: var(--text-secondary); margin-bottom: 2rem;">
              We value engineering integrity above all. Rather than presenting fabricated client quotes or simulated review metrics, we invite prospective partners to review our documented architectural blueprints, inspect code deliverables, or book a live technical discovery session.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/contact" class="btn btn-primary">BOOK A TECHNICAL CONSULTATION</a>
              <a href="#/lab" class="btn btn-secondary">TEST LAB ARCHITECTURES</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  afterRender() {
    // Mount Three.js Hero Scene
    const mountEl = document.getElementById('hero-canvas-mount') || document.getElementById('hero-canvas-container');
    if (mountEl) {
      this.heroSceneInstance = initHeroScene(mountEl);
    }

    // Initialize AI Video Showcase & Cinema Player
    if (this.videoShowcase) {
      this.videoShowcase.initListeners();
    }

    // Trigger Anime.js coordinated entrance animations
    animateHeroEntrance();
    animateStaggeredCards('.services-editorial-grid .service-card');
  }

  destroy() {
    if (this.heroSceneInstance && typeof this.heroSceneInstance.destroy === 'function') {
      this.heroSceneInstance.destroy();
      this.heroSceneInstance = null;
    }
    if (this.videoShowcase) {
      this.videoShowcase.closeTheater();
    }
  }
}
