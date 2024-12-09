import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home1 from "../assets/portfolio/Home1.png";
import Home2 from "../assets/portfolio/Home2.png";
import Home3 from "../assets/portfolio/Home3.png";
import Home4 from "../assets/portfolio/Home4.png";
import Home5 from "../assets/portfolio/Home5.png";
import Home6 from "../assets/portfolio/Home6.png";
import Home7 from "../assets/portfolio/Home7.png";
import Home8 from "../assets/portfolio/Home8.png";
import Home9 from "../assets/portfolio/Home9.png";
import Home10 from "../assets/portfolio/Home10.png";

import servicesData from "../servicesData";

const images = [
  Home1,
  Home2,
  Home3,
  Home4,
  Home5,
  Home6,
  Home7,
  Home8,
  Home9,
  Home10,
];

function Servicespage() {
  const [isViewMore, setIsViewMore] = useState(false);
  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-12 xlmd:mx-16 lg:mx-20 xl:mx-24 ">
        <div className="space-y-2 sm:space-y-4 w-[95%] sm:w-[90%] md:w-[80%] xlmd:w-[70%] text-center xs:text-start">
          <h1 className="text-2xl xxs:text-3xl sm:text-4xl">
            Our Services @ BS Construction
          </h1>
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
        <div className="grid xxs:w-[80%] mx-auto xs:w-full grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-12 xlmd:gap-16 lg:gap-20 xl:gap-24 my-8 sm:my-12 md:my-16">
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
              <p className="text-lg xs:text-base sm:text-xl lg:text-2xl p-1 sm:p-2">
                {service.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[80%] xlmd:w-[70%] mx-auto flex flex-col gap-4 sm:gap-6 items-center text-center">
        <h2 className="text-2xl xxs:text-3xl sm:text-4xl">Our Portfolio</h2>
        <p>
          Explore our portfolio to witness the breadth and depth of our
          expertise, from iconic landmarks to innovative infrastructure
          projects. Each project showcases our commitment to excellence,
          innovation, and client satisfaction, serving as a testament to our
          values and a legacy of quality craftsmanship.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {images.map(
            (item, i) =>
              (i < 5 || isViewMore) && (
                <div key={i} className="h-[300px] w-full overflow-hidden">
                  <img
                    src={item}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )
          )}
          {!isViewMore && (
            <div className="h-[300px] w-full bg-goldTheme flex items-center justify-center">
              <p
                onClick={() => setIsViewMore(true)}
                className="text-lg hover:underline cursor-pointer"
              >
                View More+
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Servicespage;
