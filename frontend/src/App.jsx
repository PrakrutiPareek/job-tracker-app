import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Applications from "./Pages/Applications";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      {/* Pages WITH navbar/footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="applications" element={<Applications />} />
      </Route>

      {/* Auth pages WITHOUT navbar/footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
