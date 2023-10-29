import Editor from "@/components/Editor/Editor";
import React from "react";

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
    <div className="flex h-screen items-center justify-center">
      {/* editor sections */}
      <div className="h-full w-1/2 border border-blue-500">
        <Editor sections={sections} />
      </div>
      {/* preview and draggable section  */}
      <div className="h-full w-1/2 border border-red-500"></div>
    </div>
  );
};

export default page;
