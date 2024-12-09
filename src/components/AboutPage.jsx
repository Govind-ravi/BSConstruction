import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.png";
import WhiteLogo from "../assets/WhiteLogo.png";
import { HiOutlineStar } from "react-icons/hi2";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import About4 from "../assets/About4.png";
import About5 from "../assets/About5.png";
import About6 from "../assets/About6.png";
import About7 from "../assets/About7.png";
import About8 from "../assets/About8.png";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";
import servicesData from "../servicesData";

function AboutPage() {
  return (
    <>
      <div className="p-2 sm:p-6 md:p-8 flex flex-col items-center w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%] mx-auto text-center gap-4 sm:gap-8">
        <h4 className="xs:text-lg sm:text-xl md:text-2xl">
          <span className="text-4xl sm:text-5xl">“</span>Our <br /> Commitment
        </h4>
        <p className="xs:text-lg sm:text-xl md:text-2xl">
          At BS Construction, our commitment goes beyond bricks and mortar; it
          is a promise to deliver excellence, integrity, and value in everything
          we do. We are driven by a passion for innovation, a dedication to
          quality, and a vision to shape a future where every structure we build
          stands as a testament to our values and a legacy of excellence.
        </p>
        <p className="text-sm sm:text-base">
          With a relentless pursuit of perfection, a culture of collaboration,
          and a spirit of innovation, we strive to exceed expectations, inspire
          communities, and leave a lasting impact on the world around us.
        </p>
        <div className="h-12 md:h-16 rounded-3xl overflow-hidden w-full">
          <img src={About1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <hr className="h-[1.5px] sm:h-[2px] bg-black my-8 md:my-16 mx-2 sm:mx-8" />
      <div className="mx-4 sm:mx-8 md:mx-12 xlmd:mx-16 lg:mx-20 xl:mx-24 ">
        <div className="space-y-4 w-[95%] sm:w-[90%] md:w-[80%] xlmd:w-[70%]">
          <h1 className="text-2xl xxs:text-3xl sm:text-4xl">Our Services @ BS Construction</h1>
          <h1 className="sm:text-xl">
            BS Construction offers comprehensive material and labor procurement
            services, ensuring seamless access to high-quality resources for
            construction projects of any scale.
          </h1>
          <p className="text-sm sm:text-base">
            Our extensive network of trusted suppliers enables us to source
            construction materials such as cement, steel, bricks, and other
            essential components at competitive prices.
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-12 xlmd:gap-16 lg:gap-20 xl:gap-24 my-8 sm:my-12 md:my-16">
          {servicesData.map((service, i) => (
            <Link
              to={`/services/${service.id}`}
              key={i}
              className={`${
                i % 2 === 0 ? "bg-goldTheme" : "bg-greenTheme"
              } aspect-square`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-[75%] aspect-square object-cover rounded-br-lg"
              />
              <p className="text-base sm:text-xl lg:text-2xl p-1 sm:p-2">
                {service.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <hr className="h-[1.5px] sm:h-[2px] bg-black my-8 md:my-16 mx-2 sm:mx-8" />
      <div className="flex flex-col sm:flex-row gap-8 xlmd:gap-16 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto items-center">
        <div className="flex flex-col gap-2 xlmd:gap-10 sm:w-1/2 md:text-xl">
          <h1 className="text-2xl xxs:text-3xl sm:text-4xl">About Us</h1>
          <p>
            At BS Construction, we believe in building more than just
            structures; we build relationships, foster innovation, and create
            spaces that inspire and endure.
          </p>
          <p>
            With a team of seasoned professionals, cutting-edge technology, and
            a commitment to quality, integrity, and sustainability, we are
            redefining the art of construction and shaping a future where every
            structure tells a story of inspiration, imagination, and ingenuity.
          </p>
        </div>
        <div className="xxs:w-2/3 xs:w-1/2 xlmd:w-1/3">
          <img src={About2} alt="" className=" rounded-3xl" />
        </div>
      </div>
      <hr className="h-[1.5px] sm:h-[2px] bg-black my-8 md:my-16 mx-2 sm:mx-8" />
      <div className="flex flex-col gap-4 xlmd:gap-8 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="flex gap-2 sm:gap-4 xl:gap-8 flex-grow">
          <div className="bg-grayTheme rounded-xl p-4 text-center flex flex-col justify-evenly">
            <p className="text-lg">Our Values</p>
            <p className="xs:text-lg sm:text-xl xlmd:text-2xl">
              We conduct our business with honesty, transparency, & ethical
              Integrity, earning the trust and respect of our clients, partners,
              & stakeholders.
            </p>
          </div>
          <div className="w-1/3 hidden md:block rounded-xl overflow-hidden">
            <img src={About3} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:text-lg sm:text-xl xlmd:text-2xl">
          <div className="relative p-2 md:p-4 lg:p-6 xlmd:p-8 bg-goldTheme rounded-lg">
            <p>Quality Craftsmanship</p>
            <div className="absolute w-8 h-8 hidden sm:block border-8 border-greenTheme rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-2"></div>
          </div>
          <div className="relative p-2 md:p-4 lg:p-6 xlmd:p-8 bg-greenTheme rounded-lg">
            <p>Innovative Solutions</p>
            <div className="absolute w-8 h-8 hidden sm:block border-8 border-blueTheme rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-2"></div>
          </div>
          <div className="relative p-2 md:p-4 lg:p-6 xlmd:p-8 bg-blueTheme rounded-lg">
            <p>Comprehensive Services</p>
            <div className="absolute w-8 h-8 hidden sm:block border-8 border-grayTheme rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-2"></div>
          </div>
          <div className="p-2 md:p-4 lg:p-6 xlmd:p-8 bg-grayTheme rounded-lg">
            <p>Sustainability & Integrity</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-between gap-2 items-center">
          <div className="h-[200px] w-[70%] hidden md:block">
            <img
              src={About4}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex ">
            <div className="bg-darkgray p-2 h-32 w-32 rounded-full flex items-center justify-center">
              <img src={WhiteLogo} alt="" />
            </div>
            <div className="bg-[#DFF3C1] p-2 h-32 w-32 rounded-full flex items-center justify-center transform -translate-x-6">
              <HiOutlineStar className="text-7xl text-darkgray" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 xl:gap-8 flex-grow">
          <div className="w-1/3 hidden md:block rounded-xl overflow-hidden">
            <img src={About5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-grayTheme rounded-xl p-4 text-center flex flex-col justify-evenly">
            <p className="text-lg">Our Values</p>
            <p className="xs:text-lg sm:text-xl xlmd:text-2xl">
              Our vision at BS Construction is to be recognised as a global
              leader in the construction industry, renowned for our innovation,
              excellence, and commitment to sustainability.
            </p>
          </div>
        </div>
        <div className="grid xs:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-xl">
          <div className="space-y-2">
            <img
              src={About6}
              alt=""
              className="h-[50px] w-full rounded-lg object-cover"
            />
            <p>
              Shape the Future: We aim to shape a future where every structure
              we build inspires, uplifts, and enriches the lives of people,
              contributing to the advancement of society and the well-being of
              future generations.
            </p>
          </div>
          <div className="space-y-2">
            <img
              src={About7}
              alt=""
              className="h-[50px] w-full rounded-lg object-cover"
            />
            <p>
              Empower Success: We are dedicated to empowering the success of our
              clients, partners, and stakeholders by providing them with
              innovative solutions, exceptional service, and unparalleled value,
              driving mutual growth and prosperity.
            </p>
          </div>
          <div className="space-y-2">
            <img
              src={About8}
              alt=""
              className="h-[50px] w-full rounded-lg object-cover"
            />
            <p>
              Continual Growth: We are committed to continual growth and
              evolution, embracing change, embracing challenges, and seizing
              opportunities to expand our horizons, enhance our capabilities,
              and achieve greater heights of success and impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
