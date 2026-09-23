# Developer Portfolio Template 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## What is this?

This simple portfolio template is designed to showcase your past projects, career history, skill sets, and more.

View the [Demo](https://yujisatojr.github.io/react-portfolio-template/).

**This template is free to use, and no attribution is required.** You can fork or download this repository to customize it for your own use. Please don't forget to leave a ⭐ if you like this portfolio!

![screenshot](./src/assets//images/screenshot.png)

## Features

✅ Open source (free to use, no attribution required)  
✅ Responsive design & mobile-friendly  
✅ Supports both dark and light modes  
✅ Highly customizable multi-component layout  
✅ Built with modern technologies (React, TypeScript, Vite, and SCSS)  
✅ Targets Node.js 24 LTS  
✅ SEO-ready SPA (meta tags, Open Graph, JSON-LD, sitemap, semantic HTML)  

## Quick Setup

1. Use **Node.js 24 LTS** (Active LTS). Check with:

    ```bash
    node -v
    ```

    If you use nvm, this repo includes an `.nvmrc` pinned to `24`.

2. Copy env example and fill local values:

    ```bash
    cp .env.example .env
    ```

3. Install and start:

    ```bash
    npm install
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000).

## Deployment (Cloudflare Workers / Pages)

Build output folder is `build` (not `dist`).

Because `.env` / `.env.production` are **not** committed to GitHub, set the same keys in Cloudflare:

### Set environment variables in Cloudflare

1. Open your project → **Settings** → **Variables and Secrets** (Workers)  
   or **Settings** → **Environment variables** (Pages).
2. Add these for **Production** (and Preview if you want):

| Variable | Example |
|----------|---------|
| `VITE_SITE_URL` | `https://albinantony.dev` |
| `VITE_SITE_NAME` | `Albin Antony` |
| `VITE_SITE_TITLE` | `Albin Antony \| Full Stack Engineer` |
| `VITE_SITE_DESCRIPTION` | Your SEO description |
| `VITE_EMAILJS_USER_PUBLIC_KEY` | Your EmailJS public key (optional) |

3. Mark them as **plain text** (not encrypted) if they are public SEO strings — Vite must see them at **build** time.
4. **Redeploy** / retry the build after saving.

> Important: `VITE_*` values are baked in during `npm run build`. Changing them in Cloudflare without rebuilding will not update the live HTML. There are **no hardcoded env defaults** in `vite.config.ts` — set every required variable in Cloudflare (or local `.env`).
