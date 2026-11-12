// ─── Site ───────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Shashank VA",
  title: "Full-Stack Developer",
  domain: "https://shashankva.me",
  email: "shashankva05@gmail.com",
  location: "Bangalore, India",
  description:
    "Full-stack developer and B.E. CSE (Data Science) student at MVJ College of Engineering — building accessible EdTech, analytics platforms, and production web apps. 5× hackathon podium finisher.",
  social: {
    github: "https://github.com/Shashank-V-A",
    linkedin: "https://linkedin.com/in/shashankva05",
    twitter: "https://x.com/Shashank_VA05",
    instagram: "https://www.instagram.com/shashank.va05",
  },
  // Cache-bust when public/resume.pdf is replaced so preview/download pick up the new file.
  resumeUrl: "/resume.pdf?v=20261112",
  profileImage: "/images/profile.png",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Extra Mile", href: "#extra-mile" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "5×", label: "hackathon podiums" },
  { value: "3", label: "internships" },
];

export const aboutContent = {
  headline: "Building products that people love to use",
  traits: ["Problem solver", "Team player", "Fast learner", "Detail oriented"],
  brightWordsUrl: "https://brightwords.in",
  bio: [
    "I am an enthusiastic learner and aspiring software engineer with a strong passion for building modern web applications. I focus on creating seamless user experiences and developing reliable, efficient backend systems.",
    "I am also the Co-Founder of BrightWords, an AI-powered assistive learning platform designed to support children with special needs. Through BrightWords, I strive to leverage technology to promote accessibility, inclusivity, and enriched learning experiences for every child.",
    "Beyond academics, I enjoy exploring emerging technologies, playing sports, and relaxing with a good cup of tea.",
  ],
  passion: "Building Impactful Solutions",
};

// ─── Skills ─────────────────────────────────────────────────────────────────

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    description: "Languages I write in day to day.",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces I ship with regularly.",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Server-side work from APIs to data layers.",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Storage and data layers from projects and internships.",
    items: ["PostgreSQL", "SQLite", "Neo4j", "Supabase", "Prisma"],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    description: "Cloud, CI/CD, analytics, and shipping tooling.",
    items: [
      "AWS",
      "Google Cloud",
      "Vercel",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Web Scraping",
      "Tableau",
      "Power BI",
      "Stellar",
    ],
  },
] as const;

// ─── Experience ─────────────────────────────────────────────────────────────

export const experience: {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  logoUrl?: string;
  location?: string;
  tech?: string[];
  current?: boolean;
  certificateImage?: string;
  certificateImages?: string[];
}[] = [
  {
    company: "Paytm (Pi Commerce)",
    role: "Onboarding Intern",
    period: "Nov 2026 — Present",
    location: "Bengaluru, India",
    description:
      "Onboarding SME advertisers on Paytm Pi Commerce and launching Meta Ads campaigns end to end across Instagram, Facebook, and WhatsApp Business.",
    highlights: [
      "Onboarded small and medium enterprise advertisers on Paytm Pi Commerce",
      "Launched Meta Ads campaigns end to end for live digital advertising",
      "Configured and activated client campaigns across Instagram, Facebook, and WhatsApp Business",
    ],
    logoUrl: "/logos/paytm.png",
    tech: ["Meta Ads", "Digital Advertising", "Client Onboarding"],
    current: true,
    certificateImage: "/certificates/paytm-internship.png",
  },
  {
    company: "Startup Haven",
    role: "Software Engineer Intern",
    period: "Jan 2026 — Jun 2026",
    location: "Bangalore, India",
    description:
      "Developed a full-stack web application to compare prices, offers, and delivery options across quick-commerce and e-commerce vendors.",
    highlights: [
      "Built Python web scraping pipelines to ingest and normalize multi-source product and pricing data",
      "Designed responsive interfaces that present standardized comparison results for end users",
      "Improved purchase decisions with reliable downstream price and offer comparisons",
    ],
    logoUrl: "/logos/startup-haven.png",
    tech: ["React", "Node.js", "Python", "Web Scraping"],
    certificateImages: [
      "/certificates/startup-haven-offer-1.png",
      "/certificates/startup-haven-offer-2.png",
    ],
  },
  {
    company: "HAL – RWR&DC, AFCS Group",
    role: "Engineering Intern",
    period: "Jul 2025 — Aug 2025",
    location: "Bangalore, India",
    description:
      "Supported automation of flight data record workflows and prepared validated flight test reports for the AFCS Group.",
    highlights: [
      "Reduced manual processing steps in flight data reporting pipelines",
      "Prepared and validated flight test reports using structured documentation",
      "Organized technical datasets for AFCS stakeholders",
    ],
    logoUrl: "/logos/hal.png",
    tech: ["Automation", "Documentation", "Data Validation"],
    certificateImage: "/certificates/hal-internship.png",
  },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export const projects = [
  {
    title: "EventX",
    description:
      "A pair of Bangalore-focused Telegram alert bots — HackathonX for hackathons/buildathons/ideathons and SportX for sports events — that scrape public platforms and notify subscribers when something new is listed. Currently serving 40+ active users.",
    tags: ["Python", "FastAPI", "Telegram", "Vercel"],
    link: "https://t.me/EventXva05Bot",
    liveLabel: "HackathonX",
    secondaryLink: "https://t.me/Sportx_va_bot",
    secondaryLabel: "SportX",
    github: "https://github.com/Shashank-V-A/EventX",
    category: "Web2",
    year: "2026",
    accent: "#2AABEE",
    image: "/projects/eventx.png",
  },
  {
    title: "Veritas AI",
    description:
      "An AI-powered digital investigation platform for claims, sources, and narratives — paste any article, forward, or transcript and get a structured credibility dossier with trust scores, claim breakdowns, and evidence context.",
    tags: ["React", "TypeScript", "Express", "Neo4j"],
    link: "https://veritas-ai-shashank.vercel.app",
    github: "https://github.com/Shashank-V-A/Veritas-AI",
    category: "Web2",
    year: "2026",
    accent: "#fbbf24",
    image: "/projects/veritas-ai.png",
  },
  {
    title: "Namma Trust",
    description:
      "AI-driven event congestion forecasting and resource recommendation for Bangalore City Traffic Police — built for the Flipkart Grid Hackathon Event-Driven Congestion problem statement.",
    tags: ["React", "TypeScript", "FastAPI", "Python"],
    link: "https://namma-trust.vercel.app",
    github: "https://github.com/Shashank-V-A/Namma-Trust",
    category: "Web2",
    year: "2026",
    accent: "#1e4d2b",
    image: "/projects/namma-trust.png",
  },
  {
    title: "RankMint",
    description:
      "Creator analytics platform that scores YouTube and X influencers from live API data — authenticity, growth, brand fit, and a composite RankMint score for campaign vetting.",
    tags: ["Next.js", "TypeScript", "Python", "Supabase"],
    link: "https://rankmint-ciphers.vercel.app",
    github: "https://github.com/Shashank-V-A/Ratefluencer",
    category: "Web2",
    year: "2025",
    accent: "#a78bfa",
    image: "/projects/rankmint.png",
  },
  {
    title: "Prize Vault",
    description:
      "Prize Vault is a blockchain-native prize escrow platform built for hackathons and events on Stellar. It keeps prize funds locked on-chain until both the sponsor and organizer approve the payout, preventing misuse, delays, or unilateral fund movement. The platform includes role-based dashboards for sponsors, organizers, and participants, making prize distribution more transparent, auditable, and trustworthy.",
    tags: ["Next.js", "Stellar", "Web3", "Escrow", "Supabase"],
    link: "https://prizevault.vercel.app/",
    github: "https://github.com/karthik1codes/prizevault",
    category: "Web3",
    year: "2025",
    accent: "#2ae3c3",
    image: "/projects/prizevault.png",
  },
];

// ─── Resume ─────────────────────────────────────────────────────────────────

export const resumeInfo = {
  education: {
    school: "MVJ College of Engineering",
    logoUrl: "/logos/mvj.png",
    degree: "B.E. in CSE – Data Science",
    location: "Bangalore, India",
    period: "Expected May 2027",
    cgpa: "8.65 / 10.0",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Databases",
    ],
  },
  includes: [
    "Work experience",
    "Technical projects",
    "Education & coursework",
    "Hackathon achievements",
  ],
  skillGroups: [
    { label: "Languages", items: "Python · JavaScript · TypeScript · SQL" },
    { label: "Frontend", items: "HTML · CSS · React · Next.js · Tailwind CSS" },
    { label: "Backend", items: "Node.js · Express.js · FastAPI · REST APIs" },
    {
      label: "Data & Tools",
      items: "PostgreSQL · Neo4j · Supabase · Prisma · AWS · Vercel · GitHub Actions",
    },
  ],
};

// ─── Extra Mile ─────────────────────────────────────────────────────────────

export const achievements = [
  {
    title: "Cepheus Hackathon — 3rd Place",
    organization: "Atria Institute of Technology",
    year: "2026",
    description:
      "Won 3rd prize at the Cepheus Hackathon in the Web3 domain, organized by GDG On Campus AIT and Code Club — April 22–23, 2026.",
    type: "hackathon" as const,
    posterImage: "/certificates/posters/cepheus-atria.png",
    certificateImage: "/certificates/cepheus-atria.png",
  },
  {
    title: "Express Launchpad Hackathon — Winner",
    organization: "Nexla Inc",
    year: "2026",
    description:
      "Delivered an API and data-pipeline integration project, winning the Express Launchpad hackathon with a live demo.",
    type: "hackathon" as const,
    posterImage: "/certificates/posters/nexla-express-launchpad.png",
    certificateImage: "/certificates/nexla-express-launchpad.png",
    imageFit: "contain" as const,
  },
  {
    title: "Growth Hackathon — Winner",
    organization: "Residency BLR",
    year: "2025",
    description:
      "Shipped a working prototype with pitch and live demo, winning the Growth Hackathon at Residency BLR.",
    type: "hackathon" as const,
    posterImage: "/certificates/posters/growth-hackathon-residency.png",
    certificateImage: "/certificates/growth-hackathon-residency.png",
  },
  {
    title: "HackSpark Hackathon — Winner",
    organization: "DSATM",
    year: "2025",
    description:
      "Built and demoed a full-stack solution under a 24-hour deadline, winning HackSpark at DSATM.",
    type: "hackathon" as const,
    posterImage: "/certificates/posters/hackspark-dsatm.png",
    certificateImage: "/certificates/hackspark-dsatm.png",
  },
  {
    title: "Pixelgenesis Hackathon — 2nd Place",
    organization: "MVJ College of Engineering",
    year: "2025",
    description:
      "Secured 2nd place at the PixelGenesis Hackathon during VertechX 13.0 — a 24-hour inter-collegiate fest at MVJ College of Engineering, Nov 13–14, 2025.",
    type: "hackathon" as const,
    posterImage: "/certificates/posters/pixelgenesis-mvj.png",
    certificateImage: "/certificates/pixelgenesis-mvj.png",
  },
] as const;
