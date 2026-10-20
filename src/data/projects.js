// Featured Projects & Portfolio Data - A.K. Creation
export const projectCategories = [
  "All",
  "Software & SaaS",
  "AI Solutions",
  "Websites",
  "Android Apps",
  "Digital Marketing",
  "AI Video & Creative Production",
  "Graphic Design & Printing"
];

export const projectsData = [
  {
    id: "nexus-core-saas",
    title: "NexusCore Enterprise Telemetry",
    category: "Software & SaaS",
    conceptType: "Concept Architecture & Lab Prototype",
    tagline: "Real-time distributed telemetry and workflow orchestration platform for hybrid cloud infrastructures.",
    featured: true,
    image: "/assets/projects/nexus-core-saas.jpg",
    thumbnailSvg: "telemetry",
    problemStatement: "Enterprise operations teams struggled with fragmented observability tools, leading to delayed anomaly detection and uncoordinated manual failover routines.",
    approach: "Engineered a low-latency event stream dashboard using lightweight WebSocket pipelines, micro-frontend modules, and customizable anomaly detection triggers with automated diagnostic runbooks.",
    servicesInvolved: ["Custom Software Development", "UI/UX Design", "Website Design and Development"],
    techHighlights: ["Node.js / Express Cluster", "Three.js 3D Server Mesh View", "Redis Pub/Sub Event Stream", "Secure Multi-Tenant Auth"],
    metrics: [
      { label: "Target Latency", value: "< 45ms" },
      { label: "Concurrent Nodes", value: "10,000+" },
      { label: "Telemetry Throughput", value: "1.2M eps" }
    ],
    architectureOverview: "A distributed microservice gateway aggregates JSON metrics, buffers via memory queues, and renders an interactive Three.js 3D cluster topology for instant spatial status identification."
  },
  {
    id: "synapse-ai-assistant",
    title: "Synapse RAG Enterprise Agent",
    category: "AI Solutions",
    conceptType: "Concept System & Production Blueprint",
    tagline: "Autonomous knowledge base exploration and document intelligence system with deterministic safety boundaries.",
    featured: true,
    image: "/assets/projects/synapse-ai-assistant.jpg",
    thumbnailSvg: "ai-brain",
    problemStatement: "Organizations drown in siloed PDF manuals, technical specs, and customer tickets without a fast, verifiable semantic retrieval system that prevents LLM hallucinations.",
    approach: "Designed a vector chunking and semantic re-ranking pipeline equipped with strict prompt shielding, citations with page-level bounding boxes, and an intuitive dark-mode interface.",
    servicesInvolved: ["AI Tools and Automation", "Custom Software Development", "UI/UX Design"],
    techHighlights: ["Vector Embeddings & Hybrid Search", "Strict Prompt Guardrails", "FastAPI Asynchronous Gateway", "Source Citation Inspector"],
    metrics: [
      { label: "Hallucination Rate", value: "< 0.4%" },
      { label: "Query Resolution", value: "1.8s avg" },
      { label: "Source Verification", value: "100% cited" }
    ],
    architectureOverview: "Incoming prompts are sanitised, embedded into high-dimensional space, queried against a hierarchical vector index, synthesized with grounded citations, and streamed token-by-token."
  },
  {
    id: "lumina-immersive-web",
    title: "Lumina Spatial Architecture Portal",
    category: "Websites",
    conceptType: "Concept Client Showcase",
    tagline: "Interactive 3D real estate and architectural visualization showcase with fluid transitions.",
    featured: true,
    image: "/assets/projects/lumina-immersive-web.jpg",
    thumbnailSvg: "spatial-web",
    problemStatement: "Traditional architectural brochures and flat 2D galleries fail to communicate spatial volume, dynamic natural lighting, and material tactility to prospective buyers.",
    approach: "Built a high-performance Three.js architectural explorer with responsive orbit controls, daylight time-of-day simulation, and Anime.js staggered specification panels.",
    servicesInvolved: ["Website Design and Development", "UI/UX Design", "Graphic Design and Branding"],
    techHighlights: ["Three.js PBR Shaders", "Anime.js Camera Paths", "Accessible Fallback Mode", "Sub-2s Web Vital Load"],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Interaction Rate", value: "84%" },
      { label: "Asset Compression", value: "72% saved" }
    ],
    architectureOverview: "Low-poly GLTF geometry with custom compressed texture atlases and dynamic ambient lighting, yielding 60 FPS performance across mobile and desktop browsers."
  },
  {
    id: "pulse-fit-android",
    title: "PulseFit Pro Mobile Companion",
    category: "Android Apps",
    conceptType: "Concept Mobile Application",
    tagline: "Biometric workout tracker with offline-first telemetry and reactive gesture navigation.",
    featured: true,
    image: "/assets/projects/pulse-fit-android.jpg",
    thumbnailSvg: "mobile-pulse",
    problemStatement: "Athletes needed a frictionless workout logger that operates reliably deep inside underground gym facilities without cellular connectivity.",
    approach: "Constructed an offline-first Android application with local SQLite sync, battery-optimized background pedometer sensor loops, and a high-contrast dark visual system.",
    servicesInvolved: ["Android App Development", "UI/UX Design"],
    techHighlights: ["Modern Android Architecture", "Offline Room Cache", "Encrypted Local Storage", "Custom Haptic Feedback"],
    metrics: [
      { label: "Battery Consumption", value: "< 1.5%/hr" },
      { label: "Cold Launch Time", value: "320ms" },
      { label: "Offline Sync Rate", value: "99.9%" }
    ],
    architectureOverview: "A local-first architecture queues workout data in local encrypted tables and synchronizes seamlessly with the cloud when network signals are restored."
  },
  {
    id: "hypergrowth-campaign",
    title: "Vortex B2B Growth Engine",
    category: "Digital Marketing",
    conceptType: "Concept Strategy & Telemetry Framework",
    tagline: "Multi-touch attribution and programmatic acquisition funnel for enterprise cloud services.",
    featured: false,
    image: "/assets/projects/hypergrowth-campaign.jpg",
    thumbnailSvg: "marketing-nodes",
    problemStatement: "High customer acquisition costs (CAC) caused by broad targeting and untracked multi-channel lead leakages across search and social touchpoints.",
    approach: "Implemented server-side Conversion API telemetry, dynamic value-proposition landing pages, and automated retargeting funnels tailored to specific buyer roles.",
    servicesInvolved: ["Digital Marketing and Lead Generation", "Website Design and Development", "Graphic Design and Branding"],
    techHighlights: ["Meta & Google Server-Side API", "Dynamic UTM Parameter Routing", "Multi-Variant Testing", "Consolidated ROI Dashboard"],
    metrics: [
      { label: "Conversion Lift", value: "+38% relative" },
      { label: "Attribution Match", value: "94%" },
      { label: "Cost Per Qualified Lead", value: "-24%" }
    ],
    architectureOverview: "First-party cookies and server-side tracking guarantee privacy-compliant attribution without reliance on third-party client cookies."
  },
  {
    id: "aether-ai-commercial",
    title: "Aether Dynamics AI Brand Film",
    category: "AI Video & Creative Production",
    conceptType: "Creative Production Showcase",
    tagline: "Futuristic 60-second cinematic commercial utilizing AI-assisted visual worldbuilding.",
    featured: true,
    image: "/assets/projects/aether-ai-commercial.jpg",
    thumbnailSvg: "film-reel",
    problemStatement: "A deep-tech robotics startup required a cinematic visual reveal for their autonomous drone platform within a 2-week launch timeline.",
    approach: "Employed a hybrid production pipeline: AI-assisted storyboard generation, neural video synthesis for atmospheric planetary environments, and studio color grading.",
    servicesInvolved: ["AI Video Advertisements", "AI Movie and Film Production", "AI Songs and Music Production"],
    techHighlights: ["Neural Diffusion Frame Synthesis", "Studio DaVinci Color Grade", "Spatial Audio Mastering", "Bespoke Acoustic Leitmotif"],
    metrics: [
      { label: "Production Turnaround", value: "10 Days" },
      { label: "Resolution Master", value: "4K DCI" },
      { label: "Soundtrack", value: "100% Original AI Motif" }
    ],
    architectureOverview: "Combines 24fps cinematic compositions, prompt-assisted background plates, and manual optical VFX integration for commercial broadcast delivery."
  },
  {
    id: "kinetic-reels-pack",
    title: "CyberPulse Social Content Matrix",
    category: "AI Video & Creative Production",
    conceptType: "Social Strategy Showcase",
    tagline: "High-retention 9:16 vertical video package with animated kinetic typography.",
    featured: false,
    image: "/assets/projects/kinetic-reels-pack.jpg",
    thumbnailSvg: "social-reels",
    problemStatement: "Social engagement dropped due to static graphics and lack of dynamic motion in Instagram and TikTok feeds.",
    approach: "Designed a 15-piece vertical video campaign integrating 3D product rotations, AI-enhanced lighting passes, and synchronized kinetic subtitles.",
    servicesInvolved: ["AI Reels and Short-Form Video", "Graphic Design and Branding"],
    techHighlights: ["9:16 Aspect Composition", "Kinetic Subtitle Engine", "Sound Effect Micro-Hits", "Batch Automated Renders"],
    metrics: [
      { label: "Average Watch Time", value: "88%" },
      { label: "Share Ratio", value: "4.2x baseline" },
      { label: "Asset Volume", value: "15 Deliverables" }
    ],
    architectureOverview: "Templatized rendering workflows produce consistent visual branding while allowing agile copy variations for rapid A/B testing."
  },
  {
    id: "chronos-brand-identity",
    title: "Chronos Robotics Identity & Print System",
    category: "Graphic Design & Printing",
    conceptType: "Brand Identity & Prepress Package",
    tagline: "Precision geometric brand system, holographic business cards, and exhibition brochures.",
    featured: false,
    image: "/assets/projects/chronos-brand-identity.jpg",
    thumbnailSvg: "brand-print",
    problemStatement: "An industrial hardware firm lacked unified physical and digital identity standards for their global investor summit.",
    approach: "Created a modern geometric logo, comprehensive 48-page brand manual, foiled metallic business cards, and CMYK preflighted conference brochures.",
    servicesInvolved: ["Graphic Design and Branding", "Printing and Advertising"],
    techHighlights: ["Vector Precision Grid (1:1.618)", "Spot UV & Foil Stamping Vectors", "CMYK 300+ DPI Preflight", "Pantone Coated Specs"],
    metrics: [
      { label: "Brand Manual", value: "48 Pages" },
      { label: "Print Accuracy", value: "100% Preflight" },
      { label: "Deliverables Kit", value: "24 Formats" }
    ],
    architectureOverview: "Vector mathematical curves ensure infinite scalability from a 16px favicon up to 6-meter exhibition convention booth banners."
  }
];
