import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="grid w-full place-content-center bg-black">
      <div className="my-12 flex w-[1280px] items-center justify-between">
        <div className="group text-7xl font-black">
          <span className="text-white duration-100 group-hover:border-b-2 group-hover:border-dashed group-hover:border-white">
            Resumi
          </span>
          <span className="text-Green duration-100 group-hover:border-b-2 group-hover:border-dashed group-hover:border-Green">
            fy
          </span>
        </div>
        <div className="text-gray-300">
          &copy; Resumify 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
