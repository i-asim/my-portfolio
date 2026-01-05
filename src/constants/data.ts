import { _getTotalWorkingExperiences } from "@/lib/utils";
import { Experience, Project } from "@/types";

export const domainPath = "https://iasim.me";

export const experiences: Experience[] = [
  {
    title: "Jr Web Developer",
    company: "MITE Technology",
    companyUrl: "https://www.mitetechnology.com/",
    location: "Palakkad, India",
    type: "Full-time",
    startDate: "2025-12-1",
    endDate: undefined,
    description:
      "Building and contributing to responsive web platforms, dynamic content features, performance optimization, and collaborative development to support IT services, digital marketing solutions, and conversion‑focused client engagement.",
    responsibilities: [
  "Develop and maintain responsive web platforms with dynamic content and listing features.",
  "Optimize applications for performance, scalability, and cross-browser compatibility.",
  "Collaborate with senior developers and designers to implement requirements into functional solutions.",
  "Integrate client feedback into new features to enhance user engagement and conversion rates.",
  "Participate in peer reviews and maintain documentation to ensure code quality and clarity.",
  "Support branding and digital marketing goals through conversion-focused layouts and user-friendly interfaces.",
],

    skills: [
     "React",
      "Node.js",
      "WordPress",
      "PHP",
      "MySQL",
      "Git",
      "Bitbucket",
      "Payload CMS",
      "JavaScript",
      "TypeScript",
      "Canva",
      "Vercel",
      "Hostinger",
    ],
    logo: "/images/mite-logo.png",
    projects: [
      {
        title: "Merchandise E-commerce Platform",
        description:
          "A merchandise e‑commerce platform built to streamline dropshipping operations, featuring dynamic product catalogs, customer‑facing editing tools, and automated workflows for efficient order fulfillment and brand customization.",
        demo: "",
       techStacks: [
  "WordPress",
  "PHP",
  "WooCommerce",
  "MySQL",
  "CSS",
  "Elementor",
  "Lumise",
  "Stripe",
  "Razorpay",
  "Zapier",
  "CRM Integration",
  "Hostinger",
  "Bitbucket",
],

      },
      {
        title: "Comapny's Own Portfolio Website",
        description:
          "Developed the company’s portfolio website to showcase IT services and digital marketing solutions, with responsive design, dynamic content, and conversion‑focused layouts for client engagement.",
        demo: "",
       techStacks: [
  "WordPress",
  "PHP",
  "MySQL",
  "CSS",
  "Elementor",
  "Zapier",
  "CRM Integration",
  "Hostinger",
  "Bitbucket",
],

      },
    ],
  },
  {
    title: "Software Development Intern",
    company: "MITE Technology",
    companyUrl: "https://www.mitetechnology.com/",
    location: "Palakkad, India",
    type: "Internship",
    startDate: "2025-8-4",
    endDate: "2025-11-30",
    description: "Developing and maintaining modern web platforms with advanced UI features, dynamic catalog and listing systems, and interactive client workflows. Implementing scalable architectures, optimizing performance, and ensuring cross‑browser and cross‑device compatibility. Collaborating with cross‑functional teams to translate designs into production‑ready solutions, integrating user feedback into new features, and upholding coding best practices through documentation, reviews, and Git‑based version control.",
   responsibilities: [
    "Developed and maintained user interfaces for web and mobile applications.",
    "Optimized applications for performance, responsiveness, and cross-browser compatibility.",
    "Collaborated with the development team to understand requirements and implement designs according to specifications.",
    "Implemented features and functionality based on user needs and feedback.",
    "Participated in peer reviews to ensure code quality and maintainability.",
    "Contributed to collaborative development practices and project documentation.",
     ],

    skills: [
      "React",
      "Node.js",
      "WordPress",
      "PHP",
      "MySQL",
      "Git",
      "Bitbucket",
      "Payload CMS",
      "JavaScript",
      "TypeScript",
      "Canva",
      "Vercel",
      "Hostinger",
    ],
    logo: "/images/mite-logo.png",
    blogSlugs: [""],
    projects: [
      {
        title: "Website for Qatar Based Electrical Company",
        description:"Developed and branded client’s digital platform with a modern UI, dynamic catalog display, multi‑user client access, and interactive contact forms.",
        demo: "",
        techStacks: [ "WordPress", "PHP", "MySQL", "Hostinger", "Canva"],
      },
      {
        title: "Website for Real Estate Company in India",
        description: "Developed and branded a real estate platform in India with dynamic property listings, advanced search and research tools, and client‑centric UI features.",
        demo:"",
        techStacks: [ "WordPress", "PHP", "MySQL", "Hostinger", "Canva"],
      },
    ],
  },
];

export const personalInfo = {
  name: "Asim I",
  title: "Full Stack Developer",
  fullname: "Asim I",
  contact: {
    email: "aasimibr@gmail.com",
    phone: "+91 98091 70586",
    linkedin: "https://www.linkedin.com/in/asim-i",
    github: "https://github.com/i-asim",
    personalWebsite: domainPath,
    location: "Palakkad, India",
  },
  profilePicture: "/images/profile-picture.png",
  memoji: "/images/memoji.png",
  summary: `I am a developer with hands‑on experience delivering modern, scalable web applications and digital solutions. My career emphasizes performance, usability, and modular design tailored to diverse business needs. I collaborate effectively across teams, ensuring smooth workflows and efficient project delivery. I bring a strong focus on UI/UX, building reusable systems that balance technical precision with brand clarity. My work is defined by problem‑solving, adaptability, and delivering client‑centric solutions.`,
};

// Example education data
export const educations = [
  {
    degree: "Bachelors in Computer Science & Engineering",
    institution: "Anna University",
    location: "Coimbatore, India",
    startDate: "November 2020",
    endDate: "April 2024",
    description:
      "Comprehensive study of computer science and engineering principles, including programming, data structures, algorithms, databases, networking, and software development. Emphasis on practical applications through projects and internships.",
    achievements: ["Full Stack Certification -Python and MERN Stack"],
    logo: "/images/institutions/annauni.png",
    cgpa: "7.78",
    institutionUrl: "https://www.annauniv.edu/",
    documents: [
      {
        name: "Transcript",
        url: "/pdf/educations/bachelors-transcript.pdf",
      },
    ],
    techStacks: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Apache MySQL",
      "Git",
    ],
  },
  {
    degree: "Higher Secondary - Computer Science",
    institution: "BEM HSS Palakkad",
    location: "Kerala, India",
    startDate: "2018-8-05",
    endDate: "2020-3-28",
    description:
      "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java, C, and Assembly Language. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math.",
    achievements: [
      // "Graduated Summa Cum Laude",
      // "Innovation Award for Senior Project",
      // "Coding Competition Winner (2017)"
    ],
    logo: "/images/institutions/bemhss.webp",
    cgpa: "7.4",
    institutionUrl: "https://schools.org.in/palakkad/32060900720/bemhss-palakkad.html#google_vignette",
    documents: [
      {
        name: "Transcript",
        url: "/pdf/educations/hse-transcript.pdf",
      },
    ],
    techStacks: [
      "HTML",
      "CSS",
      "C Programming",
      "Java",
      "JavaScript"
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Company Portfolio Website",
    description:
      "Creative corporate portfolio for UAE markets, crafted with WordPress + Elementor for international expansion.",
    image: "/images/projects/company-website.png",
    status: "Live",
    demo: "https://mitetechnology.com",
    techStacks: ["WordPress", "PHP", "Elementor", "MySQL","VPS Hosting"],
    date: "2025",
  },
  {
    title: "Merchandise E-commerce Platform",
    description:
      "Full‑scale print-on-demand e‑commerce platform on WordPress + Elementor + WooCommerce + Lumise, powering secure global retail.",
    image: "/images/projects/merch-website.png",
    status: "Developing",
    demo: "https://ecomm.mitetechnology.in/ecomm/",
    techStacks: ["WordPress", "Woocommerce", "PHP", "Elementor", "MySQL","VPS Hosting"],
    date: "2025",
  },
  {
    title: "Personal Website",
    description:
      "A personal website portfolio built with Next.js, TailwindCSS, and Vercel",
    image: "/images/projects/portfolio.jpg",
    github: "https://github.com/i-asim/my-portfolio",
    demo: "https://iasim.vercel.app/",
    status: "Maintaining",
    techStacks: ["Next.js", "TailwindCSS", "Shadcn", "React"],
    date: "2025-11-23",
    blogSlugs: ["personal-website"],
  },
  {
    title: "Knowledge Hub - Learning Workspace",
    description:
      "Full-stack knowledge workspace built with Next.js, Node.js and Supabase. Modular workspaces, secure access, and real-time collaboration.",
    image: "/images/projects/KnowledgeHub-screenshot.jpg",
    github: "https://github.com/i-asim/knowledge-hub",
    status: "Developed, improving",
    techStacks: [
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "Node.js",
      "Vite",
      "Vercel",
      "TypeScript",
    ],
    date: "2025-11-10",
  },
  {
    title: "Weather Application Platform",
    description:
      "Weather data platform built with Next.js, TailwindCSS, and OpenWeatherAPI — modular UI, API integration, and real-time data rendering.",
    image: "/images/projects/weatherapp-screenshot.jpg",
    github: "https://github.com/i-asim/weather-platform",
    status: "Completed",
    techStacks: ["JavaScript", "HTML", "CSS", "OpenWeatherAPI"],
    date: "2025-10-20",
  },
  {
    title: "Payload CMS Project",
    description: "Learning Payload CMS — testing collections, access control, and deployment workflows.",
    image: "/images/projects/payload-screenshot.jpg",
    github:
      "https://github.com/i-asim/payload-learning",
    status: "Sandboxing",
    techStacks: ["Node.js", "MongoDB", "Payload CMS", "Next.js", "Git"],
    date: "2025-11-01",
  },
  {
    title: "Flight Tracker & Alerts System",
    description:"Flight Tracker & Alerts is a full‑stack application designed to help users search flights, set custom alerts, and receive notifications when flight conditions change. It demonstrates API orchestration, database control, and modern frontend/backend integration using production‑ready technologies.",
    github:"https://github.com/i-asim/flight-tracker",
    status: "Focusing",
    techStacks: [
      "Django REST Framework",
      "Next.js",
      "PostgreSQL",
      "OpenSky Network API",
      "Vercel",
    ],
    date: "2025-12-1",
  },
  
  {
    title: "Electrical Trading Portfolio Website",
    description:
      "Ellaborate company portfolio built with WordPress + Elementor, delivering dynamic, scalable modules.",
    image: "/images/projects/electrical-website.png",
    status: "Developing",
    demo: "",
    techStacks: ["WordPress", "PHP", "Elementor", "MySQL","VPS Hosting"],
    date: "2025",
  },
  {
    title: "Real Estate Website with Property Listings",
    description:
      "Premium real‑estate showcase built with WordPress + Elementor, featuring elegant property catalogs and lead capture.",
    image: "/images/projects/realestate-website.png",
    status: "Developing",
    demo: "" ,
    techStacks: ["WordPress", "PHP", "Elementor", "MySQL","VPS Hosting"],
    date: "2025",
  },
  
];

export const certifications = [
  {
    name: "CCNA: Networking with Cisco Routers",
    link: ``,
    issuingOrganization: "CISCO Incubator Lab",
    issueDate: "2022-11-2",
  },
  {
    name: "Full Stack with Python Programming",
    link: ``,
    issuingOrganization: "GUVI - Google Partnered",
    issueDate: "2023-10-25",
  },
  {
    name: "MongoDB Essentials - A Complete MongoDB Guide",
    link: ``,
    issuingOrganization: "Infosys Springboard",
    issueDate: "2022-11-20",
  },
  {
    name: "Node.js",
    link: "",
    issuingOrganization: "Infosys Springboard",
    issueDate: "2022-11-16",
    pdf: ``,
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "PHP"],
  frameworks: [
    "Next.js",
    "React",
    "Express",
    "Node.js",
    "React Native",
    "Django REST Framework",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB"],
  tools: ["Git", "Docker", "GitHub", "BitBucket", "Supabase"],
};
