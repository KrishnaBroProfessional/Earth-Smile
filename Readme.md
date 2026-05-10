<div align="center">

# 🌍 Earth Smile

### *The initiative to make Shantigram plastic-free*

[![Status](https://img.shields.io/badge/status-active-52b788?style=flat-square)](https://github.com/)
[![License](https://img.shields.io/badge/license-MIT-f4a261?style=flat-square)](LICENSE)
[![Built With](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-e63946?style=flat-square)](#tech-stack)
[![Made With Love](https://img.shields.io/badge/made%20with-💚%20for%20Shantigram-1b4332?style=flat-square)](#)

</div>

---

## About

**Earth Smile** is a simple, interactive static website for the grassroots initiative to make **Shantigram, Ahmedabad** completely plastic-free — and inspire communities across India to do the same.

The site is designed around a **"temperature rising"** visual metaphor: the colour palette, section sequencing, and animations all mirror the urgency of climate change — starting with cool ocean blues, warming through earth greens and heat oranges, reaching crisis reds as the user scrolls through the gravity of global warming.

---

## Live Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero / Banner** | Full-screen parallax with animated particle canvas, gradient title, and a real-time temperature-rise progress bar |
| 2 | **What's Happening** | Three fact cards (rising temperatures, melting ice, rising seas) alongside a sticky YouTube timelapse embed of NASA's global warming visualisation |
| 3 | **Point of No Return** | SVG clock ring animating to 98.7% of the 1.5 °C tipping-point threshold, with a list of irreversible climate feedback loops |
| 4 | **Impact of Global Warming** | Six impact cards (extreme weather, biodiversity loss, water scarcity, food insecurity, human health, coastal cities) each with an animated severity meter |
| 5 | **The Numbers** | Six animated stat counters — CO₂ ppm, ocean plastic, deforestation, marine life loss, years remaining, plastic removed by Earth Smile |
| 6 | **The Initiative** | A six-step vertical timeline with a gradient line that "heats up" from green → orange → red as the stakes increase |
| 7 | **Meet Our Team** | Four team cards with avatar, role, bio, and social links |
| 8 | **Gallery / Timeline** | A chronological activity timeline (Jan 2024 → Jan 2025) with cards for each milestone event |
| 9 | **Contact Us** | Contact details + a validated inquiry form with subject selection |
| 10 | **Footer** | Site links, a pledge counter button, and CO₂ readout |

---

## Design System

### Colour Palette — *Temperature Rising*

The palette deliberately shifts from cool to hot as the user journeys through the page.

| Token | Hex | Role |
|-------|-----|------|
| `--deep-ocean` | `#0a1628` | Page background |
| `--earth-green` | `#1b4332` | Primary dark green |
| `--green-light` | `#52b788` | Accent / interactive |
| `--heat-orange` | `#f4a261` | Mid-danger highlight |
| `--crisis-red`  | `#e63946` | Tipping-point alert |

### Typography

| Usage | Font | Weight |
|-------|------|--------|
| Display / headings | Montserrat | 700 / 900 |
| Body / UI | Inter | 400 / 500 / 600 |

### Motion Principles

- **Particles** — floating CO₂ / heat-shimmer dots on the hero canvas  
- **Scroll counters** — ease-out cubic count-up triggered by IntersectionObserver  
- **Clock ring** — SVG `stroke-dashoffset` animates to 98.7% of threshold  
- **Impact meters** — CSS `width` transition triggered on scroll  
- **Scroll reveal** — AOS (Animate On Scroll) with `fade-up`, `fade-left`, `zoom-in` variants  

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, accessible) |
| Styles | CSS3 — custom properties, CSS Grid, Flexbox, `clamp()` |
| Scripts | Vanilla JavaScript (ES2020, no build step) |
| Animations | [AOS](https://michalsnik.github.io/aos/) via CDN |
| Video | YouTube iframe (NASA warming timelapse) |
| Fonts | Google Fonts — Montserrat + Inter |

No frameworks, no bundlers, no dependencies beyond CDN links. Open the file and it works.

---

## Getting Started

### Prerequisites

- Any modern browser (Chrome, Firefox, Safari, Edge)
- A local HTTP server is recommended for iframe content (optional)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-org/earth-smile.git
cd earth-smile

# Option A — open directly
open index.html

# Option B — serve with Python (avoids iframe restrictions)
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Project Structure

```
earth-smile/
├── index.html          ← Single-page website
├── css/
│   └── style.css       ← All styles (design tokens → components → responsive)
├── js/
│   └── main.js         ← All interactions (particles, counters, form, scroll)
├── assets/
│   ├── images/         ← Team photos, gallery images (add your own)
│   └── icons/          ← Favicon, OG image
└── Readme.md
```

> **Gallery & team photos** — replace the emoji placeholder `<div class="gallery-placeholder">` blocks in `index.html` with real `<img>` tags pointing to `assets/images/`.

---

## Adding Real Photos

1. Drop images into `assets/images/`
2. In `index.html`, replace any `<div class="gallery-placeholder">` block with:

```html
<img src="assets/images/your-photo.jpg" alt="Descriptive alt text" loading="lazy" />
```

3. Remove `.gallery-placeholder` styles from `style.css` if no longer needed.

---

## Connecting the Contact Form

The form currently simulates a submission (1.4 s delay, then shows a success message). To connect it to a real backend:

- **Formspree** — set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` on the `<form>` tag and remove the JS submit handler
- **EmailJS** — call `emailjs.sendForm()` inside the existing submit handler in `main.js`
- **Custom backend** — replace the `setTimeout` in `initContactForm()` with a `fetch()` POST to your API endpoint

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push and open a Pull Request

Please keep PRs focused and avoid introducing build tooling unless absolutely necessary — the zero-dependency approach is intentional.

---

## Team

| Name | Role |
|------|------|
| Aryan Mehta | Founder & Lead Coordinator |
| Priya Nair | Community Outreach Head |
| Dr. Kavita Rao | Environmental Scientist |
| Riya Sharma | Visual Storyteller |

---

## License

MIT © 2024 Earth Smile Initiative

---

<div align="center">

*Every piece of plastic we remove is a breath our planet takes freely.*  
**Made with 💚 for Shantigram.**

</div>
