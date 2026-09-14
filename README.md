<div align="center">

<img src="public/favicon.svg" alt="Dev Stack Logo" width="48" />

# Dev Stack Builder

A clean, interactive SPA where developers explore modern technologies and build a personal stack — with real-time toast feedback, responsive layouts, and a single-source gradient theme.

---

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI_5-5A0EF8?logo=daisyui&logoColor=white)
[![Live](https://img.shields.io/badge/Live_Demo-devstackbuilder.vercel.app-8B5CF6?style=flat-square)](https://devstackbuilder.vercel.app/)

---

## About

**Dev Stack Builder** lets you browse a curated catalog of 12 developer technologies, view details like ratings, difficulty, and category, then add your favourites to a personal stack sidebar — with instant toast notifications for every action and full mobile responsiveness down to 375px.

</div>

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Frontend** | React, Vue.js, Svelte, Next.js |
| **Backend** | Node.js |
| **Database** | PostgreSQL, Redis |
| **Language** | JavaScript, TypeScript, Java |
| **Styling** | Tailwind CSS |
| **DevOps** | Docker |

All technology icons sourced from [Devicon](https://devicon.dev/).

---

## Features

### 1. Interactive Technology Catalog
Browse 12 technologies across 6 categories, each showing name, description, fractional rating, difficulty level, and a coloured category badge — loaded dynamically from a JSON data file.

### 2. Personal Stack Builder with Duplicate Prevention
Click "Add to Stack" to build your collection; the selected card grays out with a checkmark and the button disables. Attempt to add it again and a red error toast blocks the duplicate.

### 3. Responsive Layout with Single-Source Gradient Theme
A single CSS variable `--gradient-brand` drives every gradient across the app — hero CTAs, hover borders, navbar text, and footer accents. The layout stacks cleanly from 375px mobile up to 1280px desktop with a 3-column card grid and pinned-to-bottom action buttons.

---

## Getting Started

```bash
git clone https://github.com/SSKsaan/DevStack.git
cd DevStack
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser, or check out the live version at [devstackbuilder.vercel.app](https://devstackbuilder.vercel.app/).

---

## React QnA

### What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that looks like HTML. It lets you write UI structure directly inside JS files, which React then compiles into lightweight objects called React elements. It's used because it makes component code far more readable than calling `createElement` over and over.

---

### What is the difference between props and state?

Props are read-only inputs passed from a parent to a child — they configure the child but can't be changed by it. State is data owned and managed by the component itself, and when state changes, React re-renders the component to reflect the new UI.

---

### What does the useState hook do, and where did you use it in this project?

`useState` lets a functional component hold and update its own local data. I used it in `Navbar.jsx` to track whether the mobile hamburger menu is open (`open`/`setOpen`), and in `App.jsx` to hold the `stack` array and update it when adding or removing technologies.

---

### What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` lets you run side effects after a component renders — things that happen outside of returning JSX, like fetching data or touching the DOM. I used it in `Technologies.jsx` to call `fetch('/data/technologies.json')` once on mount, parse the response, and store the result in state so the UI could render the catalog.

---

### Why does every item in a .map() list need a unique key prop?

React uses the `key` to identify which items in a list changed, were added, or were removed. Without a stable unique key, React can't efficiently update the DOM — it might re-render the wrong elements or lose internal state like input values.

---

### What is conditional rendering? Show one place you used it.

Conditional rendering means showing or hiding UI elements based on a condition in JavaScript. A clear example is the empty stack state in `YourStack.jsx`: when the stack array has zero items, a dashed-border box with a "Your stack is empty" message renders; otherwise, the list of added technologies renders instead.

---

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to child: pass data as props in JSX — for example, `<YourStack stack={stack} onRemove={removeFromStack} />` gives `YourStack` both the current data and a callback to remove an item. Child to parent: the child calls that callback with the relevant data, like `onRemove(tech.id)`, which triggers the parent's state update and re-renders both components.

---

<div align="center">

Made with React + Tailwind CSS

</div>
