import { _getTotalWorkingExperiences } from "@/lib/utils";
import { Experience, Project } from "@/types";

export const domainPath = "https://iasim.me";

export const experiences: Experience[] = [
  {
    title: "Junior Full Stack Developer",
    company: "MITE Technology",
    companyUrl: "https://www.mitetechnology.com/",
    location: "Palakkad, India",
    type: "Full-time",
    startDate: "2025-12-1",
    endDate: undefined,
    description:
      "Developed and maintained enterprise web applications featuring dynamic content management, responsive user interfaces, and scalable backend services. Contributed to application performance optimization, cross-browser compatibility, and full-stack feature development using React, Django, and FastAPI. Designed and implemented a company-level load testing platform using k6, Grafana, and Prometheus within a Django application, streamlining performance validation and reporting for internal teams.",
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
      "Fast API",
      "PHP",
      "MySQL",
      "Django",
      "Bitbucket",
      "Payload CMS",
      "JavaScript",
      "TypeScript",
      "k6",
      "Grafana",
      "Prometheus",
      "Vercel",
      "Hostinger",
      "AlmaLinux",
    ],
    logo: "/images/mite-logo.png",
    projects: [
      {
        title: "Enterprise Load Testing Platform",
        description:"Developed a centralized load testing platform using Django, k6, Grafana, and Prometheus to automate performance testing, reporting, and enterprise-scale validation.",
        demo:"",
        techStacks:["Django","Python","k6","Grafana","Prometheus","PostgreSQL","JavaScript","AlmaLinux"],
      },
      {
        title:"Lensman Schools",
        description:"Enterprise school e-commerce management system involving full-stack development using React, Django, and FastAPI with ongoing production maintenance.",
        demo:"",
        techStacks:["React","FastAPI","Django","PostgreSQL","JavaScript","TypeScript","Git","Bitbucket"],
      },
      {
        title:"Tickets2Me",
        description:"Event booking platform with automated deployment workflows on AlmaLinux and a Django-based testing suite.",
        demo:"",
        techStacks:["React","Django","Python","PostgreSQL","Git","Bitbucket","AlmaLinux"],
      },
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
    description: "Built and maintained responsive web and mobile interfaces while collaborating with senior developers to deliver production-ready applications. Developed reusable UI components, improved responsiveness across devices, implemented dynamic content solutions, and participated in code reviews and Git-based workflows.",
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
  summary: `I am a Full Stack Developer with professional experience building enterprise web applications, internal platforms, and digital solutions using React, Django, FastAPI, and PostgreSQL. My work focuses on developing scalable, maintainable software with an emphasis on performance, usability, and clean architecture.  I enjoy solving complex technical problems, optimizing application performance, and building reusable systems that improve development efficiency. Having worked on production SaaS platforms, school management systems, e-commerce applications, and internal engineering tools, I value writing clean, maintainable code while collaborating effectively across cross-functional teams.`,
}
// Example education data
export const educations = [
  {
    degree: "Bachelors in Computer Science & Engineering",
    institution: "Anna University",
    location: "Coimbatore, India",
    startDate: "November 2020",
    endDate: "April 2024",
    description:
      "Completed a Bachelor of Engineering in Computer Science and Engineering with coursework covering software engineering, data structures, algorithms, operating systems, databases, networking, cloud fundamentals, and full-stack application development. Applied these concepts through research projects, internships, and enterprise software development.",
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
    title: "Enterprise Load Testing Platform",
    description:
      "A centralized load testing platform built with Django, k6, Grafana, and Prometheus to automate performance testing, execute configurable load scenarios, generate HTML reports, and visualize application metrics through an intuitive web interface.",
    image: "/images/projects/load-testing-platform.png",
    status: "Production",
    demo: "",
    techStacks: [
      "Django",
      "Python",
      "k6",
      "Grafana",
      "Prometheus",
      "PostgreSQL",
      "JavaScript",
      "AlmaLinux",
    ],
    date: "2026-07-01",
  },

  {
    title: "Lensman Schools",
    description:
      "Enterprise-level school e-commerce management platform involving full-stack development using React, Django, and FastAPI. Contributed to frontend development, backend APIs, performance optimization, maintenance, and production enhancements.",
    image: "/images/projects/lensman-schools.png",
    status: "Production",
    demo: "https://lensmanschools.com/",
    techStacks: [
      "React",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "TypeScript",
      "JavaScript",
      "Git",
      "Bitbucket",
    ],
    date: "2026-04-01",
  },

  {
    title: "Tickets2Me",
    description:
      "Event booking platform with automated deployment workflows on AlmaLinux and a Django-based testing suite for application validation, deployment verification, and quality assurance.",
    image: "/images/projects/tickets2me.png",
    status: "Production",
    demo: "https://tickets2me.com/",
    techStacks: [
      "React",
      "Django",
      "Python",
      "PostgreSQL",
      "Git",
      "Bitbucket",
      "AlmaLinux",
    ],
    date: "2026-03-01",
  },

  {
    title: "Company Portfolio Website",
    description:
      "Creative corporate portfolio for UAE markets, crafted with WordPress and Elementor for international expansion.",
    image: "/images/projects/company-website.png",
    status: "Live",
    demo: "https://mitetechnology.com",
    techStacks: [
      "WordPress",
      "PHP",
      "Elementor",
      "MySQL",
      "Hostinger",
    ],
    date: "2025-12-15",
  },

  {
    title: "Digital Signage Website",
    description:
      "Digital signage solutions portfolio for UAE markets, built with WordPress and Elementor to showcase dynamic content capabilities.",
    image: "/images/projects/signage-website.webp",
    status: "Developing",
    demo: "https://signage.mitetechnology.in/",
    techStacks: [
      "WordPress",
      "PHP",
      "Elementor",
      "MySQL",
      "VPS Hosting",
    ],
    date: "2026-01-01",
  },

  {
    title: "Merchandise E-commerce Platform",
    description:
      "Full-scale print-on-demand e-commerce platform built with WordPress, WooCommerce, Elementor, and Lumise, supporting secure global retail operations.",
    image: "/images/projects/merch-website.png",
    status: "Developing",
    demo: "https://ecomm.mitetechnology.in/ecomm/",
    techStacks: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Elementor",
      "MySQL",
      "VPS Hosting",
    ],
    date: "2025-11-10",
  },

  {
    title: "Personal Website",
    description:
      "Personal portfolio built with Next.js, React, Tailwind CSS, and Vercel featuring project showcases, experience, and blog integration.",
    image: "/images/projects/portfolio.jpg",
    github: "https://github.com/i-asim/my-portfolio",
    demo: "https://iasim.vercel.app/",
    status: "Maintaining",
    techStacks: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Shadcn",
    ],
    date: "2025-11-23",
    blogSlugs: ["personal-website"],
  },

  {
    title: "Knowledge Hub - Learning Workspace",
    description:
      "Full-stack knowledge management workspace built with Next.js, Node.js, and Supabase featuring modular workspaces, secure authentication, and real-time collaboration.",
    image: "/images/projects/KnowledgeHub-screenshot.jpg",
    github: "https://github.com/i-asim/knowledge-hub",
    status: "Developed, Improving",
    techStacks: [
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "Node.js",
      "Vite",
      "TypeScript",
      "Vercel",
    ],
    date: "2025-11-10",
  },

  {
    title: "Weather Application Platform",
    description:
      "Weather application built with JavaScript and OpenWeather API featuring modular architecture, live weather updates, and responsive UI.",
    image: "/images/projects/weatherapp-screenshot.jpg",
    github: "https://github.com/i-asim/weather-platform",
    status: "Completed",
    techStacks: [
      "JavaScript",
      "HTML",
      "CSS",
      "OpenWeatherAPI",
    ],
    date: "2025-10-20",
  },

  {
    title: "Payload CMS Project",
    description:
      "Learning project exploring Payload CMS collections, access control, content management workflows, and deployment strategies.",
    image: "/images/projects/payload-screenshot.jpg",
    github: "https://github.com/i-asim/payload-learning",
    status: "Sandboxing",
    techStacks: [
      "Node.js",
      "MongoDB",
      "Payload CMS",
      "Next.js",
      "Git",
    ],
    date: "2025-11-01",
  },

  {
    title: "Flight Tracker & Alerts System",
    description:
      "Full-stack flight tracking application enabling users to search flights, configure alerts, and receive notifications using modern frontend, backend, and API integrations.",
    image: "/images/projects/flighttracker.png",
    github: "https://github.com/i-asim/flight-tracker",
    status: "Sandboxing",
    techStacks: [
      "Django REST Framework",
      "Next.js",
      "PostgreSQL",
      "OpenSky Network API",
      "Vercel",
    ],
    date: "2025-12-01",
  },

  {
    title: "Electrical Trading Portfolio Website",
    description:
      "Corporate portfolio website developed using WordPress and Elementor featuring dynamic content modules and responsive layouts.",
    image: "/images/projects/electrical-website.png",
    status: "Developing",
    demo: "",
    techStacks: [
      "WordPress",
      "PHP",
      "Elementor",
      "MySQL",
      "VPS Hosting",
    ],
    date: "2025",
  },

  {
    title: "Real Estate Website with Property Listings",
    description:
      "Real estate showcase platform with property listings, elegant search capabilities, and lead-generation features built using WordPress and Elementor.",
    image: "/images/projects/realestate-website.png",
    status: "Developing",
    demo: "",
    techStacks: [
      "WordPress",
      "PHP",
      "Elementor",
      "MySQL",
      "VPS Hosting",
    ],
    date: "2025",
  },
];

export const certifications = [
  {
    name: "CCNA: Networking with Cisco Routers",
    link: "",
    issuingOrganization: "Cisco Incubator Lab",
    issueDate: "2022-11-02",
  },
  {
    name: "Full Stack with Python Programming",
    link: "",
    issuingOrganization: "GUVI - Google Partnered",
    issueDate: "2023-10-25",
  },
  {
    name: "MongoDB Essentials - A Complete MongoDB Guide",
    link: "",
    issuingOrganization: "Infosys Springboard",
    issueDate: "2022-11-20",
  },
  {
    name: "Node.js",
    link: "",
    issuingOrganization: "Infosys Springboard",
    issueDate: "2022-11-16",
  },
];

export const skills = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "PHP",
  ],

  frameworks: [
    "React",
    "Next.js",
    "FastAPI",
    "Django",
    "Node.js",
    "WordPress",
    "Payload CMS",
  ],

  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],

  tools: [
    "Git",
    "Bitbucket",
    "k6",
    "Grafana",
    "Prometheus",
    "Vercel",
    "Hostinger",
    "AlmaLinux",
  ],
};