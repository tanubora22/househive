import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaUserCircle, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import Logo from "/Logo.svg";

const ProfessionalDetailsPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 p-6 md:p-8 bg-white border rounded-md border-gray-200">
          <img src={Logo} alt="Arcadia logo" className="w-28 mb-6 md:w-32" />
          <div className="flex items-center space-x-3 mb-4 md:mb-6">
            <Link to="/PersonalDetailsPage" className="text-blue-600 flex items-center">
              <FaArrowLeft className="mr-1" />
              Go Back
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaCheck/>
              </div>
              <span className="text-sm font-medium text-gray-600">Professional Details</span>
            </div>
            <div className="w-20 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <LuBriefcaseBusiness/>
              </div>
              <span className="text-sm font-medium text-gray-600">Professional Details</span>
            </div>
            <div className="w-20 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                3
              </div>
              <span className="text-sm font-medium text-gray-600">Upload Documents</span>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-800">Professional Documents</h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your personal details to continue.
            </p>

            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Save & Continue Button */}
              <div>
                <Link
                  to="/UploadDocumentPage"
                  className="w-full bg-indigo-500 text-white py-2 rounded-md font-semibold hover:bg-indigo-600 block text-center"
                >
                  Save & Continue
                </Link>
              </div>
            </form>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            <Link to="#" className="underline">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="#" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex lg:w-1/3 bg-indigo-500 text-white p-8 md:p-12">
          <div className="flex flex-col items-start justify-center w-full">
            <FaUserCircle className="text-6xl mb-4" />
            <h2 className="text-xl font-semibold mb-4">As an Arcadia user:</h2>
            <ul className="space-y-3">
              {[
                "Access exclusive features",
                "Track your progress efficiently",
                "Enjoy seamless integration",
                "Get premium support",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-white rounded-full"></span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsPage;

