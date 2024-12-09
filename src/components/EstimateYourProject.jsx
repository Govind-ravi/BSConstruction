import React, { useEffect, useState } from "react";

function EstimateYourProject() {
  const [formData, setFormData] = useState({
    name: "",
    lookingFor: "",
    budget: "",
    startByMonth: "",
    propertyType: "commercial",
    dimensions: { width: "30", height: "40" },
    startDate: new Date().toISOString().split("T")[0],
    totalCost: 0,
  });

  const [errors, setErrors] = useState({});

  const rates = {
    villa: 1000,
    apartment: 800,
    commercial: 1200,
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Looking For validation
    if (!formData.lookingFor.trim()) {
      newErrors.lookingFor = "Please specify what you're looking for.";
    }

    // Budget validation
    if (!formData.budget || parseFloat(formData.budget) <= 0) {
      newErrors.budget = "Budget must be a positive number.";
    }

    // Dimensions validation
    if (
      !formData.dimensions.width ||
      parseFloat(formData.dimensions.width) <= 0
    ) {
      newErrors.width = "Width must be a positive number.";
    }
    if (
      !formData.dimensions.height ||
      parseFloat(formData.dimensions.height) <= 0
    ) {
      newErrors.height = "Height must be a positive number.";
    }

    // Property Type validation
    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type.";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Calculate total cost dynamically
  const calculateTotalCost = () => {
    const width = parseFloat(formData.dimensions.width) || 0;
    const height = parseFloat(formData.dimensions.height) || 0;
    const rate = rates[formData.propertyType.toLowerCase()] || 0;

    const totalCost = width * height * rate;
    setFormData((prevData) => ({
      ...prevData,
      totalCost,
    }));
  };

  useEffect(() => {
    calculateTotalCost();
  }, []);

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;

    if (name === "startDate") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      let updatedFormData = { ...formData };

      if (dataset.group === "dimensions") {
        updatedFormData = {
          ...formData,
          dimensions: {
            ...formData.dimensions,
            [name]: value,
          },
        };
      } else {
        updatedFormData = {
          ...formData,
          [name]: value,
        };
      }

      const width = parseFloat(updatedFormData.dimensions.width) || 0;
      const height = parseFloat(updatedFormData.dimensions.height) || 0;
      const rate = rates[updatedFormData.propertyType.toLowerCase()] || 0;

      const totalCost = width * height * rate;

      setFormData({
        ...updatedFormData,
        totalCost,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setFormData({
        name: "",
        lookingFor: "",
        budget: "",
        startByMonth: "",
        propertyType: "",
        dimensions: { width: "", height: "" },
        startDate: { day: "", month: "", year: "" },
        totalCost: 0,
      });
    } else {
      console.log(errors);
    }
  };

  return (
    <>
      <div className="px-4 md:px-6 lg:px-12 py-4 space-y-8 w-[95%] sm:w-[90%] md:w-[80%] xlmd:w-[70%]">
        <h1 className="text-2xl xxs:text-3xl sm:text-4xl">
          Hello 👋 ! — Lets Calculate Your Project Estimation
        </h1>
        <p className="text-base">
          Ready to turn your vision into reality? Contact BS Construction today
          to discuss your project requirements and discover how we can help you
          build the future of your dreams.
        </p>
      </div>
      <div className="bg-goldTheme w-[98%] xlmd:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto xlmd:mx-12 p-2 sm:p-6 md:p-8 mt-2 sm:mt-6 md:mt-8 rounded xxs:text-lg md:text-xl xlmd:text-2xl lg:text-3xl xl:text-4xl">
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
              <h3>I'm looking to build my </h3>
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
          <div className="space-y-2 sm:space-y-4">
            <div>
              <div className="bg-white rounded-lg px-4 py-2 flex flex-col xs:flex-row sm:text-lg md:text-xl">
                <h2 className="min-w-[200px] sm:min-w-[300px] md:min-w-[400px] xlmd:min-w-[450px] lg:min-w-[380px] xl:min-w-[400px]">
                  Site Dimension{" "}
                  <span className="text-xs sm:text-sm">(In feet)</span>
                </h2>
                <div className="flex gap-24 xs:gap-4 flex-grow">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="width"
                      data-group="dimensions"
                      value={formData.dimensions.width}
                      onChange={handleChange}
                      className="border-b-2 border-black w-full outline-none"
                    />
                    <p>Width,</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="height"
                      data-group="dimensions"
                      value={formData.dimensions.height}
                      onChange={handleChange}
                      className="border-b-2 border-black w-full outline-none"
                    />
                    <p>Height</p>
                  </div>
                </div>
              </div>
              {errors.width && <p className="text-red-600">{errors.width}</p>}
              {errors.height && <p className="text-red-600">{errors.height}</p>}
            </div>
            <div>
              <div className="bg-white  rounded-lg px-4 py-2 flex flex-col xs:flex-row sm:text-lg md:text-xl">
                <h2 className="min-w-[200px] sm:min-w-[300px] md:min-w-[400px] xlmd:min-w-[450px] lg:min-w-[380px] xl:min-w-[400px]">
                  Start Date
                </h2>
                <div className="">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="border-b-2 w-full border-black outline-none"
                  />
                </div>
              </div>
              {errors.startDate && (
                <p className="text-red-600">{errors.startDate}</p>
              )}
            </div>
            <div>
              <div className="bg-white  rounded-lg px-4 py-2 flex flex-col xs:flex-row sm:text-lg md:text-xl">
                <h2 className="min-w-[200px] sm:min-w-[300px] md:min-w-[400px] xlmd:min-w-[450px] lg:min-w-[380px] xl:min-w-[400px]">
                  Property Type
                </h2>
                <div className="flex-grow min-w-fit">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="outline-none w-full"
                  >
                    <option
                      value=""
                      className="text-sm sm:text-base md:text-lg xlmd:text-xl"
                    >
                      Select Type
                    </option>
                    <option
                      value="villa"
                      className="text-sm sm:text-base md:text-lg xlmd:text-xl"
                    >
                      Villa (₹1000/sqft)
                    </option>
                    <option
                      value="apartment"
                      className="text-sm sm:text-base md:text-lg xlmd:text-xl"
                    >
                      Apartment (₹800/sqft)
                    </option>
                    <option
                      value="commercial"
                      className="text-sm sm:text-base md:text-lg xlmd:text-xl"
                    >
                      Commercial (₹1200/sqft)
                    </option>
                  </select>
                </div>
              </div>
              {errors.propertyType && (
                <p className="text-red-600">{errors.propertyType}</p>
              )}
            </div>
            <div>
              <div className="bg-white  rounded-lg px-4 py-2 flex flex-col xs:flex-row sm:text-lg md:text-xl">
                <h2 className="min-w-[200px] sm:min-w-[300px] md:min-w-[400px] xlmd:min-w-[450px] lg:min-w-[380px] xl:min-w-[400px]">
                  Budget
                </h2>
                <div className="flex-grow">
                  <input
                    type="number"
                    className="border-b-2 w-full border-black outline-none"
                  />
                </div>
              </div>
              {errors.budget && <p className="text-red-600">{errors.budget}</p>}
            </div>
            <div className="bg-white px-4 py-2 flex flex-col xs:flex-row sm:text-lg md:text-xl border-2 rounded-lg border-black">
              <h2 className="sm:min-w-[300px] md:min-w-[400px] xlmd:min-w-[450px] lg:min-w-[380px] xl:min-w-[400px]">
                Total Estimated Cost
              </h2>
              <div className="flex-grow">
                ₹ {formData.totalCost.toLocaleString("en-IN")}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="text-sm sm:text-base">
              ***The estimation may vary based on any changes in the project
              briefing.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-darkgray text-white rounded hover:bg-opacity-90 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EstimateYourProject;
