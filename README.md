# Dhwij Patil — Robotics Engineer Portfolio (Fastfolio Edition)

A high-performance, minimalist, editorial personal portfolio website engineered for **Dhwij Patil** (M.Tech Robotics Researcher at IIT Jodhpur), designed in the sleek modern style of [Fastfolio](https://fastfolio.framer.website/).

---

## ✨ Features & Architecture

- **Atmospheric Background & Kinematics**:
  - **Patrol Quadcopter Drone**: Minimalist silhouette with transparent alpha, soft cyan drop-shadow, downward scanning light beam, and expanding radar ping waves running over an aerodynamic patrol flight path.
  - **Articulated Robotic Arm**: Multi-joint vector schematic anchored in the bottom right corner with forward kinematic joint articulation across shoulder, elbow, and wrist joints.
  - **Constellation Particle Canvas**: Autonomous floating interactive nodes with mouse proximity repulsion.
  - **Glow Orbs**: Ambient blurred gradients strictly preserving the `#141414` dark page background.
  - **Zero Obstruction**: All ambient graphics carry `pointer-events: none; z-index: 0;` ensuring text selection and button clicks are completely unobstructed.

- **Floating Pill Capsule Navigation**:
  - Frosted-glass floating capsule (`backdrop-filter: blur(20px)`).
  - Avatar, live status indicator (`🟢 Available for roles`), smooth section jump links (`Skills`, `Projects`, `Experience`, `Honors`, `Education`), dark/light theme switcher, and high-contrast `Contact Me` pill button.

- **Expanded Content Layout & 2-Column Project Grid**:
  - Optimized container width (`max-width: 980px`) providing generous editorial breathing room.
  - **2-Column Responsive Project Grid** with enlarged 16:9 media cards (`~410px × 231px`), showing VIO ROS 2 pipelines, 2D SLAM, differential bots, pick-and-place manipulators, and hexapods.
  - Interactive category filter pills (`All Projects (10)`, `SLAM & Vision`, `Robotics & Sim`, `Hardware & Embedded`) with dynamic badge counts.
  - Full-screen image lightbox modal for inspecting CAD schematics and system architectures.

- **Modular Data-Driven Configuration (`data.js`)**:
  - Every project, tool, experience item, and honor is managed inside `data.js`.
  - Supports a `visible: true / false` flag on every project to dynamically show or hide entries without modifying HTML.

- **Technical Skills Matrix & Experience**:
  - Top tool badges paired with a detailed 4-column matrix: Core Robotics Domains, Frameworks & Simulators, Programming & Spoken Languages, and Hardware & Embedded systems.
  - Where I've Worked timeline cards with role achievements and direct CV download button.
  - National hackathon awards, academic credentials, and interactive contact footer.

---

## 📂 Repository Structure

```
resume/
├── index.html                  # Root landing page (auto-redirects to ./resume_2/)
├── resume_1/                   # Classic portfolio edition
└── resume_2/                   # Fastfolio Edition (Active Production Edition)
    ├── index.html              # Main HTML markup
    ├── styles.css              # Complete styles, animations & responsive breakpoints
    ├── script.js               # Dynamic DOM rendering, lightbox, canvas & filters
    ├── data.js                 # Portfolio data source (projects, skills, visibility)
    ├── Dhwij_Patil_CV.pdf      # Complete PDF resume
    ├── assets/
    │   └── images/             # Vector SVGs, profile photo, and drone graphics
    │       ├── profile.png
    │       ├── drone_user_white.png
    │       ├── vio_ros2.png
    │       ├── slam_2d.png
    │       └── ...
    └── README.md               # This documentation file
```

---

## 🚀 Step-by-Step Guide: Deploying on GitHub Pages (`github.io`)

GitHub Pages hosts static websites directly from a GitHub repository for free. Follow the instructions below to publish your portfolio.

### Prerequisites
1. A [GitHub](https://github.com) account.
2. Git installed on your local computer.

---

### Method 1: Deploy As a Project Site (Recommended — No File Moving Required)

This repository includes a root `index.html` that automatically redirects visitors directly to `./resume_2/`.

#### Step 1: Initialize Git & Commit Your Changes
Open your terminal inside the repository folder (`/home/wizard/resume`):

```bash
# Check current git status
git status

# Stage all files
git add -A

# Commit your changes
git commit -m "feat: complete fastfolio portfolio with background kinematics and 2-col grid"
```

#### Step 2: Create a New GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Set **Repository name** to `resume` (or `portfolio`).
3. Set visibility to **Public** (required for free GitHub Pages).
4. **Do not** initialize with a README, .gitignore, or license (we already have our files).
5. Click **Create repository**.

#### Step 3: Link and Push to GitHub
Run the following commands in your terminal (replace `<YOUR_GITHUB_USERNAME>` with your GitHub username):

```bash
# Rename branch to main if not already on main
git branch -M main

# Add your GitHub repository as remote origin
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/resume.git

# Push your code to GitHub
git push -u origin main
```

#### Step 4: Enable GitHub Pages in Repository Settings
1. Navigate to your repository on GitHub: `https://github.com/<YOUR_GITHUB_USERNAME>/resume`.
2. Click on the **Settings** tab (gear icon at the top right).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main`.
   - **Folder**: Select `/ (root)` and click **Save**.
5. Wait 1 to 2 minutes for the GitHub Actions deployment workflow to finish.

#### Step 5: Access Your Live Site
Once deployed, GitHub Pages will display your live URL at the top of the Pages settings page:
```
https://<YOUR_GITHUB_USERNAME>.github.io/resume/
```
Visiting this URL will load the root redirector and display your Fastfolio portfolio with full background kinematics!

---

### Method 2: Deploy As Your Primary User Site (`https://<username>.github.io`)

If you want your portfolio to be your primary personal domain root (`https://<username>.github.io` without `/resume/` in the URL):

1. Create a repository named exactly:
   ```
   <YOUR_GITHUB_USERNAME>.github.io
   ```
   *(e.g., `Dhwij-WizarD.github.io`)*

2. Copy the contents of `resume_2/` directly to the root of that repository so that `index.html`, `styles.css`, `script.js`, `data.js`, and `assets/` reside at the top level.

3. Push to `main`:
   ```bash
   git add -A
   git commit -m "feat: deploy portfolio to user root site"
   git push -u origin main
   ```

4. In **Settings** > **Pages**, ensure **Source** is set to `Deploy from a branch` -> `main` -> `/ (root)`.

5. Your site is live at:
   ```
   https://<YOUR_GITHUB_USERNAME>.github.io/
   ```

---

## 🛠️ How to Customize Your Content

All portfolio text, links, and project details are decoupled into `resume_2/data.js`:

### 1. Toggle Project Visibility
To hide or show a project on the website, simply set `visible: true` or `visible: false` in `resume_2/data.js`:

```javascript
{
  id: "pick-place-manipulator",
  title: "Pick & Place Autonomous Manipulator",
  visible: true, // Set to false to hide from the live site
  featured: false,
  category: "Robotics & Sim",
  ...
}
```
The page automatically recalibrates category counts and filters in real time.

### 2. Updating Profile Photo & Resume PDF
- Replace `resume_2/assets/images/profile.png` with any square portrait (300×300px or larger).
- Replace `resume_2/Dhwij_Patil_CV.pdf` with your updated CV document.

### 3. Adding New Projects
Copy an existing project block in the `projects` array in `resume_2/data.js`:
```javascript
{
  id: "my-new-robotics-project",
  title: "Autonomous Quadruped Locomotion",
  subtitle: "RL-based gait controller in MuJoCo",
  visible: true,
  featured: true,
  category: "Robotics & Sim",
  domainBadge: "RL & Control",
  image: "./assets/images/new_project.png",
  period: "2026",
  description: "End-to-end reinforcement learning policy for rough terrain navigation.",
  highlights: [
    "Trained in Isaac Gym / MuJoCo with domain randomization",
    "Sim-to-real transfer with 94% trajectory tracking efficiency"
  ],
  tags: ["ROS 2", "MuJoCo", "PyTorch", "C++"],
  links: {
    github: "https://github.com/Dhwij-WizarD/...",
    docs: null
  }
}
```

---

## 🔍 Troubleshooting & Verification

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Styles or images not loading on GitHub Pages** | Absolute paths like `/styles.css` break in subfolder deployments | All links in `resume_2` use relative paths (`./styles.css`, `./assets/...`), which works out-of-the-box. |
| **Site shows 404 Not Found** | GitHub Pages build has not finished yet | Check the **Actions** tab in your GitHub repository. Wait for the green checkmark next to `pages-build-deployment`. |
| **Updates not showing after push** | Browser caching | Hard refresh your browser (`Ctrl + F5` on Windows/Linux or `Cmd + Shift + R` on Mac). |
| **Case sensitivity issues** | Linux-based GitHub Pages servers enforce strict casing | Ensure image file extensions match exact filenames (e.g., `.png` vs `.PNG`). |

---

## 🌐 Custom Domain (Optional)

To connect a custom domain (e.g. `dhwijpatil.com`):
1. In your GitHub repository, go to **Settings** > **Pages** > **Custom domain**.
2. Enter your domain (e.g., `dhwijpatil.com`) and click **Save**.
3. In your DNS registrar (GoDaddy, Namecheap, Cloudflare, etc.), add:
   - **A Records** pointing `@` to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME Record** pointing `www` to `<YOUR_GITHUB_USERNAME>.github.io`.
4. Check **Enforce HTTPS** in GitHub Pages settings.

---

## 📄 License & Credits
- Design inspired by the [Fastfolio](https://fastfolio.framer.website/) Framer aesthetic.
- Developed by Dhwij Patil & Google DeepMind Antigravity Assistant.
