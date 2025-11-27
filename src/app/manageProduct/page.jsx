'use client'
import React, { use, useEffect, useRef, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import LoadingPage from "../../Components/Errors/LoadingPage";
import { Authcontext } from "@/Context/Context";
import useSecureInstance from "@/hooks/SecureInstance";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const MyPosts = () => {
    const modalrefarence=useRef()
  const { user,loading } = use(Authcontext);
  const Instance = useSecureInstance();
  const [myPost, setMypost] = useState([]);
  const [clickedPost,setClickedPost]=useState(null)
  const [fetchLoading,setFetchLoading]=useState(true)
  const router=useRouter()
 
  useEffect(() => {
      Instance.get(`/allcrops?email=${user?.email}`).then((data) => {
          setMypost(data.data);
          setFetchLoading(false)
        });
        
    }, 
    [user, Instance,fetchLoading]);
    if(fetchLoading,loading){
         return <LoadingPage></LoadingPage>
     }
       if(!user){
    router.push('/login')
  }
  const handleEdit=(post)=>{
    setClickedPost(post)
    modalrefarence.current.showModal()
  }
  const handleUpdateCrops=(e)=>{
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
    const updatedCrop = {
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
    // console.log(updatedCrop)
    Instance.patch(`/updatePost/${clickedPost?._id}`,updatedCrop).then(data=>{
        const filtererdId=data.data.matchedCount
      if(filtererdId){
          const filterdPost=myPost.filter(post=>post._id!==clickedPost?._id)
          updatedCrop._id=clickedPost._id
        filterdPost.push(updatedCrop)
        setMypost(filterdPost)
        modalrefarence.current.close()
      }
    })
  }
const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure to delete?",
  text: "You won't be able to revert or change!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Delete"
}).then((result)=>{
  if (result.isConfirmed) {
  Instance.delete(`/deletePost/${id}`).then(data=>{
//   console.log(data.data)
  if(data?.data?.deletedCount){
    const fileterAfterDel=myPost.filter(post=>post._id!==id)
    setMypost(fileterAfterDel)
        Swal.fire({
      title: "Deleted!",
      text: "Your post has been deleted.",
      icon: "success"
    }); 
  }

  }  
   
)

}
})


}
  
if(myPost?.length===0){
  return   <h1 className="text-4xl max-w-[1440px] mx-auto font-extrabold  my-10 text-gray-700">
          You don`t any post Yet
        </h1>
}

  return (
   <div className="max-w-[1440px] mx-auto py-10 px-4">
    <h1 className="text-2xl font-semibold mb-6">
      Total {myPost.length} Post{myPost.length > 1 ? "s" : ""} Found
    </h1>

    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Image</th> */}
            <th className="text-left">Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myPost.map((post, index) => (
            <tr  key={post._id}>
              <td>{index + 1}</td>
              {/* <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={post.image}
                      alt={post.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </td> */}
              <td className="text-right">{post.name}</td>
              <td>{post.quantity}</td>
              <td>৳ {post.pricePerUnit}/{post.unit}</td>
              <td>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="btn btn-outline btn-xs text-gray-500 flex items-center gap-1"
                  >
                    <MdModeEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="btn btn-outline btn-xs text-red-500 flex items-center gap-1"
                  >
                    <MdDelete /> Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Modal */}
    <dialog ref={modalrefarence} className="modal w-fit mx-auto p-10">
      <div className="modal-box max-w-lg">
        <form onSubmit={handleUpdateCrops} className="space-y-5">
          <div>
            <label className="font-medium text-gray-700 mb-1">Crop Name</label>
            <input
              type="text"
              name="cropName"
              defaultValue={clickedPost?.name}
              required
              placeholder="Crop Name"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1">Type</label>
            <select
              name="cropType"
              defaultValue={clickedPost?.type}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option disabled>Select Type</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Grain">Grain</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-medium text-gray-700 mb-1">Price Per Unit</label>
              <input
                type="number"
                name="pricePerUnit"
                defaultValue={clickedPost?.pricePerUnit}
                required
                placeholder="Price"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1">Unit</label>
              <select
                name="unitType"
                defaultValue={clickedPost?.unit}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option disabled>Select Unit</option>
                <option value="kg">kg</option>
                <option value="Ton">Ton</option>
                <option value="Bag">Bag</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={clickedPost?.quantity}
              placeholder="Quantity"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={clickedPost?.location}
              required
              placeholder="Location"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={clickedPost?.description}
              rows="3"
              placeholder="Short description about your crop..."
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              defaultValue={clickedPost?.image}
              placeholder="Photo URL"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Update
            </button>
          </div>
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
  );
  
};

export default MyPosts;