import React from "react";
import Hero from "../assets/Hero.png";
import WhiteLogo from "../assets/WhiteLogo.png";
import Logo from "../assets/Logo.png";
import { HiOutlineStar } from "react-icons/hi2";
import Home1 from "../assets/Home1.png"
import Home2 from "../assets/Home2.png"
import Home3 from "../assets/Home3.png"
import Home4 from "../assets/Home4.png"
import Home5 from "../assets/Home5.png"
import Home6 from "../assets/Home6.png"
import Home7 from "../assets/Home7.png"
import Home8 from "../assets/Home8.png"
import Service1 from "../assets/Service1.png"
import Service2 from "../assets/Service2.png"
import Service3 from "../assets/Service3.png"

function Homepage() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center text-center md:text-start">
        <div className="w-[95%] sm:w-[80%] md:w-1/2 xs:p-4 xlmd:p-6 xl:p-10 flex flex-col justify-center">
          <h3 className="text-sm xs:text-base xlmd:text-xl xl:text-2xl">
            WELCOME TO BS CONSTRUCTION :
          </h3>
          <h1 className="text-2xl xxs:text-3xl xs:text-4xl md:text-3xl xlmd:text-4xl xl:text-5xl">
            BUILDING DREAMS,
            <br /> CREATING LEGACIES.
          </h1>
          <hr className="h-[1px] xxs:h-[2px] my-4 bg-black w-[80%] mx-auto md:mx-0 xl:w-[95%]" />
          <div className="flex flex-col xs:flex-row md:flex-col xlmd:flex-row gap-4 xlmd:gap-0 items-center md:items-start xlmd:items-center">
            <div className="flex">
              <div className="bg-darkgray p-2 h-20 xxs:h-24 xlmd:h-20 w-20 xxs:w-24 xlmd:w-20 xl:h-24 xl:w-24 rounded-full flex items-center justify-center">
                <img src={WhiteLogo} alt="" />
              </div>
              <div className="bg-[#DFF3C1] p-2 h-20 xxs:h-24 xlmd:h-20 w-20 xxs:w-24 xlmd:w-20 xl:h-24 xl:w-24 rounded-full flex items-center justify-center transform -translate-x-6">
                <HiOutlineStar className="text-7xl text-darkgray" />
              </div>
            </div>
            <div className="px-4 md:px-0 xlmd:px-3 xl:px-4 space-y-2 text-sm sm:text-base text-center xs:text-start xs:border-l-2 md:border-none xlmd:border-l-[1px] border-black">
              <p>
                we believe in building more than just structures; we build
                relationships, foster innovation, and create spaces that inspire
                and endure.
              </p>
              <button className="bg-black text-white text-xs sm:text-base px-2 sm:px-4 py-1 rounded-3xl">
                Start Your Dream Project
              </button>
            </div>
          </div>
          <div className="my-4 flex items-center justify-between w-[90%] mx-auto sm:mx-0 md:w-[90%] xlmd:w-[80%] lg:w-2/3">
            <div>
              <p className="text-2xl sm:text-3xl">58+</p>
              <p className="text-sm sm:text-base">Projects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl">22+</p>
              <p className="text-sm sm:text-base">Tie Ups</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl">5+ years</p>
              <p className="text-sm sm:text-base">Experience</p>
            </div>
          </div>
        </div>
        <div className="md:absolute top-0 right-0 w-[95%] sm:w-[80%] md:w-1/2 h-[300px] xxs:h-[400px] md:h-[550px] xl:h-[600px] -z-10 flex items-center justify-center">
          <img
            src={Hero}
            alt=""
            className="w-full h-full object-cover rounded-lg md:rounded-none"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 xs:mt-24 xs:mx-8 gap-4">
        <div className="w-1/4 hidden xlmd:grid grid-cols-2 gap-6 xl:gap-8">
          <img src={Home1} alt="" className="rounded-[100px] w-32 h-52" />
          <img src={Home2} alt="" className="rounded-[100px] w-32 h-52" />
          <img src={Home3} alt="" className="rounded-[100px] w-32 h-52" />
          <img src={Home4} alt="" className="rounded-[100px] w-32 h-52" />
        </div>
        <div className="w-[95%] sm:w-[80%] md:w-1/2 flex flex-col items-center text-center gap-4">
          <div className="mb-4">
            <img src={Logo} alt="" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-xl xs:text-2xl xl:text-3xl">
            At BS Construction, we believe in building more than just
            structures; we build relationships, foster innovation, and create
            spaces that inspire and endure.{" "}
          </h1>
          <p className="text-sm xxs:text-base">
            A commitment to quality, integrity, and sustainability, we are
            redefining the art of construction and shaping a future where every
            structure tells a story of inspiration, imagination, and ingenuity.
          </p>
        </div>
        <div className="w-1/4 hidden xlmd:grid grid-cols-2 gap-6 xl:gap-8">
          <img src={Home5} alt="" className="rounded-[100px] w-32 h-52" />
          <img src={Home6} alt="" className="rounded-[100px] w-32 h-52" />
          <img src={Home7} alt="" className="rounded-[100px] w-32 h-52" />
          <img src={Home8} alt="" className="rounded-[100px] w-32 h-52" />
        </div>
      </div>
      <hr className="h-[2px] bg-black my-8 md:my-12 xl:my-16 mx-2 xxs:mx-8" />
      <div className="mx-2 xs:mx-6 sm:mx-12 xlmd:mx-24 mb-12 xlmd:mb-24  text-center md:text-start">
        <div className="space-y-4 md:w-[70%] mx-auto md:mx-0">
          <h1 className="text-3xl xlmd:text-4xl">
            Our Services @ BS Construction
          </h1>
          <h1 className="text-lg md:text-xl">
            BS Construction offers comprehensive material and labor procurement
            services, ensuring seamless access to high-quality resources for
            construction projects of any scale.
          </h1>
          <p className="text-sm md:text-base">
            Our extensive network of trusted suppliers enables us to source
            construction materials such as cement, steel, bricks, and other
            essential components at competitive prices.
          </p>
        </div>
        <div className="grid w-2/3 xxs:w-1/2 mx-auto xs:w-full grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-8 xlmd:gap-16 my-8 xlmd:my-16 text-start">
          <div className="bg-goldTheme aspect-square">
            <img
              src={Service1}
              alt=""
              className="w-[85%] md:w-[75%] aspect-square object-cover"
            />
            <p className="md:text-xl xlmd:text-2xl p-2">
              Material & Labor <br /> Procurement.
            </p>
          </div>
          <div className="bg-greenTheme aspect-square">
            <img
              src={Service2}
              alt=""
              className="w-[85%] md:w-[75%] aspect-square object-cover"
            />
            <p className="md:text-xl xlmd:text-2xl p-2">
              Construction <br /> Services.
            </p>
          </div>
          <div className="bg-goldTheme aspect-square">
            <img
              src={Service3}
              alt=""
              className="w-[85%] md:w-[75%] aspect-square object-cover"
            />
            <p className="md:text-xl xlmd:text-2xl p-2">
              Financing <br /> Solutions.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1.5px] bg-black my-12 xl:my-16 mx-8" />
      <div className="mb-16 flex flex-col gap-8 items-center w-[95%] xs:w-[80%] md:w-[70%] mx-auto text-center">
        <h4 className="text-xl">
          <span className="text-5xl">“</span>Our <br /> Expertise
        </h4>
        <p className="relative md:text-xl pb-12">
          BS Construction offers a comprehensive suite of services designed to
          cater to the diverse needs of our clients. Whether it’s material and
          labor procurement, construction management, design-build solutions, or
          financing assistance, we have the expertise, experience, and resources
          to deliver results that surpass imagination.
          <div className="absolute w-24 h-12 rounded-full overflow-hidden bottom-0 left-0">
            <img src={Home1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute w-24 h-12 rounded-full overflow-hidden bottom-0 right-0">
            <img src={Home2} alt="" className="w-full h-full object-cover" />
          </div>
        </p>
        <p className="text-sm md:text-base">
          Our team of seasoned professionals brings together a wealth of
          knowledge, skills, and creativity, collaborating seamlessly to bring
          visions to life and transform concepts into reality. With a meticulous
          attention to detail, a commitment to excellence, and a penchant for
          innovation, we set new benchmarks of quality and craftsmanship with
          every project we undertake.
        </p>
      </div>
    </>
  );
}

export default Homepage;
