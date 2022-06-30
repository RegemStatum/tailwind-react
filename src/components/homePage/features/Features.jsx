import React from "react";
import SingleFeature from "./SingleFeature";
import { Icon1, Icon2 } from "../../../assets/images/features";

const Features = () => {
  return (
    <div className=" mt-[68px] grid grid-cols-1 gap-[75px] md:grid-cols-2  lg:grid-cols-3 lg:gap-[40px] ">
      <SingleFeature
        icon={<Icon1 />}
        heading="OpenType features 
Variable fonts"
        text="Slate helps you see how 
many more days you need 
to work to reach your 
financial goal"
      />
      <SingleFeature
        icon={<Icon2 />}
        heading="Design with real data"
        text="Slate helps you see how 
many more days you need 
to work to reach your 
financial goal"
      />
      <SingleFeature
        icon={<Icon1 />}
        heading="Fastest way to 
        take action"
        text="Slate helps you see how 
many more days you need 
to work to reach your 
financial goal"
      />
    </div>
  );
};

export default Features;
