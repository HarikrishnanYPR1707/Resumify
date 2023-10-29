import React from "react";

const Editor = (props) => {
  const sections = props.sections;

  const variants = {
    container: "h-screen border border-black",
  };

  return (
    // container
    <main className={variants.container}>
      {/* header  */}
      <div className={variants.header}>
        {/* Basic Info */}
        <div className=""></div>
        {/* Work Experience  */}
        <div className=""></div>

        {/* Project  */}
        <div className=""></div>

        {/* Education  */}
        <div className=""></div>

        {/* Achievement  */}
        <div className=""></div>

        {/* Summary  */}
        <div className=""></div>

        {/* Other  */}
        <div className=""></div>
      </div>
    </main>
  );
};

export default Editor;
