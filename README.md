# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 😂 Meme Generator App

A fun and responsive meme viewer and uploader built with **React**, **Tailwind CSS**, and the [Meme API](https://meme-api.com/).

## ✨ Features

- 🔍 **Search Memes** by title
-  🧩**Random Meme** generator
- 💬 **Add Comments** to each meme
- ❤️ **Like/Reactions** (❤️ / 🤍 toggle)
- 📤 **Upload Your Own Memes** using image URLs
- ⬇️ **Download Memes**
- 🔄 **Load More** memes on button click
- 🎨 **Responsive UI** with TailwindCSS

## 📁 Folder Structure

```
├── public/
├── src/
│    ├──assests
│    ├──components/
│    │    ├── MemeDisplay.jsx   # Main logic for meme display & interaction
│    ├──App.css
│    ├──App.jsx
│    ├──index.css
│    ├──main.jsx
├──.env
├──gitignore
├──eslint.config.js
├──index.html
├──package-lock.jscon
├──package.json
├──README.md
├──vite.config.js
└── README.md

````


## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/meme-generator-app.git
cd meme-generator-app
