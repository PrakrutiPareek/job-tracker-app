import {Routes, Route} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Applications from "./Pages/Applications";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import JobSearch from "./Pages/JobSearch";
import PageNotFound from "./Pages/PageNotFound";

// Layouts
import MainLayout from "./Components/Layouts/MainLayout";
import UserLayout from "./Components/Layouts/UserLayout";

import ProtectedRoute from "./Components/ProtectedRoute";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="applications" element={<Applications />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
