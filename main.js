'use strict';

/* ============================================================
   NAV
============================================================ */
function renderNav() {
  const nav = document.getElementById('site-nav');
  nav.innerHTML = `
    <a href="#" class="nav-logo">${SITE.name}</a>
    <ul class="nav-links">
      ${SITE.nav.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
    </ul>
    <a href="${SITE.nav.cta.href}" class="nav-cta">${SITE.nav.cta.label}</a>
  `;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ============================================================
   HERO
============================================================ */
function renderHero() {
  const el = document.getElementById('hero');
  const lines = SITE.tagline.split('\n');
  el.innerHTML = `
    <div class="hero-eyebrow"><span class="label">${SITE.title}</span></div>
    <h1 class="hero-headline">${lines[0]}<br><em>${lines.slice(1).join('<br>')}</em></h1>
    <div class="hero-footer">
      <p class="hero-sub">${SITE.subtagline}</p>
      <a href="#projects" class="hero-cta">
        <span class="hero-cta-line"></span>
        View selected work
      </a>
    </div>
  `;
}

/* ============================================================
   CLIENTS
============================================================ */
function renderClients() {
  const el = document.getElementById('clients');
  // Duplicate items so the marquee loops seamlessly
  const doubled = [...SITE.clients, ...SITE.clients];
  const itemsHTML = doubled.map(c => `<span class="client-item">${c.name}</span>`).join('');

  el.innerHTML = `
    <div class="clients-header"><span class="label">Selected Clients</span></div>
    <div class="clients-marquee">
      <div class="clients-track">${itemsHTML}</div>
    </div>
  `;
}

/* ============================================================
   PROJECTS
============================================================ */
let activeFilter = 'All';

function filterProjects() {
  document.querySelectorAll('.project-card').forEach(card => {
    const matches = activeFilter === 'All' || card.dataset.category === activeFilter;
    if (matches) {
      card.classList.remove('hidden');
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
    } else {
      card.classList.remove('visible');
      card.classList.add('hidden');
    }
  });
}

function renderProjects() {
  const el = document.getElementById('projects');

  el.innerHTML = `
    <div class="section-header fade-up">
      <h2 class="section-title">Selected Work</h2>
      <div class="filter-tabs">
        ${SITE.categories.map(cat => `
          <button class="filter-btn${cat === 'All' ? ' active' : ''}" data-filter="${cat}">${cat}</button>
        `).join('')}
      </div>
    </div>
    <div class="projects-grid" id="projects-grid">
      ${SITE.projects.map(p => `
        <div class="project-card" data-id="${p.id}" data-category="${p.category}">
          <div class="img-wrap">
            <img src="${p.cover}" alt="${p.title}" loading="lazy">
          </div>
          <div class="project-row-info">
            <span class="project-row-cat label">${p.category}</span>
            <div class="project-row-main">
              <span class="project-row-title">${p.title}</span>
              <span class="project-row-client">${p.client} — ${p.year}</span>
            </div>
            <span class="project-row-arrow">→</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.filter === activeFilter) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      filterProjects();
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const project = SITE.projects.find(p => p.id === card.dataset.id);
      if (project) openModal(project);
    });
  });

  requestAnimationFrame(() => {
    document.querySelectorAll('.project-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 80);
    });
  });
}

/* ============================================================
   MODAL
============================================================ */
function openModal(project) {
  const modal = document.getElementById('modal');
  const inner = document.getElementById('modal-inner');

  inner.innerHTML = `
    <button class="modal-close" id="modal-close" aria-label="Close project">✕</button>
    <img class="modal-hero-img" src="${project.cover}" alt="${project.title}">
    <div class="modal-header">
      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-meta-group">
        <div class="modal-meta-item">
          <span class="modal-meta-label">Client</span>
          <span class="modal-meta-value">${project.client}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Year</span>
          <span class="modal-meta-value">${project.year}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Role</span>
          <span class="modal-meta-value">${project.role}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Type</span>
          <span class="modal-meta-value">${project.category}</span>
        </div>
      </div>
    </div>
    <div class="modal-tags">
      ${project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
    </div>
    <p class="modal-description">${project.description}</p>
    <div class="modal-gallery">
      ${project.images.map(src => `<img src="${src}" alt="${project.title}" loading="lazy">`).join('')}
    </div>
  `;

  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-close').addEventListener('click', closeModal);
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   ABOUT
============================================================ */
function renderAbout() {
  const a = SITE.about;
  const el = document.getElementById('about');
  const lines = a.headline.split('\n');
  const photoHTML = a.image
    ? `<div class="about-photo fade-up"><img src="${a.image}" alt="Portrait"></div>`
    : '';

  el.innerHTML = `
    <div class="about-grid">
      <div class="about-left fade-up">
        <h2 class="about-headline">${lines[0]}<br><em>${lines.slice(1).join('<br>')}</em></h2>
        <p class="about-statement">${a.statement}</p>
        <div class="about-availability">
          <span class="avail-dot"></span>
          <span>${a.availability}</span>
        </div>
      </div>
      <div class="about-right">
        ${photoHTML}
        <div class="services-list fade-up">
          ${a.services.map(s => `
            <div class="service-item">
              <span class="service-title">${s.title}</span>
              <span class="service-desc">${s.desc}</span>
              <span class="service-arrow">→</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   FOOTER
============================================================ */
function renderFooter() {
  const c = SITE.contact;
  const el = document.getElementById('contact');
  const lines = c.headline.split('\n');
  const year = new Date().getFullYear();

  el.innerHTML = `
    <div class="footer-content">
      <div>
        <h2 class="footer-headline">${lines[0]}<br><em>${lines.slice(1).join('<br>')}</em></h2>
        <a href="mailto:${c.email}" class="footer-email">${c.email}</a>
      </div>
      <ul class="footer-socials">
        ${c.instagram ? `<li><a href="https://instagram.com/${c.instagram.replace('@','')}" target="_blank" rel="noopener noreferrer">Instagram ${c.instagram}</a></li>` : ''}
        ${c.linkedin  ? `<li><a href="https://linkedin.com/in/${c.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>` : ''}
      </ul>
    </div>
    <div class="footer-bottom">
      <p>${SITE.name} — ${SITE.title}</p>
      <p>© ${year}</p>
    </div>
  `;
}

/* ============================================================
   SCROLL ANIMATIONS
============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ============================================================
   GLOBAL EVENT LISTENERS
============================================================ */
function initGlobalListeners() {
  // ESC closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Click backdrop to close
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });
}

/* ============================================================
   INIT
============================================================ */
function init() {
  document.title = `${SITE.name} — ${SITE.title}`;
  renderNav();
  renderHero();
  renderClients();
  renderProjects();
  renderAbout();
  renderFooter();
  initGlobalListeners();

  // Run after all DOM is rendered
  requestAnimationFrame(() => {
    requestAnimationFrame(initScrollAnimations);
  });
}

document.addEventListener('DOMContentLoaded', init);
