import React from "react";
import Hero from "../assets/Hero.png";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";
import Home1 from "../assets/Home1.png";
import Home2 from "../assets/Home2.png";
import Home3 from "../assets/Home3.png";
import Home4 from "../assets/Home4.png";
import Home5 from "../assets/Home5.png";
import Home6 from "../assets/Home6.png";
import Home7 from "../assets/Home7.png";
import Home8 from "../assets/Home8.png";

const images = [
  Home1,
  Home2,
  Home3,
  Home4,
  Home5,
  Home6,
  Home7,
  Home8,
  Home1,
  Home2,
  Home3,
];

function Servicespage() {
  return (
    <>
      <div className=" mx-24 mt-4 mb-24">
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
        <div className="grid grid-cols-3 gap-24 my-16">
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
          <div className="bg-goldTheme aspect-square">
            <img
              src={Service2}
              alt=""
              className="w-[75%] aspect-square object-cover"
            />
            <p className="text-2xl p-2">
              AMC <br /> Services..
            </p>
          </div>
          <div className="bg-greenTheme aspect-square">
            <img
              src={Service1}
              alt=""
              className="w-[75%] aspect-square object-cover"
            />
            <p className="text-2xl p-2">
              Architectural <br />
              Services.
            </p>
          </div>
          <div className="bg-goldTheme aspect-square">
            <img
              src={Service2}
              alt=""
              className="w-[75%] aspect-square object-cover"
            />
            <p className="text-2xl p-2">
              Legal <br /> Services.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto flex flex-col gap-6 items-center text-center">
        <h2 className="text-4xl">Our Portfolio</h2>
        <p>
          Explore our portfolio to witness the breadth and depth of our
          expertise, from iconic landmarks to innovative infrastructure
          projects. Each project showcases our commitment to excellence,
          innovation, and client satisfaction, serving as a testament to our
          values and a legacy of quality craftsmanship.
        </p>
        <div className="grid grid-cols-3 gap-8">
          {Array(11)
            .fill(null)
            .map((item, i) => (
              <div key={i} className="h-[300px] w-full overflow-hidden">
                <img src={images[i]} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          <div className="h-[300px] w-full bg-goldTheme flex items-center justify-center">
            <p className="text-lg hover:underline cursor-pointer">View More+</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicespage;
