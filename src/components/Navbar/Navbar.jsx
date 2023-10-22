"use client";
import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-16  items-center justify-between shadow-md">
      {/* logo */}
      <p className="group ml-10 text-[24px] font-bold text-black">
        <span className="group-hover:border-b-2 group-hover:border-dashed group-hover:border-black">
          Resume
        </span>
        <span className="text-Green group-hover:border-b-2 group-hover:border-dashed group-hover:border-Green">
          Pro
        </span>
      </p>
      {/* login, signup and profile */}
      <div className="mr-10 font-semibold">
        {/* Hamburger Menu  */}
        <BiMenu className="text-[30px] sm:hidden" />

        {/* login, signup  */}
        <div className="flex items-center justify-center">
          <button
            className="mr-4 hidden rounded-lg px-5 py-2 hover:bg-gray-200 sm:block"
            // onClick={() => {console.log("Login")}}
          >
            Login
          </button>
          <button
            className="hidden rounded-lg bg-Green px-5 py-2 text-white hover:bg-[#329876] sm:block"
            // onClick={() => {console.log("SignUp")}}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
