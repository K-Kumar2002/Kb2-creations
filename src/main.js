// Main Application Entrypoint - Kb2 Creations
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';

import { Router } from './router/router.js';
import { renderNavbar, initNavbarInteractions } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderQuickContactWidget } from './components/QuickContactWidget.js';
import { setupButtonMicroInteractions } from './animations/motion.js';

import { HomeView } from './views/HomeView.js';
import { ServicesView } from './views/ServicesView.js';
import { ServiceDetailView } from './views/ServiceDetailView.js';
import { LabView } from './views/LabView.js';
import { ProjectsView } from './views/ProjectsView.js';
import { ProjectDetailView } from './views/ProjectDetailView.js';
import { AboutView } from './views/AboutView.js';
import { ProcessView } from './views/ProcessView.js';
import { ContactView } from './views/ContactView.js';
import { PrivacyView } from './views/PrivacyView.js';
import { TermsView } from './views/TermsView.js';

// Application Routes Definition with unique titles & SEO meta descriptions
const routes = [
  {
    path: '/',
    view: HomeView,
    title: 'Kb2 Creations — AI Innovation Universe',
    description: 'Kb2 Creations is a premier innovation studio specializing in custom software, AI tools, websites, Android apps, digital marketing, AI video ads, and creative production.'
  },
  {
    path: '/services',
    view: ServicesView,
    title: 'Studio Services Directory',
    description: 'Explore all 12 multidisciplinary capabilities across custom software engineering, AI workflow automation, responsive web, mobile apps, and creative media.'
  },
  {
    path: '/services/:id',
    view: ServiceDetailView,
    title: 'Service Specification',
    description: 'In-depth architectural overview, key deliverables, technologies, and execution blueprints for Kb2 Creations capabilities.'
  },
  {
    path: '/lab',
    view: LabView,
    title: 'AI Innovation Lab — Interactive Demonstrations',
    description: 'Discover interactive 3D demonstrations of software architecture, intelligent RAG workflows, responsive experience viewports, and creative pipelines.'
  },
  {
    path: '/projects',
    view: ProjectsView,
    title: 'Featured Projects & Portfolio Blueprints',
    description: 'Production systems and architectural prototypes engineered for performance, scalability, and impact.'
  },
  {
    path: '/projects/:id',
    view: ProjectDetailView,
    title: 'Project Case Study',
    description: 'Technical case study examining problem statements, system architectures, and verified benchmark metrics.'
  },
  {
    path: '/about',
    view: AboutView,
    title: 'About Kb2 Creations — Where Technology Meets Creativity',
    description: 'Learn about our engineering philosophy, multidisciplinary craftsmanship, and approach to transforming ambitious ideas into digital solutions.'
  },
  {
    path: '/process',
    view: ProcessView,
    title: 'Our Working Process — From Concept to Creation',
    description: 'A disciplined six-stage methodology ensuring precision, velocity, and measurable outcomes from discovery to launch.'
  },
  {
    path: '/contact',
    view: ContactView,
    title: 'Contact Studio & Start a Project',
    description: 'Transmitting your project requirements to Kb2 Creations. Discovery consultations available for enterprise and startup teams.'
  },
  {
    path: '/privacy',
    view: PrivacyView,
    title: 'Privacy Policy & Data Governance',
    description: 'Our data protection commitments, confidentiality standards, and enterprise AI shielding boundaries.'
  },
  {
    path: '/terms',
    view: TermsView,
    title: 'Terms and Conditions',
    description: 'Standard terms governing client engagements, IP rights, and architectural demonstrations.'
  }
];

function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Mount Header, Main View Outlet, Footer, and Floating Contact Widget
  appContainer.innerHTML = `
    ${renderNavbar()}
    <main id="router-view" role="main" tabindex="-1"></main>
    ${renderFooter()}
    ${renderQuickContactWidget()}
  `;

  // Initialize Header interactivity & Mobile Drawer
  initNavbarInteractions();

  // Initialize Button Micro-interactions
  setupButtonMicroInteractions();

  // Initialize Client-side Router
  const routerOutlet = document.getElementById('router-view');
  new Router(routes, routerOutlet);
}

// Start application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
