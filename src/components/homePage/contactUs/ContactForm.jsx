import React, { useRef } from "react";
import { Input, PrimaryButton } from "../../ui";

const ContactForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const msgInputRef = useRef();

  return (
    <div className="px-[49px] py-[52px]   border-[1px] border-[#DDDDDD] rounded-[20px] ">
      <h3 className="mb-[45px] font-bold text-center ">Contact Us</h3>
      <form className="flex  flex-col gap-[45px]">
        <Input type="text" placeholder="Your Name" ref={nameInputRef} />
        <Input type="email" placeholder="Your Email" ref={emailInputRef} />
        <div className="px-[20px] py-[23px] bg-[#F5F5F5] border-[1px] border-[#E8E8E8] ">
          <textarea
            placeholder="Your Message"
            ref={msgInputRef}
            resize="vertical"
            className="w-full min-h-[100px] max-h-[300px] bg-[#F5F5F5] placeholder-inherit"
          />
        </div>

        <PrimaryButton className="w-full mt-[25px]">Send</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
