# 📊 Crypto Price Tracker (React)

A responsive web application built using **React.js**, **Context API**, and **Chart Visualization**, which lets users track real-time cryptocurrency data including prices, charts, and trends.

> 🪙 Built with React + CoinGecko API + Google Charts (or Recharts)  
> ⚡️ Powered by Vite for blazing-fast development

---

## 🔗 Live Demo

👉 [View Live Site](https://crypto-price-tracker-one-phi.vercel.app)

---

## 📁 Project Structure

```bash
src/
├── assets/              # Image assets (logo, icons)
│   ├── logo.png
│   └── arrow_icon.png
│
├── components/          # Reusable UI components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Linechart.jsx
│
├── context/             # Global state using Context API
│   └── CoinContext.jsx
│
├── pages/               # Main application pages
│   ├── Home.jsx
│   └── Coin.jsx
│
├── App.jsx              # Root component
├── main.jsx             # React DOM rendering entry
├── index.css            # Global styles
```

## 🚀 Features

🔄 Real-time price updates via CoinGecko API

📈 Interactive line charts for coin history

🔍 View detailed info of each coin (volume, market cap, supply, etc.)

🧠 Global state management with React Context API

=> Currency selector (USD, INR, EUR)

## 📦 Tech Stack

⚛️ React + Vite

🌐 CoinGecko API

📊 Google Charts / Recharts

💅 Tailwind CSS 

🧠 Context API for state

🗂️ Organized by components, pages, context

## 📌 Getting Started

Clone the repository

bash
Copy
Edit
git clone https://github.com/soumojit-D48/crypto-tracker.git
cd crypto-tracker
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser


## 🧠 Concepts Covered

Fetching & using third-party API data

React Router navigation 

Custom reusable components

React hooks: useEffect, useState, useContext

Chart integrations

## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

CoinGecko API

React

Google Charts

Vite

Tailwind CSS

yaml
Copy
Edit
