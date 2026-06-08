# Admin Dashboard

![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind%20CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer%20Motion](https://img.shields.io/badge/Framer%20Motion-%2300B5FD.svg?style=for-the-badge&logo=framer&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-%23E44F8A.svg?style=for-the-badge&logo=chartjs&logoColor=white)

---

## 🎥 Demo

<details open>
<summary>Click to view the live demo animation</summary>

![Admin Dashboard Demo](./src/assets/dashboard-demo.gif "Admin Dashboard animation")

</details>

---

## Overview

A modern, responsive admin dashboard built with **React**, **Vite**, and **Tailwind CSS**. The UI showcases smooth **Framer Motion** animations, interactive charts from **Recharts**, and a rich set of icons from **React‑Icons**.

---

## Features

- **Responsive layout** – adapts to desktop, tablet, and mobile devices.
- **Animated sidebar** – fluid open/close transitions powered by Framer Motion.
- **Realtime charts** – visualize data with Recharts components.
- **Dark mode** – toggle between light and dark themes.
- **Icon library** – uses Font Awesome icons via react‑icons.
- **Tailwind CSS** – utility‑first styling for rapid UI development.

---

## Tech Stack

| Technology | Description |
|------------|-------------|
| **React** | UI library for building component‑based interfaces. |
| **Vite** | Fast development server and bundler. |
| **Tailwind CSS** | Utility‑first CSS framework. |
| **Framer Motion** | Declarative animation library for React. |
| **Recharts** | Composable chart library built on React. |
| **React‑Icons** | Icon collection based on Font Awesome and other packs. |

---

## Getting Started

### Prerequisites

- **Node.js** (v20 or later) and **npm** (v10 or later). You can download them from the [official website](https://nodejs.org/).

### Installation

```bash
npm install          # Install dependencies
npm run dev          # Start the development server
```

Open your browser at `http://localhost:5173` (or the URL shown in the console) to view the dashboard.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Starts Vite in development mode with hot‑module replacement. |
| `build` | Bundles the app for production. |
| `preview` | Serves the production build locally. |
| `lint` | Runs ESLint to check code quality. |

---

## Project Structure

```
admin-dashboard/
├─ public/                # Static assets (favicon, etc.)
├─ src/
│  ├─ assets/           # Images, icons, and demo GIFs
│  ├─ components/       # React UI components (Header, Sidebar, Charts…)
│  ├─ data/              # Mock data used by the dashboard
│  ├─ App.jsx            # Root component
│  └─ main.jsx           # Entry point
├─ tailwind.config.js    # Tailwind configuration
├─ vite.config.js        # Vite configuration
├─ package.json          # Project metadata & scripts
└─ README.md             # This file
```

---

## Contributing

Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request. Please ensure that your code follows the existing linting rules (`npm run lint`).

---

## License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.
