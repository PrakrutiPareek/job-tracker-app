import { Routes, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import SavedJobs from "./Pages/Applications";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import JobSearch from "./Pages/JobSearch";
import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";

// layouts
import MainLayout from "./Components/MainLayout";
import UserLayout from "./Components/UserLayout";

// toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />

      <Routes>
        {/* MainLayout routes - navbar/footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="savedjobs" element={<SavedJobs />} />
        </Route>

        {/* UserLayout routes - sidebar */}
        <Route path="/profile" element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="savedjobs" element={<SavedJobs />} />
        </Route>

        <Route path="/dashboard" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="savedjobs" element={<SavedJobs />} />
        </Route>

        {/* Auth pages - no navbar/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;