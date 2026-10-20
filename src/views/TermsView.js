// Terms and Conditions View - Kb2 Creations

export class TermsView {
  async render() {
    return `
      <section class="section service-detail-hero" aria-label="Terms and Conditions">
        <div class="tech-grid-bg"></div>
        <div class="container" style="max-width: 900px;">
          <div class="section-header text-center">
            <div class="eyebrow">TERMS OF ENGAGEMENT</div>
            <h1 class="section-title">TERMS AND CONDITIONS</h1>
            <p class="section-subtitle">
              Last updated: October 2026. Standard terms governing interactions and client engagements with Kb2 Creations.
            </p>
          </div>

          <div class="card" style="padding: clamp(2rem, 5vw, 3.5rem); line-height: 1.8;">
            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">1. Acceptance of Terms</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              By accessing, browsing, or utilizing the Kb2 Creations website and its interactive innovation lab demonstrations, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using this website.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">2. Intellectual Property Rights</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              All content on this website—including Three.js 3D shaders, graphic brand symbols, bespoke interface layouts, code architectures, and written copy—is the proprietary intellectual property of Kb2 Creations. Client deliverables and commercial IP rights are transferred according to individual Master Services Agreements (MSAs).
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">3. Nature of Lab Demonstrations</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              Demonstrations presented inside the AI Innovation Lab (including the AI Workflow Explorer, Software Architecture Explorer, and Responsive Experience Lab) are provided as architectural concept simulations. They do not constitute live production warranties or standalone commercial guarantees.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">4. Commissioned Creative Media & Licensing</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              For creative productions involving AI video advertisements, AI songs, or graphic assets, specific commercial usage licenses, ownership boundaries, and reproduction rights are established under each individual statement of work (SOW) prior to final asset handover.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">5. Governing Jurisdiction</h2>
            <p style="color: var(--text-secondary); margin-bottom: 0;">
              These terms are governed by and construed in accordance with applicable commercial and digital trade laws. For contractual inquiries, contact our studio administration at 
              <strong style="color: var(--accent-cyan);">contact@kb2creations.dev</strong>.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}
