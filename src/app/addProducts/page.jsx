'use client'
import { Authcontext } from "@/Context/Context";
import useSecureInstance from "@/hooks/SecureInstance";
import { useRouter } from "next/navigation";
import LoadingPage from '../../Components/Errors/LoadingPage'
import React, { use,  } from "react";

const Addcrops = () => {
    const router=useRouter()
    const Instance = useSecureInstance();
    const { user,loading } = use(Authcontext);
    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(!user){
        router.push('/login')
    }
  const handleAddproducts = (e) => {
    e.preventDefault();
    const name = e.target.cropName.value;
    const type = e.target.cropType.value;
    const pricePerUnit = e.target.pricePerUnit.value;
    const unit = e.target.unitType.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const image = e.target.photoUrl.value;
    const interest = [];
    const owner = {
      ownerEmail: user?.email,
      ownerName: user?.displayName,
    };
    const newCrop = {
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
    };
    Instance.post("/CreateCrops", newCrop).then((data) => {
        if(data.data.insertedId){
    //   i will add allret here
      e.target.reset()
        }
        
    });
     
  };
  return (
    <div className="flex justify-center items-center">
        <div className="max-w-[1440px] mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Product</h2>
      <form onSubmit={handleAddproducts} className="space-y-5">
        {/* Crop Name Here */}
        <div>
          <label className=" text-gray-700 font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="cropName"
            required
            placeholder="Crop Name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Crop Type */}
        <div>
          <label className=" text-gray-700 font-medium mb-1">Type</label>
          <select
            name="cropType"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option defaultValue="" disabled>
              Select Type
            </option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
          </select>
        </div>

        {/* Price*/}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className=" text-gray-700 font-medium mb-1">
              Price Per Unit
            </label>
            <input
              type="number"
              name="pricePerUnit"
              required
              placeholder="Price"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className=" text-gray-700 font-medium mb-1">Unit</label>
            <select
              name="unitType"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option defaultValue="" disabled>
                Select Unit
              </option>
              <option value="kg">kg</option>
              <option value="Ton">Ton</option>
              <option value="Bag">Bag</option>
            </select>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="text-gray-700 font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity "
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="text-gray-700 font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            placeholder="Location "
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Short description about your crop..."
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <div>
          <label className=" text-gray-700 font-medium mb-1">Photo Url</label>
          <input
            name="photoUrl"
            placeholder="Photo URL"
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        {/* Submit here */}
        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Addcrops;