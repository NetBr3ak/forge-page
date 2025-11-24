# ForgeGrid | Autonomous Production Intelligence

![Project Status](https://img.shields.io/badge/status-production-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/stack-HTML5_|_Tailwind_|_VanillaJS-black)

## ⚡ Technical Executive Summary

ForgeGrid is a high-performance, industrial-grade landing page designed for the "Internal Machine Monitor" system. The project prioritizes **Core Web Vitals**, **Accessibility (a11y)**, and **Zero-Dependency Architecture** to ensure maximum reliability and speed across all devices, reflecting the product's promise of <3000ms response time.

**Live Deployment:** [https://netbr3ak.github.io/hackathon-landing-page/](https://netbr3ak.github.io/hackathon-landing-page/)

---

## 🏗️ Architectural Decisions

### 1. Zero-Dependency Vanilla JavaScript (IIFE Pattern)
*   **Decision:** We rejected heavy frameworks (React/Vue) in favor of pure Vanilla JS wrapped in an **Immediately Invoked Function Expression (IIFE)**.
*   **Why:**
    *   **Performance:** Eliminates bundle overhead. The entire JS payload is <5KB gzipped.
    *   **Encapsulation:** The IIFE pattern (`(() => { ... })();`) creates a private scope, preventing global namespace pollution and conflicts with third-party scripts.
    *   **Maintainability:** Clear separation of concerns (DOM manipulation, Event Handling, State Management) without the complexity of a build step.

### 2. Utility-First CSS (Tailwind via CDN + Custom Config)
*   **Decision:** Utilized Tailwind CSS with a custom `tailwind-config.js` script.
*   **Why:**
    *   **Rapid Prototyping:** Allowed for immediate iteration on the "Industrial Cyber" aesthetic without context switching between HTML and CSS files.
    *   **Consistency:** Custom configuration enforces the strict color palette (`forge-black`, `forge-text`) and typography (`IBM Plex Mono`), ensuring design system integrity.
    *   **Performance:** Critical styles are inlined or loaded via CDN with high cache availability. We utilized `will-change` properties to promote complex animations to the GPU compositor layer, ensuring 60fps scrolling.

### 3. Semantic HTML5 & Accessibility (WCAG 2.1)
*   **Decision:** Strict adherence to semantic markup and ARIA standards.
*   **Why:**
    *   **Inclusivity:** Features like "Skip to content" links, `aria-label` on interactive elements, and proper heading hierarchy ensure the site is navigable by screen readers.
    *   **SEO:** Semantic tags (`<main>`, `<nav>`, `<section>`, `<article>`) provide search engines with a clear content structure, improving indexing for keywords like "Autonomous Production Monitoring".
    *   **Internationalization:** Separate entry points (`index.html`, `en.html`) with correct `hreflang` and `canonical` tags ensure proper regional targeting without client-side routing overhead.

### 4. Performance Optimization Strategy
*   **Resource Loading:**
    *   **Preload:** Critical assets (Hero Video) are preloaded to minimize Largest Contentful Paint (LCP).
    *   **Lazy Loading:** Off-screen images and heavy DOM elements utilize `loading="lazy"` and `IntersectionObserver` to defer loading until needed.
    *   **Network Awareness:** Video autoplay logic respects user data saver preferences and network conditions.
*   **Rendering:**
    *   **CSS Variables:** Used for dynamic theming with minimal repaint cost.
    *   **Compositor-Only Animations:** Animations are restricted to `transform` and `opacity` to avoid layout thrashing.

---

## 🛠️ Project Structure

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css        # Global styles, animations, and overrides
│   ├── js/
│   │   ├── app.js            # Core logic (Modals, Video handling, Scroll spy)
│   │   └── tailwind-config.js # Design system configuration (Colors, Fonts)
│   ├── images/               # Optimized raster assets
│   └── videos/               # Compressed video assets
├── index.html                # Polish entry point (PL)
├── en.html                   # English entry point (EN)
├── robots.txt                # Crawler directives
└── README.md                 # Technical documentation
```

## 🚀 Deployment & CI/CD

The project is hosted on **GitHub Pages**, leveraging its global CDN for low-latency delivery.
*   **Cache Policy:** Assets are served with aggressive caching headers.
*   **HTTPS:** Enforced for security and HTTP/2 support.

## 📈 Key Metrics & ROI (Product Context)

The landing page effectively communicates the system's value proposition through data-driven storytelling:
*   **Latency:** <3000ms response time (System capability)
*   **ROI:** $4M annual savings (Client case study)
*   **Efficiency:** 93% reduction in financial losses

---

© 2025 ForgeGrid Systems. Engineered for resilience.

