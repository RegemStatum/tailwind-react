import React from "react";
import SectionHeading from "./SectionHeading";

const Section = ({ children, heading, description }) => {
  return (
    <section className="container mx-auto py-20">
      <SectionHeading heading={heading} description={description} />
      {children}
    </section>
  );
};

export default Section;
