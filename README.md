# 🛍️ Redux Product Store

A modern and responsive e-commerce frontend built using React, Redux Toolkit, and Tailwind CSS. The application fetches product data from a public API and provides a complete cart workflow with real-time state management.

🔗 **Live Demo:** https://product-store-78754.netlify.app/

---

## 🚀 Features

* 📦 Fetch products from API
* 🛒 Add to cart functionality
* ➕ Increase / decrease quantity
* ❌ Remove items from cart
* 💰 Dynamic cart total calculation
* 🔄 Loading & error handling
* 📱 Fully responsive UI
* 🔀 Client-side routing (Home & Cart pages)

---

## 🧑‍💻 Tech Stack

* **Frontend:** React 18
* **State Management:** Redux Toolkit
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS
* **Bundler:** Parcel
* **API:** Fake Store API

---

## 📂 Project Structure

```
.
├── assets/
├── components/
│   ├── Header.js
│   ├── Product.js
│   └── CartItem.js
├── pages/
│   ├── Home.js
│   └── Cart.js
├── store/
│   ├── slices/
│   └── middleware/
├── App.js
├── main.js
├── styles.css
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/redux-product-store.git
cd redux-product-store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🔄 How It Works

### Product Flow

* Fetches products from API on app load
* Stores data in Redux store
* Displays products in a grid layout

### Cart Flow

* Cart state managed via Redux Toolkit
* Supports add, remove, and quantity update
* Calculates total price dynamically

---

## ⚡ Future Improvements

* 🔍 Search and filtering
* 📄 Product detail page
* ❤️ Wishlist functionality
* 🌙 Dark mode
* 💾 Cart persistence (localStorage)
* 🔐 Authentication system

---

## 📌 Key Highlights

* Clean and scalable Redux architecture
* Separation of concerns using slices
* Reusable UI components
* Production-ready folder structure

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙌 Author

**Ashish Kumar**

---
