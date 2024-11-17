"use client";
import React from "react";
import "./ConsiderationAndLimitation.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const considerationFactorData = [
  {
    id: 1,
    title: "Budget:",
    desc: "Establishing a clear budget is crucial. We will work with you to develop a budget that aligns with your vision and financial goals.",
  },
  {
    id: 2,
    title: "Design and Layout:",
    desc: "Our team can help you create a layout that maximizes functionality while reflecting your style.",
  },
  {
    id: 3,
    title: "Building Codes and Permits:",
    desc: "Basement renovations often require compliance with local building codes and the acquisition of permits.",
  },
  {
    id: 4,
    title: "Moisture and waterproofing:",
    desc: "Consider the need for waterproofing solutions to prevent future problems. We can assess your space and recommend.",
  },
  {
    id: 5,
    title: "Lighting and Ventilation:",
    desc: "Proper lighting and ventilation are essential for creating a comfortable and inviting atmosphere.",
  },
  {
    id: 6,
    title: "Access and Egress:",
    desc: "Ensuring safe exit routes is a key consideration, especially for sleeping areas.",
  },
  {
    id: 7,
    title: "Functionality Needs:",
    desc: "Think about how the renovated space will meet your needs.",
  },
];
const limitationFactorData = [
  {
    id: 1,
    title: "Structural Limitations:",
    desc: "The existing structure may limit certain design options.",
  },
  {
    id: 2,
    title: "Existing Plumbing and Electrical Systems:",
    desc: "The layout of existing plumbing and electrical systems may impact the design and functionality of your renovation.",
  },
  {
    id: 3,
    title: "Budget Constraints:",
    desc: "Budget constraints may limit some design elements. We can help you prioritize your must-haves and find cost-effective",
  },
  {
    id: 4,
    title: "Timeframe:",
    desc: "Renovation projects can take time, and delays may occur due to unforeseen circumstances.",
  },
  {
    id: 5,
    title: "Environmental Considerations:",
    desc: "Assessing the environmental conditions will help us recommend the best solutions for your space",
  },
  {
    id: 6,
    title: "Zoning Regulations:",
    desc: "Local zoning laws may affect what you can do with your basement. We will help ensure that your renovation complies",
  },
];

const ConsiderationAndLimitation = () => {
  return (
    <div className=" padding__top">
      <div className="container flex flex-col items-center justify-center">
        <HeadingIcon
          text={headingIconText.considerationAndLimitation__IconText}
        />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Consideration and Limitation Factors for Your Project
        </h2>
        <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>">
          When planning a basement renovation project with Prime Basement
          Renovations, consider various factors and limitations to ensure a
          successful outcome. Understanding these elements can help you make
          informed decisions and set realistic expectations for your project. By
          considering these factors and understanding the limitations associated
          with your basement renovation project, you can better prepare for a
          successful transformation. At Prime Basement Renovations, we're here
          to guide you through every step of the process, ensuring your vision
          becomes a reality while navigating any challenges. Contact us today to
          discuss your project and start planning your dream basement!
        </p>
      </div>

      {/* cart part  */}
      <div className="grid grid-cols-1 md:grid-cols-6 mt-[25px]">
        <div className="md:col-span-1">
          <Image
            src="/assets/primeBasementHomePage/consideration1.png"
            alt="consideration image"
            width={334}
            height={669}
            className="h-full"
          />
        </div>
        <div className="md:col-span-2 border-2 border-bg-primary-300 mr-3">
          <div>
            <p className="text-[20px] font-bold text-black leading-normal text-center py-[13px]">
              Consideration Factors
            </p>
            {considerationFactorData?.map((data) => {
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
          <div className="rounded-l-[50px] rounded-tr-[0px] bg-gradient-to-b from-[#FF3100] to-[#931C00]" />
        </div>

        <div className="md:col-span-2 border-2 border-bg-primary-300 ml-3">
          <div>
            <p className="text-[20px] font-bold text-black leading-normal text-center py-[13px]">
              Limitation Factors
            </p>
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
        <div className="md:col-span-1">
          <Image
            src="/assets/primeBasementHomePage/consideration2.png"
            alt="consideration image"
            width={334}
            height={669}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsiderationAndLimitation;
