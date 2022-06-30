import React from "react";
import { PrimaryButton } from "../ui";
import Section from "../ui/Section";
import laptop from "../../assets/images/organize/laptop.png";

const OrganizeSection = () => {
  return (
    <Section
      heading="Fastest way to 
  organize"
      description="Most calendars are 
  designed for teams"
    >
      <PrimaryButton>Try for free</PrimaryButton>
      <img src={laptop} alt="laptop" className="mt-[60px] mx-auto" />
    </Section>
  );
};

export default OrganizeSection;
