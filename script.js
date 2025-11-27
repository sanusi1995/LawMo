// Data
const features = [
  { title: "30-40% Cheaper", desc: "More affordable than Western EBs, designed for African markets", icon: "zap" },
  { title: "Solar-Hybrid Charging", desc: "Sustainable power with our integrated charging network", icon: "battery" },
  { title: "Lagos Network", desc: "Reliable charging infrastructure across key locations", icon: "map" }
];
const problems = [
  { title: "Physical Exhaustion", desc: "Long distances and heavy loads drain rider energy..." },
  { title: "Low Delivery Speed", desc: "Slower ride times mean fewer deliveries per day..." },
  { title: "Income Limitations", desc: "Traditional bicycles cap daily earnings..." }
];
const ecosystem = [
  { title: "Effortless Riding", desc: "Electric-powered assistance lets you cover 40-60% more distance...", benefit: "Less Fatigue" },
  { title: "3X More Deliveries", desc: "Speed and range multiply your earning potential...", benefit: "Higher Income" },
  { title: "Reliable Support", desc: "Localized service centers, spare parts...", benefit: "Always Dependable" },
  { title: "Affordable & Sustainable", desc: "30-40% cheaper than other options...", benefit: "Save Money" }
];
const impact = [
  { value: "2-3X", label: "Income Boost", desc: "Delivery riders increase daily earnings...", icon: "trending" },
  { value: "250+", label: "Jobs Created", desc: "Direct and indirect employment...", icon: "users" },
  { value: "0", label: "Emissions", desc: "Solar-hybrid charging powers sustainable mobility...", icon: "leaf" },
  { value: "Pan-African", label: "Scale", desc: "Model designed for rapid replication...", icon: "map" }
];
const icons = {
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  battery: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="14" y1="12" x2="18" y2="12"></line></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,
  trending: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  leaf: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.5-5 3-5.5C6.5 15 7 14 7 12c0-.5-.5-1-1-1"></path></svg>`
};

// Render Sections
function renderSections() {
  document.getElementById('features-grid').innerHTML = features.map(f => `
    <div class="feature-card">
      <div class="icon-container orange">${icons[f.icon]}</div>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');
  document.getElementById('problems-grid').innerHTML = problems.map(p => `
    <div class="problem-card">
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
  document.getElementById('ecosystem-grid').innerHTML = ecosystem.map(e => `
    <div class="ecosystem-card">
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">${e.title}</h3>
      <p style="margin-bottom: 1rem;">${e.desc}</p>
      <div class="benefit-tag">${e.benefit}</div>
    </div>
  `).join('');
  document.getElementById('impact-grid').innerHTML = impact.map(i => `
    <div class="impact-card">
      <div class="icon-container">${icons[i.icon]}</div>
      <div class="impact-value">${i.value}</div>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">${i.label}</h3>
      <p>${i.desc}</p>
    </div>
  `).join('');
}

// Navigation
function scrollToSection(id) {
  if (id === 'hero') return window.scrollTo({ top: 0, behavior: 'smooth' });
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Add a little animation effect
  themeToggle.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    themeToggle.style.transform = 'rotate(0deg)';
  }, 300);
});

// Waitlist Form
document.getElementById('joinWaitlist').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('waitlistForm').innerHTML = `
    <div class="thank-you">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem;">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
      <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Thank You!</h3>
      <p>You've been added to our waitlist. We'll contact you soon with updates.</p>
    </div>
  `;
});

// Calculator Modal
const openCalc = document.getElementById('openCalculator');
const closeCalc = document.getElementById('closeCalculator');
const calcModal = document.getElementById('calculatorModal');
openCalc.onclick = () => { calcModal.classList.add('active'); calculate(); };
closeCalc.onclick = () => calcModal.classList.remove('active');
calcModal.onclick = e => { if (e.target === calcModal) calcModal.classList.remove('active'); };

// Celebration Modal
const celeb = document.getElementById('celebrationModal');
document.getElementById('closeCelebration').onclick = () => celeb.style.display = 'none';

// Calculator Logic
let timer;
function fmt(n) { return '₦' + Math.round(n).toLocaleString(); }
function calculate() {
  const p = parseFloat(document.getElementById('calcBikePrice').value) || 0;
  if (p <= 0) return;
  const m = parseInt(document.getElementById('durationSlider').value);
  const i = p * Math.max(0, m - 5) * 0.05;
  const t = p + i;
  document.getElementById('displayBikePrice').textContent = fmt(p);
  document.getElementById('displayInterest').textContent = fmt(i);
  document.getElementById('displayMonthly').textContent = fmt(t / m);
  document.getElementById('displayTotal').textContent = fmt(t);
}
function schedule() {
  if (timer) clearTimeout(timer);
  const n = document.getElementById('calcName').value.trim();
  const p = parseFloat(document.getElementById('calcBikePrice').value);
  if (n && p > 0) {
    timer = setTimeout(() => {
      const f = n.split(' ')[0] || n;
      document.getElementById('modalGreeting').textContent = `${f}, you've made a great choice!`;
      document.getElementById('modalMessage').textContent = 
        "No more exhausting pedal rides. With Law of Motion, you'll deliver faster, earn more, and dominate Lagos streets!";
      celeb.style.display = 'flex';
    }, 2000);
  }
}
['calcName', 'calcBikePrice'].forEach(id => {
  document.getElementById(id).oninput = () => { calculate(); schedule(); };
});
document.getElementById('durationSlider').oninput = () => {
  const m = document.getElementById('durationSlider').value;
  document.getElementById('monthsDisplay').textContent = m + ' month' + (m > 1 ? 's' : '');
  calculate();
  schedule();
};

// Init
renderSections();
calculate();