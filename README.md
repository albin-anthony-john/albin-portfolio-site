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

2. In the project directory, install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

5. Customize the template by navigating to the `/src/components` directory. Modify texts, pictures, and other information as needed.

The page will reload if you make edits, and you will see any lint errors in the console.

If you are interested in creating a mockup image like the ones from the personal projects section, I recommend [Genmoo](https://gemoo.com/tools/browser-mockup-generator/). This website lets you generate sleek looking browser mockups for free.

## Deployment (Cloudflare Workers / Pages)

Build output folder is `build` (not `dist`).

1. Set production SEO values in committed `.env.production`, or as Cloudflare environment variables:
   - `VITE_SITE_URL`
   - `VITE_SITE_NAME`
   - `VITE_SITE_TITLE`
   - `VITE_SITE_DESCRIPTION`
2. In Cloudflare, use build command `npm run build` and output directory `build`.
3. Do **not** use a Netlify-style `public/_redirects` SPA rule — `wrangler.jsonc` already enables SPA fallback via `not_found_handling: "single-page-application"`.

You can also host on [Netlify](https://www.netlify.com/) or [Render](https://render.com/). Point the publish directory to `build`.
