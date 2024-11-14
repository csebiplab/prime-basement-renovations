"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./WhyChooseUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Unreliable and delayed project timelines",
  },
  {
    title: "Hidden fees and unclear pricing",
  },
  {
    title: "Poor quality workmanship",
  },
  {
    title: "Lack of proper permits and compliance",
  },
  {
    title: "Inexperienced or unlicensed contractors",
  },
  {
    title: "Limited design flexibility",
  },
  {
    title: "Failure to communicate effectively",
  },
  {
    title: "Inconsistent clean-up and job site safety",
  },
  {
    title: "Unmet expectations and disappointing",
  },
  {
    title: "Subpar materials and finishes",
  },
  {
    title: "Unprofessional or rude behavior",
  },
  {
    title: "Unexpected structural issues & problems",
  },
  {
    title: "Inadequate project management",
  },
  {
    title: "Poor attention to detail",
  }
];
const easyPool = [
  {
    title: "Timely and reliable project completion",
  },
  {
    title: "Transparent pricing with no hidden costs",
  },
  {
    title: "Expert craftsmanship & quality materials",
  },
  {
    title: "Fully licensed and insured professionals",
  },
  {
    title: "Custom Designs Tailored to Your Needs",
  },
  {
    title: "Efficient communicate every step",
  },
  {
    title: "Attention to detail and precision work",
  },
  {
    title: "Comprehensive project management ",
  },
  {
    title: "Energy-efficient solutions for long-term ",
  },
  {
    title: "Seamless integration with your home's",
  },
  {
    title: "Proven track record of customer satisfy",
  },
  {
    title: "Safety & compliance with local building",
  },
  {
    title: "Full range of basement under one roof",
  },
  {
    title: "Creative solutions for every basement",
  } 
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            
          <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.chooseUs__IconText}
              />
              </div>

              <div>
                <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
                Choose Our Toronto Basement Renovations Company
                </h2>
              </div>

              <div>
                <p className="text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]">
                Prime Basement Renovations is the trusted choice in Toronto to transform your basement into a beautiful, functional living space. Here's why homeowners across the city choose us for their basement renovation projects: At Prime Basement Renovations, we renovate spaces to create places where memories are made. Whether you're looking for additional living space, a home office, or a high-end entertainment zone, we'll help you unlock the full potential of your basement. Let us guide you through the process, ensuring a stress-free, seamless renovation experience.
                </p>
              </div>
            </div>

            <div className="w-full my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[14px] text-primary-800 text-base md:text-lg font-bold">
              Usual Basement Renovation Contractors
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[20px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual, index) => (
                  <div key={index}>
                  <div
                    className="flex gap-4 items-center leading-none"
                  >
                    <Image
                      src="/assets/homePage/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-[13px] 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </div>
                  
                  
                ))}
              </div>
            </div>
            <div className="my-6 md:my-0 cart2">
              <p className="flex items-center gap-[10px] title-bg2 text-center 2xl:py-[15px] py-[14px] px-[20px] 5xl:px-[24px] text-dark-700 text-base md:text-lg font-bold">
                <Image src="/assets/primeBasementHomePage/prime_basement_renovation_choose_us.png" alt="choose us logo" width={107} height={62}/>
                <span>Our basement renovation experts</span>
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool?.map((usual, index) => (
                  <div key={index}>
                  <div
                    className="flex gap-4 items-center leading-none  "
                  >
                    <Image
                      src="/assets/homePage/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-[13px] 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </div>
                  
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
