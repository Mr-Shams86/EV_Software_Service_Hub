// ========= Общие DOM ссылки ===========================================
const items   = Array.from(document.querySelectorAll('.carousel .item'));
const avatars = Array.from(document.querySelectorAll('.avatar li'));

// Активный индекс (если нет .active — ставим 0)
let index = Math.max(0, items.findIndex(el => el.classList.contains('active')));
if (!items[index] && items.length) index = 0;

// ========= Навигация по слайдам (только переключение .active) =========
function goTo(i){
  if (!items.length) return;

  index = (i + items.length) % items.length;

  // активный слайд
  items.forEach((el, k) => {
    el.classList.toggle('active', k === index);
  });

  // аватары
  const currentSelected = document.querySelector('.avatar .selected');
  if (currentSelected) currentSelected.classList.remove('selected');

  if (avatars[index]) {
    avatars[index].classList.add('selected');
  }

  avatars.forEach((el, k) => {
    const isActive = k === index;
    el.setAttribute('aria-selected', isActive ? 'true' : 'false');
    el.tabIndex = isActive ? 0 : -1;
  });
}

// ========= Клики/клавиатура на аватарах ================================
avatars.forEach((avatar, i) => {
  avatar.setAttribute('role', 'button');
  avatar.tabIndex = i === index ? 0 : -1;

  const alt = avatar.querySelector('img')?.alt || `Slide ${i + 1}`;
  avatar.setAttribute('aria-label', `Show ${alt}`);

  avatar.addEventListener('click', () => goTo(i));

  avatar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goTo(i);
    }
  });
});

// ========= Стрелки на клавиатуре ======================================
document.addEventListener('keydown', (e) => {
  // блокируем, если открыт модал или бургер
  const inModal = document.getElementById('infoModal')?.classList.contains('open');
  const navOpen = document.querySelector('.site-nav.open');
  if (inModal || navOpen) return;

  if (e.key === 'ArrowRight') goTo(index + 1);
  if (e.key === 'ArrowLeft')  goTo(index - 1);
});

// Стартуем с текущего индекса
goTo(index);

// ========= Данные для модалки (EV Software Service Hub) ===============

const DETAILS = [
  {
    // 0 — Zeekr 001
    title: "Zeekr 001 — Performance EV Suite",
    html: `
      <p>
        Premium fastback EV demonstrating a full cycle of backend services:
        telemetry, diagnostics, OTA management, and mobile app integration.
      </p>
      <ul>
        <li>Realtime CAN/OBD-II ingestion → Python/FastAPI microservices</li>
        <li>Rules engine for alerts on battery, brakes, and temperature</li>
        <li>OTA orchestrator with staged rollout and rollback</li>
        <li>Role-based access for dealers and service centers</li>
      </ul>
    `,
    link: "#"
  },
  {
    // 1 — Li 9 Ultra
    title: "Li 9 Ultra — Hybrid Intelligence Stack",
    html: `
      <p>
        A hybrid platform backend that supports both ICE and EV systems,
        event logging, and remote configuration management.
      </p>
      <ul>
        <li>Unified data model for different ECUs and driving modes</li>
        <li>Event logging (trip, charging, faults) with search and filtering</li>
        <li>Secure remote configuration with full audit trail</li>
        <li>Microservices architecture + message bus (Kafka/NATS)</li>
      </ul>
    `,
    link: "#"
  },
  {
    // 2 — BYD Yuan UP 2025
    title: "BYD Yuan UP — City Fleet Cloud",
    html: `
      <p>
        A compact urban EV designed for car-sharing and small fleet services.
        Focused on reliable APIs and lightweight analytics.
      </p>
      <ul>
        <li>REST/JSON API for car-sharing platform integration</li>
        <li>Real-time monitoring of charge levels and geolocation</li>
        <li>Trip analytics: mileage, driving style, fleet utilization</li>
        <li>Demo dashboard built on top of the public API</li>
      </ul>
    `,
    link: "#"
  },
  {
    // 3 — Voyah Free Apollo Tech
    title: "Voyah Free Apollo Tech — Remote Diagnostics",
    html: `
      <p>
        A premium SUV demonstrating seamless and secure remote diagnostics.
      </p>
      <ul>
        <li>Secure reading of system status and error codes</li>
        <li>Remote tests with rate limiting and detailed logging</li>
        <li>Granular access tokens for authorized dealer operations</li>
        <li>Integration with Telegram / email / push notifications</li>
      </ul>
    `,
    link: "#"
  },
  {
    // 4 — Leapmotor C16 Hybrid
    title: "Leapmotor C16 — Scalable Service Platform",
    html: `
      <p>
        A scalable architecture built to handle fleet growth and multi-brand expansion.
      </p>
      <ul>
        <li>API Gateway (gRPC/HTTP) in front of internal microservices</li>
        <li>Dedicated services for telemetry, OTA, logs, and user data</li>
        <li>Observability via Prometheus / Grafana and structured logging</li>
        <li>Multi-tenant design supporting multiple brands and fleets</li>
      </ul>
    `,
    link: "#"
  },
  {
    // 5 — Avatr 12 Ultra
    title: "Avatr 12 Ultra — AI & Predictive Maintenance",
    html: `
      <p>
        A flagship EV showcasing AI-driven predictive maintenance
        and personalized vehicle insights.
      </p>
      <ul>
        <li>ML models for battery and component health estimation</li>
        <li>Early failure detection and predictive alerts</li>
        <li>Personalized maintenance recommendations</li>
        <li>External API integration for analytics and data exchange</li>
      </ul>
    `,
    link: "#"
  }
];


// ========= Модалка =====================================================

const modal       = document.getElementById("infoModal");
const modalTitle  = document.getElementById("modalTitle");
const modalBody   = document.getElementById("modalBody");
const modalSource = document.getElementById("modalSource");

function openModalForCurrent() {
  if (!modal || !modalTitle || !modalBody) return;

  const fallbackTitle = items[index]?.querySelector("h2")?.textContent || "Details";
  const d = DETAILS[index] || {
    title: fallbackTitle,
    html: "<p>More information coming soon.</p>",
    link: "#"
  };

  modalTitle.textContent = d.title;
  modalBody.innerHTML    = d.html;

  if (modalSource) {
    if (d.link && d.link !== "#") {
      modalSource.href = d.link;
      modalSource.style.display = "inline-flex";
    } else {
      modalSource.style.display = "none";
    }
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  modal.querySelector(".modal__close")?.focus({ preventScroll: true });
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  const headerOpen = document.querySelector('.site-nav.open');
  if (!headerOpen) {
    document.body.classList.remove("no-scroll");
  }
}

if (modal) {
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open-modal], .info-item .btn");
    if (openBtn) {
      e.preventDefault();
      openModalForCurrent();
      return;
    }
    if (e.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__backdrop")) {
      closeModal();
    }
  });
}

// ========= Бургер =======================================================
(() => {
  const header = document.querySelector('.site-nav');
  const toggle = header?.querySelector('.nav-toggle');
  const scrim  = header?.querySelector('.nav-scrim');
  const links  = header?.querySelectorAll('.nav-menu a');

  if (!header || !toggle) return;

  function setOpen(isOpen) {
    header.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

    const lock = isOpen || (modal && modal.classList.contains('open'));
    document.body.classList.toggle('no-scroll', lock);
  }

  toggle.addEventListener('click', () => {
    setOpen(!header.classList.contains('open'));
  });

  scrim?.addEventListener('click', () => setOpen(false));
  links?.forEach(a => a.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('open')) {
      setOpen(false);
    }
  });
})();
