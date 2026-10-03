// ==============================================================================
// COMMAND PALETTE (Ctrl+K / Cmd+K Spotlight Search)
// Clean, Fast, Developer-First Navigation & Dynamic Search Engine
// ==============================================================================

(function () {
  const modal = document.getElementById('commandPaletteModal');
  const input = document.getElementById('paletteInput');
  const resultsContainer = document.getElementById('paletteResults');
  const openBtns = document.querySelectorAll('.open-palette-btn');

  if (!modal || !input || !resultsContainer) return;

  const BASE_ACTIONS = [
    {
      id: 'sec-about',
      title: 'Navigate to About & Summary',
      category: 'Navigation',
      action: () => scrollToSection('about')
    },
    {
      id: 'sec-research',
      title: 'Navigate to Research & Publications',
      category: 'Navigation',
      action: () => scrollToSection('research')
    },
    {
      id: 'sec-projects',
      title: 'Navigate to Engineering Projects',
      category: 'Navigation',
      action: () => scrollToSection('projects')
    },
    {
      id: 'sec-experience',
      title: 'Navigate to Professional Experience',
      category: 'Navigation',
      action: () => scrollToSection('experience')
    },
    {
      id: 'sec-skills',
      title: 'Navigate to Technical Skills Matrix',
      category: 'Navigation',
      action: () => scrollToSection('skills')
    },
    {
      id: 'sec-certs',
      title: 'Navigate to Certifications & Education',
      category: 'Navigation',
      action: () => scrollToSection('certifications')
    },
    {
      id: 'sec-contact',
      title: 'Navigate to Contact & Reachout',
      category: 'Navigation',
      action: () => scrollToSection('contact')
    },
    {
      id: 'act-whatsapp',
      title: 'Open WhatsApp Chat (+91 9977700059)',
      category: 'Communication',
      action: () => window.open('https://wa.me/919977700059', '_blank')
    },
    {
      id: 'act-email-direct',
      title: 'Send Email Directly (harmankohli000@gmail.com)',
      category: 'Communication',
      action: () => { window.location.href = 'mailto:harmankohli000@gmail.com'; }
    },
    {
      id: 'act-call-direct',
      title: 'Call Phone Directly (+91 9977700059)',
      category: 'Communication',
      action: () => { window.location.href = 'tel:+919977700059'; }
    },
    {
      id: 'act-theme-cyan',
      title: 'Switch Cyber Mode: Electric Cyan',
      category: 'Cyber Themes',
      action: () => {
        if (typeof window.setCyberAccent === 'function') window.setCyberAccent('cyan');
      }
    },
    {
      id: 'act-theme-emerald',
      title: 'Switch Cyber Mode: Matrix Emerald',
      category: 'Cyber Themes',
      action: () => {
        if (typeof window.setCyberAccent === 'function') window.setCyberAccent('emerald');
      }
    },
    {
      id: 'act-theme-purple',
      title: 'Switch Cyber Mode: Cyberpunk Purple',
      category: 'Cyber Themes',
      action: () => {
        if (typeof window.setCyberAccent === 'function') window.setCyberAccent('purple');
      }
    },
    {
      id: 'act-download-txt',
      title: 'Download Plain-Text ATS Resume (.txt)',
      category: 'Actions',
      action: () => {
        if (typeof window.downloadCleanResumeText === 'function') window.downloadCleanResumeText();
      }
    },
    {
      id: 'act-resume',
      title: 'Download / Print ATS Resume (PDF)',
      category: 'Actions',
      action: () => window.print()
    },
    {
      id: 'act-ats-sheet',
      title: 'Open Standalone ATS Resume Sheet',
      category: 'Actions',
      action: () => window.open('ats_resume.html', '_blank')
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email Address (harmankohli000@gmail.com)',
      category: 'Actions',
      action: () => copyToClipboard('harmankohli000@gmail.com', 'Email copied to clipboard!')
    },
    {
      id: 'act-copy-phone',
      title: 'Copy Phone Number (+91 9977700059)',
      category: 'Actions',
      action: () => copyToClipboard('+91 9977700059', 'Phone number copied to clipboard!')
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile (github.com/hsk-27)',
      category: 'Links',
      action: () => window.open('https://github.com/hsk-27', '_blank')
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Links',
      action: () => window.open('https://linkedin.com/in/harman-singh-kohli-1a5953402', '_blank')
    },
    {
      id: 'act-whatsapp-link',
      title: 'Open WhatsApp Chat (+91 9977700059)',
      category: 'Links',
      action: () => window.open('https://wa.me/919977700059', '_blank')
    }
  ];

  function getDynamicActions() {
    const list = [...BASE_ACTIONS];

    if (window.RESUME_DATA) {
      // Index Projects
      if (Array.isArray(RESUME_DATA.projects)) {
        RESUME_DATA.projects.forEach(p => {
          list.push({
            id: `proj-${p.id}`,
            title: `Project: ${p.title}`,
            category: 'Projects',
            keywords: `${p.technologies.join(' ')} ${p.category} ${p.tagline || ''}`,
            action: () => {
              if (p.id === 'indoor-nav') {
                scrollToSection('indoor-nav-card');
              } else {
                scrollToSection('projects');
              }
              if (typeof window.openProjectModal === 'function') {
                window.openProjectModal(p.id);
              }
            }
          });
        });
      }

      // Index Skills for Cross-Filtering
      if (RESUME_DATA.skills) {
        const allSkills = [
          ...(RESUME_DATA.skills.languages || []),
          ...(RESUME_DATA.skills.backend || []),
          ...(RESUME_DATA.skills.databases || RESUME_DATA.skills.database || []),
          ...(RESUME_DATA.skills.ai || []),
          ...(RESUME_DATA.skills.coreCS || []),
          ...(RESUME_DATA.skills.tools || [])
        ];

        allSkills.forEach(s => {
          const name = typeof s === 'string' ? s : s.name;
          list.push({
            id: `skill-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            title: `Filter by Skill: ${name}`,
            category: 'Skills Filter',
            keywords: `skill tech ${name}`,
            action: () => {
              if (typeof window.filterByTech === 'function') {
                window.filterByTech(name);
              }
              scrollToSection('projects');
            }
          });
        });
      }
    }

    return list;
  }

  let selectedIndex = 0;
  let currentFiltered = [];

  function openPalette() {
    modal.classList.remove('hidden');
    input.value = '';
    selectedIndex = 0;
    const actions = getDynamicActions();
    renderResults(actions);
    setTimeout(() => input.focus(), 80);
  }

  function closePalette() {
    modal.classList.add('hidden');
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function renderResults(items) {
    currentFiltered = items;
    resultsContainer.innerHTML = '';

    if (items.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-8 text-center text-slate-500 text-sm">
          No matching commands, projects, or skills found.
        </div>
      `;
      return;
    }

    items.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = `palette-item flex items-center justify-between p-3 rounded-lg border border-transparent cursor-pointer transition-all ${index === selectedIndex ? 'active' : 'hover:bg-slate-900/60'}`;
      div.innerHTML = `
        <div class="flex items-center gap-3 min-w-0 pr-2">
          <div class="w-7 h-7 rounded bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
            <span class="text-xs font-mono">⌘</span>
          </div>
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate">${item.title}</span>
        </div>
        <span class="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">${item.category}</span>
      `;

      div.addEventListener('click', () => {
        closePalette();
        item.action();
      });

      div.addEventListener('mouseenter', () => {
        selectedIndex = index;
        highlightSelected();
      });

      resultsContainer.appendChild(div);
    });

    highlightSelected();
  }

  function highlightSelected() {
    const items = resultsContainer.querySelectorAll('.palette-item');
    items.forEach((it, idx) => {
      if (idx === selectedIndex) {
        it.classList.add('active');
        it.scrollIntoView({ block: 'nearest' });
      } else {
        it.classList.remove('active');
      }
    });
  }

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    const allActions = getDynamicActions();

    if (!query) {
      selectedIndex = 0;
      renderResults(allActions);
      return;
    }

    const filtered = allActions.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const categoryMatch = item.category.toLowerCase().includes(query);
      const keywordMatch = item.keywords ? item.keywords.toLowerCase().includes(query) : false;
      return titleMatch || categoryMatch || keywordMatch;
    });

    selectedIndex = 0;
    renderResults(filtered);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        selectedIndex = (selectedIndex + 1) % currentFiltered.length;
        highlightSelected();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        selectedIndex = (selectedIndex - 1 + currentFiltered.length) % currentFiltered.length;
        highlightSelected();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered.length > 0 && currentFiltered[selectedIndex]) {
        closePalette();
        currentFiltered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    }
  });

  openBtns.forEach(btn => btn.addEventListener('click', openPalette));

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('hidden')) {
        openPalette();
      } else {
        closePalette();
      }
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePalette();
    }
  });

  window.openPalette = openPalette;
  window.closePalette = closePalette;
})();
