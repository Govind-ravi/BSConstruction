import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="xlmd:px-8">
      <hr className="h-[1.5px] bg-black mx-2 xs:mx-8 xlmd:mx-0 my-8 md:my-16" />
      <div className="flex gap-4 gap-y-8 flex-wrap justify-between mx-2 xxs:mx-4 md:mx-8 text-xs xs:text-sm md:text-base">
        <div className="w-full sm:w-1/4">
          <h1 className="text-xl sm:text-2xl">BS Construction</h1>
          <p>
            we believe in building more than just structures; we build
            relationships, foster innovation, and create spaces that inspire and
            endure.
          </p>
        </div>
        <div className="sm:w-20 md:w-24">
          <h4 className="text-lg md:text-xl mb-2 sm:mb-6">Company</h4>
          <p>About Us</p>
          <p>White Paper</p>
        </div>
        <div className="sm:w-20 md:w-24">
          <h4 className="text-lg md:text-xl mb-2 sm:mb-6">Services</h4>
          <p>A to Z civil Work. </p>
        </div>
        <div className="sm:w-20 md:w-24">
          <h4 className="text-lg md:text-xl mb-2 sm:mb-6">Policies</h4>
          <p>Terms Privacy</p>
        </div>
      </div>
      <hr className="h-[2px] bg-darkgray mx-2 xs:mx-8 my-4 sm:my-8" />
      <div className="mx-12 mb-8 flex flex-col gap-4 items-center sm:flow-row justify-between">
        <p>All rights reserved © Botnomics {new Date().getFullYear()}</p>
        <div className="flex gap-6">
          <div className="p-1 text-xl rounded-full border-[1px] border-black">
            <AiFillInstagram />
          </div>
          <div className="p-1 text-xl rounded-full border-[1px] border-black">
            <FaFacebookF />
          </div>
          <div className="p-1 text-xl rounded-full border-[1px] border-black">
            <FaLinkedinIn />
          </div>
          <div className="p-1 text-xl rounded-full border-[1px] border-black">
            <FaXTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
