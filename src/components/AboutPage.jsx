import React from "react";
import Hero from "../assets/Hero.png";
import WhiteLogo from "../assets/WhiteLogo.png";
import { HiOutlineStar } from "react-icons/hi2";
import About1 from "../assets/About1.png"
import About2 from "../assets/About2.png"
import About3 from "../assets/About3.png"
import About4 from "../assets/About4.png"
import About5 from "../assets/About5.png"
import About6 from "../assets/About6.png"
import About7 from "../assets/About7.png"
import About8 from "../assets/About8.png"
import Service1 from "../assets/Service1.png"
import Service2 from "../assets/Service2.png"
import Service3 from "../assets/Service3.png"

function AboutPage() {
  return (
    <>
      <div className="p-8 flex flex-col items-center w-[60%] mx-auto text-center gap-8">
        <h4 className="text-2xl">
          <span className="text-5xl">“</span>Our <br /> Commitment
        </h4>
        <p className="text-2xl">
          At BS Construction, our commitment goes beyond bricks and mortar; it
          is a promise to deliver excellence, integrity, and value in everything
          we do. We are driven by a passion for innovation, a dedication to
          quality, and a vision to shape a future where every structure we build
          stands as a testament to our values and a legacy of excellence.
        </p>
        <p className="">
          With a relentless pursuit of perfection, a culture of collaboration,
          and a spirit of innovation, we strive to exceed expectations, inspire
          communities, and leave a lasting impact on the world around us.
        </p>
        <div className="h-16 rounded-3xl overflow-hidden w-full">
          <img src={About1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <hr className="h-[1.5px] bg-black my-16 mx-8" />
      <div className=" mx-24 mb-24">
        <div className="space-y-4 w-[70%]">
          <h1 className="text-4xl">Our Services @ BS Construction</h1>
          <h1 className="text-xl">
            BS Construction offers comprehensive material and labor procurement
            services, ensuring seamless access to high-quality resources for
            construction projects of any scale.
          </h1>
          <p>
            Our extensive network of trusted suppliers enables us to source
            construction materials such as cement, steel, bricks, and other
            essential components at competitive prices.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16 my-16">
          <div className="bg-goldTheme aspect-square">
            <img
              src={Service1}
              alt=""
              className="w-[75%] aspect-square object-cover"
            />
            <p className="text-2xl p-2">
              Material & Labor <br /> Procurement.
            </p>
          </div>
          <div className="bg-greenTheme aspect-square">
            <img
              src={Service2}
              alt=""
              className="w-[75%] aspect-square object-cover"
            />
            <p className="text-2xl p-2">
              Construction <br /> Services.
            </p>
          </div>
          <div className="bg-goldTheme aspect-square">
            <img
              src={Service3}
              alt=""
              className="w-[75%] aspect-square object-cover"
            />
            <p className="text-2xl p-2">
              Financing <br /> Solutions.
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[1.5px] bg-black my-16 mx-8" />
      <div className="flex gap-16 w-[70%] mx-auto items-center">
        <div className="flex flex-col gap-10 w-1/2 text-xl">
          <h1 className="text-4xl">About Us</h1>
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
        <div className="w-1/3">
          <img src={About2} alt="" className=" rounded-3xl" />
        </div>
      </div>
      <hr className="h-[1.5px] bg-black my-16 mx-8" />
      <div className="flex flex-col gap-8 w-[70%] mx-auto">
        <div className="flex gap-8 flex-grow">
          <div className="bg-grayTheme rounded-xl p-4 text-center flex flex-col justify-evenly">
            <p className="text-lg">Our Values</p>
            <p className="text-2xl">
              We conduct our business with honesty, transparency, & ethical
              Integrity, earning the trust and respect of our clients, partners,
              & stakeholders.
            </p>
          </div>
          <div className="w-1/3 rounded-xl overflow-hidden">
            <img src={About3} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 text-2xl">
          <div className="relative p-8 bg-goldTheme rounded-lg">
            <p>Quality Craftsmanship</p>
            <div className="absolute w-8 h-8 border-8 border-greenTheme rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-2"></div>
          </div>
          <div className="relative p-8 bg-greenTheme rounded-lg">
            <p>Innovative Solutions</p>
            <div className="absolute w-8 h-8 border-8 border-blueTheme rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-2"></div>
          </div>
          <div className="relative p-8 bg-blueTheme rounded-lg">
            <p>Comprehensive Services</p>
            <div className="absolute w-8 h-8 border-8 border-grayTheme rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-2"></div>
          </div>
          <div className="p-8 bg-grayTheme rounded-lg">
            <p>Sustainability & Integrity</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-[200px] w-[70%]">
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
        <div className="flex gap-8 flex-grow">
          <div className="w-[40%] rounded-xl overflow-hidden">
            <img src={About5} alt="" />
          </div>
          <div className="bg-grayTheme rounded-xl p-4 text-center flex flex-col justify-evenly">
            <p className="text-lg">Our Values</p>
            <p className="text-2xl">
              Our vision at BS Construction is to be recognised as a global
              leader in the construction industry, renowned for our innovation,
              excellence, and commitment to sustainability.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 text-xl">
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
