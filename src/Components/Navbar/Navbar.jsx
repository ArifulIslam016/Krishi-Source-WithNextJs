"use client";
import { Authcontext } from "@/Context/Context";
import Link from "next/link";
import React, { use } from "react";

const Navbar = () => {
  const { user,Signout } = use(Authcontext);
  const links = (
    <>
      <li>
        {" "}
        <Link href="">Add Produsts</Link>
      </li>
      <li>
        {" "}
        <Link href="">Manage Product</Link>
      </li>
    </>
  );
  const handleSignOut=()=>{
    Signout()
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost text-xl md:text-3xl flex items-center lg:text-4xl font-extrabold bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent"
        >
          <img
            src="https://i.ibb.co.com/b5JBNTz4/krishi.png"
            className="w-10 rounded-full"
            alt=""
          />
          Krishi Source
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {!user? <div className="flex gap-4">
          <Link
            className="btn bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635]"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="btn bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635]"
            href=""
          >
            Register
          </Link>
        </div>: <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <p className="justify-between">{user.displayName}</p>
              </li>
              <li>
                <p>{user.email}</p>
              </li>
              <li>
                <button className="btn btn-block bg-red-200" onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>}
       
       
      </div>
    </div>
  );
};

export default Navbar;
