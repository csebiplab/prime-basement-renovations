import React from "react";
import "./Benefits.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const benefitsData = [
  {
    id: 1,
    img: "/assets/basementWalkoutInToronto/benefits/benefit1.png",
    title: "Increased Property Value",
    desc: "A separate basement entrance adds significant value to your home. It can make your property more appealing to potential buyers, especially those looking for extra living space or rental income opportunities.",
  },
  {
    id: 2,
    img: "/assets/basementWalkoutInToronto/benefits/benefit2.png",
    title: "Rental Income Potential",
    desc: "A private entrance allows you to convert your basement into a self-contained rental unit, offering the potential for extra income. This is especially valuable in high-demand areas like Toronto, where affordable housing options are in demand.",
  },
  {
    id: 3,
    img: "/assets/basementWalkoutInToronto/benefits/benefit3.png",
    title: "Enhanced Privacy",
    desc: "A separate basement entrance allows tenants or family members to enjoy privacy and independence without disrupting the home's main living areas. This is perfect for multi-generational families or renters.",
  },
  {
    id: 4,
    img: "/assets/basementWalkoutInToronto/benefits/benefit4.png",
    title: "Increase Light & Ventilation",
    desc: "A basement walkout often provides better access to natural light and fresh air, making the basement feel more open and comfortable. It reduces the enclosed, basement-like feeling, making the space more inviting.",
  },
  {
    id: 5,
    img: "/assets/basementWalkoutInToronto/benefits/benefit5.png",
    title: "Improved Accessibility",
    desc: "A separate entrance makes the basement easier, particularly for people with mobility issues. It eliminates the need to use stairs from the main level, offering better convenience and safety.",
  },
  {
    id: 6,
    img: "/assets/basementWalkoutInToronto/benefits/benefit6.png",
    title: "Home Expansion",
    desc: "A separate entrance allows you to expand your home's functionality, whether for a home office, gym, guest suite, or additional living space. It maximizes the use of your basement without sacrificing the privacy of the main home.",
  }
];

const Benefits = () => {
  return (
    <div>
      <div data-aos="zoom-in" className="container padding__top">
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={headingIconText.benefits__IconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Benefits of Adding Separate Basement Entrance
          </h2>
          <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]">
          Adding a separate basement entrance to your home offers numerous advantages, from increased functionality to enhanced property value. Here are some key benefits: Adding a separate basement entrance is a smart investment that provides both immediate benefits and long-term value. Contact Prime Basement Renovations today to discuss how we can enhance your home with a custom basement entrance solution!
          </p>
        </div>
        {/* first div  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] 5xl:gap-[83px] pt-[25px]">
          {benefitsData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working img"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className="text-[25px] text-center font-bold leading-9 text-black pt-[15px] pb-[10px]">
                  {data.title}
                </p>
                <p className="text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-900" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
