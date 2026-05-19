// All on-page copy lives here. Components import from this file.
// Voice: peer-to-peer, plain-spoken, commercially literate, Australian English.
// Banned: "game-changer", "level up", "crush it", "10x", "unlock", "leverage" (v),
// "synergy", "side hustle", "content creator", "influencer", "growth hack".

export type CTA = { label: string; href: string };

export const site = {
  name: "The Commercial Athlete Coach",
  shortName: "TCA Coach",
  url: "https://coach.thecommercialathlete.com.au",
  parent: { name: "The Commercial Athlete", url: "https://thecommercialathlete.com.au" },
  sister: { name: "Agency X Talent", url: "https://agencyx.com.au" },
  address: {
    line1: "Waterfront Place, Level 34",
    line2: "1 Eagle Street",
    city: "Brisbane",
    postcode: "4000",
    country: "Australia"
  },
  contact: {
    athletes: "hello@thecommercialathlete.com.au",
    organisations: "partnerships@thecommercialathlete.com.au",
    press: "press@thecommercialathlete.com.au"
  }
} as const;

export const navigation = {
  primary: [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ] as CTA[],
  login: { label: "Log in", href: "/login" },
  cta: { label: "Sign up", href: "/signup" }
};

export const footer = {
  acknowledgement:
    "The Commercial Athlete acknowledges the Turrbal and Jagera peoples as the Traditional Owners of the land on which we work. We pay our respects to Elders past, present and emerging.",
  brand: {
    line: "A sub-brand of The Commercial Athlete.",
    sister: "Sister brand: Agency X Talent."
  },
  columns: {
    explore: {
      title: "Explore",
      links: [
        { label: "How it works", href: "/how-it-works" },
        { label: "Pricing", href: "/pricing" },
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" }
      ] as CTA[]
    },
    contact: {
      title: "Contact",
      links: [
        { label: "Athletes — sign up", href: "/signup" },
        { label: "Sports organisations", href: "/contact#organisations" },
        { label: "Press & media", href: "/contact#press" }
      ] as CTA[]
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" }
      ] as CTA[]
    }
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/thecommercialathlete" },
    { label: "LinkedIn", href: "https://linkedin.com/company/thecommercialathlete" }
  ] as CTA[]
};

// The 5 specialists — used by the home showcase grid and the How It Works page.
export type AgentIcon =
  | "compass"
  | "chartLineUp"
  | "megaphone"
  | "handshake"
  | "shield";

export type Agent = {
  number: string;
  slug: string;
  name: string;
  /** Pathway label from the platform blueprint — e.g. "Foundation Pathway". */
  pathway: string;
  /** Doc outcome verb — "Profile backbone", "Engine of income growth", etc. */
  tagline: string;
  role: string;
  description: string;
  produces: string[];
  /** Quick-start prompt chips shown above the chat composer when empty.
      `{sport}` / `{level}` / `{goal}` placeholders are substituted from the
      user's Commercial Profile at runtime. */
  quickStarts: { label: string; template: string }[];
  icon: AgentIcon;
  image: string;
  imageAlt: string;
};

export const agents: Agent[] = [
  {
    number: "02",
    slug: "brand-architect",
    name: "Brand Architect",
    pathway: "Foundation Pathway",
    tagline: "Profile backbone.",
    role: "Define the commercial brand sponsors will pay for.",
    description:
      "Sharpens who you are commercially before you go to market. Positioning, behavioural values, commercial narrative, and the three-length media bio that holds up in a pitch, a press interview, and an About section.",
    produces: [
      "Positioning statement built on real career evidence",
      "Behavioural values framework (what you do, not what you say)",
      "Commercial narrative — the through-line that ties it together",
      "Three-length media bio: 25, 75, and 150 words"
    ],
    quickStarts: [
      {
        label: "Build my brand positioning",
        template:
          "I'm a {sport} athlete at {level} level. My commercial goals: {goal}. Help me define my positioning using the Commercial Athlete framework — what makes me different, who I'm built for, and the one sentence I lead with."
      },
      {
        label: "Define my values framework",
        template:
          "I'm a {sport} athlete at {level} level. Help me build a behavioural values framework — three to five values, each one tied to a concrete thing I already do in training, competition, or media. Not what I aspire to. What I demonstrate."
      },
      {
        label: "Write my 25 / 75 / 150 word bios",
        template:
          "Write me three media bios — 25, 75, and 150 words — that I can drop into a pitch deck, a website About page, and a press release. I'm a {sport} athlete at {level} level. Ask me what you need to know first."
      },
      {
        label: "Audit my About section",
        template:
          "Audit my existing About section against TCA Identity standards. Tell me what's working, what's generic, and the one rewrite that would sharpen it most. I'll paste it on your next reply."
      }
    ],
    icon: "compass",
    image:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Athlete portrait at sunset — defining identity"
  },
  {
    number: "03",
    slug: "revenue-strategist",
    name: "Revenue Strategist",
    pathway: "Revenue Growth Pathway",
    tagline: "Engine of income growth.",
    role: "Map every income stream available to your career.",
    description:
      "Looks at where the money actually comes from for an athlete in your code, your stage of career, and your market. Ranks every stream by effort vs. return and gives you a 12-month plan, sponsor target categories, and package structures sponsors recognise.",
    produces: [
      "Monetisation map ranked by realistic effort vs return",
      "12-month commercial plan with quarterly milestones",
      "Sponsor target brief — who fits and who doesn't",
      "Package structure: tier 1 / 2 / 3 with deliverables and rationale"
    ],
    quickStarts: [
      {
        label: "Map my income streams",
        template:
          "I'm a {sport} athlete at {level} level. My income goal over the next 12 months: {goal}. Map every income stream realistically available to me right now, rank them by effort vs. return, and tell me what to chase first."
      },
      {
        label: "Find my sponsor categories",
        template:
          "Build me a sponsor target brief. I'm a {sport} athlete at {level} level. List 5–8 brand categories that genuinely fit my career and audience, with two example brands per category and the angle I'd lead with for each."
      },
      {
        label: "Structure my packages",
        template:
          "Help me structure a tiered sponsor package — three tiers, clear deliverables per tier, and the rationale for why each tier costs what it costs. I'm a {sport} athlete at {level} level."
      },
      {
        label: "Build my 12-month plan",
        template:
          "Build me a 12-month commercial plan with quarterly milestones. My goal: {goal}. I'm a {sport} athlete at {level} level. Tell me what to start now, what to set up in Q2, and what to leave until later."
      }
    ],
    icon: "chartLineUp",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Charts on a screen — mapping the commercial year"
  },
  {
    number: "04",
    slug: "authority-builder",
    name: "Authority Builder",
    pathway: "Visibility & Content Pathway",
    tagline: "Builds visibility.",
    role: "Become a credible voice in your sport and beyond.",
    description:
      "Turns expertise into authority — the kind that gets you on panels, into boardrooms, and onto sponsor shortlists. 30-day plan, post drafts, long-form pieces, podcast pitches, and the talking points you can hold under pressure.",
    produces: [
      "30-day content plan with pillars and weekly themes",
      "Caption drafts and LinkedIn thought-leadership posts",
      "Podcast pitch emails and speaker outlines",
      "Three signature talking points you can hold under pressure"
    ],
    quickStarts: [
      {
        label: "Plan my next 30 days of content",
        template:
          "Build me a 30-day content plan with three pillars and weekly themes. I'm a {sport} athlete at {level} level. Commercial goal: {goal}. Tell me what to post, where to post it, and which posts are setting up which conversations."
      },
      {
        label: "Draft my next LinkedIn post",
        template:
          "Help me draft a LinkedIn thought-leadership post. I'm a {sport} athlete at {level} level. Topic — ask me what I want to take on, then write me a sharp, on-voice draft I can post today."
      },
      {
        label: "Pitch myself to a podcast",
        template:
          "Write me a podcast pitch email. I'm a {sport} athlete at {level} level. Ask me which show and what angle, then draft the email — short, specific, with a hook the host can't ignore."
      },
      {
        label: "Find my signature talking points",
        template:
          "Help me find three signature talking points I can hold under pressure across interviews, podcasts, and panel appearances. I'm a {sport} athlete at {level} level. Anchor them in real career evidence, not slogans."
      }
    ],
    icon: "megaphone",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Microphone on a stage — speaking with authority"
  },
  {
    number: "05",
    slug: "deal-room-assistant",
    name: "Deal Room",
    pathway: "Deal Room & Commercial Confidence",
    tagline: "Protects you commercially.",
    role: "Pitches, proposals, fee scripts, and the ask itself.",
    description:
      "Where the deal gets done. Drafts the pitch deck and the proposal. Sets the fee range and the scripts you'll use to defend it. Rehearses the ask, handles brand objections, runs the renewal. The work most athletes either outsource or skip.",
    produces: [
      "Sponsor-ready pitch deck and proposal — deliverables, fee, rights",
      "Negotiation brief: walk-away, anchor, and trade points",
      "Fee benchmark range and scripts for the awkward conversations",
      "Brand objection handling + renewal strategy"
    ],
    quickStarts: [
      {
        label: "Draft a proposal for this brand",
        template:
          "Draft me a sponsor proposal. I'm a {sport} athlete at {level} level. Ask me who the brand is, what they've asked for, and what I want from them — then write the proposal, deliverables-first, with the fee and rights as the last section."
      },
      {
        label: "What should I charge for this?",
        template:
          "I've got an opportunity in front of me. I'm a {sport} athlete at {level} level. Walk me through what fee range is defensible — what I should anchor at, what my floor is, and the scripts I'll use if they push back."
      },
      {
        label: "Rehearse the ask",
        template:
          "I've got a meeting where I need to lead with the fee. I'm a {sport} athlete at {level} level. Run a rehearsal with me — what I'll say in the first two minutes, what I'll say if they ask the rate before I'm ready, and the line I won't cross."
      },
      {
        label: "Handle this brand objection",
        template:
          "A brand has pushed back on something in my proposal. Help me handle it. I'll tell you the objection on your next reply and you give me the script — the language I actually say, not a paraphrase."
      }
    ],
    icon: "handshake",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Pen on a contract — closing the deal"
  },
  {
    number: "06",
    slug: "reputation-media-shield",
    name: "Reputation & Media Shield",
    pathway: "Media & Reputation",
    tagline: "Your safety net.",
    role: "Handle press, crises, and the conversations that matter.",
    description:
      "Holding statements, interview prep, and a calm second opinion when something goes sideways. Built for the moments where the wrong sentence in public costs a career.",
    produces: [
      "Crisis response drafts and holding statements",
      "Interview Q&A and prep sheets",
      "Talking points calibrated to your public narrative",
      "Crisis decision tree — what to say, who to call, when"
    ],
    quickStarts: [
      {
        label: "Draft a holding statement",
        template:
          "I need a holding statement. I'm a {sport} athlete at {level} level. Ask me what's happened on your next reply and draft me three lines I can put out in the next hour while we work the bigger response."
      },
      {
        label: "Prep me for this interview",
        template:
          "I've got an interview coming up. I'm a {sport} athlete at {level} level. Ask me what outlet, what angle, and what the difficult question is — then build me the question bank, the bridge phrases, and the no-go list."
      },
      {
        label: "Calibrate my talking points",
        template:
          "Help me calibrate three talking points I'll use across upcoming media. I'm a {sport} athlete at {level} level. Anchor them in my career evidence and tell me what to do if a journalist pushes past them."
      },
      {
        label: "Run my crisis decision tree",
        template:
          "Something has happened and I need to think clearly before I act. I'm a {sport} athlete at {level} level. Walk me through the crisis decision tree — what to say, who to call, what to delay. I'll tell you the situation on your next reply."
      }
    ],
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Press cameras and microphones at a media wall"
  }
];

// Pricing — used by the home teaser and the full /pricing page.
export type PricingTier = {
  id: "starter" | "pro" | "annual";
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta: CTA;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    cadence: "AUD / month",
    blurb: "Three specialists that put dollars on the board.",
    features: [
      "Deal Room, Revenue Strategist, Authority Builder",
      "Commercial Readiness Score baseline",
      "Saved outputs in your dashboard",
      "Cancel anytime"
    ],
    cta: { label: "Start free", href: "/signup" }
  },
  {
    id: "pro",
    name: "Pro",
    price: "$69",
    cadence: "AUD / month",
    blurb: "All 5 specialists. Monthly group Q&A with Carlie.",
    features: [
      "All five specialists",
      "Monthly group Q&A with Carlie Green-Medina",
      "Quarterly framework updates",
      "Priority email support"
    ],
    highlight: true,
    badge: "Most popular",
    cta: { label: "Start free", href: "/signup" }
  },
  {
    id: "annual",
    name: "Annual Pro",
    price: "$597",
    cadence: "AUD / year",
    blurb: "Pro plan, 28% saving, onboarding call included.",
    features: [
      "Everything in Pro",
      "1:1 onboarding call with Carlie (45 min)",
      "Save 28% vs monthly",
      "Annual commercial plan review"
    ],
    cta: { label: "Start free", href: "/signup" }
  }
];

// ----- HOME PAGE -----
export const home = {
  hero: {
    eyebrow: "The AI Commercial Department for Athletes",
    headline: "Build the career your sport won't.",
    sub: "Five specialists trained on the TCA framework. A commercial department available twenty-four hours a day — built for emerging, semi-professional, and elite Australian athletes.",
    primaryCta: { label: "Open the coach room", href: "/signup" },
    secondaryCta: { label: "See how it works", href: "/how-it-works" }
  },
  threeUp: {
    eyebrow: "What you get",
    title: "Build your brand while you build your career.",
    sub: "Three outcomes the Coach delivers — every one of them grounded in what brands actually look for.",
    items: [
      {
        icon: "Compass",
        title: "A defined commercial brand",
        body: "Know your value. The clarity to say what you stand for, in language that reads cleanly in a sponsor meeting and a press interview without contradicting itself."
      },
      {
        icon: "Route",
        title: "A sponsor pipeline that holds up",
        body: "Targeted outreach, qualified leads, and proposals written for the people who approve the budget — not the ones who admire the highlight reel."
      },
      {
        icon: "ShieldCheck",
        title: "The confidence to name your price",
        body: "Frameworks for fee negotiation, contract structure, and protecting your name when the stakes are real. Don't wait for an opportunity. Build the door."
      }
    ]
  },
  agentShowcase: {
    eyebrow: "Meet your coach stack",
    title: "Five specialists. One platform.",
    sub: "Each one is a focused expert. Together they cover every part of your commercial career."
  },
  framework: {
    eyebrow: "The TCA framework",
    title: "Four pillars. One framework.",
    body:
      "Four pillars, in order. Identity is who you are commercially. Strategy is the plan that turns that into income. Execute is the daily work of building authority and pipeline. Commercialise is the part most athletes skip — turning attention into signed deals, longer careers, and equity that outlasts the sport."
  },
  logoBar: {
    eyebrow: "Workshops delivered inside",
    caption:
      "The framework that powers the Coach has been delivered live to professional rosters and elite scholarship programs across Australian sport.",
    placeholders: [
      "Brisbane Roar",
      "Melbourne Victory",
      "Western Sydney Wanderers",
      "Melbourne City",
      "Australian Ladies Professional Golf",
      "Sport Australia Hall of Fame"
    ]
  },
  pricingTeaser: {
    eyebrow: "Pricing",
    title: "Three tiers. No lock-in.",
    sub: "Pay monthly. Cancel anytime. Tax-deductible as professional development.",
    cta: { label: "See full pricing", href: "/pricing" }
  },
  testimonials: {
    eyebrow: "What practitioners say",
    title: "Here's what brands actually look for.",
    sub: "From the rooms where the workshop has been delivered live.",
    items: [
      {
        quote:
          "Carlie presented examples of successful athletes and ways to leverage yourself to the public. I wish I had this when I was younger.",
        name: "Matt McKay",
        role: "Brisbane Roar",
        league: "A-League"
      },
      {
        quote:
          "Carlie was very engaging and you couldn't keep your eyes off what she was talking about. She is very experienced in the marketing world.",
        name: "Liz Elmassian",
        role: "Australian Ladies Professional Golf",
        league: "ALPG"
      },
      {
        quote:
          "Highly recommend the Commercial Athlete workshop. Carlie ran this for our scholarship holders and the feedback was exceptional.",
        name: "Sport Australia Hall of Fame",
        role: "Scholarship Program",
        league: "SAHOF"
      }
    ]
  },
  closingCta: {
    display: "Don't wait for an opportunity. Build the door.",
    formLabel: "Email address",
    placeholder: "your@email.com.au",
    button: "Start free",
    finePrint: "Drop in your email, pick a plan, and you're inside the coach room. No card to start, no spam."
  }
};

// ----- HOW IT WORKS -----
export const howItWorks = {
  hero: {
    eyebrow: "How it works",
    title: "How the Coach works.",
    sub: "Five specialists. One platform. Built on the TCA framework. Each agent owns a piece of the commercial career and works the same way: ask it a question, give it the context, get back work that's ready to use."
  },
  outro: {
    eyebrow: "Ready to start?",
    title: "Pricing keeps it simple.",
    body: "Three tiers. No lock-in. Tax-deductible as professional development.",
    primaryCta: { label: "See pricing", href: "/pricing" },
    secondaryCta: { label: "Sign up", href: "/signup" }
  }
};

// ----- PRICING -----
export type ComparisonRow = {
  role: string;
  cadence: string;
  range: string;
};

export const pricing = {
  hero: {
    eyebrow: "Pricing",
    title: "Pricing.",
    sub: "Pay monthly. Cancel anytime. Tax-deductible as professional development."
  },
  // The full feature comparison list — extends what's in pricingTiers for the table view.
  features: [
    {
      group: "Specialists",
      rows: [
        { label: "Number of specialists", values: ["3", "All 5", "All 5"] },
        { label: "Deal Room (pitches, fees, scripts, rehearsal)", values: [true, true, true] },
        { label: "Revenue Strategist", values: [true, true, true] },
        { label: "Authority Builder", values: [true, true, true] },
        { label: "Brand Architect", values: [false, true, true] },
        { label: "Reputation & Media Shield", values: [false, true, true] }
      ]
    },
    {
      group: "Coaching & support",
      rows: [
        { label: "Saved outputs in dashboard", values: [true, true, true] },
        { label: "Monthly group Q&A with Carlie", values: [false, true, true] },
        { label: "Quarterly framework updates", values: [false, true, true] },
        { label: "Priority email support", values: [false, true, true] },
        { label: "1:1 onboarding call (45 min)", values: [false, false, true] },
        { label: "Annual commercial plan review", values: [false, false, true] }
      ]
    },
    {
      group: "Terms",
      rows: [
        { label: "Cancel anytime", values: [true, true, true] },
        { label: "Save vs monthly", values: ["—", "—", "28%"] }
      ]
    }
  ],
  comparison: {
    eyebrow: "Anchor against humans, not AI tools",
    title: "What you'd pay separately.",
    sub: "Realistic Australian rates for the work the Coach replaces — or sharpens, if you've already got the human in the room.",
    rows: [
      { role: "Brand strategist", cadence: "Project", range: "$4,000 – $12,000" },
      { role: "Sponsorship consultant", cadence: "Monthly retainer", range: "$2,000 – $5,000" },
      { role: "Content manager", cadence: "Monthly", range: "$1,500 – $3,500" },
      { role: "Sports lawyer", cadence: "Per hour", range: "$400 – $700" },
      { role: "PR retainer", cadence: "Monthly", range: "$3,000 – $8,000" },
      { role: "Performance / mindset coach", cadence: "Monthly", range: "$400 – $1,200" }
    ] as ComparisonRow[],
    callout: {
      label: "What you pay with The Coach",
      price: "$69",
      cadence: "AUD / month",
      tier: "Pro plan — all five specialists",
      cta: { label: "Start free", href: "/signup" }
    }
  },
  pricingFaqs: [
    {
      q: "Are these AUD prices?",
      a: "Yes. Pricing is in Australian dollars. International members are welcome — your card processor will handle conversion."
    },
    {
      q: "Can I switch tiers later?",
      a: "Yes. Move up or down between Starter, Pro, and Annual at any time. Switches take effect at the next billing cycle."
    },
    {
      q: "Is this tax-deductible?",
      a: "For most professional athletes in Australia, yes — as professional development against your earned income from sport and commercial activity. Talk to your accountant for your specific situation."
    },
    {
      q: "Do sports organisations get a different rate?",
      a: "Yes. We license the platform to clubs, codes, and player associations who want to make it available across a roster. Email partnerships@thecommercialathlete.com.au for a quote."
    }
  ],
  footnote:
    "Foundation members keep launch pricing for the life of their subscription, even when public pricing rises."
};

// ----- ABOUT -----
export const about = {
  hero: {
    eyebrow: "About",
    title: "Built by an operator, not a consultant.",
    sub: "The Commercial Athlete Coach is the platform Carlie Green-Medina wishes had existed when she started representing athletes."
  },
  bio: {
    eyebrow: "Who built this",
    title: "Carlie Green-Medina.",
    role: "Founder, The Commercial Athlete. Director, Agency X Talent.",
    paragraphs: [
      "Nearly two decades inside Australian sport, entertainment, and marketing — as a player, an agent, and the operator behind Agency X Talent, founded in 2017. Carlie has delivered commercial development to 600+ athletes across emerging, semi-professional, and elite levels — including Shayna Jack OAM OLY, Andrew McCullough, Jesse Tawhiao Wardlaw, Sam Williamson OLY, Jade North OLY, Tariq Sims, and Karina Brown.",
      "She has negotiated brand partnerships across Puma, Qantas, Nike, Adidas, Red Bull, Coca-Cola, Telstra, ASICS, Lululemon, Lorna Jane, Speedo, Gatorade, LSKD, and twenty-plus more — and run commercial workshops inside Brisbane Roar, Melbourne Victory, Western Sydney Wanderers, Melbourne City, the Australian Ladies Professional Golf tour, and the Sport Australia Hall of Fame Scholarship Program.",
      "The Coach is the platform she wishes had existed when she started representing athletes. The framework — Identity, Strategy, Execute, Commercialise — was always the same. The only thing missing was scale. So she built it: five specialists trained on the same framework Agency X applies to its represented talent, available to any Australian athlete serious about their commercial career. Columbia Business School. Featured on Sky News Australia."
    ]
  },
  framework: {
    eyebrow: "The TCA framework",
    title: "Four pillars, in order.",
    sub: "Every agent in the Coach is trained on these. Skip a pillar and the next one breaks.",
    pillars: [
      {
        number: "01",
        name: "Identity",
        body: "Who you are commercially. Most athletes are clear about who they are as competitors and unclear about who they are as a brand. Identity is the work of answering that — values, positioning, narrative — in language that holds up in a sponsor meeting and a press interview without contradicting itself."
      },
      {
        number: "02",
        name: "Strategy",
        body: "The plan that turns identity into income. Where the money actually comes from for an athlete in your code, your stage, your market. What to chase first, what's a distraction, and the realistic numbers attached to each path."
      },
      {
        number: "03",
        name: "Execute",
        body: "The daily and weekly work. Outreach, content, proposals, follow-ups, interview prep. Not glamorous, often skipped, almost always the difference between a career that compounds and one that doesn't."
      },
      {
        number: "04",
        name: "Commercialise",
        body: "Turning attention into signed deals, longer careers, and equity that outlasts the sport. Fees, contracts, rights, equity stakes, and the post-career commercial life most athletes only think about when it's too late."
      }
    ]
  },
  ecosystem: {
    eyebrow: "How the brands fit",
    title: "TCA teaches. Agency X represents.",
    body:
      "The Commercial Athlete Coach and Agency X Talent are sister brands inside the same business family — and they sit at different points in an athlete's career. The Coach gives any Australian athlete access to the framework. Agency X Talent steps in for the careers that need active management. The two are designed to work together: most Agency X clients use the Coach, and many Coach members eventually graduate into representation when the commercial trajectory warrants it.",
    cta: { label: "Visit Agency X Talent", href: "https://agencyx.com.au" }
  },
  closing: {
    title: "See how the platform works.",
    cta: { label: "How it works", href: "/how-it-works" }
  }
};

// ----- FAQ -----
export type FAQ = { q: string; a: string };

export const faq = {
  hero: {
    eyebrow: "FAQ",
    title: "Questions, answered straight.",
    sub: "If your question isn't here, email hello@thecommercialathlete.com.au and we'll answer it directly."
  },
  items: [
    {
      q: "Who is this for, and who isn't it?",
      a: "It's for Australian athletes — current, retired, or transitioning — who are serious about the commercial side of their career and willing to do the work. It's not for athletes looking for a shortcut or someone to do it for them. The Coach gives you the framework and the drafts. You still have to send the email and ask for the fee."
    },
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT is a general-purpose tool. The Coach is five specialists trained on the TCA framework, with prompts written for the specific commercial situations athletes face — sponsor meetings, fee negotiations, media interviews, contract reviews. The outputs are designed to read cleanly to the people on the other side of the table, not to a general audience."
    },
    {
      q: "What is an 'AI agent', actually?",
      a: "A focused expert built around a clear job. Each one has a brief, a framework, and a memory of your career context. You ask it a question — it works through the brief and produces something usable. Not a robot, not a replacement for a real person, just a tool that's faster and more consistent than starting from scratch every time."
    },
    {
      q: "Who owns the outputs?",
      a: "You do. Drafts, decks, plans, scripts — your IP, full stop. We don't train models on your inputs or share them with anyone."
    },
    {
      q: "What are the subscription terms?",
      a: "Pay monthly, cancel anytime. The annual plan saves you 28% and locks in current pricing. There's no minimum term."
    },
    {
      q: "Is this tax-deductible?",
      a: "For most professional athletes in Australia, yes — as professional development against your earned income. Talk to your accountant for your specific situation."
    },
    {
      q: "Can sports organisations license this for their athletes?",
      a: "Yes. We work with clubs, codes, and player associations who want to make the Coach available across a roster. Pricing is on request — email partnerships@thecommercialathlete.com.au."
    },
    {
      q: "What's your refund policy?",
      a: "14-day refund on the first month if you decide it's not for you. Annual plans are pro-rata after that."
    },
    {
      q: "Is my data private?",
      a: "Yes. Inputs aren't used to train models. Standard encryption in transit and at rest. We can sign an NDA on request for organisational accounts."
    },
    {
      q: "Do I need to be tech-savvy?",
      a: "No. If you can use email, you can use the Coach. The interface is conversation-based — type a question, get an answer."
    }
  ] as FAQ[]
};

// ----- CONTACT -----
export const contact = {
  hero: {
    eyebrow: "Contact",
    title: "Get in touch.",
    sub: "Three paths, depending on why you're here. Pick the one that fits."
  },
  paths: [
    {
      id: "athletes",
      eyebrow: "Athletes",
      title: "Sign up to The Coach.",
      body:
        "Drop in your details, pick a tier, and you're in. Foundation members keep launch pricing for the life of their subscription.",
      cta: { label: "Sign up", href: "/signup" }
    },
    {
      id: "organisations",
      eyebrow: "Sports organisations",
      title: "Licence for your roster.",
      body:
        "Clubs, codes, and player associations licensing the Coach across their athletes. Pricing on request.",
      cta: {
        label: "Email partnerships",
        href: "mailto:partnerships@thecommercialathlete.com.au?subject=The%20Commercial%20Athlete%20Coach%20%E2%80%94%20licence%20enquiry"
      }
    },
    {
      id: "press",
      eyebrow: "Press & media",
      title: "Request a comment.",
      body:
        "Interviews, comment, or background on athlete commercial careers and the platform.",
      cta: {
        label: "Email press",
        href: "mailto:press@thecommercialathlete.com.au?subject=Press%20enquiry%20%E2%80%94%20The%20Commercial%20Athlete%20Coach"
      }
    }
  ],
  office: {
    title: "Office",
    body: "Brisbane, Meanjin. By appointment only."
  }
};
