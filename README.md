# MyShoppy - Household Shopping Mobile Application

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

## Project Structure

```
ShopEase
│
├── assets/
│
├── components/
│   ├── Cards/
│   ├── Common/
│   └── Header/
│
├── constants/
│
├── navigation/
│
├── screens/
│
├── services/
│
├── data/
│
├── db.json
│
├── App.tsx
│
└── package.json
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

Update the API Base URL with your local IP address if running on a physical device.

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
> **Note:** If running the app on a physical device using Expo Go, update the `API_BASE_URL` in the project to your computer's local IP address so the device can connect to the JSON Server.

## Developed By

**Fiza Yasmeen**

Mobile Application Development Project
