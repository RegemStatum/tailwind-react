import React from "react";

const SingleFeature = ({ icon, heading, text }) => {
  return (
    <div className="max-w-[255px]  mx-auto flex flex-col gap-5 items-center text-center ">
      <div className="mb-[10px]">{icon}</div>
      <h3 className=" px-9  font-bold text-nt-1 ">{heading}</h3>
      <p className=" px-4  text-nt-2 ">{text}</p>
    </div>
  );
};

export default SingleFeature;
