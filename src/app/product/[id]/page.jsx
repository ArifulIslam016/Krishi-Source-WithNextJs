"use client";
import React, { use, useEffect, useState } from "react";
import LoadingPage from "../../../Components/Errors/LoadingPage";
import { Authcontext } from "@/Context/Context";
import useSecureInstance from "@/hooks/SecureInstance";
import { useRouter } from "next/navigation";



const CropDetails = ({params}) => {
  const { user, loading } = use(Authcontext);
  const [CropInfo, setCropInfo] = useState(null);
  const Instance = useSecureInstance();
  const router=useRouter()
  const id=React.use(params).id;
  const [fetchLoading, setFetchLoading] = useState(true);
  useEffect(() => {
    Instance.get(`/single-Crop/${id}`).then((data) => {
      setCropInfo(data.data);
      setFetchLoading(false);
    });
  }, [Instance, id]);
  if (!CropInfo || fetchLoading) {
    return <LoadingPage></LoadingPage>;
  }
  const {
    _id,
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
  } = CropInfo;
  return (
  <div>
      <div className="max-w-[1440px] mx-auto">
      <div className="max-w-[500px] h-80 mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
        <div className="w-full max-h-80 overflow-hidden rounded-xl mb-6">
          <img
            src={image}
            alt={`Image of ${name}`}
            className="w-full object-cover transform hover:scale-107 transition duration-300"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Type:</span> {type}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Price:</span> {pricePerUnit} / {unit}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Available Quantity:</span> {quantity} {unit}
        </p>
        <p className="text-gray-600 mb-3">
          <span className="font-semibold">Location:</span> {location}
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-1 text-gray-700">
            Description
          </h2>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="border-t pt-4 text-sm text-gray-600">
          <p>
            Posted by{" "}
            <span className="font-medium text-gray-800">
              {owner?.ownerName}
            </span>
          </p>
        </div>
        <button onClick={()=>router.back()} className="btn outline-0 border-0 px-3 bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white font-medium  rounded-lg hover:bg-green-600 transition">Back</button>
      </div>
    
    </div>
  </div>
  );
};

export default CropDetails;