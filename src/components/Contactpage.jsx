import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    lookingFor: "",
    contactInfo: "",
    acceptedTerms: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.lookingFor.trim()) {
      newErrors.lookingFor = "Please specify what you're looking for.";
    }

    const emailOrPhoneRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^\d{10,15}$/; // Simple email or phone validation
    if (
      !formData.contactInfo.trim() ||
      !emailOrPhoneRegex.test(formData.contactInfo.trim())
    ) {
      newErrors.contactInfo = "Provide a valid email or phone number.";
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = "You must accept the terms and conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setFormData({
        name: "",
        lookingFor: "",
        contactInfo: "",
        acceptedTerms: false,
      });
    } else {
      console.log(errors);
    }
  };

  return (
    <>
      <div className="px-4 md:px-6 lg:px-12 py-4 space-y-4 sm:space-y-8 w-[95%] sm:w-[90%] md:w-[80%] xlmd:w-[70%]">
        <h1 className="text-2xl xxs:text-3xl sm:text-4xl">
          Say Hi 👋 @{" "}
          <a
            href="mailto:hello@bsconstruction.com"
            target="_blank"
            rel="norefferer noopener"
            className="underline"
          >
            hello@bsconstruction.com
          </a>
        </h1>
        <p className="text-base">
          Ready to turn your vision into reality? Contact BS Construction today
          to discuss your project requirements and discover how we can help you
          build the future of your dreams. With our passion for innovation,
          dedication to quality, and commitment to excellence, we are your
          trusted partner in construction, building dreams and creating legacies
          that endure. Let’s build together.
        </p>
      </div>
      <div className="bg-goldTheme w-[95%] xlmd:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto xlmd:mx-12 p-4 sm:p-6 md:p-8 mt-2 sm:mt-6 md:mt-8 rounded sm:text-lg md:text-xl xlmd:text-2xl lg:text-3xl xl:text-4xl">
        <form onSubmit={handleSubmit} className="space-y-4 xlmd:space-y-8">
          <div>
            <div className="flex gap-1 xxs:gap-2 sm:gap-4 items-center">
              <h3>Hey, my name is </h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent outline-none text-sm sm:text-base md:text-lg xlmd:text-xl lg:text-2xl xl:text-3xl w-28 xxs:w-40 xs:w-auto md:w-72 border-b-2 border-black text-blue-800 font-semibold"
              />
              <h3>and</h3>
            </div>
            {errors.name && (
              <p className="text-red-600 text-sm sm:text-base">{errors.name}</p>
            )}
          </div>
          <div>
            <div className="flex gap-2 sm:gap-4 items-center">
              <h3>I'm looking for </h3>
              <input
                type="text"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="bg-transparent outline-none text-sm sm:text-base md:text-lg xlmd:text-xl lg:text-2xl xl:text-3xl w-36 xxs:w-40 xs:w-auto md:w-96 border-b-2 border-black text-blue-800 font-semibold"
              />
              <h3>,</h3>
            </div>
            {errors.lookingFor && (
              <p className="text-red-600 text-sm sm:text-base">
                {errors.lookingFor}
              </p>
            )}
          </div>
          <div>
            <div className="flex flex-col xs:flex-row xs:gap-4 xs:items-center">
              <h3>Get in touch with us at </h3>
              <input
                type="text"
                name="contactInfo"
                placeholder="(Phone Number or Email)"
                value={formData.contactInfo}
                onChange={handleChange}
                className="bg-transparent sm:placeholder:text-lg md:placeholder:text-xl outline-none  text-sm sm:text-base md:text-lg xlmd:text-xl lg:text-2xl xl:text-3xl w-2/3 xs:w-[40%] md:w-96 border-b-2 border-black text-blue-800 font-semibold"
              />
              <h3 className="hidden xs:block">.</h3>
            </div>
            {errors.contactInfo && (
              <p className="text-red-600 text-sm sm:text-base">
                {errors.contactInfo}
              </p>
            )}
          </div>
          <div>
            <div className="flex text-sm xxs:text-base sm:text-lg md:text-xl gap-4">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <p>I here by accept all terms and conditions.</p>
            </div>
            {errors.acceptedTerms && (
              <p className="text-red-600 text-sm sm:text-base">
                {errors.acceptedTerms}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-1 sm:py-2 px-4 bg-darkgray text-white rounded hover:bg-opacity-90 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="px-4 md:px-8 xlmd:px-12 mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 md:gap-8 xlmd:w-[90%]">
        <div className="space-y-2">
          <p className="underline xs:text-lg">Our Philosophy:</p>
          <p className="text-sm xs:text-base">
            At the heart of BS Construction lies a simple yet powerful
            philosophy: to build with purpose, integrity, and vision. We believe
            that every structure we create is a testament to our values, a
            reflection of our commitment to quality, and a legacy that endures
            through generations. From towering skyscrapers to quaint villas,
            from bustling commercial complexes to serene residential
            communities, each project is infused with our passion for excellence
            and dedication to exceeding expectations. We approach every endeavor
            with an unwavering focus on innovation, sustainability, and client
            satisfaction, striving to create spaces that inspire, uplift, and
            endure.
          </p>
        </div>
        <div className="space-y-2">
          <p className="underline xs:text-lg">Our Expertise:</p>
          <p className="text-sm xs:text-base">
            We offers a comprehensive suite of services designed to cater to the
            diverse needs of our clients. Whether it’s material and labor
            procurement, construction management, design-build solutions, or
            financing assistance, we have the expertise, experience, and
            resources to deliver results that surpass imagination. We seasoned
            professionals brings together a wealth of knowledge, collaborating
            seamlessly to bring visions to life and transform concepts into
            reality. With a meticulous attention to detail, a commitment to
            excellence, and a penchant for innovation, we set new benchmarks of
            craftsmanship with every project we undertake.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
