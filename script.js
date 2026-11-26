/**
 * ===================================================================
 * Fastfolio Style Portfolio Logic - Dhwij Patil
 * Inspired by https://fastfolio.framer.website/
 * 2-Column Grid Layout & Subtle Moving Background Elements
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA !== 'undefined') {
    renderFastfolio(PORTFOLIO_DATA);
  }

  initNavScroll();
  initTheme();
  initProjectFilter();
  initLightbox();
  initCopyButtons();
  initBackgroundCanvas();
});

/* ===================================================================
   1. Fastfolio Data Rendering Engine
   =================================================================== */
function renderFastfolio(data) {
  renderMetrics(data.metrics);
  renderTechStack(data.skills);
  renderProjects(data.projects);
  renderExperience(data.experience);
  renderAwards(data.achievements);
  renderEducation(data.education);
}

// Hero Metrics
function renderMetrics(metrics) {
  const container = document.getElementById('fast-metrics-container');
  if (!container || !metrics) return;

  container.innerHTML = metrics.map(m => `
    <div class="fast-metric-box">
      <div class="fast-metric-val">${m.number}</div>
      <div class="fast-metric-label">${m.label}</div>
    </div>
  `).join('');
}

// Tools I Build With (Tech Stack Grid & Technical Skills Matrix)
function renderTechStack(skillsCategories) {
  const container = document.getElementById('tech-stack-container');
  if (container) {
    const curatedTools = [
      { name: "ROS & ROS2", cat: "Robotics Middleware", icon: "🤖" },
      { name: "C++", cat: "Core Systems", icon: "⚡" },
      { name: "Python", cat: "Robotics & Sim", icon: "🐍" },
      { name: "MuJoCo", cat: "Physics Simulation", icon: "🦾" },
      { name: "Gazebo", cat: "Dynamic Sim", icon: "🌐" },
      { name: "Visual Odometry", cat: "KITTI VIO Stack", icon: "👁️" },
      { name: "2D LiDAR / SLAM", cat: "Autonomous Nav", icon: "🗺️" },
      { name: "Fusion360", cat: "CAD & 3D Modeling", icon: "📐" },
      { name: "Raspberry Pi 4", cat: "Embedded SBC", icon: "🍓" },
      { name: "Arduino Uno", cat: "Microcontrollers", icon: "🔌" },
      { name: "Raylib", cat: "C++ Graphics Engine", icon: "🎮" },
      { name: "Git & GitHub", cat: "Version Control", icon: "🐙" }
    ];

    container.innerHTML = curatedTools.map(t => `
      <div class="tech-card">
        <div class="tech-icon-box">
          <span style="font-size: 1.1rem;">${t.icon}</span>
        </div>
        <div>
          <div class="tech-name">${t.name}</div>
          <span class="tech-cat">${t.cat}</span>
        </div>
      </div>
    `).join('');
  }

  // Render Full Categorical Technical Skills Matrix directly from data.skills
  const matrixContainer = document.getElementById('skills-matrix-container');
  if (matrixContainer && skillsCategories) {
    const categoryIcons = {
      domain: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      sim: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      code: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      hardware: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
    };

    matrixContainer.innerHTML = skillsCategories.map(cat => `
      <div class="fast-skill-category-card">
        <div class="fast-skill-category-header">
          <div class="fast-skill-category-icon">
            ${categoryIcons[cat.icon] || categoryIcons.domain}
          </div>
          <h4 class="fast-skill-category-title">${cat.category}</h4>
        </div>
        <div class="fast-skill-pill-list">
          ${cat.items.map(s => `
            <span class="fast-skill-pill ${s.highlight ? 'highlight' : ''}">${s.name}</span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
}

// Projects I’ve Shipped (Unified 2-Column Grid Layout)
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container || !projects) return;

  // Filter projects: only display when visible is true (or if undefined, default to true)
  const visibleProjects = projects.filter(p => {
    if (typeof p.visible === 'boolean') return p.visible;
    if (typeof p.visible === 'string') return p.visible.toLowerCase() === 'true';
    return true;
  });

  // Dynamically update the count in "All Projects (N)" filter button
  const allFilterBtn = document.querySelector('.filter-pill[data-filter="all"]');
  if (allFilterBtn) {
    allFilterBtn.textContent = `All Projects (${visibleProjects.length})`;
  }

  container.innerHTML = visibleProjects.map(p => {
    const isFeatured = !!p.featured;
    const mediaSrc = p.media?.src || './assets/images/vio_ros2.png';
    const mediaType = p.media?.type || 'image';
    const mediaAlt = p.media?.alt || p.title;

    return `
      <div class="fast-project-card ${isFeatured ? 'featured' : ''}" data-project-id="${p.id}" data-category="${p.category} all">
        <div>
          <!-- Media Showcase Banner -->
          <div class="fast-media-container" data-project-id="${p.id}" data-media-type="${mediaType}" data-media-src="${mediaSrc}" data-media-title="${p.title}" data-media-caption="${p.media?.caption || ''}">
            <span class="fast-media-tag">${isFeatured ? '★ ' + (p.badge || 'Featured') : (p.badge || 'Robotics')}</span>
            ${mediaType === 'video' ? `
              <video class="lazy-card-video" data-src="${mediaSrc}" poster="${p.media?.poster || ''}" loop muted playsinline preload="none">
                <!-- Lazy loaded via IntersectionObserver -->
              </video>
              <span class="fast-video-pill">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Video Demo
              </span>
            ` : `
              <img src="${mediaSrc}" alt="${mediaAlt}" loading="lazy" />
            `}
            <div class="fast-media-overlay-hint">
              <span class="fast-view-demo-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                ${mediaType === 'video' ? 'View Demo &amp; Details' : 'View Details &amp; CAD'}
              </span>
            </div>
          </div>

          <!-- Project Meta & Title -->
          <div class="project-meta-row">
            <span class="project-cat-badge">${p.subtitle || 'Robotics System'}</span>
            <span class="project-year">${p.duration || ''}</span>
          </div>

          <h3 class="fast-project-title">${p.title}</h3>
          <p class="fast-project-desc">${p.description}</p>

          <!-- Bullet Highlights -->
          <ul class="fast-project-bullets">
            ${p.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>

        <!-- Fastfolio Actions & Tags Row -->
        <div class="fast-project-actions">
          <div class="fast-tags-list">
            ${p.tags.slice(0, 3).map(t => `<span class="fast-tag-pill">${t}</span>`).join('')}
          </div>

          <div class="fast-links-group">
            <button class="fast-demo-btn" data-project-id="${p.id}" title="Watch Demo & View Details">
              <span>${mediaType === 'video' ? 'View Demo ▶' : 'View Details ↗'}</span>
            </button>
            ${(p.links || []).map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="fast-action-link" title="${link.label}">
                <span>${link.label}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }).join('');

  // Initialize high-performance lazy video streaming
  initLazyVideos();
}

// High-Performance Lazy Video Loader (IntersectionObserver)
function initLazyVideos() {
  const lazyVideos = document.querySelectorAll('.lazy-card-video');
  if (!lazyVideos.length) return;

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          // Card scrolled into or near view (250px buffer)
          if (!video.src && video.dataset.src) {
            video.src = video.dataset.src;
            video.load();
          }
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          // Offscreen: pause video to eliminate CPU, GPU and bandwidth consumption
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, {
      rootMargin: '250px 0px',
      threshold: 0.1
    });

    lazyVideos.forEach(v => {
      videoObserver.observe(v);

      // Instant start on mouse enter if user hovers card
      const parent = v.closest('.fast-media-container');
      if (parent) {
        parent.addEventListener('mouseenter', () => {
          if (!v.src && v.dataset.src) {
            v.src = v.dataset.src;
            v.load();
          }
          v.play().catch(() => {});
        });
      }
    });
  } else {
    // Fallback for older browsers
    lazyVideos.forEach(v => {
      if (v.dataset.src) {
        v.src = v.dataset.src;
        v.preload = 'metadata';
        v.play().catch(() => {});
      }
    });
  }
}

// Where I’ve Worked (Experience List)
function renderExperience(expList) {
  const container = document.getElementById('experience-container');
  if (!container || !expList) return;

  container.innerHTML = expList.map(item => `
    <div class="exp-card">
      <div class="exp-header-row">
        <div>
          <div class="exp-role-title">${item.role} — ${item.company}</div>
          <div class="exp-company-sub">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${item.location}
          </div>
        </div>
        <span class="exp-duration-badge">${item.duration}</span>
      </div>

      <ul class="exp-bullets">
        ${item.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>

      <div class="fast-tags-list" style="margin-top: 14px;">
        ${item.tags.map(t => `<span class="fast-tag-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Don't Just Take My Word For It (Honors & Hackathons)
function renderAwards(awards) {
  const container = document.getElementById('awards-container');
  if (!container || !awards) return;

  container.innerHTML = awards.map(a => `
    <div class="award-card">
      <div>
        <div class="award-top">
          <span style="font-size: 1.4rem;">${a.medal}</span>
          <span class="award-rank-tag">${a.title.split('—')[0].trim()}</span>
        </div>
        <h4 class="award-title">${a.title}</h4>
        <div class="award-event">${a.event}</div>
      </div>
      <p class="award-desc">${a.desc}</p>
    </div>
  `).join('');
}

// Education
function renderEducation(eduList) {
  const container = document.getElementById('education-container');
  if (!container || !eduList) return;

  container.innerHTML = eduList.map(edu => `
    <div class="edu-box">
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px;">
          ${edu.duration}
        </div>
        <h4 class="edu-degree-title">${edu.degree}</h4>
        <div class="edu-inst-name">${edu.institution} &bull; ${edu.location}</div>
      </div>
      <div>
        <span class="edu-score-pill">${edu.score}</span>
      </div>
    </div>
  `).join('');
}

/* ===================================================================
   2. Floating Pill Navbar Scrollspy & Shadow
   =================================================================== */
function initNavScroll() {
  const nav = document.querySelector('.floating-nav');
  const links = document.querySelectorAll('.nav-item-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}` || (current === 'skills-matrix' && link.getAttribute('href') === '#skills')) {
        link.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   3. Dark & Light Mode Theme Toggle
   =================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('theme_fastfolio') || 'dark';
  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      setTheme(target);
    });
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme_fastfolio', t);

    if (themeIcon) {
      if (t === 'light') {
        themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
      } else {
        themeIcon.innerHTML = `
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
      }
    }
  }
}

/* ===================================================================
   4. Project Category Filter
   =================================================================== */
function initProjectFilter() {
  const pills = document.querySelectorAll('.filter-pill');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      const cards = document.querySelectorAll('.fast-project-card');

      cards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ===================================================================
   5. Enhanced Project Detail & Demo Modal
   =================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  const titleEl = document.getElementById('lightbox-title');
  const badgeEl = document.getElementById('lightbox-badge');
  const subtitleEl = document.getElementById('lightbox-subtitle');
  const yearEl = document.getElementById('lightbox-year');
  const bodyEl = document.getElementById('lightbox-body');
  const galleryEl = document.getElementById('lightbox-gallery');
  const captionEl = document.getElementById('lightbox-caption');
  const descEl = document.getElementById('lightbox-desc');
  const bulletsEl = document.getElementById('lightbox-bullets');
  const tagsEl = document.getElementById('lightbox-tags');
  const actionsEl = document.getElementById('lightbox-actions');
  const closeBtn = document.getElementById('lightbox-close');

  let isHistoryPushed = false;

  function openProjectModal(projectId, selectedIndex = 0) {
    const p = (PORTFOLIO_DATA.projects || []).find(x => x.id === projectId);
    if (!p) return;

    // Set text headers
    if (titleEl) titleEl.textContent = p.title;
    if (badgeEl) badgeEl.textContent = p.badge || 'Robotics System';
    if (subtitleEl) subtitleEl.textContent = p.subtitle || '';
    if (yearEl) yearEl.textContent = p.duration || '';
    if (descEl) descEl.textContent = p.description || '';

    // Bullets
    if (bulletsEl) {
      bulletsEl.innerHTML = (p.bullets || []).map(b => `<li>${b}</li>`).join('');
    }

    // Tags
    if (tagsEl) {
      tagsEl.innerHTML = (p.tags || []).map(t => `<span class="modal-tag-pill">${t}</span>`).join('');
    }

    // Action links
    if (actionsEl) {
      actionsEl.innerHTML = (p.links || []).map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-primary-btn">
          <span>${link.label}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      `).join('');
    }

    // Determine media items: from p.gallery or default to p.media
    let items = [];
    if (Array.isArray(p.gallery) && p.gallery.length > 0) {
      items = p.gallery;
    } else if (p.media) {
      items = [p.media];
    } else {
      items = [{ type: 'image', src: './assets/images/vio_ros2.png', title: p.title }];
    }

    // Gallery selector strip
    if (galleryEl) {
      if (items.length > 1) {
        galleryEl.style.display = 'flex';
        galleryEl.innerHTML = items.map((item, idx) => `
          <div class="modal-gallery-thumb ${idx === selectedIndex ? 'active' : ''}" data-item-idx="${idx}" title="${item.title || ''}">
            <img src="${item.poster || item.src}" alt="${item.title || ''}" />
            <span class="modal-gallery-thumb-tag">${item.type === 'video' ? '▶ Video' : (item.title || 'Photo')}</span>
          </div>
        `).join('');

        galleryEl.querySelectorAll('.modal-gallery-thumb').forEach(thumb => {
          thumb.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(thumb.getAttribute('data-item-idx'), 10) || 0;
            renderMediaItem(items, idx);
          });
        });
      } else {
        galleryEl.style.display = 'none';
        galleryEl.innerHTML = '';
      }
    }

    function renderMediaItem(itemList, idx) {
      const activeItem = itemList[idx] || itemList[0];
      if (!activeItem || !bodyEl) return;

      // Update active state in gallery
      if (galleryEl) {
        galleryEl.querySelectorAll('.modal-gallery-thumb').forEach((t, i) => {
          t.classList.toggle('active', i === idx);
        });
      }

      // Update caption
      if (captionEl) {
        const text = activeItem.caption || p.media?.caption || '';
        captionEl.textContent = text;
        captionEl.style.display = text ? 'block' : 'none';
      }

      if (activeItem.type === 'video') {
        const vType = (activeItem.src && activeItem.src.endsWith('.webm')) ? 'video/webm' : 'video/mp4';
        bodyEl.innerHTML = `
          <video id="modal-active-video" controls autoplay muted playsinline preload="auto" poster="${activeItem.poster || ''}" src="${activeItem.src}">
            <source src="${activeItem.src}" type="${vType}">
            Your browser does not support HTML5 video.
          </video>
        `;

        const vid = bodyEl.querySelector('video');
        if (vid) {
          vid.load();
          const pPlay = vid.play();
          if (pPlay !== undefined) {
            pPlay.catch(err => {
              console.warn('Unmuted autoplay prevented by browser policy; falling back to muted autoplay:', err);
              vid.muted = true;
              vid.play().catch(e => console.log('Playback paused:', e));
            });
          }
        }
      } else {
        bodyEl.innerHTML = `
          <img src="${activeItem.src}" alt="${activeItem.title || p.title}" />
        `;
      }
    }

    renderMediaItem(items, selectedIndex);

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Push history state so mobile/browser back button closes modal instead of exiting website
    if (!isHistoryPushed) {
      isHistoryPushed = true;
      history.pushState({ modalProject: projectId }, '', '#project-' + projectId);
    }
  }

  // Global click delegate for opening project demo/details modal
  document.addEventListener('click', (e) => {
    // 1. External action links (GitHub, Profile, etc.) should open normally
    const actionLink = e.target.closest('.fast-action-link');
    if (actionLink) {
      return;
    }

    // 2. Whole project card ("window") is clickable
    const card = e.target.closest('.fast-project-card');
    if (card) {
      e.preventDefault();
      const pId = card.getAttribute('data-project-id');
      if (pId) {
        openProjectModal(pId);
      }
      return;
    }

    // 3. Fallback for standalone demo buttons or media banners
    const demoBtn = e.target.closest('.fast-demo-btn') || e.target.closest('.fast-media-container');
    if (demoBtn) {
      e.preventDefault();
      const pId = demoBtn.getAttribute('data-project-id');
      if (pId) openProjectModal(pId);
      return;
    }
  });

  function close(triggerHistoryBack = true) {
    if (!modal.classList.contains('active')) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (bodyEl) {
      const vid = bodyEl.querySelector('video');
      if (vid) {
        vid.pause();
        vid.src = '';
        vid.load();
      }
      bodyEl.innerHTML = '';
    }
    document.body.style.overflow = '';

    // If closed via UI (X, backdrop, Esc) and history was pushed, revert history state
    if (triggerHistoryBack && isHistoryPushed) {
      isHistoryPushed = false;
      if (window.location.hash.startsWith('#project-')) {
        history.back();
      }
    }
    isHistoryPushed = false;
  }

  // Mobile hardware & browser back button handler: close modal and stay on website
  window.addEventListener('popstate', () => {
    if (modal.classList.contains('active')) {
      isHistoryPushed = false;
      close(false);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', () => close(true));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close(true);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close(true);
  });

  // Support direct project URL hash on page load
  if (window.location.hash && window.location.hash.startsWith('#project-')) {
    const directProjectId = window.location.hash.replace('#project-', '');
    if (directProjectId) {
      setTimeout(() => {
        openProjectModal(directProjectId);
      }, 150);
    }
  }
}

/* ===================================================================
   6. Copy to Clipboard Utility
   =================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-trigger');
  const toast = document.getElementById('toast');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        if (!toast) return;
        toast.textContent = `Copied to clipboard: ${text}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      });
    });
  });
}

/* ===================================================================
   7. Moving Background Elements (Gentle Autonomous Nodes Mesh)
   Does not change the #141414 background color!
   =================================================================== */
function initBackgroundCanvas() {
  const canvas = document.getElementById('ambient-nodes-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
  let particles = [];

  class FloatingNode {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.38;
      this.vy = (Math.random() - 0.5) * 0.38;
      this.size = Math.random() * 2.2 + 2.0;
      this.baseAlpha = Math.random() * 0.35 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse soft proximity interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 1.5;
          this.y -= (dy / distance) * force * 1.5;
        }
      }
    }

    draw(isDark) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = isDark 
        ? `rgba(255, 255, 255, ${this.baseAlpha * 0.7})` 
        : `rgba(15, 23, 42, ${this.baseAlpha * 0.5})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new FloatingNode());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isDark = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(isDark);

      // Connect subtle proximity lines between nodes
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const alpha = (1 - dist / 140) * (isDark ? 0.12 : 0.08);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isDark 
            ? `rgba(255, 255, 255, ${alpha})` 
            : `rgba(15, 23, 42, ${alpha})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}
