"use client";
import React from "react";
import "./ProsAndCons.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const considerationFactorData = [
  {
    id: 1,
    title: "Increased Natural Light:",
    desc: "Unlike traditional basements, walkout basements have windows and doors that allow more natural light, making the space open.",
  },
  {
    id: 2,
    title: "Easier Access to Outdoors:",
    desc: "Direct access to the backyard or garden makes the space more functional for outdoor activities, storage, or entertainment.",
  },
  {
    id: 3,
    title: "Enhanced Accessibility:",
    desc: "A walkout basement provides direct outdoor access, making it easier to use as a rental unit, guest suite, or recreational space.",
  },
  {
    id: 4,
    title: "More Versatile Use of Space:",
    desc: "Walkout basements can be used for various purposes, such as guest suites, home offices, or even rental units, increasing.",
  },
  {
    id: 5,
    title: "Better Ventilation:",
    desc: "The increased air circulation through larger windows and doors can improve indoor air quality.",
  },
  {
    id: 6,
    title: "Enhanced Curb Appeal:",
    desc: "With proper landscaping, a walkout basement enhances the overall look of your home, providing an attractive, seamless.",
  }
];
const limitationFactorData = [
  {
    id: 1,
    title: "Higher Construction Costs:",
    desc: "Building a walkout basement can be more expensive due to excavation, structural work, and additional grading.",
  },
  {
    id: 2,
    title: "Site Conditions:",
    desc: "Not all properties are suitable for a walkout basement, especially those with flat terrain or poor drainage.",
  },
  {
    id: 3,
    title: "Drainage Challenges:",
    desc: "Proper drainage systems are essential to prevent water intrusion, which can be costly to install and maintain.",
  },
  {
    id: 4,
    title: "Limited to Sloped Lots:",
    desc: "Homes on flat lots may not be suitable for walkout basements without significant landscaping or structural changes.",
  },
  {
    id: 5,
    title: "Increased Exposure to Weather:",
    desc: "A walkout basement is more vulnerable to weather conditions, including potential flooding, especially in areas with heavy rainfall",
  },
  {
    id: 6,
    title: "Complex Permitting and Zoning:",
    desc: "Depending on the location, permits and zoning regulations for adding a walkout basement may be more complicated.",
  },
];

const ProsAndCons = () => {
  return (
    <div className=" padding__top">
      <div
        data-aos="zoom-in"
        className="container flex flex-col items-center justify-center"
      >
        <HeadingIcon
          text={headingIconText.prosAndCons__IconText}
        />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
        Pros and Cons of a Walkout Basement Toronto
        </h2>
        <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>">
        A walkout basement can be a valuable addition to a home but comes with potential challenges. Here's a breakdown of the advantages and disadvantages to help you decide if it's the right choice for your property.
        </p>
      </div>

      {/* cart part large device  */}
      <div className="hidden md:block">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-6 mt-[25px]"
      >
        <div className="md:col-span-1">
          <Image
            src="/assets/basementWalkoutInToronto/prosAndCons/lg_pros.png"
            alt="pros image"
            width={334}
            height={575}
            className="h-[400px] md:h-full w-full md:w-auto"
          />
        </div>

        <div className="md:col-span-2 border-t-2 border-r-2 border-l-2 border-bg-primary-300 mr-0 md:mr-3 bg-white">
          <div>
            <h3 className="text-[20px] font-bold text-black leading-normal text-center py-[13px]">
            Pros
            </h3>
            {considerationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-bg-primary-300 px-[8px] py-[10px] ${
                    data.id === 7 && "border-b-0"
                  }`}
                >
                  <p className="text-base 5xl:text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-base 5xl:text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="rounded-l-[50px] rounded-tr-[0px] bg-gradient-to-b from-[#FF3100] to-[#931C00]" />
        </div>

        <div className="md:col-span-2 border-t-2 border-l-2 border-r-2 border-bg-primary-300 ml-0 md:ml-3 bg-white">
          <div>
            <h3 className="text-[20px] font-bold text-black leading-normal text-center py-[13px]">
            Cons
            </h3>
            {limitationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-bg-primary-300 px-[8px] py-[10px] ${
                    data.id === 6 && "border-b-0"
                  }`}
                >
                  <p className="text-base 5xl:text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-base 5xl:text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-1">
          <Image
            src="/assets/basementWalkoutInToronto/prosAndCons/lg_cons.png"
            alt="cons image"
            width={335}
            height={575}
            className="h-[400px] md:h-full w-full md:w-auto"
          />
        </div>
      </div>
      </div>

      {/* cart part small device  */}
      <div
        data-aos="fade-up"
        className="block md:hidden grid grid-cols-1 md:grid-cols-6 mt-[25px]"
      >
        <div className="md:col-span-1">
          <Image
            src="/assets/basementWalkoutInToronto/prosAndCons/sm_pros.png"
            alt="pros image"
            width={334}
            height={669}
            className="h-[435px] md:h-full w-full md:w-auto"
          />
        </div>
        <div className="md:col-span-2 border-t-2 border-r-2 border-l-2 border-bg-primary-300 mr-0 md:mr-3">
          <div>
            <h3 className="text-[20px] font-bold text-black leading-normal text-center py-[13px]">
            Pros
            </h3>
            {considerationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-bg-primary-300 px-[8px] py-[10px] ${
                    data.id === 6 && "border-b-0"
                  }`}
                >
                  <p className="text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="rounded-l-[50px] rounded-tr-[0px] bg-gradient-to-b from-[#FF3100] to-[#931C00]" />
        </div>

        <div className="md:col-span-1">
          <Image
            src="/assets/basementWalkoutInToronto/prosAndCons/sm_cons.png"
            alt="cons image"
            width={334}
            height={669}
            className="h-[435px] md:h-full w-full md:w-auto"
          />
        </div>

        <div className="md:col-span-2 border-2 border-bg-primary-300 ml-0 md:ml-3">
          <div>
            <h3 className="text-[20px] font-bold text-black leading-normal text-center py-[13px]">
            Cons
            </h3>
            {limitationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-bg-primary-300 px-[8px] py-[10px] ${
                    data.id === 7 && "border-b-0"
                  }`}
                >
                  <p className="text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsAndCons;
