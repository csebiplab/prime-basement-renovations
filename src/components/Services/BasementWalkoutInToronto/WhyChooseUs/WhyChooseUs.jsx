"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./WhyChooseUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Higher upfront costs due to excavation",
  },
  {
    title: "Potential delays caused by weather",
  },
  {
    title: "Risk of damage to existing landscaping",
  },
  {
    title: "Disruptive to daily life during constructe",
  },
  {
    title: "Complexity of permits & zoning approve",
  },
  {
    title: "Limited availability or scheduling conflict",
  },
  {
    title: "Potential for inadequate waterproofing",
  },
  {
    title: "Some contractors may lack experience",
  },
  {
    title: "Risk of hidden costs or price increases",
  },
  {
    title: "Quality of work may vary depending",
  }
];
const easyPool = [
  {
    title: "Expertise in basement design & construc",
  },
  {
    title: "Ability to handle complex excavation",
  },
  {
    title: "Knowledge of local building codes",
  },
  {
    title: "Skilled in waterproofing and foundation ",
  },
  {
    title: "Experience in customizing layouts",
  },
  {
    title: "Efficient project management",
  },
  {
    title: "Strong customer service & communicate",
  },
  {
    title: "High-quality craftsmanship",
  },
  {
    title: "Use of durable, long-lasting materials",
  },
  {
    title: "Ability to work with a variety of home",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div data-aos="fade-up" className="bg_vinylPool container padding__top">
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
                Why Does Everyone Choose Prime Basement Renovations?
                </h2>
              </div>

              <div>
                <p className="text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]">
                Everyone chooses Prime Basement Renovations for our expertise, high-quality craftsmanship, and commitment to customer satisfaction. With years of experience specializing in basement transformations, we offer tailored, full-service renovations that maximize space and enhance home value. Prime is known for its attention to detail, transparent pricing, and timely project completion. Our personalized approach ensures each project meets the homeowner's vision while adhering to local building codes and safety standards. Whether you're creating a walkout basement or a cozy living space, Prime Basement Renovations is the trusted choice for homeowners seeking reliable, top-tier results.
                </p>
              </div>
            </div>

            <div className="w-full my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[14px] text-primary-800 text-base md:text-lg font-bold">
              Usual Basement Walkout <br/> Company
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[20px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual, index) => (
                  <div key={index}>
                  <div
                    className="flex gap-4 items-center leading-none"
                  >
                    <Image
                      src="/assets/primeBasementHomePage/icons/x.png"
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
                <span>Prime Basement Renovations</span>
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool?.map((usual, index) => (
                  <div key={index}>
                  <div
                    className="flex gap-4 items-center leading-none  "
                  >
                    <Image
                      src="/assets/primeBasementHomePage/icons/r.png"
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
