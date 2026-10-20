// Floating Quick Contact Actions (WhatsApp & Call) - A.K. Creation
import { getTelUrl, getWhatsAppUrl, contactConfig } from '../data/contactConfig.js';

export function renderQuickContactWidget() {
  const telUrl = getTelUrl();
  const waUrl = getWhatsAppUrl();

  return `
    <div class="floating-quick-contact" id="floating-quick-contact" aria-label="Direct Contact Actions">
      <!-- WhatsApp Floating Action -->
      <a 
        href="${waUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="quick-action-btn wa-btn" 
        id="quick-whatsapp-btn"
        aria-label="Chat on WhatsApp with A.K. Creation"
      >
        <span class="quick-action-tooltip">Chat on WhatsApp</span>
        <div class="quick-action-icon-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.506-.677-.515l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.109c.15.201 2.121 3.238 5.138 4.542.718.31 1.279.496 1.716.634.721.229 1.378.197 1.897.119.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.126-.276-.201-.577-.352z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.656 0-3.197-.503-4.48-1.365l-.322-.214-2.96.837.846-2.884-.236-.334A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" fill="currentColor"/>
          </svg>
        </div>
        <span class="quick-action-pulse wa-pulse"></span>
      </a>

      <!-- Direct Call Floating Action -->
      <a 
        href="${telUrl}" 
        class="quick-action-btn call-btn" 
        id="quick-call-btn"
        aria-label="Call A.K. Creation: ${contactConfig.phoneDisplay}"
      >
        <span class="quick-action-tooltip">Call Us Directly</span>
        <div class="quick-action-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <span class="quick-action-pulse call-pulse"></span>
      </a>
    </div>
  `;
}
