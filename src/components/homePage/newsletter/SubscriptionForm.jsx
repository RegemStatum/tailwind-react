import React, { useRef } from "react";
import { Input, PrimaryButton } from "../../ui";

const SubscriptionForm = () => {
  const emailInputRef = useRef(null);

  return (
    <form className="mt-[59px]  text-center">
      <h3 className="  my-[10px]">Subscribe to our Newsletter</h3>
      <p>Available exclusively on Figmaland</p>
      <Input
        type="email"
        placeholder="Your Email"
        ref={emailInputRef}
        className="mt-[39px]"
      />
      <PrimaryButton className="w-full mt-3">Subscribe</PrimaryButton>
    </form>
  );
};

export default SubscriptionForm;
