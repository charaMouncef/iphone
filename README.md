# iPhone 18 Pro Landing Page

An Apple-style product landing page for the iPhone 18 Pro, built with React, Vite, and Three.js. It features an interactive 3D iPhone, scroll-driven GSAP animations, smooth scrolling, and a fully responsive layout.

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| 3D Rendering | [Three.js](https://threejs.org/) via [@react-three/fiber](https://r3f.docs.pmnd.rs/) & [@react-three/drei](https://github.com/pmndrs/drei) |
| Animation | [GSAP](https://gsap.com/) + ScrollTrigger + [@gsap/react](https://gsap.com/resources/React/) |
| Smooth Scrolling | [Lenis](https://lenis.darkroom.engineering/) |
| State Management | React built-in hooks (`useState`, `useRef`) |

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Generates a production build in the `dist/` folder.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

## Project Structure

```
├── public/                    Static assets (model, video, images, fonts, icons)
│   ├── features/              Cards for the "Why Apple" section
│   ├── fonts/                 Custom Regular, Medium, SemiBold, Bold files
│   ├── model/                 apple_iphone_18_pro.glb
│   ├── videos/                Hero video and poster
│   └── ...                    Product/aperture images and SVG icons
├── src/
│   ├── main.jsx               App entry point (mounts <App /> in StrictMode)
│   ├── App.jsx                Page composition, Lenis setup, ScrollTrigger registration
│   ├── index.css              Global styles, Tailwind v4 @theme tokens, fonts, keyframes
│   ├── constants/
│   │   └── index.js           Nav links, colors, noChangeParts, camera focus, cards, footer
│   └── components/
│       ├── Navbar.jsx         Fixed Apple-style navigation
│       ├── Hero.jsx           Hero video, headline, price and Buy call-to-action
│       ├── Compare.jsx        "Most wanted" comparison section
│       ├── ProductViewer.jsx  3D canvas with color controls
│       ├── Camera.jsx         Variable-aperture photo switcher (f/1.48 – f/4.0)
│       ├── Features.jsx       Pinned horizontal-scroll card rail
│       ├── Footer.jsx         Footer links and copyright
│       ├── Loader.jsx         Font-aware progress loader
│       ├── three/
│       │   └── StudioLights.jsx  Environment and spotlight setup
│       └── model/
│           └── Iphone.jsx     GLTF model loading and material recoloring
└── index.html
```

## Features

- **Interactive 3D model** — Drag to rotate the iPhone with `PresentationControls` and snap-back behavior; it also rotates gently on its own.
- **Color customization** — Toggle between Burgundy, Black, White, and Silver. Colors are applied to every mesh except the protected parts listed in `noChangeParts`.
- **Aperture switcher** — Compare f/1.48, f/1.8, f/2.8, and f/4.0 sample photos with a sliding selector pill and matching copy.
- **Scroll animations** — GSAP timelines with ScrollTrigger pin the Features section and scrub the horizontal card rail.
- **Smooth scrolling** — Lenis is driven by the GSAP ticker and kept in sync with ScrollTrigger refreshes.
- **Responsive design** — Tailwind breakpoints adapt typography, layout, and section spacing from mobile to desktop.
- **Custom theming** — Tailwind v4 `@theme` tokens and custom `@font-face` declarations in `src/index.css`.

## How It Works

1. **Loading** — `Loader` waits for `document.fonts.ready` (plus a minimum delay), animates a progress bar, then calls `onFinish`.
2. **Scroll setup** — `App` creates a Lenis instance, drives it from `gsap.ticker`, and refreshes ScrollTrigger once the content is mounted.
3. **3D scene** — `ProductViewer` renders a `Canvas` with `PresentationControls`, `StudioLights`, and `RotatingIphone`; the selected color name is mapped to a hex value from `iphoneColors`.
4. **Recoloring** — `Iphone` traverses the loaded GLTF meshes and updates material colors, skipping meshes named in `noChangeParts` (glass, lenses, sensors, speakers, ports, display).
5. **Camera section** — `Camera` swaps the active photo and description, and measures the selected button to position the sliding pill.
6. **Scroll section** — `Features` uses `useGSAP` + ScrollTrigger to pin the section and translate the card rail horizontally by its overflow amount.
7. **Styling** — Component utilities come from Tailwind v4, with global colors, fonts, and the fade-in animation defined in `src/index.css`.

## Assets

All static assets are served from `public/`:

- `model/` — The `.glb` iPhone model
- `videos/` — Hero video and its poster image
- `fonts/` — Custom Regular, Medium, SemiBold, and Bold font files
- `features/` — Images for the "Why Apple" cards
- Images and SVG icons referenced throughout the components

## License

Replace the demo models, photos, videos, and fonts with properly licensed assets before deploying to production.
