import React from "react";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Pricing from "./pages/pricing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Courses from "./pages/courses";
import ContactUs from "./pages/contactUs";
import ChatBot from "./components/chatBot/chatBot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Register from "./components/auth/register";
import { AuthProvider } from "./contexts/authContext";
import Login from "./components/auth/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer /> {/* Moved ToastContainer here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        <ChatBot />
      </Router>
    </AuthProvider>
  );
}

export default App;
