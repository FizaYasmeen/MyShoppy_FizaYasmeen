# MyShoppy - E-Commerce Mobile Application

MyShoppy is a React Native mobile shopping application that provides a simple and user-friendly shopping experience. Users can browse products by category, search and sort products, view detailed product information, manage their shopping cart, and place orders through a basic checkout process.

---

## Features

- Browse household products across multiple categories
- Search products by name
- Category-wise product browsing
- Sort products by:
  - Price: Low to High
  - Price: High to Low
- Product Details screen
  - Product image
  - Description
  - Price
  - Rating
  - Availability Status
- Wishlist
- Shopping Cart
  - Add products
  - Update quantities
  - Remove products with confirmation
- Checkout
  - Customer details form
  - Input validation
  - Order summary
- Order Confirmation
- Cart data management using AsyncStorage
- Product data fetched from JSON Server

---

## Tech Stack

### Frontend
- React Native
- Expo
- TypeScript
- React Navigation

### Backend
- JSON Server (Mock REST API)

### Local Storage
- AsyncStorage

---

## Application Screenshots

### Home Screen

| Home Screen | Home Screen Carousel |
|--------------|--------------|
| ![](screenshots/HomeScreen.png) | ![](screenshots/Home_Screen_Carousel.png) |

---

### Categories & Products

| Categories Screen | Products Screen |
|-----------|-----------|
| ![](screenshots/CategoriesScreen.png) | ![](screenshots/ProductsScreen.png) |

---

### Product Sorting & Details

| Product Sorting | Product Details |
|-----------------|-----------------|
| ![](screenshots/Filtered_Products_Screen.png) | ![](screenshots/Product_Details_Screen_1.png) |

---

### Search Feature

| Search Categories | Search Products |
|---------|------|
| ![](screenshots/SearchedCategories.png) | ![](screenshots/SearchedProducts.png) |

---

### Shopping Cart

| Empty Cart | Cart Screen |
|-------------|----------|
| ![](screenshots/Empty_Cart.png) | ![](screenshots/CartScreen.png) |

---

### Shopping Cart & Details Validation

| Remove Product | Customer Details Validation |
|-------------|----------|
| ![](screenshots/Product_Deletion_from_Cart.png) | ![](screenshots/Customer_Details_Validation.png) |

---

### Details Entry & Order Confirmation

| Customer Details | Order Confirmation |
|------------|--------------------|
| ![](screenshots/Customer_Details_Screen.png) | ![](screenshots/Order_Confirmation_Screen.png) |

--- 

## Project Structure

```
MyShoppy_FizaYasmeen
│
├── assets/                  # Images, icons and other static assets
│
├── screenshots/             # Application screenshots for documentation
│
├── src/
│   │
│   ├── components/
│   │   ├── Cards/           # Product, Category and Cart card components
│   │   ├── Header/          # Header and Search Bar components
│   │   └── Home/            # Home screen UI components
│   │
│   ├── config/              # API configuration and application settings
│   │
│   ├── constants/           # Colors, fonts, spacing and global styles
│   │
│   ├── navigation/          # Stack and Bottom Tab navigation
│   │
│   ├── screens/             # Application screens
│   │
│   └── utils/               # Utility functions and image mapping
│
├── App.tsx                  # Root component
├── app.json                 # Expo configuration
├── data.json                # JSON Server mock database
├── index.ts                 # Application entry point
├── package.json             # Project dependencies
├── package-lock.json        # Dependency lock file
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js
- npm
- Expo CLI
- Android Studio Emulator or Expo Go

### Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the JSON Server

```bash
npx json-server --watch db.json --port 3000
```

> **Note:** If running the app on a physical device using Expo Go App, update the `API_BASE_URL` in the project to your computer's local IP address so the device can connect to the JSON Server.

Start the Expo development server

```bash
npx expo start
```

Run the application using:

- Android Emulator
- Expo Go

## Screens

- Home Screen
- Category Screen
- Product Listing Screen
- Product Details Screen
- Shopping Cart
- Customer Details Screen
- Order Confirmation Screen

---

## Developed By

**Fiza Yasmeen**

Mobile Application Development Project
