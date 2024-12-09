import React, { useState } from "react";
import { useParams } from "react-router-dom";
import services from "../servicesData";

function Servicepage() {
  const { id } = useParams();
  const service = services.find((service) => service.id === id);

  // Form state
  const [formData, setFormData] = useState({
    query: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    query: "",
    phone: "",
  });

  const validateForm = () => {
    let isValid = true;
    let queryError = "";
    let phoneError = "";

    if (!formData.query.trim()) {
      queryError = "Please enter what you are looking for.";
      isValid = false;
    }

    const phoneRegex = /^[0-9]\d{9}$/;
    if (!formData.phone.trim()) {
      phoneError = "Please enter your phone number.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      phoneError = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    setErrors({ query: queryError, phone: phoneError });
    console.log(isValid, queryError, phoneError);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      console.log("Form submitted successfully:", formData);
      // Clear the form
      setFormData({ query: "", phone: "" });
      setErrors({ query: "", phone: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-12 xlmd:mx-16 lg:mx-20 xl:mx-24 mt-4">
        <div className="space-y-4 w-[95%] sm:w-[90%] md:w-[80%] xlmd:w-[70%]  text-center xs:text-start">
          <h1 className="text-2xl xxs:text-3xl sm:text-4xl">
            Our Services @ <br /> {service.name}
          </h1>
          <p>{service.desc}</p>
        </div>
        <div className="h-[400px] bg-goldTheme pr-8 pb-8 my-6 sm:my-12">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover rounded-br-lg"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <p>{service.info1 && service.info1}</p>
          <p>{service.info2 && service.info2}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <p className="flex gap-4 flex-col justify-between sm:w-1/2">
            {service.infos &&
              service.infos.map(
                (info, i) =>
                  i < 3 && (
                    <p key={i}>
                      <span className="font-semibold">{info.headline}</span>
                      <span className="">{info.info}</span>
                    </p>
                  )
              )}
          </p>
          <p className="flex flex-col gap-4 sm:w-1/2">
            {service.infos &&
              service.infos.map(
                (info, i) =>
                  i > 2 && (
                    <p key={i}>
                      <span className="font-semibold">{info.headline}</span>
                      <span className="">{info.info}</span>
                    </p>
                  )
              )}
          </p>
        </div>
        <hr className="h-[2px] bg-black my-8 md:my-12 xl:my-12" />
        {service.subServices.map((subservice, i) => (
          <div key={i}>
            <h2 className="text-3xl mb-8">{subservice.name}</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
              {subservice.services.map((subService, i) => (
                <div
                  className={`aspect-square ${
                    i % 2 === 0 ? "bg-goldTheme" : "bg-greenTheme"
                  }`}
                  key={i}
                >
                  <img
                    src={subService.image}
                    alt=""
                    className="w-[80%] h-[80%] object-cover rounded-br-lg"
                  />
                  <p className="text-xl xs:text-base sm:text-xl lg:text-2xl p-2 xs:p-1 sm:p-2">
                    {subService.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-2 xs:p-0 xs:h-[150px] flex gap-4 mt-8 bg-goldTheme">
              <div className="h-[90%] hidden xlmd:block">
                <img
                  src={subservice.lookingFor.image}
                  alt=""
                  className="h-full w-full object-cover rounded-br-lg"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center pl-2 md:pl-4">
                <h2 className="sm:text-xl">{subservice.lookingFor.name}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-0 xs:bg-white rounded-lg ">
                    <input
                      type="text"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      className="px-2 sm:px-4 py-2 xs:bg-transparent max-w-36 sm:max-w-40"
                      placeholder="I am Looking for..."
                    />
                    <hr className="hidden xs:block h-[1px] bg-black w-8 rotate-90" />
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-2 sm:px-4 py-2 xs:bg-transparent max-w-40 sm:max-w-48"
                      placeholder="+91 12345 67890"
                    />
                    <button
                      type="submit"
                      className="bg-darkgray px-4 py-2 rounded-lg text-white"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="mt-2 text-red-500 text-sm">
                    {errors.query && <p>{errors.query}</p>}
                    {errors.phone && <p>{errors.phone}</p>}
                  </div>
                </form>
              </div>
            </div>
            <hr
              className={`${
                service.subServices.length - 1 === i ? "hidden" : ""
              } h-[2px] bg-black my-8 md:my-12 xl:my-12`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Servicepage;
