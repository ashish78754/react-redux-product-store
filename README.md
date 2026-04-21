# Shopee Storefront

A polished shopping cart frontend built with React, Redux Toolkit, React Router, Parcel, and Tailwind CSS 4. The application fetches products from the Fake Store API, displays them in a responsive storefront layout, and provides a cart workflow with quantity controls, removal actions, loading states, and error handling.

This project is a strong example of modern frontend state management with a clean component structure, async data fetching through Redux Toolkit, and a UI designed to feel more product-ready than a basic tutorial app.

## Overview

Shopee Storefront is a single-page ecommerce interface focused on the product listing and cart experience. It loads a product catalog from a public API, initializes cart data from a seeded cart endpoint, and combines both sources in Redux selectors to render a complete cart view with pricing and totals.

The app is organized around reusable UI components and a Redux store with feature slices, which makes the codebase easy to extend with future capabilities such as product detail pages, authentication, checkout, persistent carts, or full wishlist support.

## Features

- Responsive storefront layout with a modern card-based product grid
- Product data fetched from the Fake Store API
- Cart initialization from a remote cart endpoint
- Redux Toolkit state management with async thunks
- Client-side routing with separate home and cart pages
- Add-to-cart flow from product cards
- Quantity increase, decrease, and remove actions in the cart
- Derived cart totals calculated from current state
- Loading and error UI for both products and cart data
- Tailwind CSS 4 theme customization with branded colors and typography

## Tech Stack

- React 18
- React Router DOM 6
- Redux Toolkit
- React Redux
- Parcel 2
- Tailwind CSS 4
- PostCSS
- Fake Store API

## Project Structure

```text
.
|-- assets/
|-- components/
|   |-- CartItem.js
|   |-- Header.js
|   `-- Product.js
|-- pages/
|   |-- Cart.js
|   `-- Home.js
|-- store/
|   |-- middleware/
|   `-- slices/
|-- App.js
|-- index.html
|-- main.js
|-- styles.css
`-- package.json
```

## How It Works

### Product flow

- On initial app load, the header dispatches `fetchProductsData()`
- Products are requested from `https://fakestoreapi.com/products`
- The home page reads product state from Redux and renders product cards

### Cart flow

- On initial app load, the header also dispatches `fetchCartItemsData()`
- Cart seed data is requested from `https://fakestoreapi.com/carts/5`
- The cart slice stores item references as `productId` plus `quantity`
- A selector merges cart entries with the product catalog so the cart page can render titles, images, ratings, and prices
- Users can add items, increase or decrease quantity, remove entries, and see a computed grand total

## Getting Started

### Prerequisites

- Node.js 18 or newer recommended
- npm

### Installation

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Parcel will start a local development server and serve the app from `index.html`.

### Create a production build

```bash
npm run build
```

The optimized build output is generated in the `dist/` directory.

## Available Scripts

### `npm run dev`

Starts the Parcel development server.

### `npm run build`

Builds the application for production.

## State Management

The app uses Redux Toolkit as the central state container.

- `productsSlice` handles product fetching, loading state, and API errors
- `cartSlice` handles seeded cart data, quantity updates, add/remove actions, and derived cart item selection
- `wishListSlice` exists in the codebase as legacy reducer logic, but wishlist behavior is not currently wired into the UI

## Styling

The UI is styled with Tailwind CSS 4 and custom theme tokens defined in `styles.css`.

- Brand palette uses cream, sand, orange, and teal accents
- Typography uses `Manrope` for body copy and `Space Grotesk` for display text
- Layout emphasizes rounded cards, glassmorphism-style surfaces, and soft gradient backgrounds

## API Integration

This project currently depends on the public Fake Store API:

- Products endpoint: `https://fakestoreapi.com/products`
- Cart endpoint: `https://fakestoreapi.com/carts/5`

Because the application uses a public demo API, availability and response data may vary depending on the external service.

## Current Scope and Notes

- The wishlist button is present in the product UI, but wishlist interactions are not yet connected
- Custom middleware files exist in `store/middleware/`, but the store currently uses Redux Toolkit default middleware only
- No automated test suite is configured yet
- No environment variables are required for the current implementation

## Roadmap Ideas

- Add persistent cart storage with localStorage or backend sync
- Wire wishlist interactions into the UI
- Add filtering, search, and category-based browsing
- Create product detail pages
- Add automated tests for reducers, selectors, and key UI flows
- Improve accessibility coverage and keyboard interaction patterns
- Add deployment configuration for Vercel or Netlify

## License

This project is available under the ISC license.
