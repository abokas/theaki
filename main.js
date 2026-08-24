/* ==========================================================================
   AKI — общая логика сайта
   ========================================================================== */

/* ---------- SVG icon set (inline, no external deps) ---------- */
const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>',
  kitchen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3v7a3 3 0 0 0 3 3v8"/><path d="M6 3v5M9 3v5"/><path d="M16 3c-1.7 0-3 2-3 5s1.3 5 3 5v8"/></svg>',
  gaming: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="8" width="20" height="10" rx="4"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="12" r=".8" fill="currentColor"/><circle cx="18.2" cy="14.2" r=".8" fill="currentColor"/></svg>',
  beauty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="8" width="8" height="13" rx="2"/><path d="M10 8V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20c8 0 16-6 16-16-8 0-16 6-16 16z"/><path d="M4 20c3-6 7-10 12-13"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7-4.4-9.5-8.8C1 8 2.3 4.8 5.5 4c2-.5 3.8.4 5 2.3C11.7 4.4 13.5 3.5 15.5 4c3.2.8 4.5 4 3 7.2C16 15.6 12 20 12 20z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 9V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3"/><path d="M12 5v16"/><path d="M12 5c-1.5 0-4-1-4-3 2 0 4 1.5 4 3zM12 5c1.5 0 4-1 4-3-2 0-4 1.5-4 3z"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/></svg>',
  diamond: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M9 3l3 6-3 12M15 3l-3 6 3 12"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/><path d="M2.5 3h2.4l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l5 5L20 6"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.5 22 2 14.5 2 6a2 2 0 0 1 2-2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 6l9 7 9-7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>'
};

function icon(name){ return ICONS[name] || ""; }

/* ---------- mobile nav toggle ---------- */
function initNav(){
  const burger = document.querySelector('.burger');
  const panel = document.querySelector('.mobile-panel');
  if(!burger || !panel) return;
  burger.addEventListener('click', () => {
    panel.classList.toggle('open');
  });
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => panel.classList.remove('open'));
  });
}

/* ---------- active link highlight based on scroll position ---------- */
function initScrollSpy(){
  const links = document.querySelectorAll('.nav-links a[data-spy]');
  if(!links.length) return;
  const sections = Array.from(links)
    .map(l => document.querySelector(l.getAttribute('href').split('#')[1] ? '#'+l.getAttribute('href').split('#')[1] : null))
    .filter(Boolean);
  if(!sections.length) return;

  const onScroll = () => {
    let current = sections[0];
    const y = window.scrollY + 140;
    sections.forEach(s => { if(s.offsetTop <= y) current = s; });
    links.forEach(l => l.classList.remove('active'));
    const match = Array.from(links).find(l => l.getAttribute('href').includes('#'+current.id));
    if(match) match.classList.add('active');
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* ---------- reveal-on-scroll ---------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window) || !els.length){
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.12});
  els.forEach(e => io.observe(e));
}

/* ---------- toast ---------- */
let toastTimer;
function showToast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `${icon('check')}<span></span>`;
    document.body.appendChild(t);
  }
  t.querySelector('span').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- product card builder ---------- */
function fmtPrice(n){
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function badgeHTML(badge){
  if(!badge) return '';
  const map = {
    new: {label:'NEW', ic:'sparkle'},
    top: {label:'TOP', ic:'crown'},
    sale:{label:'SALE', ic:null}
  };
  const b = map[badge];
  if(!b) return '';
  return `<span class="pbadge ${badge}">${b.ic ? icon(b.ic) : ''}${b.label}</span>`;
}

function productCard(p, theme){
  const note = p.priceNote ? `<small>${p.priceNote}</small>` : '<small>за штуку</small>';
  return `
  <article class="pcard theme-${theme} reveal">
    <div class="pimg-wrap">
      ${badgeHTML(p.badge)}
      <img src="${p.img}" alt="${p.name}" loading="lazy">
    </div>
    <div class="pcard-body">
      <h4>${p.name}</h4>
      <p class="pdesc">${p.desc || ''}</p>
      <div class="pcard-foot">
        <span class="pprice">${fmtPrice(p.price)} ₸${note}</span>
        <button class="pcart-btn" type="button" aria-label="Добавить в корзину" data-name="${p.name.replace(/"/g,'&quot;')}">${icon('cart')}</button>
      </div>
    </div>
  </article>`;
}

function renderCollection(key, theme){
  const mount = document.querySelector(`#grid-${key}`);
  if(!mount || typeof PRODUCTS === 'undefined') return;
  const items = PRODUCTS[key] || [];
  mount.innerHTML = items.map(p => productCard(p, theme)).join('');
}

function initCartButtons(){
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.pcart-btn');
    if(!btn) return;
    showToast(`Добавлено: ${btn.dataset.name}`);
  });
}

/* ---------- header background swap on scroll (index hero is dark) ---------- */
function initHeaderShade(){
  const header = document.querySelector('.site-header');
  if(!header || !header.dataset.autoshade) return;
  const flip = () => {
    if(window.scrollY > window.innerHeight * 0.78){
      header.classList.add('light');
    } else {
      header.classList.remove('light');
    }
  };
  window.addEventListener('scroll', flip, {passive:true});
  flip();
}

/* ---------- contact form (front-end only demo) ---------- */
function initContactForm(){
  const form = document.querySelector('.contact-form');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-note');
    if(note){ note.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.'; note.classList.add('show'); }
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollSpy();
  initReveal();
  initCartButtons();
  initHeaderShade();
  initContactForm();

  if(typeof PRODUCTS !== 'undefined'){
    renderCollection('home','home');
    renderCollection('work','work');
    renderCollection('kitchen','kitchen');
    renderCollection('gaming','gaming');
    renderCollection('beauty','beauty');
    initReveal(); // re-run for freshly injected cards
  }
});
