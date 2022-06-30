import React from "react";

const DarkSectionHeading = ({ heading, description }) => {
  return (
    <div className="mb-[60px]">
      <h2 className="mb-[27px] text-center text-nt-3 capitalize">{heading}</h2>
      <h4 className="w-[80%] mx-auto  text-center text-nt-3">{description}</h4>
    </div>
  );
};

export default DarkSectionHeading;
