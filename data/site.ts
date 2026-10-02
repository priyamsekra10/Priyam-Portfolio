export const site = {
  name: "Priyam Sekra",
  shortName: "Priyam",
  role: "Applied AI Engineer",
  location: "Jaipur, India",
  // Override with NEXT_PUBLIC_SITE_URL at build time if the site moves domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://priyam.onrender.com",
  description:
    "Priyam Sekra is an applied AI engineer and product lead who takes AI products from first idea to production: scoping, architecture, voice and agentic systems, deployment and go-to-market.",
  email: "priyam22rr@gmail.com",
  resume: "/Priyam_Sekra_CV.pdf",
  socials: {
    github: "https://github.com/priyamsekra10",
    linkedin: "https://www.linkedin.com/in/priyam-sekra",
    medium: "https://medium.com/@priyam22rr"
  }
};

export const nav = [
  { title: "Work", href: "/#work" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/#about" },
  { title: "Recognition", href: "/#recognition" },
  { title: "Contact", href: "/contact" }
];
