import React from "react";
import {
  ContactSection,
  Hero,
  PartnersSection,
  PricingSection,
  TestimonialsSection,
} from "../components/homePage";
import { FeaturesSection, OrganizeSection } from "../components/homePage";
import NewsletterSection from "../components/homePage/NewsletterSection";

const CurrentEventPage = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <OrganizeSection />
      <NewsletterSection />
      <PartnersSection />
      <TestimonialsSection />
      <div className="bg-bg-1">
        <PricingSection />
      </div>
      <ContactSection />
    </div>
  );
};

export default CurrentEventPage;
