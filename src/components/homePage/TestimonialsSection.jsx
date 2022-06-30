import React from "react";
import { PrimaryButton, Section } from "../../components/ui";
import IBM from "../../assets/images/testimonials/brand-1.png";
import userPhoto from "../../assets/images/testimonials/photo-1.png";

const TestimonialsSection = () => {
  return (
    <Section heading="Testimonials">
      <img src={IBM} alt="IBM" className="mx-auto mb-11" />
      <p className="w-[80%] mx-auto mb-16  text-center font-bold text-[14px] leading-[17px]">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule
      </p>
      <div className="flex gap-[11px]  w-max mx-auto">
        <img
          src={userPhoto}
          alt="user"
          className="w-[42px] h-[42px]  shrink-0"
        />
        <div className="flex flex-col ">
          <span className="font-bold text-[10px] leading-[15px] text-nt-2 ">
            Organize across
          </span>
          <p>Ui designer</p>
        </div>
      </div>
      <PrimaryButton className="mt-[95px]">More testimonials</PrimaryButton>
    </Section>
  );
};

export default TestimonialsSection;
