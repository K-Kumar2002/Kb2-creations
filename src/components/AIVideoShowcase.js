// Interactive AI Generated Video Showcase & Cinema Player - A.K. Creation
import { aiVideosData } from '../data/aiVideos.js';

export class AIVideoShowcase {
  constructor(containerId = 'ai-video-showcase-mount') {
    this.containerId = containerId;
    this.activeFilter = 'all';
    this.activeVideo = null;
    this.isPlaying = false;
    this.currentTime = 0;
    this.duration = 42;
    this.animFrameId = null;
    this.audioCtx = null;
    this.isMuted = true;
    this.canvas = null;
    this.ctx = null;
  }

  render() {
    return `
      <section class="section ai-video-showcase-section" id="${this.containerId}" aria-label="AI Video & Cinema Showcase">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">NEURAL CINEMATOGRAPHY & COMMERCIALS</div>
            <h2 class="section-title">AI-GENERATED COMMERCIALS, REELS & CINEMATICS</h2>
            <p class="section-subtitle">
              Explore state-of-the-art AI video productions generated with Sora, Runway Gen-3 Alpha, Stable Video Diffusion, and Kling AI—mastered in 4K with custom sound design.
            </p>
          </div>

          <!-- Video Category Filter Tabs -->
          <div class="video-filter-bar">
            <button class="video-filter-btn active" data-filter="all">ALL PRODUCTIONS</button>
            <button class="video-filter-btn" data-filter="commercial">AI COMMERCIALS (16:9)</button>
            <button class="video-filter-btn" data-filter="reel">VIRAL REELS (9:16)</button>
            <button class="video-filter-btn" data-filter="movie">CINEMATIC FILMS (21:9)</button>
            <button class="video-filter-btn" data-filter="music">AI MUSIC VIDEOS</button>
          </div>

          <!-- Video Cards Grid -->
          <div class="ai-video-grid" id="ai-video-cards-grid">
            ${this.renderVideoCards()}
          </div>
        </div>

        <!-- Cinema Theater Modal / Player -->
        <div class="video-theater-modal" id="video-theater-modal" style="display: none;">
          <div class="theater-backdrop" id="theater-backdrop"></div>
          <div class="theater-container">
            <div class="theater-header">
              <div class="theater-badge-group">
                <span class="badge-tag badge-cyan" id="theater-category">AI COMMERCIAL</span>
                <span class="theater-res-badge" id="theater-res">4K UHD • 60 FPS</span>
              </div>
              <button class="theater-close-btn" id="theater-close" aria-label="Close Theater">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- Dynamic Viewport / Player -->
            <div class="theater-player-frame" id="theater-player-frame">
              <canvas id="theater-generative-canvas" class="theater-canvas"></canvas>
              
              <!-- Video HUD Telemetry Overlay -->
              <div class="video-hud-overlay">
                <div class="hud-top-left">
                  <span class="hud-rec-dot"></span>
                  <span>AI LIVE RENDER</span>
                  <span class="hud-engine-tag" id="theater-engine-label">RUNWAY GEN-3</span>
                </div>
                <div class="hud-top-right" id="theater-fps">60.0 FPS</div>
              </div>

              <!-- Big Center Play/Pause Indicator -->
              <button class="center-play-trigger" id="center-play-btn" aria-label="Toggle Play">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>

            <!-- Custom Playback Controls Bar -->
            <div class="theater-controls-bar">
              <div class="timeline-scrubber-track" id="video-scrubber-track">
                <div class="timeline-progress-fill" id="video-progress-fill"></div>
                <div class="timeline-scrubber-handle" id="video-scrubber-handle"></div>
              </div>

              <div class="controls-action-row">
                <div class="controls-left">
                  <button class="ctrl-btn" id="ctrl-play-toggle" aria-label="Play/Pause">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" id="ctrl-play-icon">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                  <button class="ctrl-btn" id="ctrl-mute-toggle" aria-label="Mute/Unmute">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="ctrl-sound-icon">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </svg>
                  </button>
                  <span class="ctrl-timestamp" id="ctrl-time-display">00:00 / 00:42</span>
                </div>

                <div class="controls-right">
                  <button class="ctrl-text-btn" id="ctrl-toggle-prompt">INSPECT AI PROMPT</button>
                  <a href="#/contact" class="btn btn-primary btn-sm" id="theater-order-btn">ORDER AI VIDEO</a>
                </div>
              </div>
            </div>

            <!-- Inspect AI Prompt Drawer -->
            <div class="theater-prompt-drawer" id="theater-prompt-drawer" style="display: none;">
              <div class="prompt-drawer-header">
                <h4>Generative Prompt Blueprint & Latent Parameters</h4>
              </div>
              <div class="prompt-content-box">
                <div class="prompt-field-label">MASTER SYNTHESIS PROMPT:</div>
                <p class="prompt-text" id="theater-prompt-text"></p>
                <div class="prompt-specs-grid">
                  <div class="prompt-spec-item">
                    <span>GENERATION ENGINE</span>
                    <strong id="theater-spec-engine">Runway Gen-3 Alpha</strong>
                  </div>
                  <div class="prompt-spec-item">
                    <span>ASPECT RATIO</span>
                    <strong id="theater-spec-aspect">16:9 Cinema</strong>
                  </div>
                  <div class="prompt-spec-item">
                    <span>SOUND DESIGN</span>
                    <strong id="theater-spec-sound">Spatial Hybrid 5.1</strong>
                  </div>
                  <div class="prompt-spec-item">
                    <span>SAMPLING STEPS</span>
                    <strong>50 Steps (DPM++ 2M Karras)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderVideoCards(filter = 'all') {
    const list = filter === 'all' 
      ? aiVideosData 
      : aiVideosData.filter(v => v.type === filter);

    return list.map(v => `
      <div class="card ai-video-card" data-video-id="${v.id}">
        <div class="video-card-poster-wrap">
          <img src="${v.poster}" alt="${v.title}" class="video-card-poster" loading="lazy" />
          <div class="video-card-overlay">
            <span class="video-duration-pill">${v.duration}</span>
            <span class="video-aspect-pill">${v.aspectRatio}</span>
            <button class="video-card-play-btn" data-play-id="${v.id}" aria-label="Watch ${v.title}">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
          <div class="video-card-glow-edge"></div>
        </div>

        <div class="video-card-body">
          <div class="video-card-meta">
            <span class="badge-tag badge-cyan">${v.category}</span>
            <span class="video-res-tag">${v.resolution.split(' ')[0]}</span>
          </div>

          <h3 class="video-card-title">${v.title}</h3>
          <p class="video-card-desc">${v.description}</p>

          <div class="video-engine-strip">
            <span class="engine-dot"></span>
            <span class="engine-name">${v.engine}</span>
          </div>

          <div class="video-card-footer">
            <button class="btn btn-secondary btn-sm play-video-trigger" data-play-id="${v.id}" style="width: 100%;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.4rem;">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              WATCH AI VIDEO SAMPLE
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  initListeners() {
    const section = document.getElementById(this.containerId);
    if (!section) return;

    // Filter Buttons
    const filterBtns = section.querySelectorAll('.video-filter-btn');
    const cardsGrid = section.querySelector('#ai-video-cards-grid');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        this.activeFilter = filter;
        if (cardsGrid) {
          cardsGrid.innerHTML = this.renderVideoCards(filter);
          this.attachCardPlayListeners();
        }
      });
    });

    this.attachCardPlayListeners();
    this.initTheaterControls();
  }

  attachCardPlayListeners() {
    const triggers = document.querySelectorAll(`[data-play-id]`);
    triggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const videoId = btn.getAttribute('data-play-id');
        this.openTheater(videoId);
      });
    });
  }

  openTheater(videoId) {
    const video = aiVideosData.find(v => v.id === videoId) || aiVideosData[0];
    this.activeVideo = video;
    
    // Parse duration string to seconds
    const parts = video.duration.split(':');
    this.duration = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    this.currentTime = 0;

    const modal = document.getElementById('video-theater-modal');
    if (!modal) return;

    // Update metadata in modal
    document.getElementById('theater-category').textContent = video.category.toUpperCase();
    document.getElementById('theater-res').textContent = `${video.resolution}`;
    document.getElementById('theater-engine-label').textContent = video.engine.split(' ')[0].toUpperCase();
    document.getElementById('theater-prompt-text').textContent = video.promptSummary;
    document.getElementById('theater-spec-engine').textContent = video.engine;
    document.getElementById('theater-spec-aspect').textContent = video.aspectRatio;
    document.getElementById('theater-spec-sound').textContent = video.soundDesign;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Setup Generative Canvas Simulation
    this.setupGenerativeCanvas();
    this.play();
  }

  closeTheater() {
    this.pause();
    const modal = document.getElementById('video-theater-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
  }

  setupGenerativeCanvas() {
    this.canvas = document.getElementById('theater-generative-canvas');
    if (!this.canvas) return;

    const container = document.getElementById('theater-player-frame');
    this.canvas.width = container.clientWidth || 960;
    this.canvas.height = container.clientHeight || 540;
    this.ctx = this.canvas.getContext('2d');

    // Preload poster image for backdrop render
    this.posterImg = new Image();
    this.posterImg.src = this.activeVideo.poster;
  }

  initTheaterControls() {
    const closeBtn = document.getElementById('theater-close');
    const backdrop = document.getElementById('theater-backdrop');
    const playBtn = document.getElementById('ctrl-play-toggle');
    const centerPlay = document.getElementById('center-play-btn');
    const scrubber = document.getElementById('video-scrubber-track');
    const promptToggle = document.getElementById('ctrl-toggle-prompt');
    const muteToggle = document.getElementById('ctrl-mute-toggle');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeTheater());
    if (backdrop) backdrop.addEventListener('click', () => this.closeTheater());

    if (playBtn) playBtn.addEventListener('click', () => this.togglePlay());
    if (centerPlay) centerPlay.addEventListener('click', () => this.togglePlay());

    if (promptToggle) {
      promptToggle.addEventListener('click', () => {
        const drawer = document.getElementById('theater-prompt-drawer');
        if (drawer) {
          const isHidden = drawer.style.display === 'none';
          drawer.style.display = isHidden ? 'block' : 'none';
          promptToggle.textContent = isHidden ? 'HIDE PROMPT SPECS' : 'INSPECT AI PROMPT';
        }
      });
    }

    if (muteToggle) {
      muteToggle.addEventListener('click', () => {
        this.isMuted = !this.isMuted;
        muteToggle.style.color = this.isMuted ? 'var(--text-muted)' : 'var(--accent-cyan)';
        if (!this.isMuted) this.playSyntheticAudioChord();
      });
    }

    if (scrubber) {
      scrubber.addEventListener('click', (e) => {
        const rect = scrubber.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.currentTime = percent * this.duration;
        this.updateScrubber();
      });
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    const centerBtn = document.getElementById('center-play-btn');
    const playIcon = document.getElementById('ctrl-play-icon');
    if (centerBtn) centerBtn.style.opacity = '0';
    if (playIcon) {
      playIcon.innerHTML = `
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      `;
    }

    if (!this.isMuted) this.playSyntheticAudioChord();
    this.lastTimestamp = performance.now();
    this.renderLoop();
  }

  pause() {
    this.isPlaying = false;
    const centerBtn = document.getElementById('center-play-btn');
    const playIcon = document.getElementById('ctrl-play-icon');
    if (centerBtn) centerBtn.style.opacity = '1';
    if (playIcon) {
      playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    }
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
  }

  renderLoop() {
    if (!this.isPlaying) return;

    const now = performance.now();
    const delta = (now - (this.lastTimestamp || now)) / 1000;
    this.lastTimestamp = now;

    this.currentTime += delta;
    if (this.currentTime >= this.duration) {
      this.currentTime = 0; // Loop playback
    }

    this.updateScrubber();
    this.drawGenerativeFrame(now);

    this.animFrameId = requestAnimationFrame(() => this.renderLoop());
  }

  updateScrubber() {
    const percent = (this.currentTime / this.duration) * 100;
    const fill = document.getElementById('video-progress-fill');
    const handle = document.getElementById('video-scrubber-handle');
    const timeDisplay = document.getElementById('ctrl-time-display');

    if (fill) fill.style.width = `${percent}%`;
    if (handle) handle.style.left = `${percent}%`;

    if (timeDisplay) {
      const curM = Math.floor(this.currentTime / 60);
      const curS = Math.floor(this.currentTime % 60);
      const durM = Math.floor(this.duration / 60);
      const durS = Math.floor(this.duration % 60);
      timeDisplay.textContent = `${String(curM).padStart(2, '0')}:${String(curS).padStart(2, '0')} / ${String(durM).padStart(2, '0')}:${String(durS).padStart(2, '0')}`;
    }
  }

  drawGenerativeFrame(timestamp) {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const time = this.currentTime;

    ctx.clearRect(0, 0, w, h);

    // 1. Draw base high-res poster with subtle generative camera zoom & drift
    if (this.posterImg && this.posterImg.complete) {
      const scale = 1.0 + Math.sin(time * 0.4) * 0.05;
      const ox = (w - w * scale) / 2 + Math.sin(time * 0.3) * 15;
      const oy = (h - h * scale) / 2 + Math.cos(time * 0.25) * 10;
      ctx.drawImage(this.posterImg, ox, oy, w * scale, h * scale);
    } else {
      ctx.fillStyle = '#070B14';
      ctx.fillRect(0, 0, w, h);
    }

    // 2. Cinematic Volumetric Lighting & Atmospheric Shading
    const vignette = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.7);
    vignette.addColorStop(0, 'rgba(7, 11, 20, 0.05)');
    vignette.addColorStop(1, 'rgba(7, 11, 20, 0.75)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);

    // 3. Generative AI Video Rendering depending on Video Type
    const type = this.activeVideo.type;

    if (type === 'commercial') {
      // Hypercar dynamic laser scanning lines & anamorphic flares
      const scanY = ((time * 180) % h);
      ctx.fillStyle = 'rgba(54, 207, 255, 0.12)';
      ctx.fillRect(0, scanY, w, 3);

      // Cyan flare streak
      ctx.strokeStyle = 'rgba(54, 207, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.45 + Math.sin(time * 2) * 20);
      ctx.lineTo(w, h * 0.45 + Math.sin(time * 2) * 20);
      ctx.stroke();

    } else if (type === 'reel') {
      // Glitch chromatic pulse and kinetic neon flashes
      if (Math.sin(time * 8) > 0.85) {
        ctx.fillStyle = 'rgba(255, 122, 48, 0.15)';
        ctx.fillRect(0, Math.random() * h, w, 20);
      }

    } else if (type === 'movie') {
      // Cinematic 21:9 Letterbox Matte & floating particle dust
      const barH = h * 0.1;
      ctx.fillStyle = '#070B14';
      ctx.fillRect(0, 0, w, barH);
      ctx.fillRect(0, h - barH, w, barH);

      // Atmospheric glowing cyan dragon particles
      ctx.fillStyle = 'rgba(54, 207, 255, 0.6)';
      for (let i = 0; i < 20; i++) {
        const px = (w * 0.2 + i * 35 + Math.sin(time + i) * 30) % w;
        const py = (h * 0.3 + Math.cos(time * 1.5 + i) * 40);
        ctx.fillRect(px, py, 2.5, 2.5);
      }

    } else if (type === 'music') {
      // Real-time audio spectrum frequency bars
      const barCount = 32;
      const barW = (w * 0.6) / barCount;
      const startX = w * 0.2;
      ctx.fillStyle = 'rgba(54, 207, 255, 0.5)';
      for (let i = 0; i < barCount; i++) {
        const barH = Math.abs(Math.sin(time * 4 + i * 0.5)) * 90 + 10;
        ctx.fillRect(startX + i * (barW + 2), h * 0.85 - barH, barW, barH);
      }
    }

    // 4. Subtle Cinematic 35mm Grain
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    for (let i = 0; i < 40; i++) {
      ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
  }

  playSyntheticAudioChord() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx) this.audioCtx = new AudioContext();
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, this.audioCtx.currentTime); // Deep A2 cinematic drone
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 3.0);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 3.0);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }
}
