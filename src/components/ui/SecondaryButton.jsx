import React from "react";

const PrimaryButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`group block mx-auto py-4 px-[62px] bg-nt-3 rounded-[35px] text-pr-1 mt-[59px]  drop-shadow-sm ${className} `}
      onClick={onClick}
    >
      <div className="group-hover:text-nt-1 capitalize">{children}</div>
    </button>
  );
};

export default PrimaryButton;
