import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { TbMenu3 } from "react-icons/tb";
import { MdCalculate } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [isEstimate, setIsEstimate] = useState(false);
  return (
    <nav className="py-4 xlmd:py-6 pl-2 xxs:pl-4 px-4 xxs:px-8 sm:pl-8 xlmd:px-12 xl:px-16 flex justify-between items-center text-base xlmd:text-lg fixe top-0 w-full z-[100]">
      <div className="flex-grow md:flex-grow-0">
        <img
          src={Logo}
          alt="BS Construction"
          className="w-20  md:w-28 xlmd:w-36"
        />
      </div>
      <div className="flex gap-0 sm:gap-8 xlmd:gap-12 xl:gap-16 items-center">
        <p className="text-sm xs:text-base text-nowrap">+91 91083 01869</p>
        <div
          onClick={() => (setIsMenu((prev) => !prev), setIsEstimate(false))}
          className="relative xlmd:pl-6 py-1 pr-8 rounded-3xl h-9 xlmd:h-10 md:w-24 cursor-pointer"
        >
          <div
            className={`bg-grayTheme absolute md:px-4 xlmd:px-6 md:py-1 rounded-3xl top-[2px] w-0 md:w-full -right-2 xlmd:pr-20 transition-all duration-200 ${
              isMenu ? "h-[180px] w-full xxs:w-auto px-4" : "h-8 xlmd:h-9"
            } overflow-hidden`}
          >
            <p className="">Menu</p>
            <div className="mt-4 space-y-1 flex flex-col">
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
      <div
        onClick={() => (setIsEstimate((prev) => !prev), setIsMenu(false))}
        className="relative pl-6 py-1 pr-8 rounded-3xl h-10 md:w-[200px] xlmd:w-[250px] cursor-pointer"
      >
        <div
          className={`bg-grayTheme absolute xlmd:px-6 py-1 rounded-3xl top-[3px] -right-2 xlmd:pr-10 transition-all duration-200 ${
            isEstimate
              ? "h-[320px] w-[300px] px-4 md:px-4"
              : "h-8 xlmd:h-9 w-0 md:w-[220px] xlmd:w-[250px]"
          } overflow-hidden`}
        >
          <p className="">Estimate Your House</p>
          <div>
            <div className="mt-4 space-y-1 flex justify-between items-end gap-2 text-base">
              <div>
                <p>Site Dimensions:</p>
                <p>Plumber</p>
                <p>Electrician</p>
                <p>Cement</p>
                <p>Iron</p>
                <p>Bicks</p>
                <p>Architect</p>
              </div>
              <div>
                <p>1,00,000/-</p>
                <p>3,67,445/-</p>
                <p>1,00,000/-</p>
                <p>3,67,445/-</p>
                <p>1,00,000/-</p>
                <p>3,67,445/-</p>
                <p>1,00,000/-</p>
              </div>
            </div>
            <hr className="h-[1.5px] bg-black my-2" />
            <p>Total Cost: 32,00,000/-</p>
            <button className="px-4 py-1 rounded-3xl bg-goldTheme">
              Submit
            </button>
          </div>
        </div>
        <div className="bg-gray-700 w-10 h-10 rounded-full absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center text-2xl text-goldTheme">
          <MdCalculate />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
