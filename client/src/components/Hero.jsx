import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import HeroBanner from "/hero-banner.png"; // Update the path as needed

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8 gap-12">
        {/* Hero Content */}
        <div className="lg:w-1/2">
          <p className="flex items-center gap-2 text-lg font-bold text-green-900 mb-4">
            <IoHomeOutline className="text-orange-500 text-2xl" />
            <span>Real Estate Agency</span>
          </p>

          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Find Your Dream House By Us
          </h2>

          <p className="text-gray-600 text-lg pl-4 border-l-4 border-gray-300 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
            Make An Enquiry
          </button>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2">
          <figure>
            <img
              src={HeroBanner}
              alt="Modern house model"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
