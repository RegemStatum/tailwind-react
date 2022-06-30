import React from "react";
import { DarkSection } from "../../components/ui";
import PricingCard from "./pricing/PricingCard";
import BluePricingCard from "./pricing/BluePricingCard";

const PricingSection = () => {
  return (
    <DarkSection
      heading="Pricing"
      description="Most calendars are 
  designed for teams"
    >
      <div className="flex flex-col gap-[50px]">
        <PricingCard
          name="free"
          description="Organize across all
 apps by hand"
          price="0"
          features={[
            "pricing feature1",
            "pricing feature2",
            "pricing feature3",
          ]}
          link=""
        />
        <BluePricingCard
          name="standard"
          description="Organize across all
 apps by hand"
          price="10"
          features={[
            "pricing feature1",
            "pricing feature2",
            "pricing feature3",
          ]}
          link=""
        />
        <PricingCard
          name="business"
          description="Organize across all
 apps by hand"
          price="99"
          features={[
            "pricing feature1",
            "pricing feature2",
            "pricing feature3",
          ]}
          link=""
        />
      </div>
    </DarkSection>
  );
};

export default PricingSection;
