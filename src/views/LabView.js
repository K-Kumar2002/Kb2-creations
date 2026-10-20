// AI Innovation Lab View - 4 Interactive Demonstrations
import { initLabNodeScene } from '../three/labScene.js';
import { initDeviceScene } from '../three/deviceScene.js';
import anime from 'animejs';

export class LabView {
  constructor() {
    this.currentTab = 'demo-a';
    this.labNodeInstance = null;
    this.deviceInstance = null;
    this.activeWorkflowIndex = 0;
    this.activeArchLayer = 0;
    this.activePipelineStage = 0;
    this.activeDeviceMode = 'desktop';
  }

  async render() {
    return `
      <section class="section service-detail-hero" aria-label="AI Innovation Lab">
        <div class="tech-grid-bg"></div>
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow" style="color: var(--accent-violet); border-color: rgba(128, 107, 255, 0.3); background: rgba(128, 107, 255, 0.1);">
              RESEARCH & EXPERIMENTAL PROTOTYPING
            </div>
            <h1 class="section-title">EXPLORE THE SYSTEMS BEHIND THE IDEAS.</h1>
            <p class="section-subtitle">
              Discover interactive demonstrations of software architecture, intelligent workflows, connected interfaces, and creative production.
            </p>
          </div>

          <!-- Lab Demo Navigation Tabs -->
          <div class="lab-tabs-nav" role="tablist" aria-label="Lab Demos">
            <button class="lab-tab-btn ${this.currentTab === 'demo-a' ? 'active' : ''}" data-tab="demo-a" role="tab">
              01 // AI WORKFLOW EXPLORER
            </button>
            <button class="lab-tab-btn ${this.currentTab === 'demo-b' ? 'active' : ''}" data-tab="demo-b" role="tab">
              02 // SOFTWARE ARCHITECTURE
            </button>
            <button class="lab-tab-btn ${this.currentTab === 'demo-c' ? 'active' : ''}" data-tab="demo-c" role="tab">
              03 // RESPONSIVE EXPERIENCE LAB
            </button>
            <button class="lab-tab-btn ${this.currentTab === 'demo-d' ? 'active' : ''}" data-tab="demo-d" role="tab">
              04 // CREATIVE PIPELINE
            </button>
          </div>

          <!-- Demo Container -->
          <div class="lab-demo-container" id="lab-demo-content">
            <!-- Dynamic Content rendered by tab handlers -->
          </div>
        </div>
      </section>
    `;
  }

  afterRender() {
    this.setupTabNavigation();
    this.renderCurrentTab();
  }

  setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.lab-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentTab = btn.getAttribute('data-tab');
        this.cleanupScenes();
        this.renderCurrentTab();
      });
    });
  }

  cleanupScenes() {
    if (this.labNodeInstance && typeof this.labNodeInstance.destroy === 'function') {
      this.labNodeInstance.destroy();
      this.labNodeInstance = null;
    }
    if (this.deviceInstance && typeof this.deviceInstance.destroy === 'function') {
      this.deviceInstance.destroy();
      this.deviceInstance = null;
    }
  }

  renderCurrentTab() {
    const container = document.getElementById('lab-demo-content');
    if (!container) return;

    if (this.currentTab === 'demo-a') {
      this.renderDemoA(container);
    } else if (this.currentTab === 'demo-b') {
      this.renderDemoB(container);
    } else if (this.currentTab === 'demo-c') {
      this.renderDemoC(container);
    } else if (this.currentTab === 'demo-d') {
      this.renderDemoD(container);
    }
  }

  // --------------------------------------------------------------------------
  // DEMO A: AI Workflow Explorer
  // --------------------------------------------------------------------------
  renderDemoA(container) {
    const workflowStages = [
      {
        id: 0,
        name: "INPUT",
        title: "User Prompt & Telemetry Ingestion",
        badge: "STAGE 01",
        description: "Prompts are received through authenticated TLS endpoints, sanitized against prompt-injection attacks, and tokenized with subword analyzers.",
        specs: ["Tokenization: BPE", "Guardrails: Active", "Latency: ~12ms"]
      },
      {
        id: 1,
        name: "PROCESSING",
        title: "Vector Embedding & Context Retrieval",
        badge: "STAGE 02",
        description: "The sanitized prompt is mapped to a 1536-dimensional semantic space and queried against our vector database using cosine-similarity to retrieve verified facts.",
        specs: ["Vector Index: HNSW", "Top-K: 5 documents", "Recall: 99.2%"]
      },
      {
        id: 2,
        name: "AI WORKFLOW",
        title: "Autonomous Agent Reasoning & Synthesis",
        badge: "STAGE 03",
        description: "Retrieved context chunks and system guidelines are fed into the foundational LLM with strict grounding constraints to synthesize accurate responses without hallucination.",
        specs: ["Model: Neural Orchestrator", "Temperature: 0.15", "Grounding: Enforced"]
      },
      {
        id: 3,
        name: "OUTPUT",
        title: "Verified Delivery & Streaming Response",
        badge: "STAGE 04",
        description: "Output tokens are streamed via Server-Sent Events (SSE) directly to client applications with page citations and safety verification signatures.",
        specs: ["Format: SSE Stream", "Format Validation: Schema checked", "Safety: 100%"]
      }
    ];

    container.innerHTML = `
      <div class="lab-disclaimer">
        <span>●</span> SIMULATED DEMONSTRATION // AI AGENT WORKFLOW BLUEPRINT
      </div>

      <div style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">AI Workflow Explorer</h2>
        <p style="color: var(--text-secondary);">
          Inspect how real-time prompts travel through our secure AI reasoning and retrieval-augmented generation (RAG) architecture.
        </p>
      </div>

      <!-- 3D Spatial Pipeline Canvas -->
      <div style="background: #0B1220; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 2rem; overflow: hidden; position: relative;">
        <div id="lab-node-canvas" style="width: 100%; height: 300px;"></div>
        <div style="position: absolute; bottom: 12px; left: 16px; font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-cyan);">
          SPATIAL DATAFLOW TOPOLOGY // THREE.JS REAL-TIME RENDERER
        </div>
      </div>

      <!-- Interactive Stage Selectors -->
      <div class="workflow-stepper">
        ${workflowStages.map((st, idx) => `
          <div class="workflow-step-card ${idx === this.activeWorkflowIndex ? 'active' : ''}" data-step="${idx}">
            <div class="workflow-step-badge">${st.badge}</div>
            <h4 class="workflow-step-title">${st.name}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">
              ${st.title}
            </p>
          </div>
        `).join('')}
      </div>

      <!-- Dynamic Stage Explanation Box -->
      <div class="workflow-details-box" id="workflow-details-box">
        <!-- Rendered by updateWorkflowDetails -->
      </div>
    `;

    // Mount 3D Scene for Demo A
    const canvasContainer = document.getElementById('lab-node-canvas');
    if (canvasContainer) {
      this.labNodeInstance = initLabNodeScene(canvasContainer, this.activeWorkflowIndex);
    }

    const updateDetails = (idx) => {
      this.activeWorkflowIndex = idx;
      const st = workflowStages[idx];
      const box = document.getElementById('workflow-details-box');
      if (box) {
        box.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge-tag badge-cyan">${st.badge}</span>
              <h3 style="font-size: 1.35rem; margin-top: 0.4rem;">${st.title}</h3>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              ${st.specs.map(sp => `
                <span class="badge-tag" style="background: rgba(255, 122, 48, 0.1); color: var(--accent-orange); border-color: rgba(255, 122, 48, 0.3);">
                  ${sp}
                </span>
              `).join('')}
            </div>
          </div>
          <p style="font-size: 1.02rem; color: var(--text-secondary); line-height: 1.7;">
            ${st.description}
          </p>
        `;
        // Animate details box reveal with Anime.js
        anime({
          targets: box,
          opacity: [0.6, 1],
          translateY: [8, 0],
          duration: 350,
          easing: 'easeOutQuad'
        });
      }

      if (this.labNodeInstance && typeof this.labNodeInstance.setActive === 'function') {
        this.labNodeInstance.setActive(idx);
      }
    };

    updateDetails(this.activeWorkflowIndex);

    // Click handler for step cards
    const stepCards = container.querySelectorAll('.workflow-step-card');
    stepCards.forEach(card => {
      card.addEventListener('click', () => {
        stepCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const stepIdx = parseInt(card.getAttribute('data-step'), 10);
        updateDetails(stepIdx);
      });
    });
  }

  // --------------------------------------------------------------------------
  // DEMO B: Software Architecture Explorer
  // --------------------------------------------------------------------------
  renderDemoB(container) {
    const archLayers = [
      {
        name: "User Interface Layer",
        badge: "TIER 01",
        color: "var(--accent-orange)",
        desc: "Responsive web client, mobile apps, and design tokens rendered at 60 FPS with micro-interactions and WCAG accessibility standards.",
        components: ["Next.js / Vite SPA", "Three.js 3D Viewport", "Anime.js Motion Engine", "CSS Token System"]
      },
      {
        name: "Application Services",
        badge: "TIER 02",
        color: "var(--accent-cyan)",
        desc: "State management, workflow orchestrators, session handlers, and local caching engines enforcing business logic and client-side encryption.",
        components: ["Role-Based Access Control", "State Hydration", "Local DB Sync", "Real-Time Telemetry"]
      },
      {
        name: "API & Microservice Gateway",
        badge: "TIER 03",
        color: "var(--accent-violet)",
        desc: "Distributed reverse proxy handling authentication, rate-limiting, gRPC/REST protocol translation, and high-throughput routing.",
        components: ["FastAPI / Node Cluster", "JWT / OAuth2 Validation", "Rate Limiter", "WebSocket Hub"]
      },
      {
        name: "Data & Vector Layer",
        badge: "TIER 04",
        color: "#38bdf8",
        desc: "ACID-compliant relational storage combined with high-dimensional vector embeddings for low-latency semantic search queries.",
        components: ["PostgreSQL Cluster", "Qdrant / Milvus Vectors", "Redis Memory Cache", "Encrypted Volume Storage"]
      },
      {
        name: "External Integrations",
        badge: "TIER 05",
        color: "#4ade80",
        desc: "Secure connectors for cloud GPUs, foundation model APIs, payment processors, SMS/email relays, and third-party enterprise CRMs.",
        components: ["Cloud AI Accelerators", "Stripe / Payment Webhooks", "Push Relays (FCM)", "CRM Webhooks"]
      }
    ];

    container.innerHTML = `
      <div class="lab-disclaimer">
        <span>●</span> SYSTEM ARCHITECTURE SPECIFICATION // FULL-STACK FOUNDATION
      </div>

      <div style="margin-bottom: 2.5rem; text-align: center;">
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Software Architecture Explorer</h2>
        <p style="color: var(--text-secondary); max-width: 650px; margin-inline: auto;">
          Click through each architectural tier to understand how our enterprise applications isolate concerns and maintain 99.9% uptime.
        </p>
      </div>

      <div class="arch-layers-stack">
        ${archLayers.map((layer, idx) => `
          <div class="arch-layer-item ${idx === this.activeArchLayer ? 'active' : ''}" data-layer="${idx}">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <span class="badge-tag" style="border-color: ${layer.color}; color: ${layer.color};">
                ${layer.badge}
              </span>
              <h4 style="font-size: 1.15rem; margin: 0; color: #F5F7FC;">${layer.name}</h4>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">&rarr; INSPECT TIER</span>
          </div>
        `).join('')}
      </div>

      <div class="workflow-details-box" id="arch-details-box" style="margin-top: 2rem; max-width: 800px; margin-inline: auto;">
        <!-- Filled by updateArchDetails -->
      </div>
    `;

    const updateArchDetails = (idx) => {
      this.activeArchLayer = idx;
      const l = archLayers[idx];
      const box = document.getElementById('arch-details-box');
      if (box) {
        box.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="font-size: 1.3rem; color: ${l.color};">${l.name}</h3>
            <span class="badge-tag badge-cyan">${l.badge}</span>
          </div>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
            ${l.desc}
          </p>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            CORE COMPONENTS & PROTOCOLS
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            ${l.components.map(c => `
              <span class="badge-tag" style="background: rgba(255,255,255,0.06); color: #F5F7FC;">
                ${c}
              </span>
            `).join('')}
          </div>
        `;
        anime({
          targets: box,
          opacity: [0.5, 1],
          translateY: [6, 0],
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    };

    updateArchDetails(this.activeArchLayer);

    const layerItems = container.querySelectorAll('.arch-layer-item');
    layerItems.forEach(item => {
      item.addEventListener('click', () => {
        layerItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const lIdx = parseInt(item.getAttribute('data-layer'), 10);
        updateArchDetails(lIdx);
      });
    });
  }

  // --------------------------------------------------------------------------
  // DEMO C: Responsive Experience Lab
  // --------------------------------------------------------------------------
  renderDemoC(container) {
    container.innerHTML = `
      <div class="lab-disclaimer">
        <span>●</span> CROSS-PLATFORM VIEWPORT SIMULATION
      </div>

      <div style="margin-bottom: 2rem; text-align: center;">
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Responsive Experience Lab</h2>
        <p style="color: var(--text-secondary); max-width: 650px; margin-inline: auto;">
          Experience how our layouts gracefully adapt between ultra-wide desktop monitors, tablets, and Android smartphones.
        </p>
      </div>

      <!-- Controls -->
      <div class="responsive-lab-controls">
        <button class="btn btn-secondary btn-sm ${this.activeDeviceMode === 'desktop' ? 'active' : ''}" id="btn-device-desktop">
          DESKTOP (1920px)
        </button>
        <button class="btn btn-secondary btn-sm ${this.activeDeviceMode === 'tablet' ? 'active' : ''}" id="btn-device-tablet">
          TABLET (768px)
        </button>
        <button class="btn btn-secondary btn-sm ${this.activeDeviceMode === 'mobile' ? 'active' : ''}" id="btn-device-mobile">
          ANDROID (390px)
        </button>
      </div>

      <!-- Live Simulated Frame -->
      <div class="responsive-preview-frame preview-${this.activeDeviceMode}" id="responsive-preview-frame">
        <div style="background: #111B2D; padding: 0.6rem 1rem; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; gap: 6px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56; display: inline-block;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e; display: inline-block;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f; display: inline-block;"></span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
            https://kb2creations.dev/sample-app
          </span>
          <span class="badge-tag badge-cyan" style="font-size: 0.65rem;">60 FPS</span>
        </div>

        <div style="padding: 1.5rem; overflow-y: auto; height: calc(100% - 38px);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <div>
              <span class="eyebrow" style="font-size: 0.68rem; margin-bottom: 0.4rem;">LIVE TELEMETRY NODE</span>
              <h3 style="font-size: 1.25rem;">Enterprise Dashboard</h3>
            </div>
            <a href="#/contact" class="btn btn-primary btn-sm">ACTION</a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(17, 27, 45, 0.7); padding: 1rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted);">CPU Utilization</div>
              <div style="font-size: 1.4rem; font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 700;">14.2%</div>
            </div>
            <div style="background: rgba(17, 27, 45, 0.7); padding: 1rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Inference Latency</div>
              <div style="font-size: 1.4rem; font-family: var(--font-mono); color: var(--accent-orange); font-weight: 700;">28ms</div>
            </div>
          </div>

          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            Components reflow fluidly using CSS Grid and Flexbox with responsive typography. Zero horizontal overflow, touch-compatible tap targets, and full screen readability across all form factors.
          </p>
        </div>
      </div>
    `;

    const frame = document.getElementById('responsive-preview-frame');
    const setDevice = (mode) => {
      this.activeDeviceMode = mode;
      frame.className = `responsive-preview-frame preview-${mode}`;
      ['desktop', 'tablet', 'mobile'].forEach(m => {
        const b = document.getElementById(`btn-device-${m}`);
        if (m === mode) {
          b?.classList.add('btn-primary');
          b?.classList.remove('btn-secondary');
        } else {
          b?.classList.remove('btn-primary');
          b?.classList.add('btn-secondary');
        }
      });
      anime({
        targets: frame,
        scale: [0.98, 1],
        opacity: [0.8, 1],
        duration: 350,
        easing: 'easeOutQuad'
      });
    };

    document.getElementById('btn-device-desktop')?.addEventListener('click', () => setDevice('desktop'));
    document.getElementById('btn-device-tablet')?.addEventListener('click', () => setDevice('tablet'));
    document.getElementById('btn-device-mobile')?.addEventListener('click', () => setDevice('mobile'));
    setDevice('desktop');
  }

  // --------------------------------------------------------------------------
  // DEMO D: Creative Production Pipeline
  // --------------------------------------------------------------------------
  renderDemoD(container) {
    const pipelineStages = [
      {
        name: "IDEA",
        step: "01",
        color: "var(--accent-cyan)",
        title: "Concept Briefing & Worldbuilding",
        desc: "Synthesize client objectives into a core creative thesis, defining emotional tone, visual atmosphere, and audience resonance."
      },
      {
        name: "SCRIPT",
        step: "02",
        color: "var(--accent-violet)",
        title: "Narrative & Screenplay Architecture",
        desc: "Script writing with scene-by-scene beat mapping, pacing calibration, dialogue timing, and prompt engineering blueprints."
      },
      {
        name: "VISUALS",
        step: "03",
        color: "var(--accent-orange)",
        title: "Neural Diffusion & 3D Synthesis",
        desc: "Generating consistent keyframes, digital sets, dynamic camera movements, and cinematic lighting passes."
      },
      {
        name: "EDITING",
        step: "04",
        color: "#38bdf8",
        title: "Assembly, Color Grading & Sound",
        desc: "Timeline assembly at 24fps with DaVinci color grading, spatial Foley audio, harmonic AI musical scoring, and title typography."
      },
      {
        name: "DELIVERY",
        step: "05",
        color: "#4ade80",
        title: "Multi-Format Master Encoding",
        desc: "High-bitrate ProRes/H.265 exports in 16:9 widescreen, 9:16 vertical reels, and social media formats with rights clearance."
      }
    ];

    container.innerHTML = `
      <div class="lab-disclaimer">
        <span>●</span> CREATIVE INTELLIGENCE WORKFLOW PIPELINE
      </div>

      <div style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Creative Production Pipeline</h2>
        <p style="color: var(--text-secondary);">
          IDEA &rarr; SCRIPT &rarr; VISUALS &rarr; EDITING &rarr; DELIVERY: Inspect how human storytelling pairs with AI acceleration.
        </p>
      </div>

      <!-- Pipeline Track -->
      <div class="creative-pipeline-track">
        ${pipelineStages.map((st, idx) => `
          <div class="pipeline-stage-box ${idx === this.activePipelineStage ? 'active' : ''}" data-pstep="${idx}">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: ${st.color}; margin-bottom: 0.4rem;">
              STAGE ${st.step}
            </div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.3rem;">${st.name}</h4>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${st.title.split('&')[0]}</div>
          </div>
        `).join('')}
      </div>

      <!-- Dynamic Stage Box -->
      <div class="workflow-details-box" id="pipeline-details-box" style="margin-top: 2rem;">
        <!-- Rendered by updatePipelineDetails -->
      </div>
    `;

    const updatePipeline = (idx) => {
      this.activePipelineStage = idx;
      const st = pipelineStages[idx];
      const box = document.getElementById('pipeline-details-box');
      if (box) {
        box.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span class="badge-tag" style="border-color: ${st.color}; color: ${st.color};">STAGE ${st.step} // ${st.name}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">PIPELINE PHASE</span>
          </div>
          <h3 style="font-size: 1.4rem; margin-bottom: 0.8rem;">${st.title}</h3>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7;">
            ${st.desc}
          </p>
        `;
        anime({
          targets: box,
          opacity: [0.6, 1],
          translateY: [8, 0],
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    };

    updatePipeline(this.activePipelineStage);

    const pBoxes = container.querySelectorAll('.pipeline-stage-box');
    pBoxes.forEach(b => {
      b.addEventListener('click', () => {
        pBoxes.forEach(item => item.classList.remove('active'));
        b.classList.add('active');
        const pIdx = parseInt(b.getAttribute('data-pstep'), 10);
        updatePipeline(pIdx);
      });
    });
  }

  destroy() {
    this.cleanupScenes();
  }
}
