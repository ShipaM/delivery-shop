import React from "react";
import HeaderUser from "./HeaderUser";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-white w-full md:shadow-(--shadow-default) relative z-10 flex flex-col md:flex-row md:gap-y-5 xl:gap-y-7 md:gap-10 md:p-2 justify-center">
      <div className="flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center shadow-(--shadow-default) md:shadow-none">
        <Logo />
        <Search />
      </div>
      <HeaderUser />
    </header>
  );
};

export default Header;
