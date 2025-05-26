# Travelers Startup Fit Demo

## 🚀 Overview

This project is a React-based web application designed to showcase a "Startup Fit" demonstration for Travelers. It displays a list of top startup ideas, their strategic alignment scores across various categories, and detailed information including strategic rationale and a link to download a full analysis (placeholder). The application also features a company profile section for Travelers.

The UI is built using Vite, React, Tailwind CSS, and shadcn/ui components, with charts rendered using Recharts.

## ✨ Features

* **Company Profile Display**: Shows key information and strengths of Travelers.
* **Top Startup Ideas**: Lists the top 10 startup ideas relevant to Travelers, sorted by total score.
* **Detailed Idea View**: Clicking on an idea opens a dialog showing:
    * The idea's name and overall score.
    * A bar chart visualizing scores across different strategic categories (Loss Ratio Impact, Asset Leverage, etc.).
    * A detailed "Strategic Rationale" explaining its fit with Travelers.
    * A link to download a (placeholder) PDF analysis for the idea.
* **Responsive Design**: Styled with Tailwind CSS for a modern and responsive layout.

## 🛠️ Technologies Used

* **Framework**: React (with Vite)
* **Styling**: Tailwind CSS
* **UI Components**: shadcn/ui (Dialog, Card, ScrollArea)
* **Charting**: Recharts
* **Icons**: Lucide React
* **Language**: JavaScript (JSX)
* **Package Manager**: npm (or yarn)

##  Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (which includes npm) - LTS version recommended.
* Git (for cloning the repository).

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    ```
    (or `yarn install` if you prefer Yarn)

3.  **Install Tailwind CSS and its peer dependencies (if not already handled by initial setup):**
    This project uses Tailwind CSS v3.
    ```bash
    npm install -D tailwindcss@^3 postcss autoprefixer
    ```

4.  **Initialize Tailwind CSS:**
    This will create `tailwind.config.js` and `postcss.config.js` files.
    ```bash
    npx tailwindcss init -p
    ```

5.  **Configure Tailwind CSS `content` paths:**
    Open `tailwind.config.js` and update the `content` array to include paths to your component files:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans your React components
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

6.  **Add Tailwind directives to your global CSS:**
    Open your main CSS file (e.g., `src/index.css`) and add these lines at the top:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
    Ensure this CSS file is imported in your `src/main.jsx` (or `src/main.js`).

7.  **Set up import alias (`@/`):**
    * **`vite.config.js`**:
        ```javascript
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import path from 'path'

        export default defineConfig({
          plugins: [react()],
          resolve: {
            alias: {
              "@": path.resolve(__dirname, "./src"),
            },
          },
        })
        ```
    * **`jsconfig.json`** (for JavaScript projects, create this in the root if it doesn't exist):
        ```json
        {
          "compilerOptions": {
            "baseUrl": ".",
            "paths": {
              "@/*": ["./src/*"]
            }
          },
          "include": ["src"]
        }
        ```
        (If using TypeScript, update `tsconfig.json` similarly.)

8.  **Initialize `shadcn/ui`:**
    Follow the prompts. This will set up `components.json` and allow you to add components.
    ```bash
    npx shadcn@latest init
    ```
    * Ensure it correctly identifies your global CSS file and `tailwind.config.js`.
    * Accept the default import alias for components (e.g., `@/components`).

9.  **Add required `shadcn/ui` components:**
    ```bash
    npx shadcn@latest add dialog card scroll-area
    ```
    (The application also imports `Button` from `@/components/ui/button`, so you might want to add it if you plan to use it: `npx shadcn@latest add button`)

10. **Install other dependencies:**
    ```bash
    npm install recharts lucide-react
    ```

11. **Place Assets:**
    * Ensure the Travelers logo (e.g., `travelers-logo.jpg`) is placed in the `public` directory. The code references it as `/travelers-logo.jpg`.

## ▶️ Running the Application

Once the installation is complete, you can start the development server:

```bash
npm run dev
```
(or `yarn dev`)

This will typically open the application in your web browser at `http://localhost:5173` (or another port specified by Vite).

## 📁 Project Structure (Simplified)

```
.
├── public/
│   └── travelers-logo.jpg  # (and other static assets)
├── src/
│   ├── components/         # shadcn/ui components will be here
│   │   └── ui/
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles & Tailwind directives
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore
├── index.html              # Main HTML file
├── jsconfig.json           # JavaScript configuration (for path aliases)
├── package-lock.json
├── package.json
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## 📝 Notes

* The "Download Full Analysis" links in the detailed idea view currently point to a placeholder PDF. You will need to update the `pdfUrl` property in the `ideas` array within `src/App.jsx` for each idea with the actual PDF URLs.
* The company profile information and startup idea details (scores, explanations) are hardcoded in `src/App.jsx`.

---
