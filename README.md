# Harman Singh Kohli - Executive Engineering Portfolio & ATS Resume

A fast, minimalist, and executive-styled personal portfolio and interactive resume website built for **Harman Singh Kohli**.

Designed with a Linear/Vercel-inspired matte dark aesthetic (`#0b0f17`), subtle 1px slate borders, an engineering blue accent (`#3b82f6`), spotlight Command Palette (`Ctrl + K`), dynamic architecture inspectors, and an ATS-optimized printable resume layout.

All content is 100% strictly grounded in the candidate's authentic resume without exaggerated claims or fabricated metrics.

---

## ⚡ Key Highlights

- **Executive Matte Dark Aesthetic**: Refined dark slate styling inspired by modern developer platforms (Linear, Vercel). No neon, no gamer glow, no distracting falling matrix code.
- **Strictly Grounded Content**: Accurate portrayal of candidate's academic background (B.Tech IT '27 at GHRCE Nagpur), 4 real internships, 5 authentic projects, 5 certifications, and 150+ LeetCode problems.
- **Forthcoming IEEE / Scopus Research Highlight**: Features the lead-authored research paper on multi-floor graph navigation and topological pathfinding currently under peer review.
- **Continuous Cyber Canvas Engine**: Real-time infinite cyber grid, traveling circuit data packets, sweeping radar scanlines, and reactive glowing nodes.
- **Spotlight Command Palette (`Ctrl + K` / `Cmd + K`)**: Fast keyboard-driven navigation to jump to sections, view projects, open the ATS resume, or copy contact information.
- **Architecture Inspector Modals**: Interactive system dataflow diagrams illustrating the pipeline architecture for each project.
- **ATS-Friendly Printable Sheet (`ats_resume.html` & `Ctrl + P`)**:
  - Standalone single-page ATS-formatted resume sheet matching industry standards for direct submission to recruiter portals.
  - Native print stylesheet (`@media print`) for clean black-and-white PDF export directly from the browser.

---

## 📁 Flat Project Architecture

This project maintains a **100% flat directory structure** (zero subfolders) to ensure smooth drag-and-drop web uploads on GitHub, Cloudflare Pages, Netlify, or any static hosting platform.

```
interactive-dark-resume/
├── .gitignore           # Protects personal photo from being tracked/pushed
├── index.html           # Main executive dark portfolio interface
├── ats_resume.html      # Standalone single-page ATS printable resume sheet
├── styles.css           # Clean Linear/Vercel styling, custom badges, print rules
├── data.js              # Centralized single source of truth for resume data
├── canvas.js            # Ambient cybernetic circuit and matrix code stream engine
├── palette.js           # Command palette spotlight search (Ctrl+K / Cmd+K)
├── app.js               # Dynamic DOM rendering, spotlight, cross-filtering & scramble
├── server.js            # Zero-dependency Node.js HTTP server for Render Web Services
├── package.json         # Node metadata and start script for Render builds
├── render.yaml          # Render Blueprint configuration file (1-click deploy)
├── harman_photo.jpg     # Personal photo (kept local, ignored by git)
└── README.md            # Project documentation and guide
```

---

## 🚀 How to Run Locally

Because this project is built with standard vanilla web technologies and zero build tools:

### Option 1: Double-Click
Simply double-click `index.html` or `ats_resume.html` in your file explorer to open it in any modern browser.

### Option 2: Local HTTP Server (Recommended)
From this directory:

```bash
# Using Python 3
python -m http.server 3000

# Or using Node.js
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## 🌐 100% Free Deployment Options

### Option 1: GitHub Pages (No Credit Card, Permanent)
1. Initialize git in this folder and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial release of executive resume website"
   git branch -M main
   git remote add origin https://github.com/hsk-27/resume.git
   git push -u origin main
   ```
2. Go to your repository on GitHub: **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. In ~60 seconds, your site will be live at:
   `https://hsk-27.github.io/resume/`

*(Note: Your personal photo `harman_photo.jpg` is automatically excluded by `.gitignore`, so it will never be uploaded to GitHub. The website gracefully displays your clean initials monogram "HK" instead.)*

---

### Option 2: Cloudflare Pages (Free, No Phone/Credit Card Required)
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Upload assets**.
3. Drag and drop the contents of this folder directly.
4. Click **Deploy site**. It goes live globally in seconds on a free `*.pages.dev` domain with free SSL.

---

### Option 3: Netlify Drop (30 Seconds, No Git Needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `interactive-dark-resume` folder into the browser.
3. Your site is deployed immediately.

---

### Option 4: Render Deployment (render.com)

Render supports two deployment methods for this repository. Both are fully configured:

#### Method A: Static Site (Recommended — 100% Free, Global Edge CDN, Zero Cold Starts)
1. In the [Render Dashboard](https://dashboard.render.com/), click **New +** ➔ **Static Site**.
2. Connect your GitHub repository.
3. Configure the settings:
   - **Name**: `harman-portfolio` (or your choice)
   - **Branch**: `main`
   - **Build Command**: *(leave completely empty)*
   - **Publish Directory**: `.` *(a single dot represents the root directory where `index.html` resides)*
4. Click **Create Static Site**.
5. Your website is deployed in ~30 seconds on a global CDN URL (`https://harman-portfolio.onrender.com`).

#### Method B: Web Service (Node.js)
If you created a **Web Service** on Render instead of a Static Site:
1. Render will automatically detect the included `package.json` and `server.js`.
2. Settings:
   - **Environment**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
3. Click **Create Web Service**. The built-in zero-dependency server automatically binds to `0.0.0.0:$PORT` with proper MIME types, gzip headers, and clean URL routing.

#### Method C: Render Blueprint (Automatic 1-Click)
1. In Render Dashboard, click **New +** ➔ **Blueprint**.
2. Select your repository. Render reads the included `render.yaml` and deploys automatically with zero manual configuration.

---

## 🛠️ How to Update Your Resume Information

All information is isolated in **`data.js`**.

To make updates:
1. Open `data.js`.
2. Update any relevant fields (e.g. new LeetCode milestone, additional certification, or updated publication status).
3. Refresh your browser — the hero section, stats, projects, skills matrix, and printable resume will automatically update.
