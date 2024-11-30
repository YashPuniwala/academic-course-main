import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { currentUser } = useAuth(); // Now this works because it's inside a component wrapped by AuthProvider
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  // Conditionally apply styles based on the route
  const isLoginOrRegister =
    location.pathname === "/login" || location.pathname === "/register";

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

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 lg:static absolute top-16 left-0 bg-gray-800 w-full lg:w-auto lg:bg-transparent lg:p-0 p-4 cursor-pointer`}
        >
          <Link
            to="/"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white "
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white"
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            All Courses
          </Link>
          <Link
            to="/aboutUs"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white"
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            About Us
          </Link>
          <Link
            to="/pricing"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white"
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            Pricing
          </Link>
          <Link
            to="/blogs"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white"
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            Blogs
          </Link>
          <Link
            to="/contactUs"
            className={`${
              isLoginOrRegister ? "text-black hover:text-black" : "text-white"
            } hover:text-teal-200 text-lg py-2 lg:py-0`}
          >
            Contact
          </Link>
          {userLoggedIn ? (
            <>
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/login");
                  });
                }}
                className={`${
                  isLoginOrRegister ? "text-black hover:text-black" : "text-white"
                } hover:text-teal-200 text-lg py-2 lg:py-0`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className={`${
                  isLoginOrRegister ? "text-black hover:text-black" : "text-white"
                } hover:text-teal-200 text-lg py-2 lg:py-0`}
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className={`${
                  isLoginOrRegister ? "text-black hover:text-black" : "text-white"
                } hover:text-teal-200 text-lg py-2 lg:py-0`}
                to={"/register"}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* <div
        className={`${
          isLoginOrRegister ? "text-black" : "text-white"
        } text-2xl font-bold pt-14`}
      >
        Hello{" "}
        {currentUser ? currentUser.displayName || currentUser.email : "Guest"}
      </div> */}
    </header>
  );
};

export default Navbar;
