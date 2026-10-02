export type Role = {
  org: string;
  title: string;
  period: string;
  place?: string;
  summary: string;
};

export const experience: Role[] = [
  {
    org: "Trugen AI",
    title: "AI Product Lead, Juno AI",
    period: "Jan 2026 – Present",
    place: "Remote",
    summary:
      "Own product and solution architecture for Juno: realtime voice agents, outbound AI calling, third-party integrations and go-to-market, growing it to 500+ active users in its first month."
  },
  {
    org: "DHL Express India",
    title: "Summer intern, process automation",
    period: "May – Sep 2025",
    place: "Mumbai",
    summary:
      "Automated the Helpdesk India team's manual processes with Power Apps, Power Automate and Power BI. The workflows saved three to four hours a day."
  },
  {
    org: "Mentat Digital Solutions",
    title: "Consultant AI engineer and researcher",
    period: "Feb – Dec 2025",
    place: "USA, remote",
    summary:
      "Turned emotional-mediation and healthcare workflows into AI tools: LLM-based sentiment analysis, structured data capture, journalling and workflow automation."
  },
  {
    org: "NovusVista",
    title: "Consultant conversational AI engineer",
    period: "Mar – Dec 2025",
    place: "Jaipur",
    summary:
      "Took the client's voice AI assistant from requirements to production, with a fast RAG integration that made its knowledge base scale."
  },
  {
    org: "QuibbleAI",
    title: "Generative AI engineer intern",
    period: "May 2024 – May 2025",
    place: "Jaipur",
    summary:
      "Led development and deployment of AWS-native conversational and WhatsApp AI agents in Python with Pipecat, owning analytics, automated deployments, production monitoring and project management."
  },
  {
    org: "AIProStack Solutions",
    title: "Co-founder, deep learning engineer",
    period: "Feb – May 2024",
    place: "Jaipur",
    summary:
      "Built driver-monitoring models for tailgating, distraction, seatbelt and phone use, deployed on Raspberry Pi with live video streamed through Kafka for instant alerts."
  },
  {
    org: "AAIS.AI",
    title: "Machine learning engineer",
    period: "Apr – Jul 2023",
    place: "France, remote",
    summary:
      "Developed an AI-powered employee cybersecurity training platform, now deployed by AAIS.AI for enterprise clients."
  }
];

export const education = {
  school: "NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai",
  degree: "MBA Tech and B.Tech, Computer Engineering",
  period: "2021 – 2026",
  detail: "89%. Theses on smart technologies in logistics and transport, and on VIZARO, an AI and AR framework for e-commerce."
};

export const ventures = [
  { name: "AIProStack Solutions", href: "https://www.linkedin.com/company/aiprostacksolutions/" },
  { name: "ResQNotify", href: "https://resq-notify.onrender.com" }
];

// Three proof points shown under the hero.
export const highlights: { value: string; label: string }[] = [
  { value: "500+", label: "active users in Juno's first month" },
  { value: "4th of 20,000+", label: "teams at Bajaj Finserv's HackRx RAG hackathon" },
  { value: "4", label: "AI publications, one with a Best Research Paper Award" }
];

export const awards: { year: string; title: string; detail?: string }[] = [
  {
    year: "2025",
    title: "4th place, Bajaj Finserv HackRx",
    detail: "RAG hackathon, among 20,000+ teams"
  },
  {
    year: "2025",
    title: "NMIMS University Award",
    detail: "Best B.Tech final-year project (capstone)"
  },
  {
    year: "2024",
    title: "Best Research Paper Award, ICDTV 2030",
    detail: "For “SafeCam”, on AI-enabled driver analysis"
  },
  {
    year: "2024",
    title: "ICreate grant",
    detail:
      "Funding from the government-supported incubator for an AI driver assistance and behaviour detection system"
  },
  {
    year: "2024",
    title: "Semi-finalist, Eureka! 2024",
    detail: "IIT Bombay's business model competition"
  },
  {
    year: "2024–25",
    title: "Workshop host",
    detail: "A two-day chatbot bootcamp and two augmented reality workshops"
  }
];

export const publications: { title: string; venue: string; note?: string }[] = [
  {
    title: "Empathetic Intelligence: LLM-based Conversational AI Agent",
    venue: "International Journal of Intelligent Systems and Applications in Engineering (IJISAE)",
    note: "Scopus-indexed"
  },
  {
    title: "Enhancing Road Safety through AI-Enabled Driver Analysis",
    venue: "International Conference on Digital Technology Vision 2030 (ICDTV)",
    note: "Best Research Paper Award"
  },
  {
    title: "AI-Powered Employee Cyber Awareness System",
    venue: "Technische Sicherheit",
    note: "Scopus-indexed"
  },
  {
    title: "VIZARO: A Unified AI-AR Framework for Immersive and Personalized E-Commerce Experiences",
    venue: "International Conference on Sustainability, Innovation & Technology (ICSIT)",
    note: "Under review"
  }
];

export const publicationAuthors = "Priyam Sekra and Vipul Bhatia";

export const collaborators: { name: string; affiliation: string; work: string }[] = [
  {
    name: "Dr. Sandeep Pandey",
    affiliation: "University of Stuttgart, Germany",
    work: "Driver behaviour detection and analysis"
  },
  {
    name: "Sylvester Obafunwa",
    affiliation: "Industry advisor, Tata Consultancy Services, USA",
    work: "Father and son relationship app"
  },
  {
    name: "Jitin Doriya",
    affiliation: "CTO at QuibbleAI, IIT (BHU) Varanasi",
    work: "Low-latency voice bot for large documents and restaurant menus"
  },
  {
    name: "Dr. Sweta Soni",
    affiliation: "NMIMS MPSTME, Shirpur",
    work: "Empathetic Intelligence: LLM-based conversational AI agent"
  },
  {
    name: "Dr. Shailaja Rego",
    affiliation: "School of Business Management, NMIMS Mumbai",
    work: "Review of smart technologies in logistics and transport"
  },
  {
    name: "Dr. Mahendra Parihar",
    affiliation: "NMIMS MPSTME, Mumbai",
    work: "Review of smart technologies in logistics and transport"
  }
];

export const writing: { title: string; href: string }[] = [
  {
    title: "Building an empathetic conversational AI voice agent using LLMs",
    href: "https://medium.com/@priyam22rr/building-an-empathetic-conversational-ai-voice-agent-using-llms-4bcecb271592"
  },
  {
    title: "Streamlining voice agent development using Pipecat flow automation",
    href: "https://medium.com/@priyam22rr/streamlining-voice-agent-development-using-pipecat-flow-automation-610bd90ccbcb"
  },
  {
    title: "Web scraping using AI: Jina AI, vector databases and the future of RAG applications",
    href: "https://medium.com/@priyam22rr/web-scraping-using-ai-jina-ai-vector-databases-and-the-future-of-rag-applications-a7f8cf77cf8d"
  },
  {
    title: "Setting up an end-to-end automated notification system using AWS DynamoDB, Lambda and SNS",
    href: "https://medium.com/@priyam22rr/setting-up-an-end-to-end-automated-notification-system-using-aws-dynamodb-lambda-and-sns-ed9c99117dc9"
  }
];

export const toolbox: { group: string; items: string[] }[] = [
  {
    group: "Voice AI and telephony",
    items: ["ElevenLabs", "LiveKit", "Pipecat", "Daily WebRTC", "Deepgram", "Telnyx", "Speech-to-speech models"]
  },
  {
    group: "LLMs and agents",
    items: ["Agno", "LangGraph", "LangChain", "MCP", "Mem0", "RAG", "Fine-tuning", "RunPod"]
  },
  {
    group: "Integration and deployment",
    items: ["REST APIs", "WebSockets", "OAuth 2.0", "AWS Lambda", "SQS", "EventBridge", "DynamoDB", "ECS", "Docker", "CI/CD"]
  },
  {
    group: "Programming",
    items: ["Python", "SQL", "Shell", "TypeScript", "FastAPI"]
  },
  {
    group: "Data science and ML",
    items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Pandas", "Power BI", "Streamlit"]
  },
  {
    group: "Product and delivery",
    items: ["Requirements scoping", "Solution design", "Rapid prototyping", "Beta programs", "Stakeholder communication", "Go-to-market"]
  }
];

export type Phase = {
  title: string;
  summary: string;
  outputs: string[];
};

// The product path shown at the top of the home page.
export const lifecycle: Phase[] = [
  {
    title: "Ideation",
    summary: "Start from the problem: who it is for, what it should do, and what would make it worth using.",
    outputs: ["Problem framing", "Feature list", "User flows"]
  },
  {
    title: "Scope and plan",
    summary: "Turn the idea into a scope: what ships first, what waits, and how pricing and plans work.",
    outputs: ["Scope documents", "Pricing and plans", "Milestones"]
  },
  {
    title: "Architecture",
    summary: "Design the system before writing it: agents, voice pipeline, data model and cloud services.",
    outputs: ["System design", "Data models", "Vendor choices"]
  },
  {
    title: "Build",
    summary: "Write the AI services, the backend APIs, and the mobile and web apps people actually use.",
    outputs: ["AI and voice agents", "Backend APIs", "Mobile and web apps"]
  },
  {
    title: "Test and evaluate",
    summary: "Run evaluation suites and acceptance tests against the real stack, so quality is measured.",
    outputs: ["Eval suites", "Acceptance tests", "Latency benchmarks"]
  },
  {
    title: "Deploy and launch",
    summary: "Set up the cloud infrastructure, cut over to production, and release to both app stores.",
    outputs: ["AWS infrastructure", "Store releases", "Production cutover"]
  },
  {
    title: "Run and improve",
    summary: "Add the admin tools, analytics and usage limits, then keep shipping based on real use.",
    outputs: ["Admin consoles", "Analytics", "Regular releases"]
  }
];
