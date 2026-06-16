import {Routes, Route} from "react-router-dom";
//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Applications from "./Pages/Applications";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

//layouts
import MainLayout from "./Components/MainLayout";
import UserLayout from "./Components/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/profile" element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path="applications" element={<Applications />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
