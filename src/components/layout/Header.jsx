import React from "react";
import logo from "../../assets/images/logo.png";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="relative z-10">
      <div className="container mx-auto h-28 flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          height={58}
          width={186}
          className="grow-0 h-[58px]"
        />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
