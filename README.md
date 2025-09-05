# Smily 2023

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://Louis62240.github.io/smily-2023/)
[![CI/CD](https://github.com/Louis62240/smily-2023/actions/workflows/deploy.yml/badge.svg)](https://github.com/Louis62240/smily-2023/actions)

Smily 2023 is a modern Vue.js web application styled with Tailwind CSS and automatically deployed to GitHub Pages using GitHub Actions.

## 🚀 Features

- Vue.js 2.x SPA architecture
- Tailwind CSS for rapid UI development
- Authentication components (Sign In, Sign Up)
- User account management
- Responsive design
- Automatic deployment and release via GitHub Actions

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Louis62240/smily-2023.git
cd smily-2023
npm install
```

## 🛠️ Usage

### Local development

```bash
npm run serve
```

### Production build

```bash
npm run build
```

## 🌐 Deployment

Every push to `master` triggers a build and deploys the app to the `gh-pages` branch via GitHub Actions.
Access the live site at: [Louis62240.github.io/smily-2023](https://Louis62240.github.io/smily-2023/)

## 📦 Release Automation

Each push to `master` also creates a GitHub release automatically.

## 📁 Project Structure

- `src/` — Vue.js source code
- `public/` — Static public files
- `dist/` — Production build (auto-generated)
- `.github/workflows/deploy.yml` — CI/CD workflow

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## 📄 License

This project is licensed under the MIT License.

---

**Author:** Louis62240
