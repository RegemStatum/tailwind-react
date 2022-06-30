import React from "react";

const Input = React.forwardRef(({ type, placeholder, className = "" }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={`w-full py-[19px] pl-[35px] bg-[#F4F4F4] rounded-[39px] placeholder-[#18171D] ${className}`}
    />
  );
});

export default Input;
