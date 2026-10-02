import type { ProjectLinks } from "@/components/ui/StoreBadges";

export type Category = "Product" | "Voice AI" | "Agents & LLMs" | "Computer vision" | "Automation" | "Data";

export type Fact = { label: string; value: string };

export type Gallery = {
  title: string;
  caption: string;
  images: { src: string; alt: string }[];
};

// Drawn covers for projects that have no screenshot.
export type CoverKind = "memory" | "chat" | "radar" | "chart" | "bars" | "wave" | "rank";

export type FeaturedProject = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  org: string;
  period: string;
  platforms: string;
  role: string;
  // RGB triplet used for the card's glow, e.g. "96 132 255".
  tint: string;
  icon: string;
  features: string[];
  contributions: string[];
  facts: Fact[];
  stack: string[];
  links: ProjectLinks;
  gallery?: Gallery;
};

export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  category: Category;
  year?: string;
  context?: string;
  image?: string;
  // "contain" keeps diagrams and logos uncropped; photos and screenshots use "cover".
  imageFit?: "cover" | "contain";
  cover?: CoverKind;
  tags: string[];
  links?: ProjectLinks;
};

export const featured: FeaturedProject[] = [
  {
    slug: "juno",
    name: "Juno",
    tagline: "You ask. Juno calls.",
    summary:
      "Juno is an AI personal assistant for people in the US and Canada. Say what you need and it phones the business on a real line, talks to a real person, and comes back with a confirmed booking. It is also a companion you can chat with, speak to in real time, or see as a talking avatar.",
    org: "Trugen AI",
    period: "2026",
    platforms: "iOS and Android",
    role: "AI Product Lead",
    tint: "104 120 255",
    icon: "/work/juno-icon.png",
    features: [
      "Books restaurants, salons and spas, dentists, pet groomers, car servicing and activities",
      "Tells the person who answers that it is an AI, every time",
      "Waits for opening hours, calls back when asked, and phones to cancel if plans change",
      "Proactive briefings and meeting prep from Gmail and Google Calendar"
    ],
    contributions: [
      "Product and solution architecture for the whole assistant: chat, realtime voice and talking avatar",
      "The outbound calling agent (clarify, research, call to book, confirm) on a realtime speech-to-speech model, with a shadow LLM that checks each live call against its goal and corrects course mid-call",
      "Hermes, a multi-tenant agent service on AWS with Lambda dispatch, SQS routing, DynamoDB task state and watchdog recovery, so one deployment serves many users at once",
      "Gmail and Google Calendar over OAuth, with timezone-aware scheduling on EventBridge",
      "Vendor benchmarks on cost and time to first token, plus the architecture docs and handoff specs used by internal teams and external partners",
      "Go-to-market: short-form content and paid-ad launch videos that took Juno to 500+ active users within a month"
    ],
    facts: [
      { label: "Active users", value: "500+ in month one" },
      { label: "Markets", value: "US · Canada" },
      { label: "Platforms", value: "iOS · Android" },
      { label: "Version 2.0", value: "September 2026" }
    ],
    stack: [
      "ElevenLabs",
      "LiveKit",
      "Deepgram",
      "Telnyx",
      "Mem0",
      "AWS Lambda",
      "SQS",
      "DynamoDB",
      "EventBridge",
      "OAuth 2.0",
      "Flutter",
      "FastAPI"
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/juno-ai-that-books-by-phone/id6760284554",
      playStore: "https://play.google.com/store/apps/details?id=com.trugen.ai",
      website: "https://juno-ai.app"
    },
    gallery: {
      title: "The avatar companion",
      caption:
        "The video-first side of Juno: choose an avatar and talk to it face to face, by voice or by chat. It remembers what matters between conversations and checks in with briefs and catch-ups.",
      images: [
        { src: "/work/juno/companion-choose.jpg", alt: "Juno screen for choosing an AI avatar" },
        { src: "/work/juno/companion-talk.jpg", alt: "Juno avatar greeting the user before a conversation" },
        { src: "/work/juno/companion-memory.jpg", alt: "Juno saved memories screen with a memory toggle" },
        { src: "/work/juno/companion-nudges.jpg", alt: "Juno lock-screen notifications offering a brief" }
      ]
    }
  },
  {
    slug: "tether",
    name: "Tether",
    tagline: "Where fathers and their children connect.",
    summary:
      "Tether is a relationship companion for fathers, sons, daughters and father figures. It pairs guided activities, conversation prompts and coaching with AI that helps both sides work through the moments that are hard to face.",
    org: "Mentat Digital Solutions",
    period: "2025 – 2026",
    platforms: "iOS and Android",
    role: "Consultant AI engineer and researcher",
    tint: "255 142 72",
    icon: "/work/tether-icon.png",
    features: [
      "My Journey: a shared timeline of photos, video, voice notes and journal entries",
      "Guided conversations and activities for the talks that keep getting put off",
      "Safe Space: private, PIN-protected journalling with AI reflection",
      "Two-sided conflict resolution, plus an AI coach you can talk to"
    ],
    contributions: [
      "The AI service behind journalling reflections, conflict mediation, Safe Space and activity recommendations, with LLM-based sentiment analysis and structured data capture",
      "Safe Space end to end, from the API to the app screens",
      "The personality assessment, and usage limits across the app, the API and the admin console",
      "The analytics and content console the team runs the app from"
    ],
    facts: [
      { label: "Platforms", value: "iOS · Android" },
      { label: "On the App Store", value: "September 2026" },
      { label: "Category", value: "Lifestyle" },
      { label: "First built for", value: "Fathers and sons" }
    ],
    stack: [
      "Flutter",
      "React Native",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LangGraph",
      "OpenAI",
      "Pipecat",
      "React"
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/tether-a-fathers-legacy/id6761371125",
      playStore: "https://play.google.com/store/apps/details?id=com.mentat.tether",
      website: "https://tether-app.com",
      article:
        "https://medium.com/@priyam22rr/building-an-empathetic-conversational-ai-voice-agent-using-llms-4bcecb271592"
    },
    gallery: {
      title: "An early design screen",
      caption:
        "The home screen from the first father and son build: a thought of the day, shortcuts to Safe Space and guided conversations, weekly engagement, and recent memories.",
      images: [{ src: "/work/tether/early-home.jpg", alt: "Early Tether home screen design" }]
    }
  }
];

export const projects: Project[] = [
  {
    slug: "vani",
    name: "Vani",
    title: "A WhatsApp second brain",
    summary:
      "Turns everyday WhatsApp messages, photos and voice notes into structured contacts, tasks, reminders and notes. Ask it “Who did I meet at that AI event?” and it searches long-term memory; each day it sends a planning summary. It also runs from a web portal and as an MCP server other agents can call.",
    category: "Agents & LLMs",
    year: "2026",
    context: "Personal project",
    cover: "memory",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "pgvector", "MCP", "Claude", "WhatsApp Cloud API"]
  },
  {
    slug: "kailasa",
    name: "Kailasa",
    title: "Real-time speech-to-speech conversational AI",
    summary:
      "A low-latency voice assistant that chains speech recognition, a language model and text-to-speech into a fluid conversation, with interruption handling so it pauses and resumes the way a person would.",
    category: "Voice AI",
    image: "/work/kailasa.jpg",
    tags: ["Voice bot", "STT / TTS", "LLM", "Python", "AWS"],
    links: { website: "https://web.kailasa.app/" }
  },
  {
    slug: "vizaro",
    name: "Vizaro",
    title: "GenAI and AR for personalised e-commerce",
    summary:
      "A framework that generates AR-ready product models with generative AI, so shoppers can see a product in their own space and get recommendations shaped to them.",
    category: "Product",
    context: "B.Tech capstone",
    image: "/work/vizaro.jpg",
    tags: ["Generative AI", "WebAR", "E-commerce", "AWS", "MongoDB"]
  },
  {
    slug: "s2s-evaluation",
    name: "Speech-to-speech evaluation",
    title: "Benchmarking realtime voice models",
    summary:
      "Deployed Sakana AI's KAME and Liquid AI's LFM2.5-Audio on RunPod, and compared Amazon Nova 2 Sonic with Gemini Flash Live on cost and time to first token.",
    category: "Voice AI",
    year: "2026",
    cover: "wave",
    tags: ["Speech-to-speech", "RunPod", "KAME", "LFM2.5-Audio", "Nova 2 Sonic", "Gemini Flash Live"]
  },
  {
    slug: "fast-rag",
    name: "Fast RAG",
    title: "Hybrid retrieval for large documents",
    summary:
      "Hybrid sparse and dense retrieval, BM25 plus FAISS, fused with Reciprocal Rank Fusion for fast, scalable retrieval from large documents across business use cases.",
    category: "Agents & LLMs",
    year: "2025",
    cover: "rank",
    tags: ["RAG", "BM25", "FAISS", "Reciprocal Rank Fusion", "Python"]
  },
  {
    slug: "resqnotify",
    name: "ResQNotify",
    title: "Crash detection and fleet monitoring",
    summary:
      "Detects crashes and analyses driver behaviour through a dash cam or GoPro, then alerts emergency contacts and local helplines as it happens. The model keeps training on each driver's own footage, and a dashboard gives fleet owners live vehicle status.",
    category: "Computer vision",
    year: "2023",
    image: "/work/resqnotify-site.jpg",
    tags: ["Computer vision", "Raspberry Pi", "IoT", "Python"],
    links: { demo: "https://resq-notify.onrender.com/" }
  },
  {
    slug: "driver-behaviour",
    name: "Driver behaviour analysis",
    title: "Road safety from a camera feed",
    summary:
      "Models that watch for tailgating, distraction, seatbelt use and phone use, deployed on Raspberry Pi with live video streamed through Kafka for instant alerts. It continued as research with Dr. Sandeep Pandey at the University of Stuttgart, won an ICreate grant, and the paper took Best Research Paper at ICDTV.",
    category: "Computer vision",
    year: "2024",
    context: "AIProStack Solutions",
    image: "/work/driver-behaviour.jpg",
    tags: ["YOLO", "MiDaS depth", "Raspberry Pi", "Kafka", "Edge AI"]
  },
  {
    slug: "phishing-simulation",
    name: "Phishing simulation",
    title: "Personalised security-awareness training",
    summary:
      "An employee cybersecurity training platform that writes realistic phishing simulations from each person's role and interests, then recommends the training they need. Now deployed by AAIS.AI for enterprise clients.",
    category: "Agents & LLMs",
    year: "2023",
    context: "AAIS.AI",
    image: "/work/phishing.jpg",
    tags: ["Generative AI", "Cybersecurity", "Recommendation system", "Email automation"]
  },
  {
    slug: "aws-notifications",
    name: "Notify",
    title: "Serverless alerts with GenAI summaries",
    summary:
      "An AWS Lambda pipeline that summarises incoming content with a language model and sends it out as SMS and WhatsApp notifications.",
    category: "Automation",
    image: "/work/aws-notify.png",
    imageFit: "contain",
    tags: ["AWS Lambda", "DynamoDB", "SNS", "Generative AI", "WhatsApp"],
    links: {
      article:
        "https://medium.com/@priyam22rr/setting-up-an-end-to-end-automated-notification-system-using-aws-dynamodb-lambda-and-sns-ed9c99117dc9"
    }
  },
  {
    slug: "site-chat-assistant",
    name: "Site chat assistant",
    title: "A chatbot grounded in your own website",
    summary:
      "Scrapes a website's content and uses it to answer visitor questions through a generative AI chat assistant.",
    category: "Agents & LLMs",
    cover: "chat",
    tags: ["Web scraping", "Generative AI", "RAG", "Customer support"],
    links: {
      article:
        "https://medium.com/@priyam22rr/web-scraping-using-ai-jina-ai-vector-databases-and-the-future-of-rag-applications-a7f8cf77cf8d"
    }
  },
  {
    slug: "power-apps",
    name: "Power Apps automation",
    title: "Business workflows without the manual steps",
    summary:
      "Client work automating day-to-day operations with Microsoft Power Apps and Power Automate on top of SharePoint.",
    category: "Automation",
    context: "Client work",
    image: "/work/power-apps.jpg",
    tags: ["Power Apps", "Power Automate", "SharePoint", "Low-code"]
  },
  {
    slug: "disaster-tweets",
    name: "Disaster tweets",
    title: "Classifying tweets that ask for help",
    summary:
      "Wired a client's NLP model into a pipeline that sorts disaster-related tweets, stores them in MongoDB, and serves them to a React front end through a FastAPI service.",
    category: "Data",
    context: "Client work",
    image: "/work/disaster-tweets.jpg",
    tags: ["NLP", "FastAPI", "MongoDB", "React"],
    links: { website: "https://tweetmydisasters.com/" }
  },
  {
    slug: "social-engineering-monitor",
    name: "Social engineering monitor",
    title: "Spotting attacks in the news",
    summary:
      "Searches for and scrapes related news coverage, then analyses it to surface social-engineering attacks early.",
    category: "Data",
    year: "2023",
    cover: "radar",
    tags: ["Machine learning", "Scraping", "MongoDB", "Python"]
  },
  {
    slug: "trading-strategy",
    name: "Trading strategy",
    title: "An algorithmic strategy on US stock data",
    summary: "A simple algorithmic trading strategy designed on US stock market data.",
    category: "Data",
    cover: "chart",
    tags: ["Data analysis", "Python"],
    links: { github: "https://github.com/priyamsekra10/A-Trading-Strategy-using-US-Stock-Data" }
  },
  {
    slug: "two-wheeler-insurance",
    name: "Two-wheeler insurance KPIs",
    title: "A market report for India",
    summary:
      "Key performance indicators for India's two-wheeler insurance market: trends, growth, customer preferences and how the main players compare.",
    category: "Data",
    cover: "bars",
    tags: ["Data analysis", "Python", "MongoDB"],
    links: {
      github: "https://github.com/priyamsekra10/KPI-Report-Two-Wheeler-Insurance-Market-in-India"
    }
  }
];

export const categories: Category[] = [
  "Product",
  "Voice AI",
  "Agents & LLMs",
  "Computer vision",
  "Automation",
  "Data"
];
