// Client-side Router with SEO & Lifecycle Control - Kb2 Creations
export class Router {
  constructor(routes, rootElement) {
    this.routes = routes;
    this.root = rootElement;
    this.currentViewInstance = null;
    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
  }

  getCurrentPath() {
    const hash = window.location.hash.slice(1);
    return hash || '/';
  }

  async handleRoute() {
    const rawPath = this.getCurrentPath();
    const cleanPath = rawPath.split('?')[0];

    // Clean up previous view instance (e.g. Three.js scenes, timers)
    if (this.currentViewInstance && typeof this.currentViewInstance.destroy === 'function') {
      try {
        this.currentViewInstance.destroy();
      } catch (err) {
        console.warn('View cleanup warning:', err);
      }
      this.currentViewInstance = null;
    }

    // Ensure mobile drawer and overflow states are safely reset on route change
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const toggleBtn = document.getElementById('menu-toggle-btn');
    if (drawer) {
      drawer.classList.remove('open');
      drawer.style.transform = '';
    }
    if (overlay) overlay.classList.remove('open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    document.body.style.overflow = '';

    // Match route
    let matchedRoute = null;
    let params = {};

    for (const route of this.routes) {
      if (route.path.includes(':')) {
        // Parametric route match
        const routeParts = route.path.split('/');
        const pathParts = cleanPath.split('/');

        if (routeParts.length === pathParts.length) {
          let match = true;
          const tempParams = {};

          for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
              const paramName = routeParts[i].slice(1);
              tempParams[paramName] = pathParts[i];
            } else if (routeParts[i] !== pathParts[i]) {
              match = false;
              break;
            }
          }

          if (match) {
            matchedRoute = route;
            params = tempParams;
            break;
          }
        }
      } else if (route.path === cleanPath) {
        matchedRoute = route;
        break;
      }
    }

    if (!matchedRoute) {
      // Fallback to Home or 404
      matchedRoute = this.routes.find((r) => r.path === '/') || this.routes[0];
    }

    // Update Document Title & Meta Description for SEO
    if (matchedRoute.title) {
      document.title = matchedRoute.title.includes('Kb2 Creations')
        ? matchedRoute.title
        : `${matchedRoute.title} | Kb2 Creations`;
    }
    if (matchedRoute.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', matchedRoute.description);
      }
    }

    // Scroll to top or specific hash anchor
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Render View
    try {
      this.currentViewInstance = new matchedRoute.view(params);
      const html = await this.currentViewInstance.render();
      this.root.innerHTML = html;

      if (typeof this.currentViewInstance.afterRender === 'function') {
        this.currentViewInstance.afterRender();
      }

      this.updateActiveNavLinks(cleanPath);
    } catch (err) {
      console.error('Route render error:', err);
      this.root.innerHTML = `
        <div class="container section text-center" style="min-height: 50vh; display: grid; place-items: center;">
          <div>
            <div class="eyebrow">ROUTE RESOLUTION</div>
            <h2>Unexpected Interface Exception</h2>
            <p style="margin: 1rem 0 2rem;">Please navigate back to the home environment.</p>
            <a href="#/" class="btn btn-primary">RETURN TO HOME</a>
          </div>
        </div>
      `;
    }
  }

  updateActiveNavLinks(path) {
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = href.replace('#', '');

      if (linkPath === '/' && path === '/') {
        link.classList.add('active');
      } else if (linkPath !== '/' && path.startsWith(linkPath)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
