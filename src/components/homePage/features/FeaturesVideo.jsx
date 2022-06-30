import React from "react";
import { PlayIcon, screen } from "../../../assets/images/features";

const FeaturesVideo = () => {
  return (
    <div className="relative mx-auto xs:w-[386px] xs:h-[216px]">
      <img src={screen} alt="screen" />
      <button className="block  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-6 pl-[27px] pr-[23px] bg-pr-1 rounded-full hover:shadow-md hover:shadow-nt-3">
        <PlayIcon />
      </button>
    </div>
  );
};

export default FeaturesVideo;
