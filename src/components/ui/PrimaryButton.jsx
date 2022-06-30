import React from "react";

const PrimaryButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`group block mx-auto py-4 px-[62px] bg-pr-1 rounded-[35px] text-nt-3 mt-[59px] ${className} `}
      onClick={onClick}
    >
      <div className="group-hover:text-nt-1 capitalize drop-shadow-lg">
        {children}
      </div>
    </button>
  );
};

export default PrimaryButton;
