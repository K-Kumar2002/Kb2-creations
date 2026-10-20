// Motion Engineering with Anime.js - Kb2 Creations
import anime from 'animejs';

export function isReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Coordinated Hero Entrance Sequence (Master Prompt Section 5):
 * 1. Technical eyebrow appears
 * 2. Main heading reveals line by line
 * 3. Supporting text fades in
 * 4. CTAs enter with a subtle upward motion
 * 5. Secondary technical labels appear last
 */
export function animateHeroEntrance() {
  if (isReducedMotion()) return null;

  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  });

  tl
    .add({
      targets: '.hero-layout .eyebrow, .hero-content .eyebrow',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 600
    })
    .add({
      targets: '.hero-headline',
      opacity: [0, 1],
      translateY: [25, 0],
      duration: 900
    }, '-=350')
    .add({
      targets: '.hero-supporting-text',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700
    }, '-=500')
    .add({
      targets: '.hero-cta-group .btn',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(120),
      duration: 650
    }, '-=400')
    .add({
      targets: '.tech-strip-item',
      opacity: [0, 1],
      translateY: [15, 0],
      delay: anime.stagger(80),
      duration: 600
    }, '-=350')
    .add({
      targets: '.hero-floating-badge',
      opacity: [0, 1],
      scale: [0.85, 1],
      delay: anime.stagger(150),
      duration: 700
    }, '-=400');

  return tl;
}

/**
 * Staggered Service Cards Entrance
 */
export function animateStaggeredCards(selector = '.service-card') {
  if (isReducedMotion()) return null;

  return anime({
    targets: selector,
    opacity: [0, 1],
    translateY: [35, 0],
    delay: anime.stagger(90, { start: 100 }),
    duration: 750,
    easing: 'easeOutCubic'
  });
}

/**
 * Mobile Navigation Drawer Transition
 */
export function animateDrawerOpen(drawerEl, linksSelector = '.mobile-nav-link') {
  if (isReducedMotion()) return null;

  return anime({
    targets: linksSelector,
    opacity: [0, 1],
    translateX: [20, 0],
    delay: anime.stagger(40, { start: 100 }),
    duration: 350,
    easing: 'easeOutQuad'
  });
}

/**
 * Timeline Stage Entrance Sequence for Process Page
 */
export function animateProcessStages() {
  if (isReducedMotion()) return null;

  return anime({
    targets: '.timeline-stage',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: anime.stagger(150),
    duration: 800,
    easing: 'easeOutCubic'
  });
}

/**
 * Button Micro-Interactions on hover / click
 */
export function setupButtonMicroInteractions() {
  if (isReducedMotion()) return;

  document.addEventListener('mousedown', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    anime({
      targets: btn,
      scale: 0.96,
      duration: 100,
      easing: 'easeInOutQuad'
    });
  });

  document.addEventListener('mouseup', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    anime({
      targets: btn,
      scale: 1,
      duration: 250,
      easing: 'easeOutElastic(1, .6)'
    });
  });
}
