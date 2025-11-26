"use client";
import useSecureInstance from "@/hooks/SecureInstance";
import React, { useEffect, useState } from "react";
import CropCard from "../CropCard/CropCard";
import Link from "next/link";




const LatestProducts = () => {
  const [fetchLoading, setFetchLoading] = useState(true);
  const Instance = useSecureInstance();
  const [lasetsCrops, SetLatestCrops] = useState([]);
  useEffect(() => {
    Instance.get("/lastest-Crops").then((data) => {
      // console.log(data)
      setFetchLoading(false);
      SetLatestCrops(data.data);
    });
  });

  return (
    <div className="pt-10">
      <h1 className="pb-5 text-3xl font-bold text-center ">
        Latest{" "}
        <span className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">
          {" "}
          Crops
        </span>
      </h1>
      {fetchLoading ? (
        <div
          className="flex justify-center"
        >
          <span className="loading my-4  text-3xl  loading-spinner loading-xl"></span>
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lasetsCrops.map((singleCrop) => (
          <CropCard key={singleCrop._id} crop={singleCrop}></CropCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={"/allproducts"}
          className="btn bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white  px-4 py-2 w-fit"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
