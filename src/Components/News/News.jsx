import React, { useEffect, useState } from 'react';
import useSecureInstance from '../../Hooks/SecureInstance';
import axios from 'axios';

const News = () => {
    const Instance=useSecureInstance()
    const [newsData,setNewsData]=useState([])
  useEffect(()=>{
    Instance.get('/news').then(data=>setNewsData(data.data))
  },[])
    return (
         <div className="py-10">
      <h1 className="pb-5 text-3xl font-bold text-center ">
        Latest <span className='bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent'>News</span>
      </h1>
            {/* working produre here */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 px-6 md:px-12">
        {
            newsData.map(singleNewsData=><div key={singleNewsData._id} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">{singleNewsData.title}</h3>
          <p className="text-gray-600">
             {singleNewsData.content}   </p>
        </div>)
        }

      </div>
    </div>
    );
};

export default News;