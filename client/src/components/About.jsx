import React from "react";
import { IoHomeOutline, IoLeafOutline, IoWineOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import AboutBanner1 from "/about-banner-1.png"; // Update the path as needed
import AboutBanner2 from "/about-banner-2.jpg"; // Update the path as needed

const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-8">
        {/* About Banner */}
        <figure className="relative w-full lg:w-1/2">
          <img
            src={AboutBanner1}
            alt="House interior"
            className="w-full max-w-lg mx-auto"
          />
          <img
            src={AboutBanner2}
            alt="House interior"
            className="absolute bottom-10 left-4 w-1/2 rounded-lg"
          />
        </figure>

        {/* About Content */}
        <div className="lg:w-1/2">
          <p className="text-orange-500 text-lg font-bold mb-4">About Us</p>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            The Leading Real Estate Rental Marketplace.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage,
            combined with specialist services.
          </p>

          {/* About Features List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                <IoHomeOutline className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-600 text-lg">Smart Home Design</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                <IoLeafOutline className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-600 text-lg">Beautiful Scene Around</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                <IoWineOutline className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-600 text-lg">Exceptional Lifestyle</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                <IoShieldCheckmarkOutline className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-600 text-lg">Complete 24/7 Security</p>
            </li>
          </ul>

          {/* Callout and Button */}
          <p className="bg-orange-50 text-gray-600 text-lg font-medium leading-relaxed pl-4 border-l-4 border-orange-500 py-4 mb-8">
            "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet."
          </p>
          <a
            href="#service"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
