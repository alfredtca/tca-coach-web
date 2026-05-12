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

// The 6 agents — used by the home showcase grid and the How It Works page.
export type AgentIcon =
  | "compass"
  | "chartLineUp"
  | "megaphone"
  | "handshake"
  | "shield"
  | "currencyDollar";

export type Agent = {
  number: string;
  slug: string;
  name: string;
  role: string;
  description: string;
  produces: string[];
  icon: AgentIcon;
  image: string;
  imageAlt: string;
};

export const agents: Agent[] = [
  {
    number: "01",
    slug: "brand-architect",
    name: "Brand Architect",
    role: "Define the commercial brand sponsors will pay for.",
    description:
      "Sharpens who you are commercially before you go to market. Positioning, behavioural values, narrative, and the words that show up consistently across a media kit, a pitch, and a press interview.",
    produces: [
      "Positioning statement built on real career evidence",
      "Behavioural values framework (what you do, not what you say)",
      "Three-length media bio: 25, 75, and 150 words"
    ],
    icon: "compass",
    image:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Athlete portrait at sunset — defining identity"
  },
  {
    number: "02",
    slug: "revenue-strategist",
    name: "Revenue Strategist",
    role: "Map every income stream available to your career.",
    description:
      "Looks at where the money actually comes from for an athlete in your code, your stage of career, and your market. Builds a tiered plan so you know what to chase first and what's a distraction.",
    produces: [
      "Income-stream map ranked by realistic effort vs return",
      "12-month commercial plan with quarterly milestones",
      "Sponsor category brief — who fits and who doesn't"
    ],
    icon: "chartLineUp",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Charts on a screen — mapping the commercial year"
  },
  {
    number: "03",
    slug: "authority-builder",
    name: "Authority Builder",
    role: "Become a credible voice in your sport and beyond.",
    description:
      "Turns expertise into authority — the kind that gets you on panels, into boardrooms, and onto sponsor shortlists. Editorial calendar, talking points, and content that reads like a professional, not a feed.",
    produces: [
      "12-week editorial calendar matched to your commercial goals",
      "Three signature talking points you can hold under pressure",
      "Quarterly thought-leadership piece in long form"
    ],
    icon: "megaphone",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Microphone on a stage — speaking with authority"
  },
  {
    number: "04",
    slug: "deal-room-assistant",
    name: "Deal Room Assistant",
    role: "Pitch decks, proposals, and negotiation prep on demand.",
    description:
      "The work most athletes outsource or skip. Drafts the pitch, structures the proposal, runs negotiation prep, and writes the follow-up — in language sponsors actually respond to.",
    produces: [
      "Sponsor-ready pitch deck tailored to the brief",
      "Proposal with clear deliverables, fee, and rights",
      "Negotiation brief: walk-away, anchor, and trade points"
    ],
    icon: "handshake",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Pen on a contract — closing the deal"
  },
  {
    number: "05",
    slug: "reputation-media-shield",
    name: "Reputation & Media Shield",
    role: "Handle press, crises, and the conversations that matter.",
    description:
      "Holding statements, interview prep, and a calm second opinion when something goes sideways. Built for the moments where the wrong sentence in public costs a career.",
    produces: [
      "Holding statement drafts for predictable scenarios",
      "Interview prep: question bank, bridge phrases, no-go list",
      "Crisis decision tree — what to say, who to call, when"
    ],
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Press cameras and microphones at a media wall"
  },
  {
    number: "06",
    slug: "commercial-confidence",
    name: "Commercial Confidence",
    role: "Ask for the fee. Hold the line. Know your worth.",
    description:
      "The mental and tactical work of getting paid properly. Fee benchmarks, scripts for the awkward conversations, and rehearsal for the meetings most athletes walk into cold.",
    produces: [
      "Fee benchmark range for your code and tier",
      "Scripts for fee, scope-creep, and renewal conversations",
      "Pre-meeting brief: prep, posture, and back-pocket lines"
    ],
    icon: "currencyDollar",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Empty boardroom table — the negotiation seat"
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
      "Deal Room Assistant, Revenue Strategist, Commercial Confidence",
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
    blurb: "All 6 specialists. Monthly group Q&A with Carlie.",
    features: [
      "All six specialists",
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
    eyebrow: "The Commercial Athlete Coach",
    headline: "Build the career your sport won't.",
    sub: "Six AI specialists trained on the TCA framework. A commercial department, available twenty-four hours a day. Built for emerging, semi-professional, and elite Australian athletes.",
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
    title: "Six specialists. One platform.",
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
    sub: "Six specialists. One platform. Built on the TCA framework. Each agent owns a piece of the commercial career and works the same way: ask it a question, give it the context, get back work that's ready to use."
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
        { label: "Number of specialists", values: ["3", "All 6", "All 6"] },
        { label: "Deal Room Assistant", values: [true, true, true] },
        { label: "Revenue Strategist", values: [true, true, true] },
        { label: "Commercial Confidence", values: [true, true, true] },
        { label: "Brand Architect", values: [false, true, true] },
        { label: "Authority Builder", values: [false, true, true] },
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
      tier: "Pro plan — all six specialists",
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
      "The Coach is the platform she wishes had existed when she started representing athletes. The framework — Identity, Strategy, Execute, Commercialise — was always the same. The only thing missing was scale. So she built it: six specialists trained on the same framework Agency X applies to its represented talent, available to any Australian athlete serious about their commercial career. Columbia Business School. Featured on Sky News Australia."
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
      a: "ChatGPT is a general-purpose tool. The Coach is six specialists trained on the TCA framework, with prompts written for the specific commercial situations athletes face — sponsor meetings, fee negotiations, media interviews, contract reviews. The outputs are designed to read cleanly to the people on the other side of the table, not to a general audience."
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
