# 📸 Responsive UI Project – Next.js 15.3 Test Task
A responsive, animated UI built with **Next.js 15.3**, **Tailwind CSS v4**, **React**, **Redux**, and **Gsap**, 
implementing smooth transitions, dropdowns, authentication, and more.
---

## ✨ Features

### ✅ General

- Fully **responsive design**, mobile-first
- **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- Smooth animations for all transitions and UI interactions

### ✅ Navigation & UI

- Animated **dropdown menus** for language and currency
- Main menu with **animated page navigation**
- Smooth **page transitions** using Framer Motion

### ✅ Authentication

- Animated **login / registration forms** with toggle switch
- **Success indicators** upon successful authentication
- Return to main menu with **smooth exit animation**

### ✅ Orders

- Orders **list view** with loading/error handling
- Animated transition to **order detail view**
- Smooth return to order list on close

---

## 📁 Project Structure
```bash
.
├── constants/ # All constants 
├── components/ # UI components 
├── hook/ # Hook for private and public routers
├── store/ # Redux
├── context/ # Global context  
├── api/ # API fetch logic 
├── pages/ # Next.js pages 
├── public/ # Static assets  
├── styles/ # Tailwind configs 
├── next.config.js # Image domains setup 
├── Dockerfile # Docker 
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```
### 2. Build project
```bash
npm next build
# or
yarn next build
```
### 3. Start the dev server
```bash
npm next start
# or
yarn next start
```

### 4. Open your browser
```bash
http://localhost:3000
```

### 4. To run using Docker:
```bash
docker build -t nextjs-ui .
docker run -p 3000:3000 nextjs-ui
```
### Also use scripts for developing environment 

### 🛠 Tech Stack

 - Next.js

 - React

 - Tailwind CSS

 - Redux

 - Gsap

 - Docker

 - Vercel

###  License

MIT