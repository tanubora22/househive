import React, { useState } from "react";
import Property1 from "/property-1.jpg"; // Replace with your image paths
import Property2 from "/property-2.jpg";
import Property3 from "/property-3.jpg";
import Property from "/property-4.png";
import { Link, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(Property);

  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center  p-5 bg-gray-100 h-[550px]">
        {/* Left Section: Image Scroller */}
        <div className="flex flex-col w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] items-center lg:items-start">
          <div className="flex lg:flex-row gap-5 justify-center items-center ">
            {/* Image Scroller */}
            <div className="flex justify-center items-center w-20 lg:w-24 h-48 lg:h-[300px] overflow-auto border border-gray-300 rounded-lg">
              <div className="flex flex-row  lg:flex-col gap-2">
                {[Property1, Property2, Property3].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={` ${index + 1}`}
                    onClick={() => setMainImage(img)}
                    className="cursor-pointer border border-gray-200 hover:border-blue-500 rounded-md"
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <img
              src={mainImage}
              alt="Main"
              className="w-76 h-72 lg:w-96 lg:h-96 object-cover border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%] mt-8 lg:mt-0 lg:pl-10">
          {/* Product Title */}
          <h1 className="text-xl lg:text-3xl font-bold text-gray-800">
          Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
          </h1>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-3 space-x-3">
            <span className="text-green-600 font-semibold text-lg lg:text-xl">3.9</span>
            <span className="text-gray-600 text-sm lg:text-base">(New Apartment Nice View)</span>
          </div>

          {/* Price Section */}
          <div className="mt-4">
            <span className="text-2xl lg:text-4xl font-bold text-green-600">₹6999</span>
            <span className="ml-4 line-through text-gray-500 text-lg lg:text-xl">₹9,999</span>
            <span className="ml-4 text-green-500 font-semibold text-base lg:text-lg">76% off</span>
          </div>

          {/* Offers Section */}
          <div className="mt-6">
            <h2 className="font-semibold text-gray-800">Available Offers</h2>
            <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1 text-sm lg:text-base">
              <li>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
              <li>Bank Offer: 10% off up to ₹750 on HDFC Bank Credit Card EMI</li>
              <li>Bank Offer: 10% off up to ₹1,000 on HDFC Bank Credit Card EMI</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row mt-6 gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full lg:w-40">
            <Link to="/RegistrationPage">PAY NOW</Link>
            </button>
            {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full lg:w-40">
              PAY NOW
            </button> */}
          </div>

          {/* Delivery Section */}
          {/* <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Enter Delivery Pincode</h3>
            <div className="flex flex-col lg:flex-row items-center mt-2 gap-3">
              <input
                type="text"
                placeholder="Enter pincode"
                className="border border-gray-300 px-3 py-2 rounded w-full lg:w-40"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full lg:w-auto">
                Check
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Delivery by 13 Dec, Friday | Free ₹40
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;




// import React, { useState } from "react";
// import Property1 from "./path-to-property1.jpg"; // Replace with your image paths
// import Property2 from "./path-to-property2.jpg";
// import Property3 from "./path-to-property3.jpg";
// import Property from "./path-to-main-image.jpg";

// const ProductPage = () => {
//     const [mainImage, setMainImage] = useState(Property); // Default main image

//     return (
//         <div className="flex w-1/3 items-center">
//             {/* Image Scroller */}
//             <div className="w-24 h-[300px] overflow-auto border border-gray-300">
//                 <div className="flex flex-col gap-2">
//                     <img
//                         src={Property1}
//                         alt="Thumbnail 1"
//                         onClick={() => setMainImage(Property1)} // Update main image on click
//                         className="w-full cursor-pointer border border-gray-200 hover:border-blue-500"
//                     />
//                     <img
//                         src={Property2}
//                         alt="Thumbnail 2"
//                         onClick={() => setMainImage(Property2)} // Update main image on click
//                         className="w-full cursor-pointer border border-gray-200 hover:border-blue-500"
//                     />
//                     <img
//                         src={Property3}
//                         alt="Thumbnail 3"
//                         onClick={() => setMainImage(Property3)} // Update main image on click
//                         className="w-full cursor-pointer border border-gray-200 hover:border-blue-500"
//                     />
//                 </div>
//             </div>

//             {/* Main Image */}
//             <img
//                 src={mainImage}
//                 alt="Main"
//                 className="mt-4 w-72 h-72 object-cover border border-gray-300"
//             />
//         </div>
//     );
// };

// export default ProductPage;
