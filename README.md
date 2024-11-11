# Reactive Interests App

This project is a personal trainer application built with React and Tailwind CSS.

## Installation

Follow these steps to install dependencies locally:


1. Install dependencies:

    npm install

2. Install Tailwind CSS:

Follow the steps below to set up Tailwind CSS:

Install Tailwind CSS via npm:

    1. npm install -D tailwindcss postcss autoprefixer

    2. Initialize Tailwind CSS by creating the config files:
    npx tailwindcss init -p

    3. Configure tailwind.config.js to scan your project files:
        module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
   
    4. Add Tailwind’s directives to your CSS file (e.g., src/index.css):

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

3. Start the application:

    npm start
