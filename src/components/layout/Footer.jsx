import React from "react";
import { DarkSection } from "../ui";
import FooterContactInfo from "./FooterContactInfo";
import FooterContactLinks from "./FooterContactLinks";
import FooterPeopleLinks from "./FooterPeopleLinks";

const mockPeople = {
  main: "Annette Steward",
  otherPeople: [
    "Jennie Cooper",
    "Julie Henry",
    "Johnny Murphy",
    "Gregory Mccoy",
    "Marvin Mckinney",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-bg-1">
      <DarkSection>
        <div className="mb-[76px]  flex flex-col gap-[73px] lg:flex-row lg:justify-center">
          <FooterPeopleLinks {...mockPeople} />
          <FooterPeopleLinks {...mockPeople} />
          <FooterPeopleLinks {...mockPeople} />
        </div>
        <div className="max-w-[284px] mx-auto">
          <FooterContactInfo />
          <FooterContactLinks />
        </div>
      </DarkSection>
    </footer>
  );
};

export default Footer;
