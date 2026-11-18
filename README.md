# Taxi Burger

A responsive food-ordering web application built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Taxi Burger helps users discover menu items, view item details, search the menu, and interact with a shopping cart through a modern web interface.

<p align="center">
  <a href="https://taxi-burger-7f9o.vercel.app/"><strong>View Live Application</strong></a>
</p>

> **Project status:** The frontend is deployed on Vercel. Backend integration and persistent server-side order processing remain future improvements.

## Overview

Taxi Burger is a restaurant/food-ordering interface designed to make browsing a food menu straightforward. Users can explore food items, open item details through dynamic routes, search the available menu, and manage a cart during their browsing session.

The current repository contains the frontend application. It is a frontend project rather than a complete end-to-end ordering platform; server-side order processing and persistent backend services are not yet integrated.

## Main Features

- **Food discovery:** Browse food items presented through the application.
- **Dynamic item routes:** Navigate to individual food-item pages using dynamic routing.
- **Search:** Find menu items more easily.
- **Cart interactions:** Add and manage selected items through client-side cart state.
- **Reviews UI:** Display review-related information in the interface.
- **Loading states:** Provide feedback while relevant content is loading.
- **Responsive interface:** Built with utility-first styling to support different screen sizes.

*Feature availability may depend on the current data/API configuration.*

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework, routing, and application structure |
| React 19 | Component-based user interface |
| JavaScript | Application logic |
| Tailwind CSS 4 | Responsive styling and UI development |
| Lucide React | Icon components |
| ESLint 9 | Code linting and quality checks |

## Dependencies

### Runtime dependencies

- `next` — application framework
- `react` — UI library
- `react-dom` — React DOM rendering
- `lucide-react` — icon library

### Development dependencies

- `tailwindcss` — utility-first CSS framework
- `@tailwindcss/postcss` — Tailwind CSS PostCSS integration
- `eslint` — static code analysis
- `eslint-config-next` — Next.js ESLint configuration

The exact dependency versions are maintained in [package.json](./package.json).

## Getting Started

### Prerequisites

- Node.js (current LTS release recommended)
- npm (included with Node.js)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/abd-005/Taxi-Burger.git
cd Taxi-Burger
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

If your local configuration requires external API credentials or endpoints, create a `.env.local` file in the project root and add the variables required by the application.

Do not commit `.env.local` or expose private API keys in client-side code. Refer to the project's source/configuration for the exact variable names.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Engineering Considerations

The project involves several practical frontend engineering concerns:

- **Dynamic routing:** Organizing item-specific pages while keeping navigation predictable.
- **Client-side state:** Managing cart interactions and keeping UI updates consistent.
- **Asynchronous data:** Handling loading states when menu or review data is retrieved.
- **Responsive UI:** Keeping the browsing experience usable across mobile and desktop layouts.
- **Separation of concerns:** Keeping reusable UI components and application logic maintainable as the project grows.

These are key implementation areas and design considerations, not a claim that every edge case has already been fully solved.

## Why These Technologies?

- **Next.js:** Provides a structured React framework with file-based routing and production build tooling.
- **React:** Makes it practical to build reusable, state-driven interface components.
- **Tailwind CSS:** Supports consistent styling and responsive layouts without maintaining a large collection of custom CSS rules.
- **JavaScript:** Keeps the project aligned with the language used across the current frontend codebase.
- **ESLint:** Helps catch common code-quality issues during development.

## Problems This Project Addresses

Taxi Burger aims to improve the basic food-browsing experience by bringing menu discovery, item details, search, and cart interactions into one interface. It provides a frontend foundation that can later connect to backend services for persistent menus, user accounts, order placement, and order management.

## Current Limitations & Future Improvements

- Integrate a backend for persistent menu, cart, and order data.
- Implement secure order creation and server-side validation.
- Add authentication if required by the final product scope.
- Complete SEO improvements, including page-specific metadata, Open Graph metadata, canonical URLs, sitemap, and robots configuration.
- Add automated tests for important user flows.
- Continue validating the deployed application across devices and browsers.

## Links

- **Live application:** [https://taxi-burger-7f9o.vercel.app/](https://taxi-burger-7f9o.vercel.app/)
- **GitHub repository:** [abd-005/Taxi-Burger](https://github.com/abd-005/Taxi-Burger)

## License

No license has currently been specified for this repository. All rights remain with the repository owner unless a license is added.
