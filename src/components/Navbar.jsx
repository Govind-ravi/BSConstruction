import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { TbMenu3 } from "react-icons/tb";
import { MdCalculate } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="py-4 xlmd:py-6 pl-2 xxs:pl-4 px-4 xxs:px-8 sm:pl-8 xlmd:px-12 xl:px-16 flex gap-12 justify-between items-center text-base xlmd:text-lg fixe top-0 w-full z-[100]">
      <div className="flex-grow md:flex-grow-0">
        <img
          src={Logo}
          alt="BS Construction"
          className="w-20  md:w-28 xlmd:w-36 min-w-[60px]"
        />
      </div>
      <div className="flex gap-8 sm:gap-8 xlmd:gap-12 xl:gap-16 items-center">
        <p className="text-sm xs:text-base text-nowrap">+91 91083 01869</p>
        <div
          onClick={() => setIsMenu((prev) => !prev)}
          className={`relative ${
            isMenu ? "xlmd:pl-6 py-1 pr-8" : "px-0"
          }  rounded-3xl h-9 xlmd:h-10 md:w-24 cursor-pointer`}
        >
          <div
            className={`bg-grayTheme absolute md:px-4 xlmd:px-6 md:py-1 rounded-3xl top-[2px]  -right-2 xlmd:pr-20 transition-all duration-200 ${
              isMenu ? "h-[180px] w-auto px-4" : "h-8 w-0 md:w-full xlmd:h-9"
            } overflow-hidden`}
          >
            <p className="">Menu</p>
            <div className="mt-4 space-y-1 flex flex-col text-center">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="bg-gray-700 w-10 h-10 rounded-full absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center text-2xl text-goldTheme">
            <TbMenu3 />
          </div>
        </div>
      </div>
      <NavLink
        to="/estimate-your-project"
        className={`relative rounded-3xl bg-grayTheme md:pl-4 md:pr-8 md:py-1 cursor-pointer`}
      >
        <p className="hidden md:block">Estimate Your House</p>
        <div className="bg-gray-700 w-10 h-10 rounded-full absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center text-2xl text-goldTheme">
          <MdCalculate />
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
