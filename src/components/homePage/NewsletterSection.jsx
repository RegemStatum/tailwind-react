import React from "react";
import Section from "../ui/Section";
import Newsletter from "../../assets/images/newsletter/Newsletter";
import SubscriptionForm from "./newsletter/SubscriptionForm";

const NewsletterSection = () => {
  return (
    <Section
      heading="Newsletter"
      description="Most calendars are designed for teams. 
    Slate is designed for freelancers"
    >
      <div className="w-max mx-auto">
        <Newsletter />
      </div>
      <SubscriptionForm />
    </Section>
  );
};

export default NewsletterSection;
