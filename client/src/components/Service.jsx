import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Service1 from "/service-1.png"; // Update the path as needed
import Service2 from "/service-2.png"; // Update the path as needed
import Service3 from "/service-3.png"; // Update the path as needed

const Service = () => {
  const services = [
    {
      img: Service1,
      title: "Buy a home",
      text: "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      link: "#",
    },
    {
      img: Service2,
      title: "Rent a home",
      text: "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      link: "#",
    },
    {
      img: Service3,
      title: "Sell a home",
      text: "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="service">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Section Title */}
        <p className="text-orange-500 text-lg font-bold mb-4">Our Services</p>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">Our Main Focus</h2>

        {/* Service Cards */}
        <ul className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <li key={index} className="w-full sm:w-[45%] lg:w-[30%]">
            <div className="relative bg-white text-center p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out rounded-md">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5">
                <img src={service.img} alt="Service icon" className="w-full h-full object-contain" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 hover:text-orange-500 transition">
                <a href={service.link}>{service.title}</a>
              </h3>
              {/* Text */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">{service.text}</p>
              {/* Link */}
              <a
                href={service.link}
                className="flex items-center justify-center gap-2 text-teal-600 font-semibold text-lg hover:text-orange-500 transition"
              >
                <span>Find A Home</span>
                <IoArrowForwardOutline />
              </a>
              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-300 hover:w-full"></div>
            </div>
          </li>
          
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
