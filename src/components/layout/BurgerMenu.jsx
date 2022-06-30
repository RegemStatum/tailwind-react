import React from "react";

const BurgerMenu = () => {
  return (
    <div className="w-[27px] flex flex-col gap-[5px]  items-end cursor-pointer">
      <div className="w-[27px] h-[2px] bg-white"></div>
      <div className="w-[21px] h-[2px] bg-white"></div>
      <div className="w-[13px] h-[2px] bg-white"></div>
    </div>
  );
};

export default BurgerMenu;
