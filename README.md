# JobEase

A full-stack job application tracking platform designed to help users organise and manage their job search in one place.

## Project Overview

JobEase allows users to search for jobs, save opportunities, and track their job applications through different stages. The application combines a React frontend with an Express/SQLite backend and external job search data from the Adzuna API.

This was developed as a **collaborative group project**. This repository is my personal copy of the team's project, with the original Git history and contributions preserved.

---

## Features

- User Authentication (Login & Signup)
- Job Application Tracking
- Application Status Management
- Manual saving of jobs found on other job boards
- Job Search Integration
- Forgot Password functionality using Firebase email reset
- Responsive UI using Tailwind CSS
- Web Accessibility
- Job search using the Adzuna API

---

## My Contribution

My primary contribution was focused on the **application tracking functionality, frontend development, API integration, routing, testing, and project documentation**.

### Application Page

- Built the Application Page UI
- Implemented form validation
- Developed application form logic
- Implemented API endpoints for managing applications
- Added the manual application form

### Frontend Development

- Contributed to the initial project structure
- Implemented application-related routes
- Built the Page Not Found (404) page
- Worked on React components and page functionality
- Contributed to responsive and accessible UI implementation

### Testing

- Added and maintained unit tests
- Worked with Vitest and React Testing Library
- Performed manual testing and debugging

### Documentation & Refactoring

- Contributed to the project documentation and README
- Documented application functionality and setup
- Carried out final refactoring across the project
- Helped improve code structure and consistency before project completion

---

## Tech Stack

### Frontend

- React (Vite)
- React Router
- Firebase Authentication
- Tailwind CSS
- Axios
- Lucide React
- React Toastify
- Vitest
- React Testing Library

### Backend

- Express.js
- SQLite
- Axios
- better-sqlite3
- CORS
- dotenv
- Nodemon

### External API

- Adzuna Jobs API

---

## Project Structure

```text
job-tracker-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   │
│   ├── .gitignore
│   ├── jobs.db
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── _tests_/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── constants/
│   │   ├── Pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── firebase.js
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── index.html
│   └── vite.config.js
│
└── README.md
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/PrakrutiPareek/job-tracker-app.git
cd job-tracker-app
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
ADZUNA_APP_ID=your_app_id
ADZUNA_APP_KEY=your_app_key
```

Start the backend server:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_BASE_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

# API Endpoints

## Search Jobs

```text
GET /api/jobs/search
```

Query parameters:

```text
keyword
location
```

## Saved Jobs

```text
GET /api/jobs/savedjobs
POST /api/jobs/savejob
DELETE /api/jobs/savedjobs/:id
```

---

# Group Project

JobEase was developed collaboratively by a five-person team. Each team member contributed to different areas of the application, including frontend development, backend development, authentication, API integration, UI/UX, testing, and documentation.

### My Role

**Prakruti Pareek — Frontend Development & Application Tracking**

My main areas of contribution included:

- Application Page UI
- Form validation and application logic
- Application API endpoints
- Manual application form
- Initial project structure
- Page Not Found page
- React routes
- Unit testing
- Project documentation
- README documentation
- Final project-wide refactoring

The original team repository and its Git history remain intact. This repository is a personal copy created for my portfolio and development record.

---

## Notes

- Authentication is handled using Firebase.
- Session state is currently managed using localStorage as a temporary solution.
- Job search is currently limited to UK-based locations due to the Adzuna API configuration.
- Application statistics currently use temporary state management.

---

## Future Scope

- Add UPDATE endpoints for jobs.
- Persist application statistics for consistent data across sessions.
- Add third-party authentication options.
- Replace localStorage-based session management with a more scalable backend-based approach.
- Improve application status management and persistence.
- Expand job search functionality and filtering.
