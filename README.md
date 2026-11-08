# MEHTYS — Early-Stage Technology Venture

Official website for **MEHTYS**, an independent, early-stage technology venture founded by **TYSON GARFIELD** and **MEHVISH (AJMERI)**, currently developing its first software products.

---

## 👥 Co-Founders

- **TYSON GARFIELD** — Co-Founder
- **MEHVISH (AJMERI)** — Co-Founder

---

## 📦 Products in Development

The MEHTYS public platform showcases only two focused products currently in active development:

- **MTCodeBridge (MTCB)** *(In Development)*: A developer tool designed to translate code between programming languages while helping users understand the translated output.
- **MTnote** *(In Development)*: A knowledge organizer designed to extract, organize and retrieve useful information from exported chat conversations.

> *Note: For products currently under development, access links will be available soon.*

---

## 🎯 Mission, Vision & Philosophy

### Mission
Build useful, accessible technology that solves practical problems.

### Vision
Gradually develop a portfolio of independent software products that make everyday digital work simpler and more efficient.

### Philosophy
- **Build for real problems.** Focus strictly on tangible difficulties users face in daily work.
- **Keep products simple and useful.** Prioritize direct utility and clean user experiences.
- **Prefer practical engineering over unnecessary complexity.** Avoid fragile dependencies and bloated architectures.
- **Use AI where it genuinely adds value.** Integrate machine intelligence purposefully to assist users, not as decorative hype.
- **Improve through real user feedback.** Iterate steadily based on honest usage and practical experience.

---

## 🛡️ Brand Identity & Logo

The latest original MEHTYS brand logo artwork is located in:
- `logo/MEHTYS logo.jpeg`
- `public/mehtys-logo.jpeg`
- `src/assets/mehtys-logo.jpeg`

The original artwork, proportions, and metallic finish are preserved with 100% fidelity.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router 6](https://reactrouter.com/) (Multi-page client-side architecture)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)

---

## 💻 Local Development & Testing

### Prerequisites
- Node.js v18+ (tested on Node v24.15.0)
- npm v9+

### Commands

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Cloudflare Pages Deployment (When Ready)

The project includes `public/_redirects` (`/* /index.html 200`) and `public/_headers` for single-page routing and edge security.

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (or leave blank)
