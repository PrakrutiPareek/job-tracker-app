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
import MainLayout from "./Components/MainLayout";
import UserLayout from "./Components/UserLayout";

// Toast Notifications
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
        </Route>

        {/* UserLayout routes - sidebar */}
        <Route path="/profile" element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="applications" element={<Applications />} />
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
