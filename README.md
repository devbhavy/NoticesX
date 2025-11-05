<p align="center">
    <img src="frontend/src/assets/MAIT_LOGO_FULL.png" alt="NoticesX Banner" width="200"/>
</p>
<p align="center">
<h1>NoticesX</h1>
Access MAIT college notices easily.
</p>

<p align="center">
    <a href="https://img.shields.io/badge/License-No%20License-lightgrey?style=flat-square" alt="License">
        <img src="https://img.shields.io/badge/License-No%20License-lightgrey?style=flat-square" />
    </a>
    <a href="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"
        alt="TypeScript">
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    </a>
    <a href="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
    </a>
    <a href="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
        <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
    </a>
    <a href="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
        <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
    </a>
    <a href="https://img.shields.io/badge/Puppeteer-40B5A4?style=flat-square&logo=puppeteer&logoColor=white"
        alt="Puppeteer">
        <img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=flat-square&logo=puppeteer&logoColor=white" />
    </a>
</p>

## Description
Website to easily access latest notices from the MAIT college website.

## ✨ Features
* Automated scraping of notices from the MAIT college website using Puppeteer.
* User-friendly web interface for displaying notices.
* Provides a centralized platform to access college notices.

## 🚀 Installation
To get this project up and running, follow these steps:

### Prerequisites
Ensure you have Node.js and npm installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/NoticesX.git
cd NoticesX
```

### 2. Backend Setup
Navigate to the `backend` directory, install dependencies, and configure environment variables.
```bash
cd backend
npm install
cp .env.example .env
```
Open the newly created `.env` file and configure any necessary environment variables (e.g., port, scraping target URLs).

To run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the `frontend` directory, and install dependencies.
```bash
cd ../frontend
npm install
```

To run the frontend:
```bash
npm run dev
```

The frontend application should now be accessible in your browser, typically at `http://localhost:5173`.

## 🛠️ Tech Stack
* **Languages**: TypeScript, CSS, JavaScript, HTML
* **Backend**: Node.js, Puppeteer
* **Frontend**: React, Vite

## 📂 Project Structure

```
.
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ │ └── index.ts
│ │ ├── services/
│ │ │ └── Pupeteer.ts
│ │ └── index.ts
│ └── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ │ └── MAIT_LOGO_FULL.png
│ │ ├── components/
│ │ │ ├── ui/
│ │ │ │ ├── button.tsx
│ │ │ │ ├── item.tsx
│ │ │ │ ├── separator.tsx
│ │ │ │ └── skeleton.tsx
│ │ │ ├── Grid.tsx
│ │ │ └── Skeleton.tsx
│ │ ├── lib/
│ │ │ └── utils.ts
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── index.css
│ │ └── main.tsx
│ └── package.json
└── README.md
```

## 📄 License
No license specified.