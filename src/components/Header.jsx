import React, { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoMdSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup:"New",
    },
    {
      icon: "",
      name: "Help",
    },
    {
      icon: "",
      name: "Sign In",
    },
    {
      icon: "",
      name: "Cart",
    }
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:999999
        }}
      >
        {" "}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[600ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="sticky top-0 z-[9999] bg-white p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="s-logo.png" className="w-full" alt="" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanda  
            </span>{" "}
            Surat, Gujrat, India{" "}
            <FaCaretDown
              fontSize={25}
              className="font-bold inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="hidden md:flex list-none gap-5 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return <li key={index} className="flex items-center gap-2">
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>;
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
