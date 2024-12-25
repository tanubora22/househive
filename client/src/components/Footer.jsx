import React from "react";
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';
import LogoLight from "/Logo-2.svg";

const Footer = () => {
  return (
<>

<div className="bg-gray-700  py-12">
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-orange mb-4">Looking for a dream home?</h2>
            <p className="text-lg mb-6">We can help you realize your dream of a new home</p>
            <button className="bg-orange text-white py-2 px-6 rounded hover:bg-orange-dark">Explore Properties</button>
          </div> */}
          <div className="flex justify-center md:justify-end w-full">
            <img src={LogoLight} alt="Logo" className="w-50" />
          </div>
        </div>

        {/* Footer Information */}
        <div className="grid md:grid-cols-4 gap-8 text-white">
          <div>
            <div className="flex items-center mb-6 ">
              <img src={LogoLight} alt="Homeverse logo" className="w-32" />
            </div>
            <p className="text-md mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <IoLocationOutline size={20} />
                <address className="text-md">Brooklyn, New York, United States</address>
              </li>
              <li className="flex items-center gap-2">
                <IoCallOutline size={20} />
                <span className="text-md">+0123-456789</span>
              </li>
              <li className="flex items-center gap-2">
                <IoMailOutline size={20} />
                <span className="text-md">contact@homeverse.com</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-md hover:text-orange">About</a></li>
              <li><a href="#" className="text-md hover:text-orange">Blog</a></li>
              <li><a href="#" className="text-md hover:text-orange">All Products</a></li>
              <li><a href="#" className="text-md hover:text-orange">Locations Map</a></li>
              <li><a href="#" className="text-md hover:text-orange">FAQ</a></li>
              <li><a href="#" className="text-md hover:text-orange">Contact us</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-md hover:text-orange">Order tracking</a></li>
              <li><a href="#" className="text-md hover:text-orange">Wish List</a></li>
              <li><a href="#" className="text-md hover:text-orange">Login</a></li>
              <li><a href="#" className="text-md hover:text-orange">My account</a></li>
              <li><a href="#" className="text-md hover:text-orange">Terms & Conditions</a></li>
              <li><a href="#" className="text-md hover:text-orange">Promotional Offers</a></li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-md hover:text-orange">Login</a></li>
              <li><a href="#" className="text-md hover:text-orange">My account</a></li>
              <li><a href="#" className="text-md hover:text-orange">Wish List</a></li>
              <li><a href="#" className="text-md hover:text-orange">Order tracking</a></li>
              <li><a href="#" className="text-md hover:text-orange">FAQ</a></li>
              <li><a href="#" className="text-md hover:text-orange">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-white">
          <a href="#" className="text-xl hover:text-orange"><IoLogoFacebook size={30} /></a>
          <a href="#" className="text-xl hover:text-orange"><IoLogoTwitter size={30} /></a>
          <a href="#" className="text-xl hover:text-orange"><IoLogoLinkedin size={30} /></a>
          <a href="#" className="text-xl hover:text-orange"><IoLogoYoutube size={30} /></a>
        </div>

        {/* Footer Bottom */}
        <div className="bg-gray-400 py-4 mt-7">
          <p className="text-center text-lg">
            &copy; 2024 <a href="/" className="hover:text-orange">Homeverse</a>. All Rights Reserved
          </p>
        </div>
      </div>
   
      </div>
</>
  );
};

export default Footer;
