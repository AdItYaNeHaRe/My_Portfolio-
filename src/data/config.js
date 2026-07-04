export const config = {
  // Feature flags
  showTestimonials: false,
  showBlog: true,
  showOpenSource: true,
  showAIChat: false,

  // Portfolio metadata
  title: "Aditya Nehare | MERN Stack Developer & Data Analyst",
  description:
    "Portfolio of Aditya Nehare — Full-Stack MERN Developer and Data Analyst. Built with React.js, Node.js, MongoDB, Python, and Power BI.",
  keywords: [
    "MERN",
    "React",
    "Node.js",
    "MongoDB",
    "Full-Stack",
    "Data Analyst",
    "Python",
    "Web Developer",
  ],

  // Social media
  socialLinks: {
    github: "https://github.com/AdItYaNeHaRe",
    linkedin: "https://linkedin.com/in/aditya-nehare",
    email: "adityanehare55@gmail.com",
  },

  // Analytics
  analytics: {
    enabled: true,
    vercelAnalytics: true,
  },

  // API keys (from .env)
  github_token: import.meta.env.VITE_GITHUB_TOKEN || null,
  emailjs_service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || null,
  emailjs_template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || null,
  emailjs_public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || null,
};
