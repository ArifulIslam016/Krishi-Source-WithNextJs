import React from "react";

const Getupdates = () => {
  return (
    <div className="py-10">
      <h1 className=" text-3xl font-bold text-center">
        Join Our{" "}
        <span className=" bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">
          Comunity and get{" "}
        </span>
        updates
      </h1>
    <p className="text-gray-400 text-lg pt-2 text-center pb-5">Subcribe to get all kind of importants update of cultivation</p>
      <div>
        <div className="hero bg-base-200">
          <fieldset className="fieldset bg-white p-5 m-5 rounded-2xl">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <button className="btn text-white bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] mt-4">
              Subcribe
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Getupdates;
