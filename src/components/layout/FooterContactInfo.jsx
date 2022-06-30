import React from "react";
import { Location, Phone } from "../../assets/images/contactUs";

const FooterContactInfo = () => {
  return (
    <div className="mb-[68px]">
      <div className="p-[10px] flex gap-[10px] items-center">
        <div className="w-7 h-max flex-0">
          <Location />
        </div>
        <p className="p-[10px] text-white">
          6386 Spring St undefined Anchorage, Georgia 12473 United States
        </p>
      </div>
      <div className="p-[10px] flex gap-[10px] items-center">
        <div className="w-7 h-max flex-0">
          <Phone />
        </div>
        <p className="p-[10px] text-white  ">(843) 555-0130</p>
      </div>
    </div>
  );
};

export default FooterContactInfo;
