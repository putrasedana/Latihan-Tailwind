import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing for BTB</p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nam.</p>
        <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
