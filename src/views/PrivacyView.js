// Privacy Policy View - A.K. Creation

export class PrivacyView {
  async render() {
    return `
      <section class="section service-detail-hero" aria-label="Privacy Policy">
        <div class="tech-grid-bg"></div>
        <div class="container" style="max-width: 900px;">
          <div class="section-header text-center">
            <div class="eyebrow">LEGAL & DATA GOVERNANCE</div>
            <h1 class="section-title">PRIVACY POLICY</h1>
            <p class="section-subtitle">
              Last updated: October 2026. How A.K. Creation protects, handles, and processes your business information.
            </p>
          </div>

          <div class="card" style="padding: clamp(2rem, 5vw, 3.5rem); line-height: 1.8;">
            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">1. Information We Collect</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              When submitting a project inquiry on our platform, we collect provided contact details including your full name, business email address, company name, phone number, and architectural requirements. We collect this information exclusively for the purpose of scoping, scheduling, and executing client technology engagements.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">2. Use of Telemetry & AI Model Boundaries</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              A.K. Creation adheres to strict AI data shielding principles. Client proprietary documents, proprietary software repositories, and enterprise data models utilized within our custom AI tools or retrieval-augmented generation (RAG) pipelines are never used to train public foundation models or shared across multi-tenant boundaries without express written consent.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">3. Cookies and Local Storage</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              We employ essential local browser storage to retain form state, session preferences, and reduced-motion user accessibility configurations. We do not sell, rent, or lease personal customer data to third-party data brokers.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">4. Data Security & Storage Safeguards</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              All data transmitted through our web application is encrypted in transit using industry-standard Transport Layer Security (TLS 1.3). Access to inquiry submissions is restricted to authorized studio personnel under confidentiality obligations.
            </p>

            <h2 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: #F5F7FC;">5. Contacting Data Governance</h2>
            <p style="color: var(--text-secondary); margin-bottom: 0;">
              If you have inquiries regarding this privacy statement or wish to request data erasure under applicable data privacy frameworks, contact us at 
              <strong style="color: var(--accent-cyan);">contact@akcreation.dev</strong>.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}
