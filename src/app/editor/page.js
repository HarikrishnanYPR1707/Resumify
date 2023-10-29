import Editor from "@/components/Editor/Editor";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

const page = () => {
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      <Link
        href="/"
        className="absolute right-6 top-6 grid aspect-square w-[50px] place-items-center rounded-full bg-Green"
      >
        <AiFillHome className="text-xl text-White" />
      </Link>
      {/* preview and draggable section  */}
      <div className="h-full w-1/2 border border-red-500 bg-Green"></div>

      {/* editor sections */}
      <div className="h-auto w-1/2 border border-blue-500 ">
        <Editor sections={sections} />
      </div>
    </div>
  );
};

export default page;
