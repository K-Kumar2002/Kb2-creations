// Multi-Column Footer Component - Kb2 Creations
import { getTelUrl, getWhatsAppUrl, contactConfig } from '../data/contactConfig.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="tech-grid-bg"></div>
      <div class="container">
        <div class="footer-top-grid">
          <!-- Col 1: Brand & Identity -->
          <div class="footer-brand">
            <a href="#/" class="brand-logo" style="margin-bottom: 0.5rem;" aria-label="Kb2 Creations Home">
              <div class="brand-icon">
                <img src="/assets/kb2-logo.png" alt="Kb2 Creations Emblem" class="brand-logo-img" />
              </div>
              <span class="brand-title">Kb2 Creations</span>
            </a>
            <p style="font-family: var(--font-display); font-weight: 600; color: var(--accent-cyan); font-size: 0.92rem; margin-top: 0.25rem;">
              “Technology. Intelligence. Creativity.”
            </p>
            <p>
              A modern digital technology and creative production studio engineered to transform ideas into practical, high-performance digital solutions.
            </p>
            <div style="margin-top: 1.5rem;">
              <div class="footer-status-pill">
                <span class="footer-status-dot"></span>
                SYSTEM STATUS: ACTIVE & VERIFIED
              </div>
            </div>
          </div>

          <!-- Col 2: Explore Navigation -->
          <div>
            <h4 class="footer-col-title">EXPLORE</h4>
            <ul class="footer-links">
              <li><a href="#/" class="footer-link">Home</a></li>
              <li><a href="#/services" class="footer-link">Services</a></li>
              <li><a href="#/lab" class="footer-link">Innovation Lab</a></li>
              <li><a href="#/projects" class="footer-link">Projects</a></li>
              <li><a href="#/about" class="footer-link">About Us</a></li>
              <li><a href="#/process" class="footer-link">Our Process</a></li>
            </ul>
          </div>

          <!-- Col 3: Company Services -->
          <div>
            <h4 class="footer-col-title">SERVICES</h4>
            <ul class="footer-links">
              <li><a href="#/services/software-development" class="footer-link">Software Development</a></li>
              <li><a href="#/services/ai-automation" class="footer-link">AI Tools & Automation</a></li>
              <li><a href="#/services/website-development" class="footer-link">Website Development</a></li>
              <li><a href="#/services/android-development" class="footer-link">Android App Development</a></li>
              <li><a href="#/services/digital-marketing" class="footer-link">Digital Marketing & Growth</a></li>
              <li><a href="#/services/ai-video-ads" class="footer-link">AI Video Advertisements</a></li>
              <li><a href="#/services/graphic-design" class="footer-link">Graphic Design & Print</a></li>
            </ul>
          </div>

          <!-- Col 4: Studio Contact & Direct Channels -->
          <div>
            <h4 class="footer-col-title">COMPANY & CONTACT</h4>
            <ul class="footer-links">
              <li><a href="#/contact" class="footer-link">Contact & Start Project</a></li>
              <li>
                <a href="${getTelUrl()}" class="footer-link" style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent-cyan);">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call: ${contactConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="footer-link" style="display: flex; align-items: center; gap: 0.5rem; color: #25D366;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.506-.677-.515l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.109c.15.201 2.121 3.238 5.138 4.542.718.31 1.279.496 1.716.634.721.229 1.378.197 1.897.119.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.126-.276-.201-.577-.352z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.656 0-3.197-.503-4.48-1.365l-.322-.214-2.96.837.846-2.884-.236-.334A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" fill="currentColor"/>
                  </svg>
                  WhatsApp: ${contactConfig.whatsappDisplay}
                </a>
              </li>
              <li><a href="#/privacy" class="footer-link">Privacy Policy</a></li>
              <li><a href="#/terms" class="footer-link">Terms and Conditions</a></li>
            </ul>
            <div style="margin-top: 2rem;">
              <span class="badge-tag badge-cyan">STUDIO INQUIRIES OPEN</span>
              <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-muted);">
                Direct client consultations available by appointment.
              </p>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <p>© ${currentYear} Kb2 Creations. ALL RIGHTS RESERVED.</p>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#/privacy" class="footer-link" style="font-size: 0.8rem;">Privacy Policy</a>
            <a href="#/terms" class="footer-link" style="font-size: 0.8rem;">Terms of Service</a>
            <a href="#/sitemap.xml" target="_blank" class="footer-link" style="font-size: 0.8rem;">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
