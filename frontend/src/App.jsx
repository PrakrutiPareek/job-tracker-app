import {Routes, Route} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import ApplicationTracker from "./Pages/Applications";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import JobSearch from "./Pages/JobSearch";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//layouts
import MainLayout from "./Components/MainLayout";
import UserLayout from "./Components/UserLayout";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />{" "}
      {/* Add the ToastContainer component to enable toast notifications */}
      <Routes>
        {/* MainLayout for Navbar */}
        <Route path="/" element={<MainLayout />}>
          {/* Auth pages WITH navbar/footer */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="applicationTracker" element={<ApplicationTracker />} />
        </Route>

        {/* UserLayout for Sidebar */}
        <Route path="/profile" element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path="jobsearch" element={<JobSearch />} />
          <Route path="applicationTracker" element={<ApplicationTracker />} />
        </Route>

        {/* Auth pages WITHOUT navbar/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
