// Our Working Process View - From Concept to Creation
import { processStages } from '../data/process.js';
import { animateProcessStages } from '../animations/motion.js';

export class ProcessView {
  async render() {
    return `
      <section class="section service-detail-hero" aria-label="Our Working Process">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">RIGOROUS ENGINEERING DISCIPLINE</div>
            <h1 class="section-title">FROM CONCEPT TO CREATION.</h1>
            <p class="section-subtitle">
              A structured, transparent six-stage workflow ensuring technical excellence, predictability, and high business impact at every milestone.
            </p>
          </div>

          <!-- Alternating Desktop / Vertical Mobile Timeline -->
          <div class="process-timeline" id="process-timeline">
            ${processStages.map((st, idx) => `
              <div class="timeline-stage" data-stage="${idx}">
                <div class="timeline-marker">${st.step}</div>
                
                <div class="card timeline-stage-content" style="border-left: 3px solid ${st.accent};">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span class="badge-tag" style="border-color: ${st.accent}; color: ${st.accent};">
                      STAGE ${st.step}
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                      PHASE 0${idx + 1}
                    </span>
                  </div>

                  <h3 style="font-size: 1.45rem; margin-bottom: 0.5rem;">${st.title}</h3>
                  <p style="font-size: 0.98rem; color: var(--accent-orange); margin-bottom: 1rem; font-weight: 500;">
                    ${st.tagline}
                  </p>
                  <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
                    ${st.details}
                  </p>

                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase;">
                    Key Activities & Milestones:
                  </div>
                  <ul class="deliverables-list" style="margin-bottom: 0; padding-top: 0.5rem;">
                    ${st.keyActivities.map(act => `
                      <li class="deliverable-item">
                        <span class="deliverable-bullet" style="background: ${st.accent};"></span>
                        ${act}
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="timeline-stage-empty"></div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Action Box -->
          <div class="card" style="margin-top: 5rem; text-align: center; padding: 3rem 2rem; border-color: rgba(54, 207, 255, 0.3);">
            <div class="eyebrow">READY TO COMMENCE?</div>
            <h2 style="font-size: 1.85rem; margin-bottom: 0.75rem;">Step 01: Discover Your Vision</h2>
            <p style="max-width: 600px; margin-inline: auto; color: var(--text-secondary); margin-bottom: 2rem;">
              Initiate your project with an exploratory discovery session. We will evaluate your scope, technical parameters, and provide an actionable execution roadmap.
            </p>
            <a href="#/contact" class="btn btn-primary btn-lg">SCHEDULE DISCOVERY CALL</a>
          </div>
        </div>
      </section>
    `;
  }

  afterRender() {
    animateProcessStages();
  }
}
