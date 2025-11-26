"use client";

import React, { use, useEffect, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import NotFount from '../../Components/Errors/404NotFount';
import LoadingPage from '../../Components/Errors/LoadingPage';
import { Authcontext } from '@/Context/Context';
import CropCard from '@/Components/CropCard/CropCard';
import useSecureInstance from '@/hooks/SecureInstance';

const AllCrops = () => {
    const {user}=use(Authcontext)
    const [allcrops,setCrops]=useState([])
    const [searchValue,setSearchValue]=useState('')
    const [filteredCrops,setFilteredCrops]=useState([])
    const Instance=useSecureInstance()
     const [fetchLoading,setFetchLoading]=useState(true)
    useEffect(()=>{
        Instance.get('/allcrops').then(data=>{setCrops(data.data)
            setFetchLoading(false)
        })
    },[user,Instance])
      if(fetchLoading){
        return <LoadingPage></LoadingPage>
    }
   const hanldeSearch=(e)=>{
    const value=e.target.value;
    setSearchValue(value)
if(value===''){
    setFilteredCrops([])
    return
}else{
        const filteredData= allcrops.filter(singledata=>singledata.name.toLowerCase().includes(value.toLocaleLowerCase()))
            setFilteredCrops(filteredData)
}
   }
    return (
        <div className='max-w-[1440px] mx-auto py-10'>
            <div className='flex justify-between'>
           <h1 className='text-gray-800 text-2xl'>Total {allcrops.length} crops found</h1>
           <div className='relative'>
            <input type="search" name='search' value={searchValue} onChange={hanldeSearch} className='input outline-2 outline-gray-900 focus:outline-3 focus:outline-green-600' placeholder='Search'/>
            <LuSearch className='absolute top-3 left-40 text-gray-800' />
           </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
        {
            searchValue.length!==0 && filteredCrops.length===0?<div className='md:col-span-2 lg:col-span-3'><NotFount></NotFount></div>:filteredCrops.length>0?filteredCrops.map(crop=><CropCard key={crop._id} crop={crop} ></CropCard>) :allcrops.map(crop=><CropCard key={crop._id} crop={crop} ></CropCard>)
            // allcrops.map(crop=><CropCard key={crop._id} crop={crop} ></CropCard>)
        }
            
        </div>
        </div>
    );
};

export default AllCrops;
/***   const newCrop = {
      name,
      type,
      pricePerUnit,
      unit,
      quantity,
      description,
      location,
      image,
      interest,
      owner,
    }; */