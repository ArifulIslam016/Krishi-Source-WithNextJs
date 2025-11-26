import React from 'react';

const FertilizerTools = () => {
    return (
       <div className="my-12 px-6 md:px-12">
  <h1 className="pb-5 text-3xl font-bold text-center">
           Fertilizer & Tools   <span className=' bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent'>Recommendation</span>
      </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white">
      <h3 className="text-xl font-bold mb-2 text-green-800">Rice</h3>
      <p className="text-gray-600 text-sm">
        Recommended: <span className="font-semibold">Urea, Potash, Power Tiller</span>
      </p>
    </div>

    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white">
      <h3 className="text-xl font-bold mb-2 text-green-800">Wheat</h3>
      <p className="text-gray-600 text-sm">
        Recommended: <span className="font-semibold">DAP, NPK, Harvester</span>
      </p>
    </div>

    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white">
      <h3 className="text-xl font-bold mb-2 text-green-800">Vegetables</h3>
      <p className="text-gray-600 text-sm">
        Recommended: <span className="font-semibold">Organic Compost, Hoe, Sprayer</span>
      </p>
    </div>
  </div>
</div>

    );
};

export default FertilizerTools;