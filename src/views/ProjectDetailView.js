// Individual Project Detail View - Kb2 Creations
import { projectsData } from '../data/projects.js';

export class ProjectDetailView {
  constructor(params) {
    this.projectId = params.id;
    this.project = projectsData.find(p => p.id === this.projectId) || projectsData[0];
  }

  async render() {
    const p = this.project;
    const relatedProjects = projectsData.filter(item => item.id !== p.id).slice(0, 2);

    return `
      <section class="section service-detail-hero" aria-label="${p.title}">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <!-- Breadcrumb Navigation -->
          <div style="display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 2rem;">
            <a href="#/" class="footer-link">HOME</a>
            <span>/</span>
            <a href="#/projects" class="footer-link">PROJECTS</a>
            <span>/</span>
            <span style="color: var(--accent-cyan);">${p.title.toUpperCase()}</span>
          </div>

          <!-- Hero Heading -->
          <div style="max-width: 880px;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
              <span class="badge-tag badge-cyan">${p.category}</span>
              <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${p.conceptType}</span>
            </div>
            <h1 style="margin-bottom: 1.25rem;">${p.title}</h1>
            <p class="lead" style="color: var(--text-primary); font-size: 1.25rem; line-height: 1.6;">
              ${p.tagline}
            </p>
          </div>

          <!-- Two-Column Layout -->
          <div class="service-detail-grid">
            <div class="service-detail-content">
              <!-- Visual Project Showcase Banner with High-Res Image -->
              <div class="card project-detail-hero-media" style="padding: 0; overflow: hidden; position: relative; border-color: rgba(54, 207, 255, 0.35); box-shadow: 0 12px 36px rgba(0,0,0,0.45); margin-bottom: 2rem;">
                <div style="position: relative; width: 100%; aspect-ratio: 16/9; max-height: 440px; overflow: hidden;">
                  <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
                  <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7, 11, 20, 0.15) 0%, rgba(7, 11, 20, 0.5) 50%, rgba(7, 11, 20, 0.9) 100%); pointer-events: none;"></div>
                  <div style="position: absolute; bottom: 20px; left: 24px; right: 24px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; z-index: 2;">
                    <div>
                      <span class="badge-tag badge-cyan" style="margin-bottom: 0.5rem; display: inline-block;">${p.category}</span>
                      <h3 style="font-size: 1.5rem; color: #F5F7FC; margin: 0; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">${p.title}</h3>
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-cyan); background: rgba(7, 11, 20, 0.75); backdrop-filter: blur(8px); padding: 0.4rem 0.85rem; border-radius: 4px; border: 1px solid rgba(54, 207, 255, 0.3);">
                      PRODUCTION BLUEPRINT
                    </div>
                  </div>
                </div>
              </div>

              <!-- Problem Statement -->
              <div class="card detail-section-block">
                <div class="eyebrow" style="color: var(--accent-orange); border-color: rgba(255, 122, 48, 0.3); background: rgba(255, 122, 48, 0.08);">
                  CHALLENGE & CONTEXT
                </div>
                <h3>The Problem Statement</h3>
                <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary);">
                  ${p.problemStatement}
                </p>
              </div>

              <!-- Design & Engineering Approach -->
              <div class="card detail-section-block">
                <div class="eyebrow">SOLUTION ARCHITECTURE</div>
                <h3>Design & Engineering Approach</h3>
                <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">
                  ${p.approach}
                </p>
                <div style="padding: 1.25rem; background: rgba(11, 18, 32, 0.75); border-radius: 8px; border-left: 3px solid var(--accent-cyan);">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); margin-bottom: 0.35rem;">
                    SYSTEM TOPOLOGY SUMMARY
                  </div>
                  <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">
                    ${p.architectureOverview}
                  </p>
                </div>
              </div>

              <!-- Tech Highlights -->
              <div class="card detail-section-block">
                <h3>Technical Stack Highlights</h3>
                <div class="tech-stack-badges">
                  ${p.techHighlights.map(t => `
                    <span class="badge-tag" style="background: rgba(128, 107, 255, 0.1); border-color: rgba(128, 107, 255, 0.28); color: #F5F7FC; font-size: 0.85rem; padding: 0.4rem 0.85rem;">
                      ${t}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Services Involved -->
              <div class="card detail-section-block">
                <div class="eyebrow" style="color: var(--accent-cyan);">CAPABILITIES DEPLOYED</div>
                <h3>Services Involved</h3>
                <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 1rem;">
                  ${p.servicesInvolved.map(serv => `
                    <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(11, 18, 32, 0.8); border: 1px solid var(--border-subtle); padding: 0.5rem 1rem; border-radius: 6px;">
                      <span style="width: 6px; height: 6px; background: var(--accent-orange); border-radius: 50%;"></span>
                      <span style="font-size: 0.9rem; font-weight: 500; color: #F5F7FC;">${serv}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="detail-sidebar">
              <div class="sidebar-sticky-box">
                <span class="badge-tag badge-cyan" style="margin-bottom: 1rem;">VERIFIED BENCHMARKS</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1.25rem;">Key Project Metrics</h3>
                
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                  ${p.metrics.map(m => `
                    <div style="background: rgba(11, 18, 32, 0.8); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: 8px;">
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${m.label}</div>
                      <div style="font-size: 1.5rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-orange); margin-top: 2px;">
                        ${m.value}
                      </div>
                    </div>
                  `).join('')}
                </div>

                <a href="#/contact?service=${encodeURIComponent(p.servicesInvolved[0])}" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">
                  START A SIMILAR PROJECT
                  <span class="btn-icon-right">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>

                <a href="#/projects" class="btn btn-secondary btn-sm" style="width: 100%;">
                  VIEW ALL PROJECTS
                </a>

                <!-- Related Projects -->
                <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
                    EXPLORE RELATED BLUEPRINTS
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                    ${relatedProjects.map(rel => `
                      <a href="#/projects/${rel.id}" class="footer-link" style="font-size: 0.9rem; display: flex; align-items: center; gap: 0.85rem; padding: 0.5rem; border-radius: 6px; background: rgba(11, 18, 32, 0.4); border: 1px solid var(--border-subtle); transition: border-color var(--transition-fast);">
                        <img src="${rel.image}" alt="${rel.title}" style="width: 56px; height: 38px; border-radius: 4px; object-fit: cover; flex-shrink: 0;" />
                        <div style="flex: 1; min-width: 0;">
                          <div style="font-weight: 600; color: #F5F7FC; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${rel.title}</div>
                          <div style="font-size: 0.72rem; color: var(--accent-cyan); font-family: var(--font-mono);">${rel.category}</div>
                        </div>
                        <span style="color: var(--accent-cyan); font-weight: bold;">&rarr;</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
