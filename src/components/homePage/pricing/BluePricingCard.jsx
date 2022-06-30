import React from "react";
import { SecondaryButton } from "../../ui";

const PricingCard = ({ name, description, price, features, link }) => {
  return (
    <div className="w-[85%] mx-auto p-10 bg-pr-1  rounded-[10px]">
      <h3 className="mb-2 uppercase font-bold text-center text-nt-3">{name}</h3>
      <p className="mb-[30px]  text-[16px]  leading-[23px] text-center text-nt-3">
        {description}
      </p>
      <div className="mb-[30px] flex gap-[10px] justify-center items-center ">
        <span className="text-[74px] leading-[84px] font-bold text-nt-3">
          {price}
        </span>
        <div className="h-max">
          <span className="text-[20px] leading-[28px] font-bold text-nt-3 ">
            $
          </span>
          <p className="text-[16px] leading-[23px] text-nt-3 ">Per Month</p>
        </div>
      </div>
      <div>
        {features.map((feature, index) => (
          <p
            key={index}
            className="p-[10px] text-[15px] leading-[28px]   capitalize text-center text-nt-3"
          >
            {feature}
          </p>
        ))}
      </div>
      <SecondaryButton className="mt-[30px] bg-nt-3">Order now</SecondaryButton>
    </div>
  );
};

export default PricingCard;
