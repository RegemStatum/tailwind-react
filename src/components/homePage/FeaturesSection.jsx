import React from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Features from "./features/Features";
import FeaturesVideo from "./features/FeaturesVideo";

const FeaturesSection = () => {
  return (
    <Section
      heading="Features"
      description="Most calendars are 
designed for teams"
    >
      <FeaturesVideo />
      <Features />
    </Section>
  );
};

export default FeaturesSection;
