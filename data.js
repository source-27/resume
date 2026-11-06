// ==============================================================================
// RESUME DATA STORE - HARMAN SINGH KOHLI
// 100% Strictly Grounded in Candidate's Authentic Resume (November 2026)
// ==============================================================================

const RESUME_DATA = {
  personal: {
    name: "Harman Singh Kohli",
    title: "Information Technology Undergraduate | Software & Technology",
    headline: "Java, Python & TypeScript | Backend, Distributed Systems & AI",
    tagline: "Information Technology undergraduate with a broad technical foundation spanning Java, Python, TypeScript, Spring Boot, React, and Distributed Systems.",
    location: "Nagpur, Maharashtra, India",
    phone: "+91 99777 00059",
    email: "harmankohli000@gmail.com",
    linkedin: "https://linkedin.com/in/harman-singh-kohli-1a5953402",
    linkedinHandle: "harman-singh-kohli-1a5953402",
    github: "https://github.com/hsk-27",
    githubHandle: "hsk-27",
    status: "Available for Software Engineering, Backend & Systems Roles",
    bio: "Information Technology undergraduate with a broad technical foundation spanning Java, Python and TypeScript programming; backend/API engineering and relational databases; React-based frontend development; and data structures and algorithms/DSA. Additional areas include data analytics and processing, software testing and developer tools, AWS and distributed systems, application security, AI/LLM integration with RAG, and core CS fundamentals in OOP, SOLID, JVM, concurrency, operating systems and computer networks.",
    stats: [
      { label: "Problem Solving", value: "150+", detail: "LeetCode problems solved" },
      { label: "Internships", value: "5", detail: "GHRCE COE, VOIS / DoT, Lenovo, IBM, MainCrafts" },
      { label: "Key Projects", value: "6", detail: "Distributed Systems, Backend & AI" },
      { label: "Education & CGPA", value: "7.04 CGPA", detail: "B.Tech IT '27 • GHRCE Nagpur" }
    ]
  },

  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    frontend: ["HTML", "CSS", "React", "Hooks", "Routing", "Forms", "API Integration"],
    backend: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "Dependency Injection", "DTOs", "Validation", "Pagination", "OpenAPI", "JWT", "RBAC"],
    databases: ["PostgreSQL", "Relational Schema Design", "Normalization", "Joins", "Indexing", "Transactions", "ACID"],
    database: ["PostgreSQL", "Relational Schema Design", "Normalization", "Joins", "Indexing", "Transactions", "ACID"],
    dsa: ["Arrays", "Strings", "Hashing", "Sorting", "Binary Search", "Two Pointers", "Sliding Window", "Linked Lists", "Stacks/Queues", "Trees", "Heaps", "Graphs", "BFS/DFS", "Recursion", "Greedy", "DP", "Backtracking"],
    testingAndTools: ["JUnit 5", "Mockito", "Integration Testing", "Postman", "Flyway", "Git/GitHub", "Maven", "Linux", "Docker/Compose", "GitHub Actions"],
    toolsTesting: ["JUnit 5", "Mockito", "Integration Testing", "Postman", "Flyway", "Git/GitHub", "Maven", "Linux", "Docker/Compose", "GitHub Actions"],
    cloudAndDistributed: ["AWS Fundamentals (EC2, S3, RDS, VPC, IAM, CloudWatch, ALB, Auto Scaling)", "Microservices Fundamentals", "Asynchronous Messaging", "Resilience Patterns", "Idempotency Fundamentals", "Transactional Outbox"],
    cloudDistributed: ["AWS Fundamentals (EC2, S3, RDS, VPC, IAM, CloudWatch, ALB, Auto Scaling)", "Microservices Fundamentals", "Asynchronous Messaging", "Resilience Patterns", "Idempotency Fundamentals", "Transactional Outbox"],
    securityAndAI: ["Authentication", "Authorization", "OWASP Top 10 (Overview)", "API Security", "LLM APIs", "Prompt Engineering", "Structured Outputs", "Tool Calling", "Embeddings", "RAG"],
    securityAI: ["Authentication", "Authorization", "OWASP Top 10 (Overview)", "API Security", "LLM APIs", "Prompt Engineering", "Structured Outputs", "Tool Calling", "Embeddings", "RAG"],
    coreCS: ["OOP", "SOLID", "JVM", "Concurrency", "Operating Systems", "Computer Networks", "HTTP", "DNS", "TCP", "TLS"],
    tools: ["Git/GitHub", "Maven", "Linux", "Docker/Compose", "Postman", "Flyway", "GitHub Actions", "IntelliJ IDEA", "VS Code"],
    ai: ["LLM APIs", "Prompt Engineering", "Structured Outputs", "Tool Calling", "Embeddings", "RAG", "Data Analytics"]
  },

  publications: [
    {
      title: "Application-Assisted Real-Time Indoor Navigation with IMU-Based PDR and Topological Localization",
      status: "Accepted for ICEET 2026 (Istanbul; IEEE Xplore) and publication in ComSIA 2027 proceedings (Springer LNNS)",
      venue: "ICEET 2026 (Istanbul; IEEE Xplore) & ComSIA 2027 (Springer LNNS)",
      badge: "Accepted • IEEE Xplore & Springer LNNS",
      role: "Lead Author",
      summary: "A real-time smartphone-based indoor-navigation framework built from scratch using IMU-based Pedestrian Dead Reckoning (PDR), graph-constrained topological positioning, and A* shortest-path routing over SVG campus floor plans with a Dockerized backend (no dedicated positioning hardware required)."
    }
  ],

  achievements: [
    {
      title: "150+ LeetCode Problems Solved",
      description: "Solved 150+ LeetCode problems covering Arrays, Strings, Hashing, Sorting, Binary Search, Two Pointers, Sliding Window, Linked Lists, Stacks/Queues, Trees, Heaps, Graphs, BFS/DFS, Recursion, Greedy, DP, and Backtracking.",
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
        "Built a real-time smartphone-based indoor-navigation framework from scratch using IMU-based PDR, REST APIs and a Dockerized backend; no dedicated positioning hardware required.",
        "Designed REST APIs and implemented graph-constrained topological positioning, graph snapping, and A* shortest-path routing over multi-floor SVG maps.",
        "Accepted for ICEET 2026 conference presentation (Istanbul; IEEE Xplore) and publication in ComSIA 2027 proceedings (Springer LNNS)."
      ],
      technologies: ["Java", "Spring Boot", "React/TypeScript", "PostgreSQL", "SVG", "Docker", "Spring Security", "IMU-Based PDR", "A* Algorithm"]
    },
    {
      id: "vois-dot",
      role: "Data Analytics Intern",
      company: "Vodafone Idea (VOIS) , TIRTC, BRBRAITT & DoT (Government of India)",
      location: "Virtual / India",
      period: "Aug – Oct 2026",
      status: "Completed",
      highlights: [
        "Used Python, SQL and Linux for data processing, database queries and analytical workflows.",
        "Performed data extraction, validation, and multi-dimensional analysis on large operational datasets.",
        "Collaborated within the AICTE and VOIS for Tech University Engagement Program across telecommunications and government training divisions."
      ],
      technologies: ["Python", "SQL", "Linux", "Data Processing", "Database Queries", "Analytical Workflows"]
    },
    {
      id: "lenovo-leap",
      role: "Generative AI & Agentic Systems Intern",
      company: "Lenovo India – LEAP NextGen Scholar Program (AICTE)",
      location: "Virtual / India",
      period: "May – Jul 2026",
      status: "Completed",
      highlights: [
        "Completed practical work in generative AI, RAG, prompt engineering and agentic systems; earned Grade B.",
        "Implemented structured output generation, contextual retrieval pipelines, and autonomous agentic workflows.",
        "Delivered technical milestones and project demonstrations reviewed by industry engineering mentors."
      ],
      technologies: ["Generative AI", "RAG", "Prompt Engineering", "Agentic Systems", "Python", "LLM APIs"]
    },
    {
      id: "ibm-1m1b",
      role: "Sustainable AI Development Intern",
      company: "1M1B / IBM SkillsBuild (AICTE)",
      location: "Virtual / India",
      period: "May – Jun 2026",
      status: "Completed",
      highlights: [
        "Built sustainability dashboards and PDF reports using Python, Streamlit, Plotly and Gemini APIs.",
        "Engineered AI-assisted diagnostic evaluation tools aligned with UN Sustainable Development Goals.",
        "Implemented automated dynamic reporting pipelines converting audit metrics into publication-ready PDF summaries."
      ],
      technologies: ["Python", "Streamlit", "Plotly", "Gemini API", "Dynamic PDF Generation"]
    },
    {
      id: "maincrafts",
      role: "Java Developer Intern",
      company: "MainCrafts Technology",
      location: "India",
      period: "Apr – May 2026",
      status: "Completed",
      highlights: [
        "Built Java applications using OOP, collections, file I/O, exception handling and CRUD operations.",
        "Implemented clean software modularity, unit debugging, and persistent data operations.",
        "Applied standard design principles and test-driven fixes across core Java projects."
      ],
      technologies: ["Java", "OOP", "Collections Framework", "File I/O", "Exception Handling", "CRUD Operations"]
    }
  ],

  projects: [
    {
      id: "indoor-nav",
      title: "Indoor Navigation Framework",
      tagline: "Multi-floor indoor navigation using SVG maps, graph-constrained positioning, graph snapping and A* routing",
      category: "systems",
      status: "Accepted IEEE & Springer Paper",
      isKeyProject: true,
      paperBadge: "Accepted • IEEE Xplore & Springer LNNS",
      paperTitle: "Application-Assisted Real-Time Indoor Navigation with IMU-Based PDR and Topological Localization",
      paperStatus: "Accepted for ICEET 2026 (Istanbul; IEEE Xplore) and ComSIA 2027 (Springer LNNS)",
      architecture: "Smartphone IMU Sensors ──> PDR & Graph Snapping ──> A* Shortest-Path Engine ──> Spring Boot REST API ──> React/TypeScript & SVG UI",
      description: "Built a real-time smartphone-based indoor-navigation framework from scratch using IMU-based PDR, REST APIs and a Dockerized backend; no dedicated positioning hardware required. Supports multi-floor SVG maps, graph-constrained positioning, graph snapping, and A* routing.",
      technologies: ["Java", "Spring Boot", "React/TypeScript", "PostgreSQL", "SVG", "Docker", "Spring Security"],
      github: "https://github.com/hsk-27/IndoorNavigation",
      highlights: [
        "Built a real-time smartphone-based indoor-navigation framework from scratch using IMU-based PDR, REST APIs and a Dockerized backend; no dedicated positioning hardware required.",
        "Multi-floor indoor navigation using SVG maps, graph-constrained positioning, graph snapping and A* routing.",
        "Accepted for ICEET 2026 conference presentation (Istanbul; IEEE Xplore) and publication in ComSIA 2027 proceedings (Springer LNNS)."
      ]
    },
    {
      id: "hireflow",
      title: "HireFlow",
      tagline: "Multi-tenant ATS with tenant isolation, eligibility screening, interview scorecards and offer workflows",
      category: "backend",
      status: "Completed",
      architecture: "Recruiter & Candidate UI ──> Spring Security Multi-Tenant Filter ──> Tenant Schema/Row Isolation ──> Scoring & Screening Engine ──> PostgreSQL & Docker",
      description: "Multi-tenant applicant tracking system designed with enterprise-grade tenant isolation, automated candidate eligibility screening, structured interview scorecards, and multi-stage offer approval workflows.",
      technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "React/TypeScript", "Python", "Docker"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Engineered multi-tenant isolation with Spring Security, protecting tenant boundaries across job postings, candidates, and interviewer notes.",
        "Implemented automated eligibility screening, interview scorecard aggregation, and configurable offer generation workflows.",
        "Containerized with Docker for uniform deployment across development, staging, and production environments."
      ]
    },
    {
      id: "stockflow",
      title: "StockFlow",
      tagline: "Multi-vendor commerce backend with atomic inventory reservation, idempotent checkout, payment-state handling and transactional outbox (63 tests)",
      category: "backend",
      status: "Completed • 63 Tests",
      architecture: "Checkout Request ──> Idempotency Key Validation ──> Atomic Inventory Reservation ──> Transactional Outbox Pattern ──> PostgreSQL & Flyway",
      description: "Multi-vendor commerce backend with atomic inventory reservation, idempotent checkout, payment-state handling, and transactional outbox; thoroughly verified with 63 comprehensive tests.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Flyway"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Implemented atomic inventory reservation to eliminate overselling and race conditions under concurrent checkout traffic.",
        "Engineered idempotent checkout handling with payment-state machine transitions, preventing duplicate charges.",
        "Adopted the Transactional Outbox pattern with Flyway database migrations and 63 automated unit and integration tests."
      ]
    },
    {
      id: "opspilot",
      title: "OpsPilot",
      tagline: "Invoice automation using structured AI extraction, deterministic financial validation, purchase-order matching and durable approvals",
      category: "ai",
      status: "Completed",
      architecture: "Invoice PDF Ingestion ──> Gemini LLM Structured Extraction ──> Deterministic Financial Rules & PO Matching ──> Spring Boot Durable Approvals ──> PostgreSQL",
      description: "Enterprise invoice automation system using structured AI extraction, deterministic financial validation rules, purchase-order (PO) matching, and durable approval workflows.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React/TypeScript", "Gemini API", "Docker Compose"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Integrated Gemini LLM APIs with strict JSON schema constraints for structured extraction of line-items, tax rates, and vendor entities.",
        "Designed deterministic financial validation algorithms to reconcile line-item arithmetic and execute three-way purchase-order matching.",
        "Constructed durable multi-stage approval state machines with audit logging, PostgreSQL persistence, and Docker Compose orchestration."
      ]
    },
    {
      id: "taskforge",
      title: "TaskForge",
      tagline: "Concurrent job-processing system with worker pools, bounded queues, backpressure, retries and failure recovery (52 tests)",
      category: "backend",
      status: "Completed • 52 Tests",
      architecture: "Job Dispatcher ──> Bounded Work Queues with Backpressure ──> Worker Thread Pools & Retry Policies ──> Server-Sent Events (SSE) ──> Live Dashboard",
      description: "Concurrent job-processing system featuring worker pools, bounded queues, backpressure management, exponential backoff retries, and failure recovery; verified with 52 concurrency tests.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React/TypeScript", "Server-Sent Events"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Architected concurrent job processing using dedicated worker thread pools and bounded queues to safely absorb load spikes.",
        "Engineered reactive backpressure mechanisms, configurable retry policies with exponential backoff, and dead-letter failure recovery.",
        "Streamed real-time execution telemetry to React/TypeScript dashboards via Server-Sent Events (SSE); verified with 52 tests."
      ]
    },
    {
      id: "blueops",
      title: "BlueOps (In Progress)",
      tagline: "SIEM/SOAR prototype for telemetry ingestion, 18 Sigma detections mapped to MITRE ATT&CK, attack correlation and signed, reversible response actions",
      category: "systems",
      status: "In Progress",
      architecture: "Endpoint Telemetry Ingestion ──> OpenSearch Indexing ──> Sigma Detection Engine (18 Rules mapped to MITRE ATT&CK) ──> SOAR Automated Response Engine",
      description: "SIEM/SOAR cybersecurity prototype for security telemetry ingestion, 18 Sigma detections mapped to MITRE ATT&CK, multi-stage attack correlation, and cryptographically signed, reversible response actions.",
      technologies: ["Java", "Spring Boot", "React/TypeScript", "OpenSearch", "PostgreSQL", "Python", "Docker"],
      github: "https://github.com/hsk-27",
      highlights: [
        "Engineered telemetry ingestion and search pipelines indexing security events and authentication logs in OpenSearch.",
        "Implemented 18 Sigma detection rules mapped directly to the MITRE ATT&CK framework for alert classification and attack correlation.",
        "Built automated SOAR playbooks executing cryptographically signed, reversible response actions (e.g., host isolation, token revocation)."
      ]
    }
  ],

  certifications: [
    {
      title: "EY & Microsoft AI Skills Passport (2026)",
      issuer: "EY & Microsoft",
      date: "2026"
    },
    {
      title: "ServiceNow University CSA Learning Track",
      issuer: "ServiceNow University",
      date: "May 2026"
    },
    {
      title: "IBM SkillsBuild (Cybersecurity, AI, Cloud)",
      issuer: "IBM SkillsBuild",
      date: "Jul 2026"
    }
  ],

  education: {
    degree: "B.Tech, Information Technology",
    cgpa: "7.04",
    fullDegree: "B.Tech, Information Technology | CGPA – 7.04",
    institution: "G. H. Raisoni College of Engineering (GHRCE), Nagpur",
    period: "2023 - 2027",
    coursework: [
      "Data Structures & Algorithms",
      "Relational Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Concurrency & OOP",
      "Cloud & Distributed Systems Fundamentals"
    ]
  }
};
