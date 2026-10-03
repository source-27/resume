// ==============================================================================
// RESUME DATA STORE - HARMAN SINGH KOHLI
// 100% Grounded in Candidate's Actual Resume (No Exaggerations, No Fabricated Metrics)
// ==============================================================================

const RESUME_DATA = {
  personal: {
    name: "Harman Singh Kohli",
    title: "Software Engineer | Java | Spring Boot | Backend Development | Generative AI",
    tagline: "Building reliable software systems using Java, Spring Boot, PostgreSQL, and Python.",
    location: "Nagpur, Maharashtra, India",
    phone: "+91 9977700059",
    email: "harmankohli000@gmail.com",
    linkedin: "https://linkedin.com/in/harman-singh-kohli-1a5953402",
    linkedinHandle: "harman-singh-kohli-1a5953402",
    github: "https://github.com/hsk-27",
    githubHandle: "hsk-27",
    status: "Available for Software Engineering & AI Internships / Full-Time Roles",
    bio: "Information Technology undergraduate (B.Tech.) with internship experience spanning software engineering, Java development, and AI-enabled applications. Experienced in developing software solutions using Java, Spring Boot, PostgreSQL, and Python, with a solid foundation in object-oriented programming, data structures and algorithms, databases, operating systems, and computer networks. Passionate about building reliable software systems and continuously learning modern engineering technologies.",
    stats: [
      { label: "Problem Solving", value: "150+", detail: "LeetCode problems solved" },
      { label: "Internships", value: "4", detail: "GHRCE COE, Lenovo, IBM, MainCrafts" },
      { label: "Key Projects", value: "5", detail: "Java, Spring Boot, AI & ML" },
      { label: "Education", value: "B.Tech '27", detail: "GHRCE Nagpur (IT)" }
    ]
  },

  skills: {
    languages: ["Java", "Python", "SQL"],
    backend: ["Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate", "Maven"],
    databases: ["PostgreSQL"],
    database: ["PostgreSQL"],
    ai: ["Generative AI", "Agentic AI", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"],
    coreCS: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Graph Theory"],
    tools: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Docker"]
  },

  publications: [
    {
      title: "Graph-Based Multi-Floor Indoor Navigation & Topological Pathfinding Across Complex Institutional Facilities",
      status: "Under Peer Review for IEEE / Scopus-Indexed Publication (Forthcoming)",
      venue: "IEEE / Scopus-Indexed Conference (Under Review)",
      badge: "IEEE / Scopus Indexed",
      role: "Lead Author",
      summary: "A graph-based indoor wayfinding and navigation platform for multi-level institutional campuses using SVG navigation graphs, A* shortest-path routing, and PostgreSQL graph persistence."
    }
  ],

  achievements: [
    {
      title: "150+ LeetCode Problems Solved",
      description: "Solved 150+ LeetCode problems covering Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, Greedy Algorithms, Binary Search, BFS, DFS, Stacks, Queues, Heaps, and Hashing.",
      link: "https://leetcode.com"
    }
  ],

  experience: [
    {
      id: "coe-ghrce",
      role: "Data Science Intern",
      company: "Centre of Excellence, G. H. Raisoni College of Engineering (GHRCE)",
      location: "Nagpur, India",
      period: "Jun 2026 – Present",
      status: "Current",
      highlights: [
        "Developing a graph-based indoor navigation framework using Java, Spring Boot, React, PostgreSQL, and Android.",
        "Designing REST APIs and implementing A* shortest-path routing over SVG-based multi-floor navigation graphs.",
        "Building backend modules for localization, graph management, and route computation using layered architecture.",
        "Authoring a research paper on the navigation engine currently under peer review for an IEEE / Scopus-indexed conference publication."
      ],
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Android", "A* Algorithm", "SVG Graphs", "REST APIs"]
    },
    {
      id: "lenovo-leap",
      role: "Generative AI & Agentic Systems Engineering Intern",
      company: "Lenovo India (LEAP NextGen Scholar Program, AICTE)",
      location: "Virtual / India",
      period: "May 2026 – Jul 2026",
      status: "Completed",
      highlights: [
        "Participated in the Lenovo LEAP NextGen Scholar Program focused on Generative AI, Retrieval-Augmented Generation (RAG), Prompt Engineering, and Agentic AI.",
        "Developed AI-powered capstone projects using Generative AI, Retrieval-Augmented Generation (RAG), Prompt Engineering, and Agentic AI.",
        "Presented project deliverables through mentor-led reviews and milestone evaluations."
      ],
      technologies: ["Generative AI", "Agentic AI", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Python"]
    },
    {
      id: "ibm-1m1b",
      role: "Sustainable AI Development Intern",
      company: "1M1B × IBM SkillsBuild (AICTE)",
      location: "Virtual / India",
      period: "May 2026 – Jun 2026",
      status: "Completed",
      highlights: [
        "Developed EcoLens-AI, an AI-powered sustainability auditing platform using Python, Streamlit, Plotly, and OpenAI APIs.",
        "Built AI-assisted recommendations, analytics dashboards, and automated PDF reporting aligned with the UN Sustainable Development Goals.",
        "Collaborated within the IBM SkillsBuild learning ecosystem while applying AI to real-world sustainability problems."
      ],
      technologies: ["Python", "Streamlit", "Plotly", "OpenAI API", "Dynamic PDF Reporting"]
    },
    {
      id: "maincrafts",
      role: "Java Developer Intern",
      company: "MainCrafts Technology",
      location: "India",
      period: "Apr 2026 – May 2026",
      status: "Completed",
      highlights: [
        "Developed Java applications using Object-Oriented Programming, Collections Framework, File I/O, and exception handling.",
        "Developed Java applications including employee and student management systems using OOP, Collections Framework, File I/O, CRUD operations, and modular software design.",
        "Applied debugging and clean coding practices to develop maintainable Java applications."
      ],
      technologies: ["Java", "OOP", "Collections Framework", "File I/O", "CRUD", "Debugging"]
    }
  ],

  projects: [
    {
      id: "indoor-nav",
      title: "Indoor Navigation Framework (In Development)",
      tagline: "Graph-Based Multi-Floor Routing & A* Pathfinding",
      category: "backend",
      status: "In Development",
      isKeyProject: true,
      paperBadge: "IEEE / Scopus Paper (Under Review)",
      paperTitle: "Graph-Based Multi-Floor Indoor Navigation & Topological Pathfinding Across Complex Institutional Facilities",
      paperStatus: "Under Peer Review for IEEE / Scopus-Indexed Publication",
      architecture: "SVG Floor Maps ──> Graph Topological Parser ──> A* Shortest Path Engine ──> Spring Boot REST API ──> React & Android UI",
      description: "Building a scalable indoor navigation platform for educational institutions using graph-based routing and the A* shortest-path algorithm.",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Android", "A* Algorithm", "SVG Graphs"],
      github: "https://github.com/hsk-27/IndoorNavigation",
      highlights: [
        "Building a scalable indoor navigation platform for educational institutions using graph-based routing and the A* shortest-path algorithm.",
        "Developing REST APIs, backend services, and SVG-based navigation modules with PostgreSQL graph persistence.",
        "Implementing localization, graph management, and route computation for multi-floor indoor navigation.",
        "Research paper under peer review for an IEEE / Scopus-indexed conference publication."
      ]
    },
    {
      id: "event-build",
      title: "EventBuild",
      tagline: "Spring Boot RESTful Backend & Event Management",
      category: "backend",
      status: "Completed",
      architecture: "Client HTTP Request ──> Controller Layer ──> Service & Validation ──> Spring Data JPA / Hibernate ──> PostgreSQL",
      description: "Built a Spring Boot backend for an event management platform supporting event scheduling, registrations, venue management, and ticketing.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Hibernate", "REST APIs", "Bean Validation"],
      github: "https://github.com/hsk-27/EventBuild",
      highlights: [
        "Built a Spring Boot backend for an event management platform supporting event scheduling, registrations, venue management, and ticketing.",
        "Designed RESTful APIs with pagination, filtering, DTO mapping, Bean Validation, and global exception handling.",
        "Implemented layered architecture using Controller, Service, Repository, Entity, and DTO layers with Spring Data JPA and Hibernate."
      ]
    },
    {
      id: "ecolens-ai",
      title: "EcoLens-AI",
      tagline: "AI Sustainability Auditing & UN SDG Analytics",
      category: "ai",
      status: "Completed",
      architecture: "User Audit Input ──> Streamlit UI ──> OpenAI Prompt Pipeline ──> Plotly Analytics ──> Dynamic PDF Report",
      description: "An AI-assisted sustainability auditing platform generating recommendations, analytics dashboards, and automated PDF reports across ten SDG assessment categories.",
      technologies: ["Python", "Streamlit", "Plotly", "OpenAI API"],
      github: "https://github.com/hsk-27/EcoLens-AI",
      highlights: [
        "Developed an AI-assisted sustainability auditing platform generating recommendations, analytics dashboards, and automated PDF reports across ten SDG assessment categories.",
        "Integrated OpenAI APIs to generate AI-assisted sustainability recommendations."
      ]
    },
    {
      id: "edumentor-ai",
      title: "EduMentor AI",
      tagline: "AI Educational Assistant & Interactive Study",
      category: "ai",
      status: "Completed",
      architecture: "Study Prompt / Notes ──> JavaScript Client ──> Google Gemini API ──> Concept Summarizer ──> Interactive Quiz Engine",
      description: "Built an AI-powered educational assistant supporting question answering, note summarization, quiz generation, and study assistance.",
      technologies: ["HTML", "CSS", "JavaScript", "Google Gemini API"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Built an AI-powered educational assistant supporting question answering, note summarization, quiz generation, and study assistance."
      ]
    },
    {
      id: "mirage-fraud",
      title: "Mirage Financial Fraud Detection",
      tagline: "Machine Learning Fraud Detection Pipeline",
      category: "ai",
      status: "Completed",
      architecture: "Financial Transaction Dataset ──> Preprocessing & Cleaning ──> Feature Engineering ──> ML Classifier Model ──> Fraud Risk Assessment",
      description: "Developed a machine learning pipeline for fraudulent transaction detection through preprocessing, feature engineering, model training, and predictive analysis.",
      technologies: ["Python", "Machine Learning"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Developed a machine learning pipeline for fraudulent transaction detection through preprocessing, feature engineering, model training, and predictive analysis."
      ]
    }
  ],

  certifications: [
    {
      title: "Generative AI & Agentic Systems Engineering",
      issuer: "Lenovo India (LEAP NextGen Scholar Program, AICTE)",
      date: "Jul 2026"
    },
    {
      title: "ServiceNow University Virtual Internship Program (CSA Learning Track)",
      issuer: "ServiceNow University",
      date: "May 2026"
    },
    {
      title: "Journey to Cloud: Envisioning Your Solution",
      issuer: "IBM SkillsBuild",
      date: "Jul 2026"
    },
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "Jun 2026"
    },
    {
      title: "Getting Started with CyberSecurity",
      issuer: "IBM SkillsBuild",
      date: "Jun 2026"
    }
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech.) — Information Technology",
    institution: "G. H. Raisoni College of Engineering (GHRCE), Nagpur",
    period: "2023 – 2027",
    coursework: "Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering"
  }
};
