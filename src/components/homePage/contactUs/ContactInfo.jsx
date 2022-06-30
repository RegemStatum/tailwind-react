import React from "react";
import { Location, Phone, Email } from "../../../assets/images/contactUs";

const ContactInfo = () => {
  return (
    <div className="mb-[68px]">
      <div className="p-[10px] flex gap-[10px] items-center">
        <div className="w-7 h-max flex-0">
          <Location />
        </div>
        <p className="p-[10px]">
          6386 Spring St undefined Anchorage, Georgia 12473 United States
        </p>
      </div>
      <div className="p-[10px] flex gap-[10px] items-center">
        <div className="w-7 h-max flex-0">
          <Phone />
        </div>
        <p className="p-[10px]">(843) 555-0130</p>
      </div>
      <div className="p-[10px] flex gap-[10px] items-center">
        <div className="w-7 h-max flex-0">
          <Email />
        </div>
        <p className="p-[10px]">willie.jennings@example.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
