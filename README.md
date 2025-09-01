# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# 😂 Meme Generator App

A fun, interactive, and responsive meme generator and viewer built with **React**,**Tailwind CSS**, and powered by the **Meme API**. Upload your own memes, explore trending ones, search by keyword, react with ❤️, and even download your favorites!

---

## ✨ Features

- 🔍 **Search Memes** by title.
-  🧩**Random Meme** generator.
- 💬 **Add Comments** to each meme.
- ❤️ **Like/Reactions** (❤️ / 🤍 toggle).
- 📤 **Upload Your Own Memes** using image URLs.
- ⬇️ **Download Memes** a button is present.
- 🔄 **Load More** memes on button click.
- 📲 **Share Memes** where url lonk is generated to share .
- 🎨 **Responsive UI** with TailwindCSS.

---

## 📁 Folder Structure

````
├── public/                     #root of your project
├── src/
│    ├──assests                 #Store static files like images, icons
│    ├──components/             #components of the ui(reuable)
│    │    ├── MemeDisplay.jsx   #Main logic for meme display & interaction
│    ├──App.css                 #Local CSS styles
│    ├──App.jsx                 #Entry-level React component
│    ├──index.css               # Global styles for the entire app
│    └──main.jsx                # main entry point
├──.env                         #store environment variables as API KEY
├──gitignore                    #Specifies files and directories Git should ignore
├──eslint.config.js             #maintain consistent coding standards
├──index.html                   #single HTML file
├──package-lock.jscon           #Automatically generated to lock versions
├──package.json                 #project dependencies, scripts, metadata
├──README.md                    #Documentation file
├──vite.config.js               #Useful for customizing build tools, plugins, and aliases
└── README.md                   #this file

````
---

## 🧰 Teck Stack

- ⚛️ [React+vite](https://vite.dev/) – JS(UI) library
- 🎨 [TailwindCSS](https://tailwindcss.com/) – for styling
- 🔗 [MEME API](https://meme-api.com/gimme/) – meme content provider
---
## 📸 Demo Preview

<img width="1920"  alt="first" src="https://github.com/user-attachments/assets/ca99eaef-1afa-4ef4-84a7-4accc1380971" />

<img width="1920"  alt="layout" src="https://github.com/user-attachments/assets/05bb1723-becb-41e9-b376-6030fbda00b4" />

<img width="1920"  alt="more" src="https://github.com/user-attachments/assets/e1cbce6c-04ff-4e42-8ca8-153c30363958" />

<img width="1920"  alt="like" src="https://github.com/user-attachments/assets/03f3a20a-2a3b-4db0-86be-7b23194f6ab3" />

<img width="1920"  alt="random" src="https://github.com/user-attachments/assets/b8fd8fe7-cac3-4acb-a609-f9d37e4a8cee" />

<img width="1920"  alt="all" src="https://github.com/user-attachments/assets/6a53f2c4-89c4-4b1a-93e1-51bb87d6ef5f" />

<img width="1920"  alt="Share" src="https://github.com/user-attachments/assets/22b40379-19d1-47f6-b6cb-453f6658539c" />

<img width="1920"  alt="Search" src="https://github.com/user-attachments/assets/bc550e6c-df2c-4a0d-835d-adb742b5d751" />

---
## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Jyotikamble-creator/Meme-App.git

cd memeapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3.Start the App

```bash
npm run dev
```

The app will open at http://localhost:5173 (or another port if 5173 is in use).

---
## 🙌 Contribution

Feel free to fork this repo and submit a PR with improvements  memes are meant to be shared! 😄
