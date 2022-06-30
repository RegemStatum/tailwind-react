import React from "react";

const SectionHeading = ({ heading, description }) => {
  return (
    <div className="mb-[60px]">
      <h2 className="mb-[27px] text-center text-nt-1 capitalize ">{heading}</h2>
      <h4 className="w-[80%] mx-auto  text-center text-nt-2">{description}</h4>
    </div>
  );
};

export default SectionHeading;
