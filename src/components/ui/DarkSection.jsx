import React from "react";
import DarkSectionHeading from "./DarkSectionHeading";

const Section = ({ children, heading, description }) => {
  return (
    <section className="container mx-auto py-20 bg-bg-1 ">
      <DarkSectionHeading heading={heading} description={description} />
      {children}
    </section>
  );
};

export default Section;
