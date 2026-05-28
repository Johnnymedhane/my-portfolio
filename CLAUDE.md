# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build
npm run deploy     # Build + deploy to gh-pages
npm test           # Run tests
```

## Architecture

Single-page React 19 app (Create React App) deployed to Netlify. No TypeScript.

**Routing** — React Router v7 with a single `AppLayout` shell (Header + Outlet + Footer). All routes live under this shell. Route components are in `src/pages/`, lazy-loaded via `React.lazy`.

**State / Context** — Two context providers wrap the app:
- `AppProvider` (`src/contexts/contextApi.jsx`) — global UI state: dark/light mode, mobile nav open, active nav item, scroll indicator visibility. Dark mode is toggled by adding/removing `dark-mode` / `light-mode` classes on `<html>`.
- `ProjectsProvider` (`src/contexts/ProjectsContext.jsx`) — projects list (hardcoded array), active category filter, loading state. No external data source; projects are defined inline.

**Styling** — Plain CSS with CSS custom properties defined in `src/index.css` (`:root`). Dark/light mode is implemented via class-based CSS variable overrides on `document.documentElement`. Component-level styles use CSS Modules (`.module.css`) or co-located `.css` files. Framer Motion is used for animations in the Skills section.

**Data / Backend** — Supabase is used only for the contact form (`src/api/apiClient.js`): reads the `contacts` table to deduplicate submissions, then inserts new rows. The Supabase anon key is hardcoded in `src/api/supabase.js`.

**Component structure:**
- `src/ui/` — reusable layout primitives (Header, Footer, AppLayout, Section, etc.)
- `src/components/<section>/` — feature components grouped by page section (hero, about, skills, projects, resume, contact, myStoryContainer)
- `src/pages/` — route-level page components that compose section components
- `src/hooks/` — custom hooks (intersection observer, scroll throttling, local storage)

**Forms** — `react-hook-form` for the contact form. Phone validation is Israeli format (`/^(\+972-?|0)([23489]|5[012345689]|77)-?\d{7}$/`).

**Notifications** — `react-hot-toast` for form feedback, styled via the `<Toaster>` config in `App.jsx`.
