# ALX Listing App

## 📓 Project Description and Goals

> This project is a modern, responsive web application designed to function as a detailed listing platform, often referred to as an "Airbnb clone."

### 🎯 Core Goals:

**1. Establish a Robust Foundation:** Set up a professional, scalable codebase using Next.js, TypeScript, and Tailwind CSS.

**2. Develop the Single Listing Page (SLP):** Create a high-fidelity page for displaying all details related to a single property, including images, descriptions, amenities, and host information.

**3. Implement Core Functionality:** Integrate a dynamic, functional booking/reservation widget that calculates pricing and handles user input.

**4. Prioritize User Experience:** Ensure the application is fully responsive, accessible, and provides a clean, intuitive user interface.

### 👀 Project Structure Overview

The application utilizes a component-driven architecture organized into specific directories to maintain clarity, separation of concerns, and ease of maintenance.

| Directory          | Purpose                                                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **components/**    | **UI Building Blocks:** Stores all reusable React components used across the application, adhering to the principle of modularity. This includes small atomic components (like buttons and inputs) and larger composite components (like headers and listing widgets). |
| **interfaces/**    | **Type Definitions:** Central location for all TypeScript interface and type definitions. Defining types here ensures strict type checking, enhances code predictability, and improves developer experience throughout the project.                                    |
| **constants/**     | **Static Data and Config:** Houses static, non-changing data, such as API endpoints, configuration settings, magic numbers, or reusable UI text strings. Storing these constants separately prevents hardcoding and simplifies global updates.                         |
| **public/assets/** | **Static Media Files:** Contains all public, static media assets like images (e.g., property photos, placeholders), SVG icons, and fonts. Files in this directory are directly accessible via the root URL path.                                                       |

## 🧑🏻‍💻 Local Development Setup

To run the ALX Listing App locally, follow these steps:

### 1. Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: LTS version recommended.
- **npm**: Comes bundled with Node.js (or use Yarn/pnpm as alternatives).

### 2. Installation

Navigate to the project root directory and install dependencies:

```bash
npm install
# OR
yarn install
# OR
pnpm install
```

### 3. Running the Development Server

Start the app in development mode (uses Next.js Pages Router):

```bash
npm run dev
# OR
yarn dev
# OR
pnpm dev
```

The app will run at `http://localhost:3000` (or the next available port). Open it in your browser to interact!
