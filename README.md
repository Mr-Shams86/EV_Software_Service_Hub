
---

# ⚡️ EV Software Service Hub

[![Deploy status](https://github.com/Mr-Shams86/EV_Software_Service_Hub/actions/workflows/pages.yml/badge.svg)](https://github.com/Mr-Shams86/EV_Software_Service_Hub/actions/workflows/pages.yml)
[![GitHub Pages](https://img.shields.io/badge/🚀_Live-Demo-blueviolet?style=flat&logo=github)](https://mr-shams86.github.io/EV_Software_Service_Hub/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Made by Samer Shams](https://img.shields.io/badge/Made_by-Samer_Shamse-red.svg)](https://github.com/Mr-Shams86)

---

## 🚗 **Project Description**

**EV Software Service Hub** — is an interactive demo website and slider dedicated to modern smart vehicles and digital solutions for them.
The project showcases concepts of AI-assisted maintenance, predictive diagnostics, cloud integration, and mobile app connectivity.

Each slide presents a unique electric vehicle model with a description of its technologies, a visually detailed illustration, and the option to view more details.
On the right side, there is a panel of avatar thumbnails for quick navigation between models.

The background is an adaptive neon gradient with a soft glow, creating the atmosphere of a high-tech showroom.
The website is fully static, optimized for GitHub Pages and mobile devices.

---

## 🧩 **Featured EV Models*

* ⚙️ **Zeekr 001** — a sporty shooting brake with a full digital ecosystem
* 🚐 **LI 9 Ultra** — a premium minivan with Level 3 autopilot
* 🚙 **BYD Yuan UP Smart+** — a compact EV with an intelligent driver assistance system
* 🚗 **Voyah Free Apollo Tech Hybrid** — a powerful hybrid with advanced OTA features
* 🚘 **Leapmotor C16 Hybrid** — a family crossover with a neural-network-based assistant
* ⚡ **Avatr 12 Ultra** — a flagship AI sedan with integrated cloud services


---

## 🔧 **Features**

* Smooth switching between cars via avatar navigation
* Responsive design for desktops, tablets, and mobile devices
* “View service details” button opens a modal window with brief information
* Smooth fade-in animation for the active vehicle
* Light “glow spot” effect under the car for depth and realism
* prefers-reduced-motion support (reduced animation intensity)
* Full accessibility (ARIA attributes, keyboard navigation, ESC to close modals)

---

## 🧠 **Concept & Vision**

* EV Software Service Hub is a frontend showcase for the future of digital automotive platforms.
* It illustrates an approach in which a car becomes a node in an ecosystem:
* Cloud ↔ AI diagnostics ↔ Mobile app ↔ User
* This website can be used as:
* a portfolio demo for full-stack / backend / IoT projects
* UI/UX inspiration for automotive applications
* a showcase for a vehicle or AI platform brand

---

## 🛠️ **Technologies**

**Frontend:**

* HTML5 + CSS3 (responsive layout, light and depth effects)
* Vanilla JavaScript — slider, modal, burger menu
* Google Fonts (Montserrat), Remix Icons
* Animations based on transform, filter, opacity
* prefers-reduced-motion support for accessibility

**DevOps / Deploy:**

* GitHub Pages — static hosting
* GitHub Actions — automatic deployment (.github/workflows/pages.yml)
* .nojekyll — disables Jekyll for correct /static handling

**Security:**

* All assets are local (no third-party trackers)
* CSP and rel="noopener noreferrer" are recommended for external links
* Security headers such as X-Content-Type-Options and X-Frame-Options are recommended for production

---

## 📁 **Project Structure**

```
.
├── docker-compose.yml         🚢 Container orchestration & local run
├── Dockerfile                 🛠️ Docker image for frontend build
├── index.html                 🖥️ Main page (slider + UI)
├── README.md                  📘 Project documentation
├── requirements.txt           📦 Dependencies (if server container is used)
├── static/                    🎨 Static assets
│   ├── css/
│   │   └── style.css          🎛️ Main styles, responsive layout, effects
│   ├── images/
│   │   └── avatar/            🚗 Car avatars for the mini-slider
│   └── js/
│       └── script.js          ⚙️ Slider, modals, burger menu, UI logic
├── structure.txt              🗂️ Project structure blueprint
└── templates/                 🧩 Additional HTML templates (if needed)


```

---

## ⚙️ CI/CD Workflow Overview

The project is fully automated using GitHub Actions, ensuring a stable and transparent publishing process.
Every commit to the main branch automatically triggers a build and deployment to GitHub Pages.

---

## 🔄 How the Pipeline Works

* Trigger — push to the main branch or manual run (workflow_dispatch)

* Build — actions/checkout@v4 pulls the repository.
* The artifact (HTML, CSS, JS, assets) is packaged using actions/upload-pages-artifact@v3.

* Deploy — actions/deploy-pages@v4 publishes the site to GitHub Pages.

* Result — after a successful build, the status badge in the README is updated automatically.

---

### 📜 .github/workflows/pages.yml (fragment)
```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4

```
---

## 🚀 Advantages

* Full automation — no manual file uploads

* Guaranteed consistency between repository and live version

* Instant status validation via README badges

* Zero downtime — a new version goes live immediately after a successful build

---

## 🌐 **Links**

* 🔗 **Live Demo:** [EV Software Service Hub](https://mr-shams86.github.io/EV_Software_Service_Hub/)
* 💾 **GitHub Repository:** [Mr-Shams86/EV_Software_Service_Hub](https://github.com/Mr-Shams86/EV_Software_Service_Hub)

---

## 👤 **Contacts**

* 📧 **Email:** [sammertime763@gmail.com](mailto:sammertime763@gmail.com)
* 💬 **Telegram:** [@Mr_Shams_1986](https://t.me/Mr_Shams_1986)

---

## 🪪 **License**

**MIT License**

All car images are used for educational and demonstration purposes.
Project author: ๛Samer Shams๖ — full-stack developer focused on AI-powered platforms and web services.

---

