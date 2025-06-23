import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Kailasa: Real-Time Speech-to-Speech Conversational AI",
    desc: "Developed a low-latency speech-to-speech (STS) conversational AI system that combines automatic speech recognition (ASR), language models (LLMs), and text-to-speech (TTS) for fluid, real-time conversations. Leveraged prompt engineering techniques for contextual awareness, enabling highly interactive human-computer dialogue systems for use in customer support, IVRs, and AI assistants. Integrated interruption detection logic, enhancing user experience by enabling the assistant to pause or resume based on speaker activity.",
    img: `/portfolio/kailasa.png`,
    link: "https://web.kailasa.app/",
    tags: ["AI Voice Bot", "TTS/STT", "Conversational AI", "Python", "AWS"]
  },
  {
    id: 1,
    title: "Resq-Notify: AI Fleet Management Dashboard",
    desc: "Developed an AI-powered Fleet Management Dashboard that monitors vehicle status, performance, and location in real-time. Integrated with IoT sensors, it provides predictive analytics, driver behavior insights, and automated maintenance alerts to optimize fleet efficiency and reduce operational costs.",
    img: `/da.jpeg`,
    link: "https://resq-notify.onrender.com/",
    tags: [
      "Fleet Management", "Predictive Analytics", "Python", "AI Automation", "IoT"
    ]
  },
  {
    id: 2,
    title: "Vizaro: GenAI-AR Framework for Personalised E-Commerce",
    desc: "Developed a GenAI-AR framework that enables personalized e-commerce experiences through AI-generated AR models. Integrated with AWS, it provides real-time product visualization, personalized recommendations, and interactive shopping features for enhanced customer engagement.",
    img: `/portfolio/vizaro.mp4`,
    tags: ["Generative AI", "E-Commerce", "AR Shopping","WebAR","AWS","MongoDB"]
  },
  {
    id: 3,
    title: "AWS-Based Automated Notification System with GenAI Summarization",
    desc: "Developed a comprehensive automated notification system leveraging AWS Lambda for serverless automation. Integrated Generative AI for intelligent content summarization and automated SMS/WhatsApp notifications. The system provides real-time alerts and personalized communication through API integrations, enhancing user engagement and information delivery.",
    img: `/portfolio/AWS-notify.png`,
    tags: ["AWS Lambda", "Serverless Automation", "Generative AI", "SMS Notifications", "WhatsApp Automation", "API Integration", "AI Summarization"]
  },
  {
    id: 4,
    title: "AI-Powered Father-Son Relationship Conflict Resolution App",
    desc: "Created an innovative mental health application focused on resolving father-son relationship conflicts through empathetic AI dialogue. The app leverages generative AI to provide emotional intelligence support, facilitating constructive conversations and promoting family harmony through AI-driven conflict resolution strategies.",
    img: `/portfolio/Father.png`,
    tags: ["Mental Health", "Conflict Resolution", "Generative AI", "Empathetic AI", "AI Dialogue", "Family App", "Emotional Intelligence"]
  },
  {
    id: 5,
    title: "AI-Driven Phishing Simulation & Recommendation System (AAIS.AI Internship)",
    desc: "Developed an advanced cybersecurity platform during AAIS.AI internship that creates realistic phishing simulations using generative AI. The system provides personalized security awareness training through email automation and intelligent recommendation systems, enhancing employee training and organizational security posture.",
    img: `/WhatsApp Image 2024-01-21 at 11.21.02 PM.jpeg`,
    tags: ["Cybersecurity", "Phishing Simulation", "Generative AI", "Email Automation", "Security Awareness", "Recommendation System", "Employee Training"]
  },
  {
    id: 6,
    title: "Power Apps Automation for Business Operations (Client Work)",
    desc: "Delivered comprehensive business process automation solutions using Microsoft Power Apps and Power Automate. Integrated SharePoint workflows and implemented low-code/no-code development strategies to streamline client operations, reducing manual tasks and improving efficiency across various business processes.",
    img: `/portfolio/power.png`,
    tags: ["Power Apps", "Workflow Automation", "Power Automate", "Low-Code", "Business Process Automation", "SharePoint Integration", "No-Code Development"]
  },      
  {
    id: 7,
    title: "Web Scraper-Driven Generative AI Chat Assistant",
    desc: "Developed an intelligent website chatbot that combines web scraping capabilities with generative AI for enhanced customer support. The system extracts relevant data from websites and provides automated chat responses, creating interactive websites with AI-powered customer service capabilities.",
    img: `/portfolio/scrap.svg`,
    tags: ["Web Scraping", "Generative AI", "Website Chatbot", "Data Extraction", "AI Customer Support", "Automated Chat", "Interactive Websites"]
  },
  {
    id: 9,
    title: "KPI Report: Two-Wheeler Insurance Market in India",
    desc: "The report provides essential insights into the performance indicators of the two-wheeler insurance market in India. It covers market trends, growth rates, customer preferences, and key player performance in making informed decisions.",
    img: `/WhatsApp Image 2024-01-21 at 11.21.04 PM.jpeg`,
    link: "https://github.com/priyamsekra10/KPI-Report-Two-Wheeler-Insurance-Market-in-India",
    tags: [
     "GitHub","MongoDB","Python","Data Analysis"
    ]
  },
  {
    id: 10,
    title: "Social Engineering Attack Monitor",
    desc: "This system searched for and scraped similar news articles to detect social engineering attacks. By analyzing the gathered data, it could proactively identify potential threats and enhance cybersecurity measures.",
    img: `/WhatsApp Image 2024-01-21 at 11.21.04 PM-2.jpeg`,
    tags: ["AI","ML","GitHub","MongoDB","Python"]
  },
  {
    id: 11,
    title: "Trading Strategy",
    desc: "Leveraging US stock data, I made data-driven investment decisions. By analyzing market trends and patterns, the system identified promising opportunities, enabling informed choices for maximizing investment returns.",
    img: `/WhatsApp Image 2024-01-21 at 11.21.05 PM.jpeg`,
    link: "https://github.com/priyamsekra10/A-Trading-Strategy-using-US-Stock-Data",
    tags: ["Data Analysis","GitHub","MongoDB","Python"]
  },
  {
    id: 12,
    title: "Twitter tweets Analysis",
    desc: "Integrated a client-provided NLP model to categorize tweets pertaining to disaster assistance, storing relevant findings in a MongoDB database. The curated data was then linked to a React-based web interface through a REST API developed with the FastAPI framework.",
    img: `/DM.jpeg`,
    link: "https://tweetmydisasters.com/",
    tags: ["React", "Tailwind CSS", "Javascript", "Next.js","Python","RestAPI","FastAPI"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;