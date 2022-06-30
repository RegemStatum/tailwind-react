import React from "react";
import { PrimaryButton, Section } from "../ui";
import PartnersGrid from "./partners/PartnersGrid";

const PartnersSection = () => {
  return (
    <Section heading="Partners" description="Slate is designed for freelancers">
      <PartnersGrid />
      <PrimaryButton>Try for free</PrimaryButton>
    </Section>
  );
};

export default PartnersSection;
