# Jobify

![Jobify Preview](./preview.PNG)

Jobify is a modern, responsive job portal web application designed to connect talented professionals with world-class opportunities. It features intuitive job search tools, curated career insights, and a seamless interface tailored for career growth.

🔗 [View Live Link](https://shepherd-bit.github.io/03-react-job-site/)

---

## Key Features

* **Interactive Hero & Search Section:** Quick job discovery with dynamic search suggestions and category filters.
* **Partner Brand Showcase:** Full-color partner logo grid highlighting leading companies hiring on the platform.
* **Featured Career Insights:** Fast, CSS-rendered related news grid with category badges, author bios, and read-time estimates.
* **Newsletter Subscription:** High-converting updates section complete with instant subscription feedback and privacy assurances.
* **Responsive Layout:** Tailored design for seamless usability across desktop, tablet, and mobile displays.
* **Dark-Themed Footer:** Professional footer with quick navigation links and custom white-themed social media integration.

---

## Tech Stack

* **Frontend Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Icons:** React Icons (`react-icons/fi`)
* **Deployment:** GitHub Pages & GitHub Actions

---

## Project Structure

```text
03-react-job-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── icons/                  # Social media and brand assets
│   └── preview.PNG             # Repository preview image
├── src/
│   ├── assets/                 # Dynamic imagery and media files
│   ├── components/
│   │   ├── Navbar.jsx          # Header navigation bar
│   │   ├── Hero.jsx            # Hero banner & search UI
│   │   ├── Partners.jsx        # Colored partner logo carousel/grid
│   │   ├── RelatedNews.jsx     # Career news grid component
│   │   ├── Newsletter.jsx      # Email subscription banner
│   │   └── Footer.jsx          # Dark themed footer with social links
│   ├── App.jsx                 # Primary app entry layout
│   ├── index.css               # Global styles & Tailwind directives
│   └── main.jsx                # React DOM render entry point
├── index.html                  # Root HTML document
├── package.json                # Project dependencies and build scripts
└── vite.config.js              # Vite configuration & base deployment path