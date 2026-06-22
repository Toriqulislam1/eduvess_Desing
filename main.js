/* ===== RENDER ===== */
(function () {
  const d = data;

  /* Categories */
  const catGrid = document.getElementById('catGrid');
  catGrid.innerHTML = d.categories.map((c) => `
    <a class="cat-card" href="#courses">
      <span class="cat-ico" style="background:${d.catColors[c.bg]};color:${d.catColors[c.color]}">${c.ico}</span>
      <h3>${c.name}</h3>
      <p>${c.count} courses</p>
      <svg class="cat-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      <span class="cat-bar"></span>
    </a>
  `).join('');

  /* Brands marquee */
  const brandsTrack = document.getElementById('brandsTrack');
  brandsTrack.innerHTML = [...d.brands, ...d.brands]
    .map((b) => `<span>${b}</span>`).join('');

  /* Features */
  const featureGrid = document.getElementById('featureGrid');
  featureGrid.innerHTML = d.features.map((f) => `
    <div class="feature">
      <span class="feature-ico">${f.ico}</span>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');

  /* Course filters + grid */
  const filters = document.getElementById('filters');
  filters.innerHTML = d.courseFilters
    .map((f, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${f}">${f}</button>`)
    .join('');

  const courseGrid = document.getElementById('courseGrid');
  const starSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  const bookIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>';
  const clockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const usersIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>';

  function renderCourses(filter) {
    const list = filter === 'All' ? d.courses : d.courses.filter((c) => c.category === filter);
    courseGrid.innerHTML = list.map((c) => {
      const [lb, lc] = d.levelStyles[c.level];
      const tagBg = c.tag ? d.tagStyles[c.tag] : null;
      return `
      <article class="course">
        <div class="course-img-wrap">
          <img src="${c.image}" alt="${c.title}" loading="lazy" />
          <span class="course-cat">${c.category}</span>
          ${c.tag ? `<span class="course-tag" style="background:${tagBg}">${c.tag}</span>` : ''}
        </div>
        <div class="course-body">
          <div class="course-meta">
            <span class="course-level" style="background:${lb};color:${lc}">${c.level}</span>
            <span class="course-rate">${starSvg} <b>${c.rating}</b> <span>(${c.reviews})</span></span>
          </div>
          <h3>${c.title}</h3>
          <div class="course-stats">
            <span>${bookIcon} ${c.lessons} lessons</span>
            <span>${clockIcon} ${c.hours}h</span>
            <span>${usersIcon} ${c.students}K</span>
          </div>
          <div class="course-progress">
            <div class="progress-label">
              <span>Overall Progress</span>
              <span>${(c.title.length * 3) % 100}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${(c.title.length * 3) % 100}%;"></div>
            </div>
          </div>
          <div class="course-inst">
            <img src="${c.instructorAvatar}" alt="${c.instructor}" loading="lazy" />
            <span>${c.instructor}</span>
          </div>
          <div class="course-foot">
            <div>
              <span class="course-price">$${c.price}</span>
              ${c.oldPrice ? `<span class="course-old">$${c.oldPrice}</span>` : ''}
            </div>
            <a href="#enroll" class="course-enroll">Enroll now</a>
          </div>
        </div>
      </article>`;
    }).join('');
  }
  renderCourses('All');

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(btn.dataset.filter);
  });

  /* Stats */
  const statsGrid = document.getElementById('statsGrid');
  statsGrid.innerHTML = d.stats.map((s) => `
    <div class="stat">
      <p class="stat-num" data-target="${s.value}">0<span class="stat-suffix">${s.suffix}</span></p>
      <p class="stat-label">${s.label}</p>
    </div>
  `).join('');

  const statsSection = document.getElementById('stats');
  let counted = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        statsGrid.querySelectorAll('.stat-num').forEach((el) => {
          const target = +el.dataset.target;
          const suffix = el.querySelector('.stat-suffix').outerHTML;
          const dur = 1800;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.innerHTML = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(statsSection);

  /* Instructors */
  const instGrid = document.getElementById('instGrid');
  instGrid.innerHTML = d.instructors.map((p) => {
    const socials = p.socials.map((s) =>
      `<a href="#" aria-label="${s}">${d.socialIcons[s] || ''}</a>`
    ).join('');
    return `
    <article class="inst">
      <div class="inst-img-wrap">
        <img src="${p.avatar}" alt="${p.name}" loading="lazy" />
        <div class="inst-socials">${socials}</div>
      </div>
      <div class="inst-body">
        <h3>${p.name}</h3>
        <p class="inst-role">${p.role}</p>
        <div class="inst-stats">
          <div><p>${starSvg} ${p.rating}</p><small>Rating</small></div>
          <div><p>${bookIcon} ${p.courses}</p><small>Courses</small></div>
          <div><p>${usersIcon} ${p.students}K</p><small>Students</small></div>
        </div>
      </div>
    </article>`;
  }).join('');

  /* Testimonials */
  const tGrid = document.getElementById('tGrid');
  const quoteSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>';
  tGrid.innerHTML = d.testimonials.map((t) => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      `<span style="color:${i < t.rating ? '#ff7c10' : '#d4d8e1'}">★</span>`
    ).join('');
    return `
    <figure class="t-card">
      ${quoteSvg.replace('<svg', '<svg class="t-quote"')}
      <div class="t-stars">${stars}</div>
      <blockquote class="t-text">"${t.text}"</blockquote>
      <figcaption class="t-author">
        <img src="${t.avatar}" alt="${t.name}" loading="lazy" />
        <div>
          <b>${t.name}</b>
          <small>${t.role}</small>
        </div>
      </figcaption>
    </figure>`;
  }).join('');

  /* Footer columns + socials */
  const footerCols = document.getElementById('footerCols');
  footerCols.innerHTML = d.footerCols.map((col) => `
    <div class="footer-col">
      <h4>${col.title}</h4>
      <ul>${col.links.map((l) => `<li><a href="#">${l}</a></li>`).join('')}</ul>
    </div>
  `).join('');

  const footerSocials = document.getElementById('footerSocials');
  footerSocials.innerHTML = d.footerSocials.map((s) =>
    `<a href="#" aria-label="${s.key}">${s.svg}</a>`
  ).join('');

  /* Navbar scroll + mobile drawer */
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  let drawer = null;
  menuToggle.addEventListener('click', () => {
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.className = 'nav-drawer';
      drawer.innerHTML = `
        <div class="container">
          ${[...navLinks.querySelectorAll('.nav-item > a')].map((a) =>
            `<a href="${a.getAttribute('href')}">${a.textContent.replace('▾','').trim()}</a>`
          ).join('')}
          <div class="nav-drawer-actions">
            <a href="#login" class="btn btn-ghost">Log in</a>
            <a href="#signup" class="btn btn-primary">Sign up</a>
          </div>
        </div>`;
      navbar.parentNode.insertBefore(drawer, navbar.nextSibling);
    }
    drawer.classList.toggle('open');
  });

  /* CTA form */
  const ctaForm = document.getElementById('ctaForm');
  const ctaBtn = document.getElementById('ctaBtn');
  const ctaEmail = document.getElementById('ctaEmail');
  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!ctaEmail.value.trim()) return;
    ctaBtn.textContent = 'Subscribed ✓';
    ctaEmail.value = '';
    setTimeout(() => { ctaBtn.textContent = 'Subscribe'; }, 3500);
  });
})();
