import React from "react";
import { Twitter, Facebook, Linkedin } from "../../../assets/images/contactUs";

const ContactLinks = () => {
  return (
    <div className="w-max mx-auto mb-[60px]  flex gap-6">
      <Twitter />
      <Facebook />
      <Linkedin />
    </div>
  );
};

export default ContactLinks;
