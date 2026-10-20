// Contact & Project Inquiry View - Kb2 Creations
import { servicesData } from '../data/services.js';
import { getTelUrl, getWhatsAppUrl, contactConfig } from '../data/contactConfig.js';
import anime from 'animejs';

export class ContactView {
  constructor() {
    this.isSubmitting = false;
    this.submitted = false;
    this.submissionError = null;
  }

  async render() {
    // Check if a service was passed in URL query
    const hash = window.location.hash;
    let preselectedService = "";
    if (hash.includes('?service=')) {
      const paramVal = hash.split('?service=')[1];
      if (paramVal) {
        preselectedService = decodeURIComponent(paramVal);
      }
    }

    return `
      <section class="section service-detail-hero" aria-label="Contact and Start a Project">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="section-header text-center" style="max-width: 820px; margin-inline: auto;">
            <div class="eyebrow">COMMENCE ENGAGEMENT</div>
            <h1 class="section-title">LET'S BUILD SOMETHING INTELLIGENT.</h1>
            <p class="section-subtitle">
              Tell us about your idea, your goals, and what you want to create. We'll use your requirements to understand the project and discuss the next steps.
            </p>
          </div>

          <div class="contact-layout-grid" style="margin-top: 3.5rem;">
            <!-- Left Column: Studio Information & Direct Channels -->
            <div class="contact-info-panel">
              <div class="card contact-info-card">
                <span class="badge-tag badge-cyan" style="margin-bottom: 1rem;">DIRECT ENGAGEMENT</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem;">Technical Studio Inquiries</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.75rem;">
                  We partner with forward-thinking organizations, funded startups, and enterprise teams seeking custom engineering, AI deployment, and high-impact digital media.
                </p>

                <!-- Direct Channels -->
                <div class="contact-detail-row">
                  <div class="contact-icon-box" style="color: var(--accent-cyan);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Direct Phone Consultation</div>
                    <a href="${getTelUrl()}" style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--accent-cyan); font-weight: 600; text-decoration: underline;">
                      ${contactConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div class="contact-detail-row">
                  <div class="contact-icon-box" style="color: #25D366; background: rgba(37, 211, 102, 0.1); border-color: rgba(37, 211, 102, 0.25);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.506-.677-.515l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.109c.15.201 2.121 3.238 5.138 4.542.718.31 1.279.496 1.716.634.721.229 1.378.197 1.897.119.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.126-.276-.201-.577-.352z" fill="currentColor"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.656 0-3.197-.503-4.48-1.365l-.322-.214-2.96.837.846-2.884-.236-.334A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Direct WhatsApp Support</div>
                    <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-mono); font-size: 0.95rem; color: #25D366; font-weight: 600; text-decoration: underline;">
                      Chat: ${contactConfig.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div class="contact-detail-row">
                  <div class="contact-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Email Inquiries</div>
                    <div style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-primary); font-weight: 600;">
                      ${contactConfig.email}
                    </div>
                  </div>
                </div>

                <div class="contact-detail-row" style="margin-bottom: 0;">
                  <div class="contact-icon-box" style="color: var(--accent-orange); background: rgba(255, 122, 48, 0.1); border-color: rgba(255, 122, 48, 0.25);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Response SLA</div>
                    <div style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-primary); font-weight: 600;">
                      Within 24 Business Hours
                    </div>
                  </div>
                </div>
              </div>

              <!-- Process guarantee -->
              <div class="card" style="padding: 1.8rem; border-color: rgba(54, 207, 255, 0.2);">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); margin-bottom: 0.5rem;">
                  CONFIDENTIALITY & IP COMMITMENT
                </div>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                  All project inquiries and proprietary technical architectures shared with Kb2 Creations are strictly confidential and protected under standard mutual NDA provisions.
                </p>
              </div>
            </div>

            <!-- Right Column: Interactive Project Inquiry Form -->
            <div class="card" style="padding: clamp(1.8rem, 4vw, 3rem); border-color: rgba(54, 207, 255, 0.35);" id="inquiry-form-card">
              <div style="margin-bottom: 2rem;">
                <span class="badge-tag badge-orange" style="margin-bottom: 0.6rem;">PROJECT SPECIFICATION</span>
                <h3 style="font-size: 1.6rem; color: #F5F7FC;">Project Inquiry Form</h3>
                <p style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 0.35rem;">
                  Fields marked with an asterisk (<span style="color: var(--accent-orange);">*</span>) are required for preliminary assessment.
                </p>
              </div>

              <!-- Inline Feedback Alerts -->
              <div id="form-alert-container"></div>

              <form id="project-inquiry-form" novalidate>
                <!-- Row 1: Name & Company -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
                  <div class="form-group">
                    <label class="form-label" for="field-fullName">
                      Full Name <span class="required">*</span>
                    </label>
                    <input type="text" id="field-fullName" name="fullName" class="form-control" placeholder="e.g. Alex Mercer" required autocomplete="name">
                    <span class="form-error-msg" id="err-fullName"></span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="field-companyName">
                      Company / Organization <span style="font-size: 0.78rem; color: var(--text-muted);">(Optional)</span>
                    </label>
                    <input type="text" id="field-companyName" name="companyName" class="form-control" placeholder="e.g. CyberVortex Labs" autocomplete="organization">
                  </div>
                </div>

                <!-- Row 2: Email & Phone -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
                  <div class="form-group">
                    <label class="form-label" for="field-email">
                      Email Address <span class="required">*</span>
                    </label>
                    <input type="email" id="field-email" name="email" class="form-control" placeholder="alex@company.com" required autocomplete="email">
                    <span class="form-error-msg" id="err-email"></span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="field-phone">
                      Phone Number <span style="font-size: 0.78rem; color: var(--text-muted);">(Optional)</span>
                    </label>
                    <input type="tel" id="field-phone" name="phone" class="form-control" placeholder="+91 98765 43210" autocomplete="tel">
                  </div>
                </div>

                <!-- Row 3: Service Required (All 12 Services!) -->
                <div class="form-group">
                  <label class="form-label" for="field-service">
                    Service Required <span class="required">*</span>
                  </label>
                  <select id="field-service" name="service" class="form-control" required>
                    <option value="" disabled ${!preselectedService ? 'selected' : ''}>-- Select one of our 12 company services --</option>
                    ${servicesData.map(s => {
      const isSel = preselectedService && (preselectedService.toLowerCase() === s.title.toLowerCase() || preselectedService.toLowerCase() === s.id.toLowerCase());
      return `<option value="${s.title}" ${isSel ? 'selected' : ''}>Service ${s.number}: ${s.title}</option>`;
    }).join('')}
                    <option value="Multi-Service Combined Engagement">Multi-Service Combined Engagement</option>
                  </select>
                  <span class="form-error-msg" id="err-service"></span>
                </div>

                <!-- Row 4: Budget Range & Expected Timeline -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
                  <div class="form-group">
                    <label class="form-label" for="field-budget">
                      Estimated Budget Range (₹ INR) <span style="font-size: 0.78rem; color: var(--text-muted);">(Optional)</span>
                    </label>
                    <select id="field-budget" name="budget" class="form-control">
                      <option value="">Prefer to discuss during discovery</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Creative & Starter Sprints)</option>
                      <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000 (Growth & Pro Platforms)</option>
                      <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000 (Custom Apps & AI Workflows)</option>
                      <option value="₹5,00,000 - ₹15,00,000">₹5,00,000 - ₹15,00,000 (Enterprise Cloud & Media)</option>
                      <option value="₹15,00,000+">₹15,00,000+ (Comprehensive Studio Retainers)</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="field-timeline">
                      Target Timeline <span style="font-size: 0.78rem; color: var(--text-muted);">(Optional)</span>
                    </label>
                    <select id="field-timeline" name="timeline" class="form-control">
                      <option value="">Flexible / Not strictly time-critical</option>
                      <option value="Under 4 Weeks">Rapid Sprint (Under 4 Weeks)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Ongoing Retainer">Ongoing Multi-Sprint Retainer</option>
                    </select>
                  </div>
                </div>

                <!-- Row 5: Project Description -->
                <div class="form-group">
                  <label class="form-label" for="field-description">
                    Project Description & Requirements <span class="required">*</span>
                  </label>
                  <textarea id="field-description" name="description" rows="5" class="form-control" placeholder="Outline your project scope, core technical requirements, goals, and any reference systems..." required></textarea>
                  <span class="form-error-msg" id="err-description"></span>
                </div>

                <!-- Row 6: Privacy Consent Checkbox -->
                <div class="form-checkbox-wrapper">
                  <input type="checkbox" id="field-consent" name="consent" required>
                  <label for="field-consent" class="form-checkbox-label">
                    I agree to the processing of my inquiry details in accordance with Kb2 Creations’ 
                    <a href="#/privacy" target="_blank">Privacy Policy</a>. <span class="required">*</span>
                  </label>
                </div>
                <span class="form-error-msg" id="err-consent" style="margin-top: -1rem; margin-bottom: 1.5rem; display: block;"></span>

                <!-- Submit Button with WhatsApp Integration -->
                <button type="submit" class="btn btn-primary btn-lg" id="submit-inquiry-btn" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.75rem; background: linear-gradient(135deg, #128C7E 0%, #25D366 100%); border-color: #25D366; box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35); font-weight: 700; color: #FFFFFF;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                  </svg>
                  SEND INQUIRY ON WHATSAPP
                </button>
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 0.85rem; font-size: 0.82rem; color: var(--text-muted); text-align: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #25D366; box-shadow: 0 0 8px #25D366;"></span>
                  Direct dispatch to Studio WhatsApp: <strong style="color: #25D366;">${contactConfig.whatsappDisplay}</strong>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  afterRender() {
    this.setupFormValidation();
  }

  setupFormValidation() {
    const form = document.getElementById('project-inquiry-form');
    if (!form) return;

    const alertContainer = document.getElementById('form-alert-container');
    const submitBtn = document.getElementById('submit-inquiry-btn');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (this.isSubmitting) return;

      // Clear existing errors
      ['fullName', 'email', 'service', 'description', 'consent'].forEach(id => {
        const el = document.getElementById(`err-${id}`);
        const input = document.getElementById(`field-${id}`);
        if (el) el.textContent = '';
        if (input) input.classList.remove('has-error');
      });
      if (alertContainer) alertContainer.innerHTML = '';

      let hasError = false;

      // Validate Full Name
      const fullNameInput = document.getElementById('field-fullName');
      const fullName = fullNameInput?.value.trim() || '';
      if (!fullName || fullName.length < 2) {
        document.getElementById('err-fullName').textContent = 'Please provide your full name (minimum 2 characters).';
        fullNameInput?.classList.add('has-error');
        hasError = true;
      }

      // Validate Email
      const emailInput = document.getElementById('field-email');
      const email = emailInput?.value.trim() || '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        document.getElementById('err-email').textContent = 'Please provide a valid business email address.';
        emailInput?.classList.add('has-error');
        hasError = true;
      }

      // Validate Service Required
      const serviceInput = document.getElementById('field-service');
      const service = serviceInput?.value || '';
      if (!service) {
        document.getElementById('err-service').textContent = 'Please choose a primary required service from the list.';
        serviceInput?.classList.add('has-error');
        hasError = true;
      }

      // Validate Description
      const descInput = document.getElementById('field-description');
      const description = descInput?.value.trim() || '';
      if (!description || description.length < 15) {
        document.getElementById('err-description').textContent = 'Please describe your project requirements in at least 15 characters.';
        descInput?.classList.add('has-error');
        hasError = true;
      }

      // Validate Consent
      const consentInput = document.getElementById('field-consent');
      if (!consentInput?.checked) {
        document.getElementById('err-consent').textContent = 'You must accept the privacy terms to proceed.';
        hasError = true;
      }

      if (hasError) {
        if (alertContainer) {
          alertContainer.innerHTML = `
            <div class="alert alert-error">
              <span>⚠️</span>
              <div>Please correct the highlighted fields before transmitting your inquiry.</div>
            </div>
          `;
        }
        return;
      }

      // Collect form data
      const companyName = document.getElementById('field-companyName')?.value.trim() || 'N/A';
      const phone = document.getElementById('field-phone')?.value.trim() || 'N/A';
      const budget = document.getElementById('field-budget')?.value || 'Flexible / To Discuss';
      const timeline = document.getElementById('field-timeline')?.value || 'Flexible';

      const payload = {
        fullName,
        companyName,
        email,
        phone,
        service,
        budget,
        timeline,
        description,
        timestamp: new Date().toISOString()
      };

      // Construct structured WhatsApp message
      const formattedMessage = [
        `*🚀 NEW PROJECT INQUIRY — Kb2 Creations*`,
        `━━━━━━━━━━━━━━━━━━━━━━━`,
        `👤 *Client Name:* ${fullName}`,
        `🏢 *Company:* ${companyName}`,
        `📧 *Email:* ${email}`,
        `📞 *Phone:* ${phone}`,
        `🛠️ *Service Required:* ${service}`,
        `💰 *Estimated Budget:* ${budget}`,
        `⏱️ *Target Timeline:* ${timeline}`,
        ``,
        `📝 *Project Description:*`,
        `${description}`,
        `━━━━━━━━━━━━━━━━━━━━━━━`,
        `🕒 *Transmitted:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`,
        `🌐 _Source: kb2creations.dev_`
      ].join('\n');

      const waUrl = getWhatsAppUrl(formattedMessage);

      // Save to client storage log for persistence
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('ak_inquiries') || '[]');
        existingInquiries.push(payload);
        localStorage.setItem('ak_inquiries', JSON.stringify(existingInquiries));
      } catch (e) {
        console.warn('Storage log skipped:', e);
      }

      // Open WhatsApp immediately in new tab
      window.open(waUrl, '_blank');

      // Display rich success feedback with direct button
      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert alert-success" style="border-left: 4px solid #25D366; background: rgba(37, 211, 102, 0.08); padding: 1.25rem; border-radius: 8px;">
            <div style="display: flex; gap: 1rem; align-items: flex-start; width: 100%;">
              <span style="font-size: 1.75rem; color: #25D366; line-height: 1;">✓</span>
              <div style="width: 100%;">
                <strong style="color: #25D366; font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">
                  Inquiry Form Sent to WhatsApp!
                </strong>
                <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.85rem;">
                  Thank you, <strong>${fullName}</strong>. Your project inquiry for <strong>${service}</strong> has been formatted and directed to our studio WhatsApp (<strong style="color: #25D366;">${contactConfig.whatsappDisplay}</strong>).
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;">
                  <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #051a0e; font-weight: 700; display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.55rem 1.1rem; border-radius: 6px; text-decoration: none; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    </svg>
                    Continue to WhatsApp Chat
                  </a>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">
                    (Click if WhatsApp did not open automatically)
                  </span>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      form.reset();
      anime({
        targets: alertContainer,
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 400,
        easing: 'easeOutQuad'
      });
    });
  }
}
