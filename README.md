# To-Do List App

A simple and modern To-Do List web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This app allows users to add, edit, and delete tasks, with persistent storage in the browser's local storage. The project uses React Router for navigation and is ready for deployment on Netlify.

## Features

- Add, edit, and delete tasks
- Tasks are saved in local storage
- Responsive and clean UI with Tailwind CSS
- Navigation between Home, To-Do, About, and Contact pages
- Built with TypeScript for type safety
- Linting and formatting with ESLint and Prettier
- Ready for deployment with Netlify

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

```sh
git clone https://github.com/your-username/your-repo.git
cd mynewapp
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

- `src/` - Main source code
  - `components/` - Reusable React components (e.g., Navbar, ToDoList)
  - `pages/` - Page components (Home, About, Contact, ToDo)
- `public/` - Static assets and Netlify redirects
- `index.html` - Main HTML file
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Deployment

This project is configured for deployment on Netlify. See [`netlify.toml`](netlify.toml) and the GitHub Actions workflow in [`.github/workflows/deployment.yml`](.github/workflows/deployment.yml).

## License

This project is licensed under the
