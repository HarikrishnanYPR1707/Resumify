"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import Image from "next/image";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="mx-auto flex h-16  items-center justify-between shadow-md">
      {/* logo */}
      <p className="group ml-10 text-[24px] font-bold text-black">
        <span className="group-hover:border-b-2 group-hover:border-dashed group-hover:border-black">
          Resumi
        </span>
        <span className="text-Green group-hover:border-b-2 group-hover:border-dashed group-hover:border-Green">
          fy
        </span>
      </p>
      {/* login, signup and profile */}
      <div className="mr-10 flex items-center justify-center font-medium">
        {loading ? null : !user ? (
          // login, signup
          <ul className="flex items-center justify-center">
            <li
              className="mr-4 cursor-pointer rounded-lg px-5 py-2 hover:bg-gray-200 "
              onClick={handleSignIn}
            >
              Login
            </li>
            <li
              className="cursor-pointer rounded-lg bg-Green px-5 py-2 text-center text-white hover:bg-[#329876]"
              onClick={handleSignIn}
            >
              SignUp
            </li>
          </ul>
        ) : (
          // profile, logout
          <ul className="flex items-center justify-center">
            <li className="mx-4 flex cursor-pointer flex-col items-center justify-center">
              <Image
                // src="/2c7d99fe281ecd3bcd65ab915bac6dd5.jpeg"
                src={user.photoURL}
                width={500}
                height={500}
                alt="Profile Picture"
                className="w-[45px] rounded-full"
              />
              {/* <div className="absolute right-0 top-[55px] h-[150px] w-[200px] bg-red-500 opacity-10"></div> */}
            </li>
            <li
              className="cursor-pointer rounded-lg bg-[#D80032] px-5 py-2 text-white hover:bg-[#9c3049]"
              onClick={handleSignOut}
            >
              LogOut
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
