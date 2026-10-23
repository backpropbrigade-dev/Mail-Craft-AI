# 📧 MailCraft AI

> Generate professional, personalized emails in seconds using AI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-AI-black)

---

## 🚀 Overview

MailCraft AI is a modern AI-powered email generation platform that helps users create professional, personalized emails within seconds.

Instead of spending time writing emails from scratch, users simply enter the required information, and the AI generates a well-structured email with a suitable subject line.

The application combines a premium React frontend with a FastAPI backend powered by Groq AI to deliver fast, intelligent, and responsive email generation.

---

# ✨ Features

### 🤖 AI Email Generation

Generate professional emails using Groq Large Language Models.

### 🎯 Smart Input Form

Customize emails using:

- Purpose
- Recipient Name
- Recipient Email
- Tone
- Email Length
- Key Points

### 🎨 Premium User Interface

- Modern SaaS Design
- Glassmorphism Cards
- Gradient Buttons
- Hero Dashboard Preview
- Interactive Feature Cards

### ⚡ Loading Experience

- Animated Loading Spinner
- Skeleton Loading UI
- Disabled Button During Generation

### 📋 Copy to Clipboard

Copy the generated email with one click.

### 📄 Export as PDF

Download generated emails as a professional PDF.

### ❌ Error Handling

Displays user-friendly error messages when email generation fails.

### 📱 Fully Responsive

Optimized for:

- Desktop
- Tablet
- Mobile Devices

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- jsPDF
- Lucide React

## Backend

- FastAPI
- Python
- Groq API
- Uvicorn
- Pydantic

---

# 📂 Project Structure

```
mailcraft-ai/

├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── components/
│   │   ├── email/
│   │   ├── features/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── styles/
│   ├── types/
│   └── utils/
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

# 🔄 Application Workflow

```
User Input
     │
     ▼
React Frontend
     │
     ▼
Axios API Request
     │
     ▼
FastAPI Backend
     │
     ▼
Groq AI
     │
     ▼
Generated Email
     │
     ├── Copy
     └── Download PDF
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-RajSumanSingh/ai-email-generator.git
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend

```bash
cd backend

python -m venv .venv
```

### Activate Virtual Environment

Windows

```bash
..\venv\Scripts\Activate
```

Linux / macOS

```bash
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Backend

```bash
uvicorn app.main:app --reload
```

---

# 🌐 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# 🎯 Completed Features

- ✅ AI Email Generation
- ✅ Modern Landing Page
- ✅ Responsive Design
- ✅ Premium UI Components
- ✅ Hero Dashboard Preview
- ✅ Loading Spinner
- ✅ Skeleton Loader
- ✅ Copy to Clipboard
- ✅ Download PDF
- ✅ Error Handling
- ✅ Mobile Responsive Layout

---

# 📚 What I Learned

During this project I gained hands-on experience with:

- React Component Architecture
- TypeScript
- FastAPI Development
- REST API Integration
- Axios
- State Management
- Responsive Web Design
- Tailwind CSS
- AI API Integration
- PDF Generation
- Clipboard API
- Error Handling
- UI/UX Design Principles

---

# 🚀 Future Improvements

- ⏳ Functional Navbar Navigation
- ⏳ Email Templates
- ⏳ Email History
- ⏳ Dark / Light Theme Toggle
- ⏳ User Authentication
- ⏳ Email Sharing Options
- ⏳ Deployment on Vercel & Render

---

# 👨‍💻 Author

**RAJ SUMAN SINGH**

B.Tech – Data Science (AI & ML)

Built with ❤️ using React, FastAPI, TypeScript, Tailwind CSS, and Groq AI.