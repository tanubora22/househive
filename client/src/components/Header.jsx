import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-20">
      <div className="bg-gray-900 py-4 ">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 px-4 lg:px-8">
          <ul className="flex gap-4 items-center">
            <li>
              <a
                href="mailto:info@homeverse.com"
                className="flex items-center gap-2 text-white text-sm font-bold hover:text-orange-500"
              >
                <IoIosSearch className="text-orange-500 text-lg" />
                <span>info@homeverse.com</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white text-sm font-bold hover:text-orange-500"
              >
                <IoIosSearch className="text-orange-500 text-lg" />
                <address className="not-italic">15/A, Nest Tower, NYC</address>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
          <button className="bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out transform hover:scale-105">
  Add Listing
</button>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-8 shadow">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="logo">
            <img src={Logo} alt="Homeverse logo" className="w-32" />
          </a>

          {/* Navigation */}
          <nav
            className={`fixed top-0 left-0 w-64 h-full bg-white  z-30 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform lg:transform-none lg:relative lg:bg-transparent lg:flex lg:items-center`}
          >
            <div className="p-6 lg:hidden">
              <button
                className="absolute top-4 right-4 text-gray-700"
                onClick={toggleMenu}
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
            <ul className="flex flex-col lg:flex-row gap-6 text-sm font-semibold text-gray-700 uppercase lg:gap-8">
              <li>
                <a href="#home" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-orange-500">
                  Service
                </a>
              </li>
              <li>
                <a href="#property" className="hover:text-orange-500">
                  Property
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="flex flex-col items-center text-gray-800 hover:text-orange-500">
              <IoIosSearch className="text-xl" />
            </button>
            <button className="flex flex-col items-center text-gray-800 hover:text-orange-500">
              <BsPerson className="text-xl" />
            </button>
            <button className="flex flex-col items-center text-gray-800 hover:text-orange-500">
              <LuShoppingCart className="text-xl" />
            </button>
            <button
              className="lg:hidden flex flex-col items-center text-gray-800 hover:text-orange-500"
              onClick={toggleMenu}
            >
              <IoMenu className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
