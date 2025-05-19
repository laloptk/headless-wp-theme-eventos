# ⚛️ React + Vite Headless WordPress Theme

A headless WordPress theme built with **React**, **Vite**, and **Tailwind CSS**, following the **Atomic Design methodology**. This project uses **custom hooks** to fetch and manipulate content from the **WordPress REST API**, providing a modern decoupled frontend.

---

## 📁 Project Structure

```
src/
├── assets/               # Static assets (images, fonts)
├── components/           # Atomic Design: atoms, molecules, organisms
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   ├── pages
│   └── layout
├── hooks/                # Custom hooks (e.g. useFetchWP, useEditWP)
├── utils/                # API classes (fetchWP, EditWP, WpAPIOps)
├── styles/               # Global and tailwind styles
├── App.jsx               # App root
└── main.jsx              # Vite entry
```

---

## 🚀 Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/laloptk/headless-wp-theme-eventos.git
cd headless-wp-theme-eventos
npm install
```

### 2. Configure Environment

Create a `.env` file in the root folder and add this env variables (Not recommended for production, just for local development enviroments):

```env
VITE_WP_SITE_URL=http://practice.local/ # The url of the website that contains your WordPress installation
VITE_WP_APP_PASSWORD=xxxx xxxx xxxx xxxx  # Your WordPress Application Pasword
```
[How to get your WordPress App Password.](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)

> 🔐 **Never expose secrets** in frontend apps. Use environment variables only for safe public endpoints.

---

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Features

- ✅ Headless architecture with WordPress REST API
- 🧱 Atomic Design component structure
- 🔄 Custom hooks for fetching and CRUD (e.g. `useFetchWP`, `useEditWP`)
- ⚡ Fast build & hot reload with **Vite**
- 🎨 TailwindCSS styling
- 💬 Easily extensible for ACF, GraphQL, or custom post types

---

## 🔧 Development Concepts

### ✳️ Atomic Design

- **Atoms:** Buttons, inputs, headings
- **Molecules:** Forms, cards
- **Organisms:** Header, post list, hero sections
- **Templates:** Layout skeletons
- **Pages:** Full pages using templates

### 🧠 Custom Hooks

- `useFetchWP()` – Get all posts
- `useEditWP(resource)` – Reusable hook for Create, Read, Update, Delete

### 📦 WP REST API Classes

- `WpAPIOps`: Base abstract class
- `fetchWP`: Handles GET requests (posts, pages, taxonomies)
- `EditWP`: Handles POST, PUT, DELETE for editable content

---

## 📦 Production Build

```bash
npm run build
```

To preview:

```bash
npm run preview
```

---

## 🛠️ TODOs

- [ ] Add authentication support (JWT or OAuth)
- [ ] Add block-based rendering from `content.rendered`
- [ ] SSR or pre-rendering for better SEO (with Next.js or Vite SSR)

---

## 🧠 Tips

- Use `dangerouslySetInnerHTML` carefully when rendering block content.
- Add loading and error states to every API call.
- Use `React.memo`, `useRef`, or `useMemo` to prevent unnecessary re-renders.

---

## 📄 License

MIT — Feel free to use and modify.

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
