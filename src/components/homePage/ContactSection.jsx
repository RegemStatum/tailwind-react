import React from "react";
import { Section } from "../ui";
import { ContactLinks, ContactInfo, ContactForm } from "./contactUs";

const ContactSection = () => {
  return (
    <Section
      heading="Contact us"
      description="Most calendars are 
  designed for teams"
    >
      <ContactLinks />
      <ContactInfo />
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
