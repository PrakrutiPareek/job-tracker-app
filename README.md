# JobEase

## Project Overview

JobEase is a job application tracking platform designed to help users organize and manage their job search in one place. Users can track applications, monitor progress, and stay on top of opportunities.

---

## Features

- User Authentication (Login & Signup)
- Job Application Tracking
- Status Management
- Manual saving of jobs you applied on other jobboard.
- Job Search Integration
- Forgot Password (Firebase email reset)
- Responsive UI using Tailwind CSS
- Web Accessibility

---

## Team Members

- Monique Kahin
- Nisha Ray
- Prakruti Pareek
- Sonam Jha
- Tara Ortega

---

## Tech Stack (Dependencies)

### Frontend

- React (Vite)
- React Router
- Firebase Authentication
- Tailwind CSS
- Axios
- Lucid react
- React toastify
- Vitest
- React testing library

### Backend

- Express.js
- SQLite (Database)
- Axios
- better-sqlit3
- CORS
- dotenv
- Nodmon

### External API

- Adzuna Jobs API

---

## Project Structure

```
group-6-project/
│
├── backend/
│   ├── src/
│   |    ├── controllers/
│   |    ├── db/
│   |    ├── routes/
│   |    ├── services/
│   │    └── server.js
│   │
│   ├── .gitignore
|   ├── jobs.db
│   └── package.json
│
│
├── frontend/
│   │   └── src/
│   │        ├── _tests_/
│   │        ├── api/
│   │        ├── assets/
│   │        ├── Components/
|   |        ├── constants/
│   │        ├── Pages/
│   │        ├── utils/
│   │        ├── App.jsx
|   |        ├── firebase.js
│   │        └── main.jsx
│   │
│   │
│   ├── .gitignore
|   ├── package.json
|   ├── index.html
│   └── vite.config.js
│
└── README.md
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/sonamjha123/group_6_project.git
```

### 2. Backend Setup

Navigate to backend folder

```bash
cd group_6_project/backend
```

Install dependencies

```bash
npm install
```

Set up environment variables

```bash
PORT=5000
ADZUNA_APP_ID=your_app_id
ADZUNA_APP_KEY=your_app_key

```

Start the backend server

```bash
npm run dev
```

Server runs on
http://localhost:5000

### 2. Frontend setup

Open another terminal.

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Set up environment variables

```bash
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_BASE_URL=http://localhost:5000

```

Run the project

```bash
npm run dev
```

Open in browser

http://localhost:5173

---

# API Endpoints

## Search jobs

GET /api/jobs/search

Query parameters: keyword, location

## Saved jobs

GET /api/jobs/savedjobs
POST /api/jobs/savejob
DELETE /api/jobs/savedjobs/:id

---

# Team Contribution

## Monique Kahin

Contact Page, About Page, Manual Testing

## Nisha Ray

Authentication Pages UI, Firebase Setup, Protected Routes, Presentation Slides, Pagination, Unit Testing, readme.MD

## Prakruti Pareek

Application Page: UI, Validation, Logics, API Endpoints, Manual form, Basic Project Structure, PageNotFound, Routes, Unit testing, Documentation, readme.MD, Final refactoring of whole project

## Sonam Jha

Starting React app and initial setup, Basic backend setup, Profile Page UI and Backend, JobSearch Page UI and Backend,Adzuna API(External API), Post & Get endpoints for Save Flow, Unit Testing

## Tara Ortega

Wireframes, UI Components, Home Page, Design system, Responsive behaviour, Unit Testing

---

## Notes

- Authentication is handled using Firebase
- Session state is currently managed using localStorage (temporary solution)
- The job search feature is currently limited to UK-based locations due to Adzuna API configuration
- Application stat cards are updating on temporary base.

### Future scope

- UPDATE endpoints for jobs
- Saving Application stat card in state for consistent data
- Third party authentication
- Future improvements include moving away from localStorage to a more scalable backend-based session management approach

## Repository

https://github.com/sonamjha123/group_6_project
