# JobEase

## 📌 Project Overview
JobEase is a job application tracking platform designed to help users organize and manage their job search in one place. Users can track applications, monitor progress, and stay on top of opportunities.

---

## 🚀 Features
- User Authentication (Login & Signup)
- Job Application Tracking
- Status Management
- Job Search Integration
- Forgot Password (Firebase email reset)
- Responsive UI using Tailwind CSS

---

## 👥 Team Members
- Monique  
- Nisha Ray  
- Prakruti Pareek  
- Sonam Jha  
- Tara Ortega  

---

## 🛠️ Tech Stack
- React (Vite)
- Tailwind CSS
- Firebase Authentication
- GitHub

---

## ⚙️ How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/sonamjha123/group_6_project.git
``` 
### 2. Navigate to the frontend folder
```bash
cd group_6_project/frontend
```
### 3. Install dependencies
```bash
npm install
``` 

### 4. Set up environment variables
```bash
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_BASE_URL=http://localhost:5000

``` 
### 5. Run the project
```bash
npm run dev
``` 
### 6. Open in browser

http://localhost:5173


# React + Vite Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📌 Notes

- Authentication is handled using Firebase
- Session state is currently managed using localStorage (temporary solution)
- Future improvements include moving away from localStorage to a more scalable backend-based session management approach
- The job search feature is currently limited to UK-based locations due to Adzuna API configuration
- Tailwind CSS is used for styling to maintain consistency


## 🔗 Repository
https://github.com/sonamjha123/group_6_project