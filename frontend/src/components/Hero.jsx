import React from "react";
import SearchBar from "./SearchBar";
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-16 w-full mb-4">
      
      
      <img
        src={home}
        alt="Hero House"
        className="absolute inset-0  w-full h-full object-cover"
      />

    
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Search from hundreds of premium properties across your city
        </p>

        <button className="bg-blue-600 w-fit px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Explore Properties
        </button>
      </div>

      
      <div className="absolute bottom-4 md:bottom-10 left-4 right-4 md:left-0 md:right-0 flex justify-center">
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
