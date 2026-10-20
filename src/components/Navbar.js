// Navbar Component - Enhanced Responsive Mega Dropdown & Mobile Accordion
import { servicesData } from '../data/services.js';
import { animateDrawerOpen } from '../animations/motion.js';
import { getTelUrl, getWhatsAppUrl, contactConfig } from '../data/contactConfig.js';

export function renderNavbar() {
  // Group services into 3 clear technical pillars for the mega menu
  const servicePillars = [
    {
      categoryTitle: "AI & SOFTWARE ENGINEERING",
      accentColor: "#36CFFF",
      icon: "code",
      services: servicesData.filter(s => ['software-development', 'ai-automation', 'website-development', 'android-development'].includes(s.id))
    },
    {
      categoryTitle: "AI CINEMA & VIDEO PRODUCTION",
      accentColor: "#806BFF",
      icon: "film",
      services: servicesData.filter(s => ['ai-video-ads', 'ai-reels', 'ai-movies', 'ai-music'].includes(s.id))
    },
    {
      categoryTitle: "BRAND DESIGN & PERFORMANCE",
      accentColor: "#FF7A30",
      icon: "layers",
      services: servicesData.filter(s => ['graphic-design', 'printing-advertising', 'ui-ux-design', 'digital-marketing'].includes(s.id))
    }
  ];

  return `
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <!-- Brand Wordmark & Official Kb2 Logo -->
        <a href="#/" class="brand-logo" aria-label="Kb2 Creations Home">
          <div class="brand-icon">
            <img src="/assets/kb2-logo.png" alt="Kb2 Creations Emblem" class="brand-logo-img" />
          </div>
          <div class="brand-text">
            <span class="brand-title">Kb2 Creations</span>
            <span class="brand-sub">AI INNOVATION UNIVERSE</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" aria-label="Primary Navigation">
          <ul class="nav-links">
            <li><a href="#/" class="nav-link">Home</a></li>
            
            <!-- Enhanced Services Mega Dropdown -->
            <li class="nav-dropdown-wrapper">
              <button class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true" id="desktop-services-dropdown-btn">
                <span>Services</span>
                <span class="dropdown-count-badge">12</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="dropdown-chevron">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div class="nav-dropdown-menu mega-menu-panel" role="region" aria-label="Services Mega Menu">
                <div class="mega-menu-inner">
                  <!-- 3 Thematic Columns -->
                  <div class="mega-columns-grid">
                    ${servicePillars.map(pillar => `
                      <div class="mega-column">
                        <div class="mega-column-header">
                          <span class="mega-column-dot" style="background: ${pillar.accentColor}; box-shadow: 0 0 8px ${pillar.accentColor};"></span>
                          <span class="mega-column-heading">${pillar.categoryTitle}</span>
                        </div>
                        <div class="mega-column-list">
                          ${pillar.services.map(s => `
                            <a href="#/services/${s.id}" class="mega-item">
                              <span class="mega-item-num">${s.number}</span>
                              <div class="mega-item-body">
                                <div class="mega-item-title-row">
                                  <span class="mega-item-title">${s.shortTitle}</span>
                                  ${s.hasVideo ? `<span class="mega-video-pill">AI VIDEO</span>` : ''}
                                </div>
                                <span class="mega-item-desc">${s.sampleTag || s.description.slice(0, 42) + '...'}</span>
                              </div>
                              <span class="mega-item-arrow">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                              </span>
                            </a>
                          `).join('')}
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Mega Menu Quick Feature Bottom Bar -->
                  <div class="mega-menu-footer">
                    <div class="mega-footer-info">
                      <div class="mega-footer-badge">
                        <span class="pulse-indicator"></span>
                        AI STUDIO CAPABILITIES
                      </div>
                      <span class="mega-footer-text">
                        Explore full interactive 3D architectures, AI video cinematics & verified project roadmaps.
                      </span>
                    </div>

                    <div class="mega-footer-links">
                      <a href="#/services" class="mega-footer-btn">
                        <span>All 12 Services Catalog</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                      <a href="#/lab" class="mega-footer-btn highlight">
                        <span>Launch Innovation Lab</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="13 17 18 12 13 7"></polyline>
                          <polyline points="6 17 11 12 6 7"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li><a href="#/lab" class="nav-link">Innovation Lab</a></li>
            <li><a href="#/projects" class="nav-link">Projects</a></li>
            <li><a href="#/about" class="nav-link">About</a></li>
            <li><a href="#/process" class="nav-link">Process</a></li>
            <li><a href="#/contact" class="nav-link">Contact</a></li>
          </ul>

          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <!-- Call & WhatsApp Direct Icons in Header -->
            <div class="header-contact-icons">
              <a href="${getTelUrl()}" class="header-icon-link call" title="Direct Studio Call: ${contactConfig.phoneDisplay}" aria-label="Direct Studio Phone Call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="header-icon-link wa" title="Chat with us on WhatsApp" aria-label="Chat on WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.506-.677-.515l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.109c.15.201 2.121 3.238 5.138 4.542.718.31 1.279.496 1.716.634.721.229 1.378.197 1.897.119.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.126-.276-.201-.577-.352z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.656 0-3.197-.503-4.48-1.365l-.322-.214-2.96.837.846-2.884-.236-.334A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" fill="currentColor"/>
                </svg>
              </a>
            </div>

            <a href="#/contact" class="btn btn-primary btn-sm">START A PROJECT</a>
          </div>
        </nav>

        <!-- Mobile Hamburger Toggle -->
        <button class="menu-toggle-btn" id="menu-toggle-btn" aria-label="Open mobile navigation" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div class="mobile-drawer-overlay" id="drawer-overlay" aria-hidden="true"></div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
      <div class="drawer-header">
        <a href="#/" class="brand-logo" style="font-size: 1.05rem;" aria-label="Kb2 Creations Home">
          <div class="brand-icon" style="width: 34px; height: 34px;">
            <img src="/assets/kb2-logo.png" alt="Kb2 Creations Emblem" class="brand-logo-img" />
          </div>
          <span>Kb2 Creations</span>
        </a>
        <button class="drawer-close-btn" id="drawer-close-btn" aria-label="Close navigation menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <ul class="mobile-nav-links">
        <li><a href="#/" class="mobile-nav-link">Home</a></li>
        
        <!-- Enhanced Mobile Services Accordion Dropdown -->
        <li class="mobile-services-accordion">
          <div class="mobile-services-header">
            <a href="#/services" class="mobile-nav-link">All Services</a>
            <button class="mobile-services-toggle-btn" id="mobile-services-toggle" aria-expanded="false" aria-label="Expand 12 services dropdown">
              <span class="mobile-services-badge">12 CAPABILITIES</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="accordion-chevron">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          
          <div class="mobile-services-list" id="mobile-services-list">
            ${servicePillars.map(pillar => `
              <div class="mobile-service-group">
                <div class="mobile-group-header">
                  <span class="mobile-group-dot" style="background: ${pillar.accentColor};"></span>
                  <span class="mobile-group-title">${pillar.categoryTitle}</span>
                </div>
                <div class="mobile-group-items">
                  ${pillar.services.map(s => `
                    <a href="#/services/${s.id}" class="mobile-service-item">
                      <span class="mobile-item-num">${s.number}</span>
                      <div class="mobile-item-info">
                        <span class="mobile-item-title">${s.title}</span>
                        <span class="mobile-item-sub">${s.sampleTag || s.category}</span>
                      </div>
                      ${s.hasVideo ? `<span class="mobile-video-chip">AI VIDEO</span>` : ''}
                    </a>
                  `).join('')}
                </div>
              </div>
            `).join('')}

            <a href="#/services" class="mobile-catalog-cta">
              <span>EXPLORE ALL 12 SERVICES WITH SAMPLE MEDIA</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </li>

        <li><a href="#/lab" class="mobile-nav-link">Innovation Lab</a></li>
        <li><a href="#/projects" class="mobile-nav-link">Featured Projects</a></li>
        <li><a href="#/about" class="mobile-nav-link">About Us</a></li>
        <li><a href="#/process" class="mobile-nav-link">Our Working Process</a></li>
        <li><a href="#/contact" class="mobile-nav-link">Contact & Inquiry</a></li>
      </ul>

      <!-- Mobile Direct Channels -->
      <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.85rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
          <a href="${getTelUrl()}" class="btn btn-secondary btn-sm" style="display: flex; gap: 0.4rem; padding: 0.65rem 0.5rem; font-size: 0.82rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Us
          </a>
          <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: flex; gap: 0.4rem; padding: 0.65rem 0.5rem; font-size: 0.82rem; color: #25D366; border-color: rgba(37, 211, 102, 0.4);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.506-.677-.515l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.109c.15.201 2.121 3.238 5.138 4.542.718.31 1.279.496 1.716.634.721.229 1.378.197 1.897.119.579-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.126-.276-.201-.577-.352z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.656 0-3.197-.503-4.48-1.365l-.322-.214-2.96.837.846-2.884-.236-.334A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" fill="currentColor"/>
            </svg>
            WhatsApp
          </a>
        </div>
        <a href="#/contact" class="btn btn-primary" style="width: 100%;">START A PROJECT</a>
      </div>
    </div>
  `;
}

export function initNavbarInteractions() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');

  // Sticky header background on scroll
  function onScroll() {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function openDrawer(e) {
    if (e) e.stopPropagation();
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
    toggleBtn?.setAttribute('aria-expanded', 'true');
    animateDrawerOpen(drawer);
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    if (drawer) drawer.style.transform = '';
    overlay?.classList.remove('open');
    document.body.classList.remove('drawer-open');
    document.body.style.overflow = '';
    toggleBtn?.setAttribute('aria-expanded', 'false');
  }

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Mobile services list accordion toggle
  const servicesToggleBtn = document.getElementById('mobile-services-toggle');
  const servicesList = document.getElementById('mobile-services-list');

  servicesToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = servicesList?.classList.toggle('expanded');
    servicesToggleBtn.classList.toggle('expanded');
    servicesToggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });

  // Close drawer on link clicks (except accordion toggle)
  drawer?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Desktop mega dropdown click/touch support
  const dropdownWrapper = document.querySelector('.nav-dropdown-wrapper');
  const dropdownBtn = document.getElementById('desktop-services-dropdown-btn');

  if (dropdownBtn && dropdownWrapper) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownWrapper.classList.toggle('touch-open');
      dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('touch-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    dropdownWrapper.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        dropdownWrapper.classList.remove('touch-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Escape key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawer?.classList.contains('open')) {
        closeDrawer();
      }
      if (dropdownWrapper?.classList.contains('touch-open')) {
        dropdownWrapper.classList.remove('touch-open');
        dropdownBtn?.setAttribute('aria-expanded', 'false');
      }
    }
  });
}
