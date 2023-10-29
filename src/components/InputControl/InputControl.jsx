import React from "react";

const InputControl = ({ label, ...props }) => {
  const variants = {
    container: "flex flex-col gap-3",
    label: "text-base font-medium",
    input:
      "outline-none border border-gray-300 py-3 px-4 text-base rounded-lg hover:border hover:border-gray-500 focus:border focus:border-Green",
  };
  return (
    <div className={variants.container}>
      {label && <label className={variants.label}>{label}</label>}
      <input className={variants.input} type="text" {...props} />
    </div>
  );
};

export default InputControl;
