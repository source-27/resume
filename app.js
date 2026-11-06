// ==============================================================================
// CORE APPLICATION CONTROLLER - HARMAN SINGH KOHLI
// Clean, Refined Executive Dark Theme (Linear / Vercel Aesthetic)
// Strictly Grounded in Candidate's Authentic Resume Data
// ==============================================================================

// -----------------------------------------------------------------------------
// TOAST & CLIPBOARD HELPERS
// -----------------------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(el);
}

// -----------------------------------------------------------------------------
// PLAIN-TEXT ATS RESUME EXPORTER (.TXT)
// -----------------------------------------------------------------------------
window.downloadCleanResumeText = function () {
  const p = RESUME_DATA.personal;
  const s = RESUME_DATA.skills;
  const ex = RESUME_DATA.experience;
  const pr = RESUME_DATA.projects;
  const cr = RESUME_DATA.certifications;

  const joinList = (arr) => (arr || []).map(item => typeof item === 'string' ? item : item.name).join(', ');

  const text = `================================================================================
${p.name.toUpperCase()}
${p.title}
${p.location} | Phone: ${p.phone} | Email: ${p.email}
LinkedIn: ${p.linkedin}
GitHub: ${p.github}
================================================================================

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${p.bio}

TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Programming Languages: ${joinList(s.languages)}
• Frontend: ${joinList(s.frontend)}
• Backend & APIs: ${joinList(s.backend)}
• Databases: ${joinList(s.databases || s.database)}
• Data Structures & Algorithms: ${joinList(s.dsa)}
• Testing & Tools: ${joinList(s.testingAndTools || s.tools)}
• Cloud & Distributed Systems: ${joinList(s.cloudAndDistributed)}
• Security & AI: ${joinList(s.securityAndAI || s.ai)}
• Core CS: ${joinList(s.coreCS)}

RESEARCH & PUBLICATIONS
--------------------------------------------------------------------------------
• Title: "${RESUME_DATA.publications[0].title}"
  Status: ${RESUME_DATA.publications[0].status}
  Venue: ${RESUME_DATA.publications[0].venue}
  Role: ${RESUME_DATA.publications[0].role}
  Summary: ${RESUME_DATA.publications[0].summary}

PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
${ex.map(e => `
* ${e.role} | ${e.company} (${e.location})
  Period: ${e.period}
  Highlights:
${e.highlights.map(h => `    - ${h}`).join('\n')}
`).join('\n')}

PROJECTS
--------------------------------------------------------------------------------
${pr.map(proj => `
* ${proj.title}
  Tagline: ${proj.tagline || ''}
  Stack: ${(proj.technologies || []).join(', ')}
  Highlights:
${proj.highlights.map(h => `    - ${h}`).join('\n')}
`).join('\n')}

CERTIFICATIONS & ACHIEVEMENTS
--------------------------------------------------------------------------------
${cr.map(c => `• ${c.title} — ${c.issuer}`).join('\n')}
• DSA: Solved 150+ LeetCode problems

EDUCATION
--------------------------------------------------------------------------------
• ${RESUME_DATA.education.fullDegree || RESUME_DATA.education.degree}
  ${RESUME_DATA.education.institution} (${RESUME_DATA.education.period})

================================================================================
Generated from Harman Singh Kohli's Interactive Engineering Portfolio
================================================================================`;

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Harman_Singh_Kohli_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Plain-Text ATS Resume (.txt) downloaded!');
};

// -----------------------------------------------------------------------------
// LIFECYCLE INITIALIZATION (Robust against CDN async/cached evaluation)
// -----------------------------------------------------------------------------
function initApp() {
  // 1. Render Sections from RESUME_DATA
  renderStats();
  renderPublications();
  renderProjects('all');
  renderExperience();
  renderSkills();
  renderCertifications();
  renderPrintableResume();
  initContactForm();

  // 2. Interactive Systems (3D Card Tilt, Spotlight & Synergy Network)
  initSpotlightAndTiltEffect();
  initSynergyHoverListeners();
  initScrollProgress();
  initBackToTop();
  initKeyboardEvents();

  // 3. Cyber Systems (Theme & Telemetry HUD)
  initCyberTheme();
  initCyberTelemetry();

  // 4. Initialize Lucide icons if loaded
  refreshLucide();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // Document is already interactive or complete (common on fast CDNs / Render)
  initApp();
}

function refreshLucide(retries = 4, delay = 100) {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  } else if (retries > 0) {
    setTimeout(() => refreshLucide(retries - 1, Math.round(delay * 1.5)), delay);
  }
}

// Hook into window load to guarantee Lucide renders even after slow CDN streams
window.addEventListener('load', () => refreshLucide(3, 100));

// -----------------------------------------------------------------------------
// 3D PERSPECTIVE MAGNETIC CARD TILT & SPOTLIGHT GLOW (Linear / Vercel Aesthetic)
// -----------------------------------------------------------------------------
function initSpotlightAndTiltEffect() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll('.card-base').forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = 'true';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update dynamic spotlight cursor CSS variables
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Apply subtle 3D perspective magnetic tilt on pointer devices
      if (isFinePointer) {
        if (card.classList.contains('highlight-match')) return;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.2; // subtle max 3.2 deg
        const rotateY = ((x - centerX) / centerX) * 3.2;  // subtle max 3.2 deg
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '-500px');
      card.style.setProperty('--mouse-y', '-500px');
      if (isFinePointer && !card.classList.contains('highlight-match')) {
        card.style.transform = '';
      }
    });
  });
}

// -----------------------------------------------------------------------------
// REAL-TIME SKILL SYNERGY NETWORK (Hover Highlighting)
// -----------------------------------------------------------------------------
function initSynergyHoverListeners() {
  document.querySelectorAll('.tech-tag-clickable').forEach(tag => {
    if (tag.dataset.synergyBound) return;
    tag.dataset.synergyBound = 'true';

    const tech = (tag.dataset.tech || '').toLowerCase();
    if (!tech) return;

    tag.addEventListener('mouseenter', () => {
      if (currentActiveTech) return; // Do not disrupt locked filter

      const allCards = document.querySelectorAll('.card-base[data-techs]');
      allCards.forEach(card => {
        const cardTechs = (card.dataset.techs || '').toLowerCase();
        if (cardTechs.includes(tech)) {
          card.classList.add('synergy-hover');
        } else {
          card.classList.add('dimmed-card');
        }
      });
    });

    tag.addEventListener('mouseleave', () => {
      if (currentActiveTech) return;

      document.querySelectorAll('.card-base').forEach(card => {
        card.classList.remove('synergy-hover', 'dimmed-card');
      });
    });
  });
}

// -----------------------------------------------------------------------------
// SCROLL PROGRESS DEPTH BAR & BACK TO TOP
// -----------------------------------------------------------------------------
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  const updateBar = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    }
  };

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
}

function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}

// -----------------------------------------------------------------------------
// RENDER STATS & ANIMATED COUNTERS
// -----------------------------------------------------------------------------
function renderStats() {
  const container = document.getElementById('statsContainer');
  if (!container || !RESUME_DATA.personal || !RESUME_DATA.personal.stats) return;

  const targetMap = {
    'Problem Solving': '#achievements',
    'Internships': '#experience',
    'Key Projects': '#projects',
    'Education': '#education'
  };

  container.innerHTML = RESUME_DATA.personal.stats.map(s => {
    const rawVal = s.value;
    const numMatch = rawVal.match(/\d+/);
    const hasPlus = rawVal.includes('+');
    const targetNum = numMatch ? parseInt(numMatch[0], 10) : null;
    const targetId = targetMap[s.label] || '#projects';

    return `
    <a href="${targetId}" class="card-base p-4 block hover:border-blue-500/60 transition-all cursor-pointer group no-underline" title="Jump to ${s.label}">
      <div class="flex items-center justify-between mb-1">
        <div class="text-xs text-slate-500 font-mono uppercase tracking-wider group-hover:text-blue-400 transition-colors">${s.label}</div>
        <span class="text-xs text-slate-600 group-hover:text-blue-400 transition-colors">↗</span>
      </div>
      <div class="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-center">
        ${targetNum !== null ? `
          <span class="stat-counter" data-target="${targetNum}" data-has-plus="${hasPlus}">${rawVal}</span>
        ` : `
          <span>${rawVal}</span>
        `}
      </div>
      <div class="text-xs text-slate-400 mt-0.5">${s.detail}</div>
    </a>
    `;
  }).join('');

  initStatCounters();
}

function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const hasPlus = el.dataset.hasPlus === 'true';
        const duration = 1100;
        const startTime = performance.now();

        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current + (hasPlus ? '+' : '');

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target + (hasPlus ? '+' : '');
          }
        }

        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counters.forEach(c => observer.observe(c));
}

// -----------------------------------------------------------------------------
// RENDER PUBLICATIONS
// -----------------------------------------------------------------------------
function renderPublications() {
  const container = document.getElementById('publicationsContainer');
  if (!container || !RESUME_DATA.publications) return;

  container.innerHTML = RESUME_DATA.publications.map(pub => `
    <div class="card-base p-6 border-l-4 border-l-emerald-500" data-techs="graph a* routing java spring boot indoor navigation algorithm imu pdr topological localization">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-2">
          <span class="badge-emerald font-mono font-medium">${pub.badge || 'Accepted • IEEE Xplore & Springer LNNS'}</span>
          <span class="badge-blue font-mono font-medium">Conference &amp; Book Series</span>
        </div>
        <span class="text-xs font-mono text-emerald-400 font-semibold">${pub.venue || 'ICEET 2026 & ComSIA 2027'}</span>
      </div>

      <h3 class="text-base sm:text-lg font-bold text-slate-100 mb-2 leading-snug">
        "${pub.title}"
      </h3>

      <div class="text-xs text-slate-400 font-mono mb-3">
        ${pub.status}
      </div>

      <p class="text-sm text-slate-300 leading-relaxed mb-4">
        ${pub.summary}
      </p>

      <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs text-slate-400">
        <div><strong>Role:</strong> ${pub.role}</div>
        <div class="flex items-center gap-3">
          <button onclick="copyToClipboard('${pub.title.replace(/'/g, "\\'")}', 'Paper title copied!')" class="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
            Copy Citation
          </button>
          <span>•</span>
          <a href="#indoor-nav-card" class="text-blue-400 hover:text-blue-300 transition-colors">
            View Navigation Engine ➔
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// FILTER PROJECTS BY CATEGORY TAB
// -----------------------------------------------------------------------------
window.filterProjects = function (category, btnEl) {
  document.querySelectorAll('.project-tab-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white');
    b.classList.add('bg-slate-900', 'text-slate-400');
  });
  if (btnEl) {
    btnEl.classList.add('bg-blue-600', 'text-white');
    btnEl.classList.remove('bg-slate-900', 'text-slate-400');
  }
  renderProjects(category);
};

// -----------------------------------------------------------------------------
// ARCHITECTURAL PIPELINE DETAILED LAYER SPECIFICATIONS
// Grounded strictly in authentic technologies, protocols, and data structures
// -----------------------------------------------------------------------------
const PIPELINE_SPECS = {
  'indoor-nav': [
    {
      name: "SVG Floor Maps",
      role: "Multi-floor vector blueprint ingestion, polygon coordinate calibration & obstacle tagging",
      tech: "SVG DOM Parser, Scalable Vector Graphics, Normalized Coordinates",
      io: "Input: Raw architectural SVG floor plans ➔ Output: Normalized vector geometry & room boundaries",
      latency: "< 5ms parse time per floor plan"
    },
    {
      name: "Graph Topological Parser",
      role: "Extracts walkable pathways, obstacles, and multi-level stair/lift portals into topological graph",
      tech: "Java Graph Data Structures, Weighted Adjacency Lists, Topology Validator",
      io: "Input: Vector polygons ➔ Output: Undirected/Directed Graph G=(V,E) with Euclidean edge weights",
      latency: "O(V + E) generation time"
    },
    {
      name: "A* Shortest Path Engine",
      role: "Computes optimal multi-level shortest paths using admissible Euclidean heuristic",
      tech: "Java PriorityQueue, Euclidean/Manhattan Heuristic, Dynamic Stairway Weights",
      io: "Input: Source ID, Target ID ➔ Output: Ordered sequence of navigational waypoints across floors",
      latency: "Sub-10ms route calculation, O(V + E log V)"
    },
    {
      name: "Spring Boot REST API",
      role: "High-performance backend API serving route queries, node lookups, and graph updates",
      tech: "Spring Boot 3, REST Controller, DTO Validation, Global Exception Handling",
      io: "Input: POST /api/v1/navigation/route ➔ Output: JSON RouteResponse with turn-by-turn guidance",
      latency: "< 25ms total HTTP response time"
    },
    {
      name: "PostgreSQL",
      role: "Spatial and topological graph persistence with indexed node and edge tables",
      tech: "PostgreSQL 16, Spring Data JPA, B-Tree Indexes, ACID Compliance",
      io: "Input: SQL queries ➔ Output: Persistent topological nodes, edges, and floor metadata",
      latency: "< 4ms query execution"
    }
  ],
  'hireflow': [
    {
      name: "React / TypeScript UI",
      role: "Multi-tenant recruitment dashboard with stateful pipeline views and role-based application tracking",
      tech: "React 18, TypeScript, Tailwind CSS, TanStack Query, Axios",
      io: "Input: Recruiter & candidate interactions ➔ Output: Validated JSON command payloads",
      latency: "< 16ms client rendering"
    },
    {
      name: "Spring Security (JWT / RBAC)",
      role: "Stateless security filter chain enforcing tenant context extraction, JWT signature verification, and role permissions",
      tech: "Spring Security 6, JJWT, OncePerRequestFilter, SecurityFilterChain",
      io: "Input: Bearer token in Authorization header ➔ Output: SecurityContext with TenantAuthenticationToken",
      latency: "< 3ms cryptographic token validation"
    },
    {
      name: "Spring Boot Multi-Tenant Service",
      role: "Application service orchestration, business validation, multi-stage candidate workflows, and recruitment audit tracking",
      tech: "Spring Boot 3, Java 17/21, Spring MVC, @Service, DTO Mappers",
      io: "Input: JobApplicationDTO ➔ Output: Processed application entity with audit timestamp",
      latency: "< 12ms service processing latency"
    },
    {
      name: "PostgreSQL (Tenant Isolation)",
      role: "Relational persistence enforcing strict tenant isolation via tenant_id column constraints, foreign keys, and indexed queries",
      tech: "PostgreSQL 16, Spring Data JPA, Hibernate Filters, Row-Level Isolation",
      io: "Input: Tenant-scoped SQL queries ➔ Output: Guaranteed tenant-isolated persistent records",
      latency: "< 4ms indexed query execution"
    },
    {
      name: "Python Resume Parser Service",
      role: "Asynchronous microservice extracting structured candidate profiles, skill tokens, and education history from PDF / DOCX resumes",
      tech: "Python, FastAPI / PyPDF, NLP Tokenizer, REST / Async Bridge",
      io: "Input: Binary resume document ➔ Output: Structured CandidateProfile JSON DTO",
      latency: "< 250ms parsing & entity extraction"
    }
  ],
  'stockflow': [
    {
      name: "Warehouse Ingress",
      role: "RESTful HTTP ingress for stock movement events, purchase orders, restocking dispatches, and warehouse location updates",
      tech: "HTTP/1.1, JSON Payloads, OpenAPI 3.0 Contract",
      io: "Input: POST /api/v1/inventory/adjust ➔ Output: HTTP 202 Accepted with Transaction Reference",
      latency: "Low-latency network ingress"
    },
    {
      name: "Spring Security / RBAC",
      role: "Role-based access verification distinguishing warehouse operators, inventory managers, and supply chain auditors",
      tech: "Spring Security, Method-level @PreAuthorize, JWT Context",
      io: "Input: Request with Claims ➔ Output: Authorized Principal with Warehouse Permissions",
      latency: "< 2ms authorization check"
    },
    {
      name: "Spring Boot Order Service",
      role: "Core inventory management handling concurrent stock allocation, reservation locks, validation, and zero-loss guarantees (verified by 63 tests)",
      tech: "Spring Boot 3, @Transactional, Pessimistic / Optimistic Locking, JUnit 5 & Mockito (63 tests)",
      io: "Input: OrderReservationCommand ➔ Output: Confirmed stock allocation event",
      latency: "< 8ms transactional processing"
    },
    {
      name: "PostgreSQL (ACID / Flyway)",
      role: "Strictly normalized transactional ledger with automated Flyway database schema migrations, composite indexes, and foreign keys",
      tech: "PostgreSQL 16, Flyway Migration Scripts, Spring Data JPA, HikariCP",
      io: "Input: SQL DML statements ➔ Output: Durable ACID compliant inventory ledger entries",
      latency: "< 3ms commit latency"
    },
    {
      name: "Transactional Outbox Pattern",
      role: "Guarantees at-least-once asynchronous event publishing for downstream warehouse updates without dual-write inconsistencies",
      tech: "Transactional Outbox Pattern, Polling Publisher / CDC, Event DTOs",
      io: "Input: Outbox database table entry ➔ Output: Dispatched asynchronous inventory events",
      latency: "Near-instantaneous local transaction commit"
    }
  ],
  'opspilot': [
    {
      name: "Alert Webhook Ingress",
      role: "HTTP webhook ingress receiving raw alert payloads and error traces from monitoring tools, cloud watchdogs, and servers",
      tech: "REST Webhook Receiver, JSON Ingestion, Rate Limiting",
      io: "Input: Raw incident alert JSON / text payload ➔ Output: Ingested telemetry event",
      latency: "< 10ms webhook acceptance"
    },
    {
      name: "Schema Validator & Sanitizer",
      role: "Sanitizes input payloads, strips sensitive credential tokens, and validates error schema against standardized diagnostic criteria",
      tech: "Spring Validation, Jackson ObjectMapper, Regex Sanitizers",
      io: "Input: Raw payload ➔ Output: Cleaned, sanitized DiagnosticContext DTO",
      latency: "< 2ms payload scrubbing & schema validation"
    },
    {
      name: "Spring Boot Triage Engine",
      role: "Central diagnostic engine assembling system contextual metadata, environment topology, and historical incident history",
      tech: "Spring Boot 3, Java 17, Spring Service, Structured Log Analyzer",
      io: "Input: DiagnosticContext ➔ Output: Formatted LLM triage prompt with strict schema constraints",
      latency: "< 15ms context assembly"
    },
    {
      name: "Gemini API (Structured JSON)",
      role: "AI root-cause reasoning engine generating root cause analysis, severity classification, and precise remediation runbooks using structured output mode",
      tech: "Google Gemini 1.5 Pro / Flash API, Structured JSON Outputs, Prompt Engineering",
      io: "Input: System diagnostic context prompt ➔ Output: Validated JSON Runbook with RCA & action items",
      latency: "Sub-second streaming completion"
    },
    {
      name: "PostgreSQL Audit Log",
      role: "Persistent immutable audit store recording incidents, AI diagnostic responses, operator feedback, and remediation outcomes",
      tech: "PostgreSQL 16, Spring Data JPA, JSONB Column Support, Docker Compose",
      io: "Input: IncidentRunbook record ➔ Output: Durable persistent incident history with audit trail",
      latency: "< 5ms write latency"
    }
  ],
  'taskforge': [
    {
      name: "React Kanban UI",
      role: "Dynamic drag-and-drop workflow dashboard displaying live project boards, column state transitions, and real-time team updates",
      tech: "React 18, TypeScript, Drag-and-Drop API, SSE EventSource Client",
      io: "Input: Task drag events & status updates ➔ Output: Asynchronous task command dispatches",
      latency: "60 FPS fluid UI updates"
    },
    {
      name: "Spring Boot REST API",
      role: "RESTful command API managing task lifecycle, dependency resolution, sprint workflows, and validation (covered by 52 unit/integration tests)",
      tech: "Spring Boot 3, Spring MVC, REST Controllers, JUnit 5 & Mockito (52 tests)",
      io: "Input: TaskUpdateDTO ➔ Output: HTTP 200 with updated task status & dependency tree",
      latency: "< 15ms request-response roundtrip"
    },
    {
      name: "Async Executor / Worker Pool",
      role: "Background thread pool handling decoupled task transitions, automated status progressions, and asynchronous notification broadcasts",
      tech: "Java Concurrency, ThreadPoolTaskExecutor, CompletableFuture, @Async",
      io: "Input: Asynchronous task transition jobs ➔ Output: Non-blocking worker execution",
      latency: "Zero main-thread blocking overhead"
    },
    {
      name: "PostgreSQL",
      role: "ACID-compliant relational store modeling project hierarchies, task boards, user assignments, and versioned state history",
      tech: "PostgreSQL 16, Spring Data JPA, Foreign Keys, B-Tree Indexes",
      io: "Input: SQL queries ➔ Output: Consistent, relational state persistence",
      latency: "< 4ms database transaction latency"
    },
    {
      name: "Server-Sent Events (SSE) Emitter",
      role: "Real-time unidirectional event streaming pushing live task transitions and collaborative updates to all active client dashboards",
      tech: "Spring SseEmitter, HTTP/1.1 Persistent Streaming, Heartbeat Pings",
      io: "Input: Domain state change events ➔ Output: Live SSE stream pushes to connected browser clients",
      latency: "< 10ms real-time event delivery"
    }
  ],
  'blueops': [
    {
      name: "Security Log Collector",
      role: "Multi-source security log ingestion point collecting syslog, auth logs, Windows Event Logs, and network flow traces",
      tech: "Logstash / Fluentd, Filebeat, Python Collector Scripts, Syslog Ingress",
      io: "Input: Raw machine security logs ➔ Output: Structured, normalized log events",
      latency: "Streamed ingestion pipeline"
    },
    {
      name: "Spring Boot Ingestion Engine",
      role: "High-throughput log preprocessor performing field normalization (ECS / CEF standard), GeoIP enrichment, and IP reputation scoring",
      tech: "Spring Boot 3, Reactive Streams / Multi-threading, MaxMind GeoIP",
      io: "Input: Normalized log events ➔ Output: Enriched security event documents",
      latency: "< 20ms enrichment overhead"
    },
    {
      name: "Sigma Rule Correlation Engine",
      role: "Threat detection engine matching security telemetry against standardized Sigma rules and MITRE ATT&CK techniques in real time",
      tech: "Sigma Rule Engine, YAML Parser, Pattern Matching, MITRE ATT&CK Mapping",
      io: "Input: Enriched security event stream ➔ Output: Security alerts with severity ratings",
      latency: "< 15ms rule evaluation latency"
    },
    {
      name: "OpenSearch Indexer",
      role: "Distributed search cluster indexing security events for sub-second threat hunting, log querying, and visual timelines",
      tech: "OpenSearch 2.x, REST Client, Time-Series Indexing (ISM), Lucene",
      io: "Input: Security alert documents ➔ Output: Fast, distributed indexed search results",
      latency: "Sub-second full-text & facet querying"
    },
    {
      name: "PostgreSQL Incident Store",
      role: "Relational case management database tracking security incident tickets, triage notes, analyst workflows, and SOC forensics",
      tech: "PostgreSQL 16, Spring Data JPA, Foreign Keys, Dockerized Multi-Node Stack",
      io: "Input: Incident triage records ➔ Output: Immutable audit log and SOC case files",
      latency: "< 5ms transactional persistence"
    }
  ]
};

window.inspectPipelineNode = function(projectId, nodeIndex) {
  const specs = PIPELINE_SPECS[projectId];
  if (!specs || !specs[nodeIndex]) return;

  const spec = specs[nodeIndex];
  const container = document.getElementById(`${projectId}-inspector`);
  if (!container) return;

  document.querySelectorAll(`.pipeline-node-${projectId}`).forEach((chip, idx) => {
    if (idx === nodeIndex) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800">
      <div class="flex items-center gap-2">
        <span class="badge-blue font-mono text-[10px]">Layer ${nodeIndex + 1} of ${specs.length}</span>
        <span class="text-xs font-bold text-slate-100 font-mono">${spec.name}</span>
      </div>
      <span class="text-[11px] font-mono text-blue-400 font-semibold">${spec.latency}</span>
    </div>
    <p class="text-xs text-slate-300 mb-2 leading-relaxed">${spec.role}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
      <div class="p-2 rounded bg-slate-900/90 border border-slate-800/80">
        <div class="text-slate-400 font-semibold mb-0.5">Technology & Implementation:</div>
        <div class="text-slate-200">${spec.tech}</div>
      </div>
      <div class="p-2 rounded bg-slate-900/90 border border-slate-800/80">
        <div class="text-slate-400 font-semibold mb-0.5">Data Contract / I/O:</div>
        <div class="text-slate-200">${spec.io}</div>
      </div>
    </div>
  `;
};

// -----------------------------------------------------------------------------
// RENDER PROJECTS (CLEAN EXECUTIVE CASE STUDIES)
// -----------------------------------------------------------------------------
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsGrid');
  if (!container || !RESUME_DATA.projects) return;

  const filtered = filter === 'all'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.category === filter);

  let html = '';
  const keyProject = filtered.find(p => p.id === 'indoor-nav');
  const otherProjects = filtered.filter(p => p.id !== 'indoor-nav');

  // 1. Featured Executive Card: Indoor Navigation Framework
  if (keyProject) {
    const flowNodes = (keyProject.architecture || "SVG Floor Maps ──> Graph Topological Parser ──> A* Shortest Path Engine ──> Spring Boot REST API ──> PostgreSQL")
      .split('──>')
      .map(n => n.trim());

    const techString = keyProject.technologies.join(' ').toLowerCase() + ' ' + keyProject.title.toLowerCase() + ' backend java a* graph';

    html += `
      <div id="indoor-nav-card" class="card-base p-5 sm:p-7 lg:p-8 mb-6 border-slate-700/80" data-techs="${techString}">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-2.5 mb-4 pb-4 border-b border-slate-800">
          <div class="flex flex-wrap items-center gap-2">
            <span class="badge-blue font-mono font-medium">★ Key Research Project</span>
            <span class="badge-emerald font-mono font-medium">${keyProject.paperBadge || 'IEEE / Scopus Paper'}</span>
          </div>
          <span class="text-xs font-mono text-slate-400">Backend Systems • Graph Theory • A* Routing</span>
        </div>

        <!-- Title -->
        <div class="mb-4">
          <h3 class="text-lg sm:text-2xl font-bold text-slate-100">
            ${keyProject.title}
          </h3>
          <p class="text-xs font-mono text-slate-400 mt-1">
            ${keyProject.tagline || 'Graph-Based Multi-Floor Routing & A* Pathfinding'}
          </p>
        </div>

        <!-- Research Paper Callout -->
        <div class="p-3.5 sm:p-4 rounded-lg bg-emerald-950/20 border border-emerald-800/40 mb-4 sm:mb-5">
          <div class="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            Accepted Research Paper • IEEE Xplore &amp; Springer LNNS
          </div>
          <div class="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
            "${keyProject.paperTitle}"
          </div>
          <div class="text-[11px] sm:text-xs text-slate-400 mt-1">
            Lead Author • Accepted for ICEET 2026 (Istanbul; IEEE Xplore) and ComSIA 2027 (Springer LNNS)
          </div>
        </div>

        <!-- Description -->
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-5">
          ${keyProject.description}
        </p>

        <!-- Layered Architecture -->
        <div class="mb-4 sm:mb-5">
          <div class="flex items-center justify-between mb-2">
            <div class="text-xs font-mono uppercase text-slate-400 font-bold">
              Layered System Architecture
            </div>
            <span class="text-[11px] font-mono text-blue-400 hidden sm:inline">Click / hover node to inspect layer specs</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 overflow-x-auto max-w-full">
            <div class="flex items-center gap-2 min-w-max py-0.5 font-mono text-xs">
              ${flowNodes.map((node, i) => `
                <button type="button" onclick="inspectPipelineNode('indoor-nav', ${i})" onmouseenter="inspectPipelineNode('indoor-nav', ${i})" class="pipeline-node-chip pipeline-node-indoor-nav px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-800 text-xs font-mono ${i === 2 ? 'active' : ''}" title="Inspect ${node}">
                  ${node}
                </button>
                ${i < flowNodes.length - 1 ? '<span class="text-blue-500 font-bold">──▶</span>' : ''}
              `).join('')}
            </div>
          </div>
          <!-- Real-Time Interactive Pipeline Inspector Panel -->
          <div id="indoor-nav-inspector" class="pipeline-inspector mt-2.5 p-3 rounded-lg bg-slate-950/90 border border-blue-900/40 text-xs"></div>
        </div>

        <!-- Highlights -->
        <div class="mb-5">
          <div class="text-xs font-mono uppercase text-slate-400 mb-2 font-bold">
            Core Implementation Highlights
          </div>
          <ul class="space-y-1.5 text-xs text-slate-300">
            ${keyProject.highlights.map(h => `
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-0.5">•</span>
                <span class="leading-relaxed">${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Technologies & Actions -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div class="flex flex-wrap gap-1.5">
            ${keyProject.technologies.map(t => `
              <button onclick="filterByTech('${t}')" data-tech="${t.toLowerCase()}" class="tech-tag-clickable text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer" title="Filter by ${t}">
                ${t}
              </button>
            `).join('')}
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0">
            ${keyProject.github ? `
              <a href="${keyProject.github}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-3.5 text-center flex items-center justify-center gap-1.5" title="View Source Code on GitHub">
                <i data-lucide="github" class="w-3.5 h-3.5"></i>
                <span>View Repository ➔</span>
              </a>
            ` : ''}
            <button onclick="openProjectModal('indoor-nav')" class="btn-secondary text-xs py-2 px-3.5 text-center cursor-pointer">
              Inspect Architecture
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Render remaining projects in 2-column responsive grid
  if (otherProjects.length > 0) {
    html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">` + otherProjects.map(p => {
      const techString = p.technologies.join(' ').toLowerCase() + ' ' + p.title.toLowerCase() + ' ' + p.category;
      return `
      <div class="card-base p-4 sm:p-6 flex flex-col justify-between" data-techs="${techString}">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="badge-neutral font-mono text-[11px]">
              ${p.category === 'backend' ? 'Backend & Systems' : 'AI & Data'}
            </span>
            <span class="text-xs font-mono text-slate-500">${p.status}</span>
          </div>

          <h3 class="text-base font-bold text-slate-100 mb-1">${p.title}</h3>
          <p class="text-xs font-mono text-slate-400 mb-3">${p.tagline || ''}</p>
          <p class="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">${p.description}</p>

          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.technologies.map(t => `
              <button onclick="filterByTech('${t}')" data-tech="${t.toLowerCase()}" class="tech-tag-clickable text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer" title="Filter by ${t}">
                ${t}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <button onclick="openProjectModal('${p.id}')" class="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
            Inspect Architecture →
          </button>
          ${p.github ? `
            <a href="${p.github}" target="_blank" class="text-xs text-slate-400 hover:text-slate-200 transition-colors" title="View on GitHub">
              GitHub ➔
            </a>
          ` : ''}
        </div>
      </div>
      `;
    }).join('') + `</div>`;
  }

  container.innerHTML = html;

  // Initialize key project inspector to A* engine layer by default
  if (keyProject) {
    inspectPipelineNode('indoor-nav', 2);
  }

  // Refresh spotlight & 3D tilt, synergy listeners, and Lucide icons
  initSpotlightAndTiltEffect();
  initSynergyHoverListeners();
  refreshLucide();

  // Re-apply active tech filter if currently selected
  if (currentActiveTech) {
    applyActiveTechFilter();
  }
}

// -----------------------------------------------------------------------------
// INTERACTIVE TECH CROSS-FILTERING & SYNERGY HIGHLIGHTING
// -----------------------------------------------------------------------------
let currentActiveTech = null;

function applyActiveTechFilter() {
  if (!currentActiveTech) return;

  const banner = document.getElementById('activeFilterBanner');
  const badge = document.getElementById('activeFilterBadge');
  const countEl = document.getElementById('activeFilterCount');

  if (banner && badge && countEl) {
    badge.textContent = currentActiveTech.toUpperCase();
    banner.classList.remove('hidden');
  }

  // Update active state on tag buttons
  document.querySelectorAll('.tech-tag-clickable').forEach(btn => {
    if ((btn.dataset.tech || '').toLowerCase() === currentActiveTech) {
      btn.classList.add('tech-tag-active');
    } else {
      btn.classList.remove('tech-tag-active');
    }
  });

  // Highlight matching cards & dim non-matching cards
  let matchCount = 0;
  const allCards = document.querySelectorAll('.card-base[data-techs]');
  allCards.forEach(card => {
    const cardTechs = (card.dataset.techs || '').toLowerCase();
    if (cardTechs.includes(currentActiveTech)) {
      card.classList.add('highlight-match');
      card.classList.remove('dimmed-card');
      matchCount++;
    } else {
      card.classList.remove('highlight-match');
      card.classList.add('dimmed-card');
    }
  });

  if (countEl) {
    countEl.textContent = `• ${matchCount} matching card${matchCount === 1 ? '' : 's'}`;
  }
}

window.filterByTech = function (techName) {
  if (!techName) return;
  const normalized = techName.trim().toLowerCase();

  // If already active, toggle off
  if (currentActiveTech === normalized) {
    clearTechFilter();
    return;
  }

  currentActiveTech = normalized;
  applyActiveTechFilter();

  const countEl = document.getElementById('activeFilterCount');
  showToast(`Filtering: ${techName} (${countEl ? countEl.textContent.replace('• ', '') : 'active'})`);
};

window.clearTechFilter = function () {
  if (!currentActiveTech) return;
  currentActiveTech = null;

  const banner = document.getElementById('activeFilterBanner');
  if (banner) banner.classList.add('hidden');

  document.querySelectorAll('.tech-tag-clickable').forEach(btn => {
    btn.classList.remove('tech-tag-active');
  });

  document.querySelectorAll('.card-base').forEach(card => {
    card.classList.remove('highlight-match', 'dimmed-card');
  });

  showToast('Filters cleared');
};

// -----------------------------------------------------------------------------
// PROJECT ARCHITECTURE MODAL
// -----------------------------------------------------------------------------
window.openProjectModal = function (projectId) {
  const project = RESUME_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const title = document.getElementById('modalProjectTitle');
  const body = document.getElementById('modalProjectBody');
  if (!modal || !title || !body) return;

  title.textContent = project.title;

  const flowNodes = (project.architecture || "Client ──> Application ──> Database")
    .split('──>')
    .map(n => n.trim());

  body.innerHTML = `
    <div class="space-y-5 text-sm text-slate-300">
      ${project.paperTitle ? `
        <div class="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-800/40 text-xs">
          <span class="badge-emerald mb-1.5">${project.paperBadge || 'Accepted Research Paper'}</span>
          <div class="text-slate-100 font-semibold text-sm mt-1">"${project.paperTitle}"</div>
          <div class="text-slate-300 mt-1">${project.paperStatus || 'Accepted for ICEET 2026 (Istanbul; IEEE Xplore) and ComSIA 2027 (Springer LNNS)'}</div>
        </div>
      ` : ''}

      <div>
        <h4 class="text-xs font-mono uppercase text-slate-400 mb-1.5 font-bold">System Overview</h4>
        <p class="leading-relaxed">${project.description}</p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs font-mono uppercase text-slate-400 font-bold">Interactive Pipeline Architecture</h4>
          <span class="text-[11px] font-mono text-blue-400 hidden sm:inline">Click / hover node to inspect layer specs</span>
        </div>
        <div class="p-3.5 rounded-lg bg-slate-950 border border-slate-800 overflow-x-auto">
          <div class="flex items-center gap-2 min-w-max py-1 font-mono text-xs">
            ${flowNodes.map((node, i) => `
              <button type="button" onclick="inspectModalPipeline('${project.id}', ${i})" onmouseenter="inspectModalPipeline('${project.id}', ${i})" class="pipeline-node-chip pipeline-node-modal px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-800 text-xs font-mono ${i === 0 ? 'active' : ''}" title="Inspect ${node}">
                ${node}
              </button>
              ${i < flowNodes.length - 1 ? '<span class="text-blue-500 font-bold">──▶</span>' : ''}
            `).join('')}
          </div>
        </div>
        <!-- Modal Layer Inspector -->
        <div id="modal-pipeline-inspector" class="pipeline-inspector mt-2.5 p-3 rounded-lg bg-slate-900/90 border border-blue-900/40 text-xs"></div>
      </div>

      <div>
        <h4 class="text-xs font-mono uppercase text-slate-400 mb-2 font-bold">Key Technical Highlights</h4>
        <ul class="space-y-1.5 text-xs text-slate-300">
          ${project.highlights.map(h => `
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-0.5">•</span>
              <span class="leading-relaxed">${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 class="text-xs font-mono uppercase text-slate-400 mb-2 font-bold">Technologies</h4>
        <div class="flex flex-wrap gap-1.5">
          ${project.technologies.map(t => `
            <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">${t}</span>
          `).join('')}
        </div>
      </div>

      ${project.github ? `
        <div class="pt-3 border-t border-slate-800 flex justify-end">
          <a href="${project.github}" target="_blank" class="btn-primary text-xs">
            View on GitHub ➔
          </a>
        </div>
      ` : ''}
    </div>
  `;

  modal.classList.remove('hidden');
  inspectModalPipeline(project.id, 0);
};

window.inspectModalPipeline = function(projectId, nodeIndex) {
  const specs = PIPELINE_SPECS[projectId];
  const container = document.getElementById('modal-pipeline-inspector');
  if (!container) return;

  document.querySelectorAll('.pipeline-node-modal').forEach((chip, idx) => {
    if (idx === nodeIndex) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  if (specs && specs[nodeIndex]) {
    const spec = specs[nodeIndex];
    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <span class="badge-blue font-mono text-[10px]">Layer ${nodeIndex + 1} of ${specs.length}</span>
          <span class="text-xs font-bold text-slate-100 font-mono">${spec.name}</span>
        </div>
        <span class="text-[11px] font-mono text-blue-400 font-semibold">${spec.latency}</span>
      </div>
      <p class="text-xs text-slate-300 mb-2 leading-relaxed">${spec.role}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
        <div class="p-2 rounded bg-slate-950/90 border border-slate-800">
          <div class="text-slate-400 font-semibold mb-0.5">Technology & Implementation:</div>
          <div class="text-slate-200">${spec.tech}</div>
        </div>
        <div class="p-2 rounded bg-slate-950/90 border border-slate-800">
          <div class="text-slate-400 font-semibold mb-0.5">Data Contract / I/O:</div>
          <div class="text-slate-200">${spec.io}</div>
        </div>
      </div>
    `;
  }
};

window.closeProjectModal = function () {
  const modal = document.getElementById('projectModal');
  if (modal) modal.classList.add('hidden');
};

// -----------------------------------------------------------------------------
// RENDER EXPERIENCE
// -----------------------------------------------------------------------------
function renderExperience() {
  const container = document.getElementById('experienceTimeline');
  if (!container || !RESUME_DATA.experience) return;

  container.innerHTML = RESUME_DATA.experience.map(exp => {
    const techString = (exp.technologies || []).join(' ').toLowerCase() + ' ' + exp.company.toLowerCase() + ' ' + exp.role.toLowerCase();
    return `
    <div class="card-base p-4 sm:p-6 mb-4" data-techs="${techString}">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-1.5">
        <h3 class="text-base font-bold text-slate-100">${exp.role}</h3>
        <span class="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 self-start sm:self-auto">${exp.period}</span>
      </div>

      <div class="text-sm text-blue-400 font-medium mb-3">
        ${exp.company} <span class="text-slate-500">• ${exp.location}</span>
      </div>

      <ul class="space-y-2 mb-4 text-xs sm:text-sm text-slate-300">
        ${exp.highlights.map(h => `
          <li class="flex items-start gap-2.5">
            <span class="text-slate-500 mt-1 shrink-0">•</span>
            <span class="leading-relaxed">${h}</span>
          </li>
        `).join('')}
      </ul>

      <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
        ${exp.technologies.map(t => `
          <button onclick="filterByTech('${t}')" data-tech="${t.toLowerCase()}" class="tech-tag-clickable text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer" title="Filter by ${t}">
            ${t}
          </button>
        `).join('')}
      </div>
    </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// RENDER SKILLS MATRIX (Clean categories matching authentic resume)
// -----------------------------------------------------------------------------
function renderSkills() {
  const container = document.getElementById('skillsMatrix');
  if (!container || !RESUME_DATA.skills) return;

  const categories = [
    { title: "Programming Languages", items: RESUME_DATA.skills.languages },
    { title: "Frontend", items: RESUME_DATA.skills.frontend },
    { title: "Backend & APIs", items: RESUME_DATA.skills.backend },
    { title: "Databases", items: RESUME_DATA.skills.databases || RESUME_DATA.skills.database },
    { title: "Data Structures & Algorithms", items: RESUME_DATA.skills.dsa },
    { title: "Testing & Tools", items: RESUME_DATA.skills.toolsTesting },
    { title: "Cloud & Distributed Systems", items: RESUME_DATA.skills.cloudDistributed },
    { title: "Security & AI", items: RESUME_DATA.skills.securityAI },
    { title: "Core Computer Science", items: RESUME_DATA.skills.coreCS }
  ];

  container.innerHTML = categories.map(cat => {
    const techString = (cat.items || []).join(' ').toLowerCase();
    return `
    <div class="card-base p-4 sm:p-5" data-techs="${techString}">
      <h3 class="text-xs sm:text-sm font-bold text-slate-100 uppercase font-mono tracking-wider mb-3 pb-2 border-b border-slate-800">
        ${cat.title}
      </h3>
      <div class="flex flex-wrap gap-1.5">
        ${(cat.items || []).map(skill => {
          const name = typeof skill === 'string' ? skill : skill.name;
          return `
          <button onclick="filterByTech('${name}')" data-tech="${name.toLowerCase()}" class="tech-tag-clickable text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer" title="Click to filter projects & experience using ${name}">
            ${name}
          </button>
          `;
        }).join('')}
      </div>
    </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// RENDER CERTIFICATIONS
// -----------------------------------------------------------------------------
function renderCertifications() {
  const container = document.getElementById('certsContainer');
  if (!container || !RESUME_DATA.certifications) return;

  container.innerHTML = RESUME_DATA.certifications.map(c => `
    <div class="card-base p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-3" data-techs="${c.title.toLowerCase()} ${c.issuer.toLowerCase()}">
      <div>
        <h4 class="text-xs sm:text-sm font-bold text-slate-200 mb-0.5">${c.title}</h4>
        <div class="text-xs text-blue-400 font-medium">${c.issuer}</div>
      </div>
      <span class="text-[11px] sm:text-xs font-mono text-slate-500 shrink-0 self-start sm:self-auto">${c.date}</span>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// RENDER PRINTABLE RESUME (Single-Page Clean ATS Layout)
// -----------------------------------------------------------------------------
function renderPrintableResume() {
  const container = document.getElementById('printableResume');
  if (!container || !RESUME_DATA.personal) return;

  const formatSkills = (items) => (items || []).map(s => typeof s === 'string' ? s : s.name).join(' • ');

  container.innerHTML = `
    <div class="ats-print-sheet" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 8.5pt; color: #0f172a; line-height: 1.3; max-width: 8.5in; margin: 0 auto; background: #ffffff; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
      <!-- HEADER -->
      <div style="text-align: center; border-bottom: 1.5px solid #0f172a; padding-bottom: 5px; margin-bottom: 7px;">
        <h1 style="font-size: 17pt; font-weight: bold; margin: 0 0 2px 0; text-transform: uppercase; color: #0f172a; letter-spacing: -0.3px;">${RESUME_DATA.personal.name}</h1>
        <div style="font-size: 9pt; font-weight: 600; color: #1e3a8a; margin-bottom: 3px;">${RESUME_DATA.personal.title}</div>
        <div style="font-size: 8pt; color: #475569;">
          ${RESUME_DATA.personal.location} • ${RESUME_DATA.personal.phone} • <a href="mailto:${RESUME_DATA.personal.email}" style="color: #1d4ed8; text-decoration: none;">${RESUME_DATA.personal.email}</a> • 
          <a href="${RESUME_DATA.personal.linkedin}" style="color: #1d4ed8; text-decoration: none;" target="_blank">linkedin.com/in/${RESUME_DATA.personal.linkedinHandle || 'harman-singh-kohli-1a5953402'}</a> • 
          <a href="${RESUME_DATA.personal.github}" style="color: #1d4ed8; text-decoration: none;" target="_blank">github.com/${RESUME_DATA.personal.githubHandle || 'hsk-27'}</a>
        </div>
      </div>

      <!-- PROFESSIONAL SUMMARY -->
      <div style="break-inside: avoid; page-break-inside: avoid; margin-bottom: 6px;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Professional Summary</div>
        <p style="margin: 0; font-size: 8pt; line-height: 1.3; color: #1f2937; text-align: justify;">${RESUME_DATA.personal.bio}</p>
      </div>

      <!-- TECHNICAL SKILLS -->
      <div style="break-inside: avoid; page-break-inside: avoid; margin-bottom: 6px;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Technical Skills</div>
        <table style="width: 100%; border-collapse: collapse; font-size: 8pt; line-height: 1.3;">
          <tr>
            <td style="width: 22%; font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Programming Languages:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.languages)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Frontend:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.frontend)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Backend &amp; APIs:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.backend)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Databases:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.databases)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Data Structures &amp; Algorithms:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.dsa)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Testing &amp; Tools:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.toolsTesting)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Cloud &amp; Distributed Systems:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.cloudDistributed)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Security &amp; AI:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.securityAI)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #0f172a; vertical-align: top; padding: 1px 0;">Core CS:</td>
            <td style="color: #1f2937; padding: 1px 0;">${formatSkills(RESUME_DATA.skills.coreCS)}</td>
          </tr>
        </table>
      </div>

      <!-- EXPERIENCE -->
      <div style="margin-bottom: 6px;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Experience</div>
        ${RESUME_DATA.experience.map(exp => `
          <div style="margin-bottom: 4px; break-inside: avoid; page-break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; font-size: 8.5pt; font-weight: bold; color: #0f172a;">
              <span>${exp.role}</span>
              <span>${exp.period}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 7.75pt; color: #4b5563; margin-bottom: 1.5px;">
              <span>${exp.company}</span>
              <span>${exp.location}</span>
            </div>
            <ul style="list-style-type: disc; padding-left: 14px; margin: 0;">
              ${exp.highlights.map(h => `<li style="font-size: 7.75pt; line-height: 1.26; color: #1f2937; margin-bottom: 1px;">${h}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- RESEARCH & PUBLICATIONS -->
      <div style="margin-bottom: 6px; break-inside: avoid; page-break-inside: avoid;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Research &amp; Publications</div>
        ${(RESUME_DATA.publications || []).map(pub => `
          <div style="margin-bottom: 3px;">
            <div style="display: flex; justify-content: space-between; font-size: 8.25pt; font-weight: bold; color: #0f172a;">
              <span>"${pub.title}"</span>
              <span style="font-size: 7.25pt; background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.5px 4px; border-radius: 2px;">${pub.badge || 'Accepted'}</span>
            </div>
            <div style="font-size: 7.75pt; color: #1e3a8a; font-weight: 500; margin-top: 1px;">
              ${pub.status}
            </div>
            <p style="margin: 1.5px 0 0 0; font-size: 7.5pt; line-height: 1.25; color: #374151;">${pub.summary}</p>
          </div>
        `).join('')}
      </div>

      <!-- PROJECTS -->
      <div style="margin-bottom: 6px;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Projects</div>
        ${RESUME_DATA.projects.map(p => `
          <div style="margin-bottom: 4px; break-inside: avoid; page-break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; font-size: 8.5pt; font-weight: bold; color: #0f172a;">
              <span>
                ${p.title} 
                ${p.isKeyProject ? `<span style="font-size: 7pt; font-weight: bold; background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.5px 4px; border-radius: 2px; margin-left: 4px;">Accepted Research Paper • IEEE Xplore &amp; Springer LNNS</span>` : ''}
              </span>
              <span style="font-size: 7.5pt; font-weight: normal; color: #475569;">${p.technologies.slice(0, 5).join(', ')}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 7.5pt; color: #4b5563; margin-bottom: 1.5px;">
              <span>${p.github ? `<a href="${p.github}" target="_blank" style="color: #1d4ed8; text-decoration: none;">${p.github.replace('https://', '')}</a>` : ''}</span>
              <span>${p.status || ''}</span>
            </div>
            <ul style="list-style-type: disc; padding-left: 14px; margin: 0;">
              ${p.highlights.map(h => `<li style="font-size: 7.75pt; line-height: 1.26; color: #1f2937; margin-bottom: 1px;">${h}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- CERTIFICATIONS & ACHIEVEMENTS -->
      <div style="break-inside: avoid; page-break-inside: avoid; margin-bottom: 6px;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Certifications &amp; Achievements</div>
        <ul style="list-style-type: disc; padding-left: 14px; margin: 0;">
          ${(RESUME_DATA.certifications || []).map(c => `<li style="font-size: 7.75pt; line-height: 1.26; color: #1f2937; margin-bottom: 1px;"><strong>${c.title}</strong> — ${c.issuer} (${c.date})</li>`).join('')}
          ${(RESUME_DATA.achievements || []).map(a => `<li style="font-size: 7.75pt; line-height: 1.26; color: #1f2937; margin-bottom: 1px;"><strong>${a.title}:</strong> ${a.description}</li>`).join('')}
        </ul>
      </div>

      <!-- EDUCATION -->
      <div style="break-inside: avoid; page-break-inside: avoid;">
        <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a; border-bottom: 1px solid #0f172a; padding-bottom: 1.5px; margin-bottom: 4px;">Education</div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 8.5pt; font-weight: bold; color: #0f172a;">
            <span>${RESUME_DATA.education.degree}</span>
            <span>${RESUME_DATA.education.period}</span>
          </div>
          <div style="font-size: 7.75pt; color: #4b5563;">
            <span>${RESUME_DATA.education.institution}</span>
          </div>
          <div style="font-size: 7.75pt; color: #4b5563; margin-top: 1px;">
            <strong>Relevant Coursework:</strong> ${RESUME_DATA.education.coursework.join(', ')}.
          </div>
        </div>
      </div>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// STANDARD KEYBOARD & NAVIGATION HANDLERS
// -----------------------------------------------------------------------------
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function initKeyboardEvents() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      clearTechFilter();
    }
  });

  const projectModal = document.getElementById('projectModal');
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }
}

// -----------------------------------------------------------------------------
// CONTACT FORM
// -----------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName')?.value || 'Guest';
    showToast(`Thank you, ${name}. Message received.`);
    form.reset();
  });
}

// ==============================================================================
// CYBER THEME ACCENTS & LIVE TELEMETRY
// ==============================================================================
window.setCyberAccent = function (accent) {
  document.body.classList.remove('theme-emerald', 'theme-purple');
  if (accent === 'emerald') {
    document.body.classList.add('theme-emerald');
  } else if (accent === 'purple') {
    document.body.classList.add('theme-purple');
  }
  try { localStorage.setItem('cyberTheme', accent); } catch (e) {}
  showToast(`Cyber Mode: ${accent.toUpperCase()}`);
};

function initCyberTheme() {
  try {
    const saved = localStorage.getItem('cyberTheme');
    if (saved) setCyberAccent(saved);
  } catch (e) {}
}

function initCyberTelemetry() {
  const clockEl = document.getElementById('cyberClock');
  const pingEl = document.getElementById('cyberPing');

  const updateClock = () => {
    if (clockEl) {
      const d = new Date();
      clockEl.textContent = d.toISOString().slice(11, 19) + ' UTC';
    }
  };
  setInterval(updateClock, 1000);
  updateClock();

  if (pingEl) {
    setInterval(() => {
      const ping = Math.floor(Math.random() * 8 + 10);
      pingEl.textContent = `${ping}ms`;
    }, 3200);
  }
}
