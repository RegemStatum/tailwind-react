import React from "react";
import heroBg from "../../assets/images/hero.webp";
import heroMobBg from "../../assets/images/heroMob.webp";
import { PrimaryButton } from "../ui";

const Hero = () => {
  return (
    <div className="relative w-full -mt-28 z-0 overflow-hidden">
      {/* hero bg image */}
      <picture className="bg-clip-content">
        <source media="(min-width: 418px)" srcSet={heroBg} />
        <img
          src={heroMobBg}
          alt="hero-background"
          className="object-cover min-w-[417px] min-h-[847px] mx-auto xs:min-w-[1050px] xs:min-h-[550px]"
        />
      </picture>
      {/* hero info */}
      <div className="absolute w-[100%] top-[410px] left-1/2 -translate-y-1/2 -translate-x-1/2 xs:top-[300px] lg:top-[350px] xl:top-[450px]">
        <h2 className="text-center text-nt-3 drop-shadow-sm">
          The best products start with Figma
        </h2>
        <h4 className="w-[80%] mx-auto mt-7 text-nt-3 text-center drop-shadow-sm">
          Most calendars are designed for teams
        </h4>
        <PrimaryButton>Try for free</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
