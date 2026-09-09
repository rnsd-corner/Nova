export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
  highlights: string[];
}

export interface WorkflowStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string;
  badge: string;
  specs: { label: string; value: string }[];
}

export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  subtext: string;
  code: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Security' | 'Integration' | 'Billing';
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Product', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#ai-demo' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUSTED_COMPANIES = [
  { name: 'ACME LABS', symbol: '▲' },
  { name: 'VERTEX DYNAMICS', symbol: '◆' },
  { name: 'NORTHSTAR TECH', symbol: '✦' },
  { name: 'FRAME INTELLIGENCE', symbol: '■' },
  { name: 'LUMA SYSTEMS', symbol: '●' },
  { name: 'KINETIC NEURAL', symbol: '◈' },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'think',
    tag: '01 / SYNTHESIS',
    title: 'THINK',
    headline: 'Deep Semantic Understanding',
    description: 'Understand context and multi-repo information instantly. NOVA constructs high-dimensional vector graphs connecting code, specifications, issues, and conversations.',
    metric: '14.2M',
    metricLabel: 'Connected Nodes Analyzed',
    iconName: 'BrainCircuit',
    highlights: ['Multi-repo indexing', 'Zero-shot entity resolution', 'Real-time knowledge mapping'],
  },
  {
    id: 'create',
    tag: '02 / GENERATION',
    title: 'CREATE',
    headline: 'Generate & Refine at Velocity',
    description: 'Generate production-ready code, architectural blueprints, and interactive schemas at the speed of thought. Refine continuously with conversational precision.',
    metric: '140 tok/s',
    metricLabel: 'Generation Bandwidth',
    iconName: 'Sparkles',
    highlights: ['Multi-file scaffolding', 'Idiomatic type inference', 'Context-aware documentation'],
  },
  {
    id: 'execute',
    tag: '03 / RESOLUTION',
    title: 'EXECUTE',
    headline: 'Turn Intent Into Working Artifacts',
    description: 'Bridge intuition and deployment with zero friction. NOVA compiles, runs unit suites, debugs exceptions, and prepares production pull requests automatically.',
    metric: '0.04s',
    metricLabel: 'Execution Dispatch Time',
    iconName: 'Zap',
    highlights: ['Autonomous CI/CD triggers', 'Zero-config sandboxes', 'Automated regression testing'],
  },
  {
    id: 'automate',
    tag: '04 / PIPELINES',
    title: 'AUTOMATE',
    headline: 'Autonomous Routine Management',
    description: 'Let NOVA handle repetitive workflows in the background. From dependency bumps to automated vulnerability patches and daily standup synthesis.',
    metric: '78%',
    metricLabel: 'Manual Overhead Eliminated',
    iconName: 'Cpu',
    highlights: ['Background daemon jobs', 'Adaptive event monitors', 'Self-healing deployments'],
  },
  {
    id: 'collaborate',
    tag: '05 / MULTI-AGENT',
    title: 'COLLABORATE',
    headline: 'Intelligent Team Synchronization',
    description: 'Work with your team and specialized autonomous agents concurrently. Share context snapshots, review interactive diffs, and co-pilot solutions in real time.',
    metric: '< 15ms',
    metricLabel: 'Real-time Collab Sync',
    iconName: 'Users',
    highlights: ['Live multiplayer cursor', 'Branch-isolated memory pools', 'Audit-ready attribution'],
  },
  {
    id: 'focus',
    tag: '06 / CLARITY',
    title: 'FOCUS',
    headline: 'Distraction-Free Workspace',
    description: 'Keep everything organized in a single unified cockpit. Low-noise contextual surfaces filter alert fatigue and surface the exact decisions that require your attention.',
    metric: '99.4%',
    metricLabel: 'Signal-to-Noise Ratio',
    iconName: 'ShieldCheck',
    highlights: ['Intelligent inbox prioritization', 'Cognitive load balancing', 'Minimalist tactical HUD'],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 'STEP 01',
    number: '01',
    title: 'CAPTURE',
    description: 'Bring your ideas, existing codebases, research notes, and Jira/Linear tasks into NOVA with zero friction.',
    details: 'One-click integrations ingest Git repositories, Notion documents, Slack threads, and architectural schemas into an encrypted, isolated memory graph.',
    badge: 'INGESTION ENGINE',
    specs: [
      { label: 'SUPPORTED SOURCES', value: '45+ CONNECTORS' },
      { label: 'INGESTION SPEED', value: '1.2 GB / SEC' },
    ],
  },
  {
    step: 'STEP 02',
    number: '02',
    title: 'UNDERSTAND',
    description: 'NOVA analyzes relationships, token dependencies, and business constraints to construct deep contextual awareness.',
    details: 'Autonomous vector indexing and knowledge graph creation enable semantic search with cross-system reasoning across your entire engineering stack.',
    badge: 'SEMANTIC GRAPH',
    specs: [
      { label: 'CONTEXT RETENTION', value: '99.98%' },
      { label: 'LATENCY', value: '28 MS INDEX' },
    ],
  },
  {
    step: 'STEP 03',
    number: '03',
    title: 'CREATE',
    description: 'Generate high-level architectural plans, resilient codebases, comprehensive tests, and interactive prototypes.',
    details: 'Transform high-level natural language prompts into multi-file production branches with rigorous type-safety and verified dependencies.',
    badge: 'GENERATIVE KERNEL',
    specs: [
      { label: 'SYNTACTIC ACCURACY', value: '99.4%' },
      { label: 'STREAM SPEED', value: '140 TOKENS/S' },
    ],
  },
  {
    step: 'STEP 04',
    number: '04',
    title: 'EXECUTE',
    description: 'Turn ideas into completed, tested, and deployed work without context-switching between fragmented tools.',
    details: 'Automatic sandbox compilation, unit verification, pull request creation, and staging deployment with continuous observability metrics.',
    badge: 'AUTONOMOUS RUNTIME',
    specs: [
      { label: 'BUILD SUCCESS RATE', value: '98.7%' },
      { label: 'AVERAGE DISPATCH', value: '0.04 SEC' },
    ],
  },
];

export const STATS: StatItem[] = [
  {
    value: 10,
    suffix: 'x',
    label: 'FASTER WORKFLOWS',
    description: 'From initial ideation to fully tested, production-ready code deployment.',
    subtext: 'BENCHMARKED AGAINST CONVENTIONAL DEVELOPMENT SPRINTS',
    code: 'METRIC // VELOCITY',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'AI ASSISTANCE',
    description: 'Autonomous background intelligence triaging, testing, and optimizing around the clock.',
    subtext: 'ALWAYS-ON HEAVY REASONING AND WORKFLOW DAEMONS',
    code: 'METRIC // UPTIME',
  },
  {
    value: 50,
    suffix: 'K+',
    label: 'TASKS AUTOMATED',
    description: 'Repetitive boilerplate, unit testing, and dependency audits executed without human delay.',
    subtext: 'RESOLVED ACROSS EARLY ENTERPRISE PARTNERS',
    code: 'METRIC // EXECUTION',
  },
  {
    value: 99,
    suffix: '%',
    label: 'FOCUS EFFICIENCY',
    description: 'Reduction in cognitive fragmentation and disruptive context-switching between tools.',
    subtext: 'SINGLE UNIFIED COCKPIT FOR REASONING AND DELIVERY',
    code: 'METRIC // COGNITION',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'FREE',
    tier: 'TIER 01',
    description: 'For solo creators and researchers exploring NOVA’s intelligent workspace capabilities.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Single user workspace',
      '500,000 monthly reasoning tokens',
      'Up to 3 active repository graphs',
      'Interactive AI prompt cockpit',
      'Standard model generation latency',
      'Community knowledge base access',
    ],
    cta: 'Start Free',
  },
  {
    id: 'pro',
    name: 'PRO',
    tier: 'TIER 02',
    badge: 'MOST POPULAR',
    popular: true,
    description: 'For serious creators, architects, and senior engineers demanding unconstrained velocity.',
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      'Unlimited reasoning workspace',
      '10,000,000 monthly high-speed tokens',
      'Unlimited repository graph indexing',
      'Sub-50ms priority execution queue',
      'Autonomous background daemons (5 tasks)',
      'Multi-file code generation & execution',
      'Priority 24/7 technical support',
      'Custom workspace persona tuning',
    ],
    cta: 'Start Pro Trial',
  },
  {
    id: 'team',
    name: 'TEAM',
    tier: 'TIER 03',
    description: 'For high-performing teams and engineering squads building connected systems together.',
    monthlyPrice: 79,
    annualPrice: 64,
    features: [
      'Everything in Pro included',
      'Multiplayer real-time collaboration',
      'Shared organizational knowledge graph',
      'SOC2 Type II compliance & audit logs',
      'Dedicated private tenant inference',
      'Unlimited autonomous background agents',
      'Custom CI/CD runner integrations',
      'Dedicated technical account manager',
    ],
    cta: 'Deploy Team',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is NOVA?',
    answer: 'NOVA is an advanced AI productivity workspace engineered to help creators, engineers, and thinkers work at the speed of thought. Unlike standard conversational bots that operate in isolation, NOVA unifies your codebase, project memory, task tracking, and generative execution into a single, cohesive cockpit.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'How does NOVA work?',
    answer: 'NOVA ingests your workspace context (code, specs, notes, tasks) into a secure, multi-dimensional semantic graph. When you provide an objective, NOVA decomposes it into actionable steps, synthesizes code and assets, verifies correctness against your test suite in an isolated sandbox, and prepares ready-to-merge artifacts.',
    category: 'General',
  },
  {
    id: 'faq-3',
    question: 'Can I use NOVA for team projects?',
    answer: 'Yes! The Team plan includes real-time multiplayer co-authoring, synchronized context memory across team members, granular permission boundaries, and audit logging. Team members can branch shared memory graphs or collaborate simultaneously with autonomous agents.',
    category: 'Integration',
  },
  {
    id: 'faq-4',
    question: 'Does NOVA require an API key?',
    answer: 'No external API keys are required to use NOVA. All computing, reasoning models, vector retrieval indices, and sandboxed runtimes are fully provided and optimized directly within the platform. If you wish to connect custom private self-hosted models, enterprise endpoints are available.',
    category: 'Integration',
  },
  {
    id: 'faq-5',
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time with a single click from your workspace settings. If you cancel, your subscription will remain active until the end of your billing cycle with zero penalties or hidden fees.',
    category: 'Billing',
  },
  {
    id: 'faq-6',
    question: 'How does NOVA handle security and proprietary code?',
    answer: 'Security is fundamental to NOVA. Your code and internal documents are never used to train global public models. All data is encrypted in transit (TLS 1.3) and at rest (AES-256 GCM) with customer-managed encryption key options available for enterprise customers.',
    category: 'Security',
  },
];

export const DEMO_PRESETS = [
  {
    label: 'Summarize tasks',
    prompt: 'Summarize my project tasks and highlight blockers for the current sprint.',
    category: 'Project Management',
    simulatedResponse: {
      status: 'SUCCESS',
      time: '184ms',
      summary: 'Analyzed 18 issues across Linear and GitHub repository. 3 high-priority items identified.',
      tasks: [
        { title: 'Vector index compaction optimization', status: 'In Progress', priority: 'High', owner: 'Alex M.' },
        { title: 'SiC motor controller firmware unit tests', status: 'Ready for Review', priority: 'Critical', owner: 'Sarah K.' },
        { title: 'OLED telemetry display framerate drop (ticket #402)', status: 'Blocked by CAN bus driver', priority: 'High', owner: 'Dev Team' },
      ],
      recommendation: 'Recommend reallocating 2 engineers to ticket #402 to prevent shipping blocker on release cycle.',
    },
  },
  {
    label: 'Rust async actor',
    prompt: 'Create a high-concurrency Rust actor for telemetry packet ingestion at 100k events/sec.',
    category: 'Engineering',
    simulatedResponse: {
      status: 'COMPILED',
      time: '342ms',
      summary: 'Generated lock-free async telemetry receiver using Tokio mpsc and crossbeam channels.',
      code: `use tokio::sync::mpsc;
use std::sync::atomic::{AtomicU64, Ordering};

pub struct TelemetryActor {
    rx: mpsc::Receiver<TelemetryPacket>,
    total_processed: AtomicU64,
}

impl TelemetryActor {
    pub async fn run(mut self) {
        while let Some(packet) = self.rx.recv().await {
            self.total_processed.fetch_add(1, Ordering::Relaxed);
            tokio::spawn(async move {
                process_high_density_packet(packet).await;
            });
        }
    }
}`,
      recommendation: 'Zero memory allocations on steady-state ingestion loop. Throughput benchmarked at 148,000 packets/sec.',
    },
  },
  {
    label: 'CI/CD pipeline',
    prompt: 'Design an automated GitHub Actions pipeline with zero-friction preview environments.',
    category: 'DevOps',
    simulatedResponse: {
      status: 'VERIFIED',
      time: '210ms',
      summary: 'Configured ephemeral preview deployments on branch push with automatic teardown on merge.',
      code: `name: Ephemeral Preview Deployment
on: [pull_request]
jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build & Deploy Sandbox
        run: nova preview --branch=\${{ github.head_ref }}
      - name: Post Comment With Preview URL
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              ...context.repo,
              issue_number: context.issue.number,
              body: '🚀 NOVA Ephemeral Preview online: https://preview-\${{ github.head_ref }}.nova.app'
            })`,
      recommendation: 'Integrated branch preview provisioned in 3.4 seconds with automated security scan.',
    },
  },
  {
    label: 'Product launch copy',
    prompt: 'Draft an evocative launch announcement for NOVA 3.0 focusing on "Work at the speed of thought."',
    category: 'Marketing',
    simulatedResponse: {
      status: 'SYNTHESIZED',
      time: '198ms',
      summary: 'Generated narrative announcement targeting technical founders and high-velocity engineering leaders.',
      quote: '“Today, software creation transitions from friction to flow. With NOVA 3.0, the distance between intuition and execution collapses to zero.”',
      bullets: [
        'Sub-millisecond semantic graph querying across multi-million-token workspaces',
        'Autonomous agent orchestration delivering verified, tested pull requests',
        'A kinetic, dark luxury interface calibrated for absolute cognitive focus',
      ],
      recommendation: 'Optimized for high-impact social and Hacker News release with strong conversion hooks.',
    },
  },
];
