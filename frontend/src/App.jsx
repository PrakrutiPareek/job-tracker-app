import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// existing pages
import Applications from "./Pages/Applications";
import Profile from "./Pages/Profile";
import JobSearch from "./Pages/JobSearch";
import PageNotFound from "./Pages/PageNotFound";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<JobSearch />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;