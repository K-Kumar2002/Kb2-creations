// Projects and Portfolio Gallery View - Kb2 Creations
import { projectCategories, projectsData } from '../data/projects.js';
import { animateStaggeredCards } from '../animations/motion.js';

export class ProjectsView {
  constructor() {
    this.selectedCategory = "All";
  }

  async render() {
    return `
      <section class="section service-detail-hero" aria-label="Projects and Portfolio">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">PORTFOLIO & SYSTEM BLUEPRINTS</div>
            <h1 class="section-title">DESIGNED WITH PURPOSE. BUILT WITH PRECISION.</h1>
            <p class="section-subtitle">
              Explore production architectures, client solutions, and conceptual laboratory systems across software engineering, AI tooling, and creative production.
            </p>
          </div>

          <!-- Category Filter Buttons -->
          <div class="portfolio-filters" id="portfolio-filters" role="group" aria-label="Filter Projects">
            ${projectCategories.map(cat => `
              <button class="filter-btn ${cat === this.selectedCategory ? 'active' : ''}" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Projects Grid -->
          <div class="portfolio-grid" id="portfolio-grid">
            ${this.renderProjectCards(this.selectedCategory)}
          </div>

          <!-- Custom Project CTA -->
          <div class="card" style="margin-top: 5rem; text-align: center; padding: 3rem 2rem; border-color: rgba(255, 122, 48, 0.3);">
            <div class="eyebrow" style="color: var(--accent-orange); border-color: rgba(255, 122, 48, 0.3); background: rgba(255, 122, 48, 0.1);">
              HAVE A CUSTOM VISION?
            </div>
            <h3 style="font-size: 1.8rem; margin-bottom: 0.75rem;">Build Your Next Digital Landmark</h3>
            <p style="max-width: 600px; margin-inline: auto; color: var(--text-secondary); margin-bottom: 2rem;">
              Whether you require a mission-critical SaaS platform or a viral AI video advertising campaign, our team will tailor an engineering sprint to your roadmap.
            </p>
            <a href="#/contact" class="btn btn-primary btn-lg">START A PROJECT INQUIRY</a>
          </div>
        </div>
      </section>
    `;
  }

  renderProjectCards(category) {
    const filtered = category === "All"
      ? projectsData
      : projectsData.filter(p => p.category === category);

    if (filtered.length === 0) {
      return `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <p style="color: var(--text-muted);">No projects found in this category.</p>
        </div>
      `;
    }

    return filtered.map(p => `
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
    `).join('');
  }

  afterRender() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('portfolio-grid');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedCategory = btn.getAttribute('data-cat');
        if (grid) {
          grid.innerHTML = this.renderProjectCards(this.selectedCategory);
          animateStaggeredCards('#portfolio-grid .project-card');
        }
      });
    });

    animateStaggeredCards('#portfolio-grid .project-card');
  }
}
