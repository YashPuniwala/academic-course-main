import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth.js";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { currentUser } = useAuth();
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const isLoginOrRegister =
    location.pathname === "/login" || location.pathname === "/register";

  const menuVariants = {
    hidden: {
      x: "100%", // Slide from the right
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <header
      className={`${
        isLoginOrRegister ? "bg-white shadow-lg" : "bg-transparent"
      } absolute top-0 left-0 w-full z-10`}
    >
      <div
        className={`${
          isLoginOrRegister ? "text-black" : "text-white"
        } container mx-auto px-6 py-4 flex items-center justify-between`}
      >
        {/* Logo or Brand */}
        <h1
          className={`${
            isLoginOrRegister ? "text-black" : "text-white"
          } font-bold text-2xl lg:text-3xl`}
        >
          Academia
        </h1>

        {/* Hamburger Menu (visible on small screens) */}
        <div className="lg:hidden">
          <button
            className={`${
              isLoginOrRegister ? "text-black" : "text-white"
            } focus:outline-none`}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-95"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="relative w-full h-full">
                {/* Close Button */}
                <div className="absolute top-6 right-6">
                  <button
                    className="text-white text-3xl"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>
                </div>

                {/* Mobile Menu Navigation */}
                <nav className="flex flex-col items-center justify-center h-full space-y-6">
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-teal-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/courses"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-teal-200"
                  >
                    All Courses
                  </Link>
                  <Link
                    to="/aboutUs"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-teal-200"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/pricing"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-teal-200"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/blogs"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-teal-200"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/contactUs"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-teal-200"
                  >
                    Contact
                  </Link>
                  {userLoggedIn ? (
                    <button
                      onClick={() => {
                        doSignOut().then(() => {
                          navigate("/login");
                          toggleMenu();
                        });
                      }}
                      className="text-white text-2xl hover:text-teal-200"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={toggleMenu}
                        className="text-white text-2xl hover:text-teal-200"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={toggleMenu}
                        className="text-white text-2xl hover:text-teal-200"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:space-x-8">
          <Link
            to="/"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white"
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            Home
          </Link>
          {/* Add other links similarly */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
