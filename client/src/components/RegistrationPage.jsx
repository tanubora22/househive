import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import Logo from "/Logo.svg";

const RegistrationPage = () => {
    const [selectedOption, setSelectedOption] = useState('customer');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSign = () => {
        if (selectedOption === 'customer') {
            navigate('/SignupPage'); // Navigate to SignupPage if 'customer' is selected
        } else if (selectedOption === 'associate') {
            navigate('/PersonalDetailsPage'); // Navigate to PersonalDetailsPage if 'associate' is selected
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-11/12 md:w-3/4 lg:w-2/3 overflow-hidden">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 p-8 lg:p-15 h-[615px] border rounded-md flex justify-center items-center">
                    <div className="max-w-md mx-auto">
                        {/* Logo */}
                        <div className="mb-8">
                            <img
                                src={Logo}
                                alt="Arcadia Logo"
                                width={150}
                                height={40}
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">
                                    How would you like to join Arcadia?
                                </h1>
                                <p className="text-gray-600 mt-3 text-md">
                                    Let’s get you onboard—choose an option to proceed.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="border rounded-md py-3 p-2">
                                    <label className="flex items-center space-x-3 justify-between">
                                        <span className="text-gray-700">I WANT TO REGISTER AS A CUSTOMER</span>
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="customer"
                                            checked={selectedOption === 'customer'}
                                            onChange={handleOptionChange}
                                            className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                                        />
                                    </label>
                                </div>

                                <div className="border rounded-md py-3 p-2">
                                    <label className="flex items-center space-x-3 justify-between">
                                        <span className="text-gray-700">APPLY TO BECOME AN ASSOCIATE</span>
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="associate"
                                            checked={selectedOption === 'associate'}
                                            onChange={handleOptionChange}
                                            className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Continue Button */}
                            <button
                                className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors font-medium"
                                onClick={handleSign}
                            >
                                Continue
                            </button>

                            {/* Sign In Link */}
                            <div className="text-center">
                                <span className="text-gray-600">Already have an account? </span>
                                <Link to="/signin" className="text-blue-500 font-semibold hover:underline">
                                    Sign in
                                </Link>
                            </div>

                            {/* Terms & Privacy */}
                            <div className="text-center text-sm text-gray-500">
                                <Link to="/terms" className="text-blue-500 hover:underline">
                                    Terms of Service
                                </Link>
                                {' | '}
                                <Link to="/privacy" className="text-blue-500 hover:underline">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:flex md:w-1/3 bg-indigo-400 text-white p-12">
                    <div className="flex flex-col items-start justify-center w-full">
                        <FaUserCircle className="text-6xl mb-4" />
                        <h2 className="text-xl font-semibold mb-4">As an Arcadia basic user:</h2>
                        <ul className="space-y-3">
                            {[
                                "Lorem ipsum dolor",
                                "Lorem ipsum dolor sit amet consectetur.",
                                "Lorem ipsum dolor",
                                "Lorem ipsum dolor sit amet consectetur.",
                                "Lorem ipsum dolor sit amet consectetur. Maleuada feugiat.",
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

export default RegistrationPage;
