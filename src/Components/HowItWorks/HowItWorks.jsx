import React from "react";

const HowItworks = () => {
  return (
    <div className="py-10">
      <h1 className="pb-5 text-3xl font-bold text-center ">
        How <span className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">it Works</span>
      </h1>
            {/* working produre here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Browse Crops</h3>
          <p className="text-gray-600">
            Explore all available crops. Choose your own         </p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Send Interest</h3>
          <p className="text-gray-600">
            Submit your to the seller by fillup a simple form and show your interest to the seller
          </p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Owner Confirmation</h3>
          <p className="text-gray-600">
           Your can cheeck the acception or rejection by the seller to throw the status
          </p>
        </div>

      
        <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Payment</h3>
          <p className="text-gray-600">
            Pay your amount to the owner an take delivery from the seller.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItworks;