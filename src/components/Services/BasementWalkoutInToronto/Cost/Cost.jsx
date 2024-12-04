import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./Cost.css";

const ourRenovatorData1 = [
  {
    id: 1,
    title: "Excavation and Structural Work",
    desc: "Costs depend on soil conditions, depth, and required reinforcements.",
  },
  {
    id: 2,
    title: "Waterproofing and Drainage",
    desc: "Proper waterproofing and drainage systems are essential to prevent water damage and ensure long-term durability.",
  },
  {
    id: 3,
    title: "Material Choices",
    desc: "The type of doors, steps, and finishes selected can significantly impact the budget.",
  },
];

const Cost = () => {
  return (
    <div>
      <div data-aos="zoom-in" className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.cost__IconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            Basement Walkout Cost Toronto
          </h2>
          <p className='text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>The cost of building a walkout in Toronto can vary depending on factors such as property conditions and design preferences. On average, homeowners can expect to invest between <strong>$15,000</strong> and <strong>$50,000</strong> for a professionally designed and constructed basement walkout. While the upfront investment may seem significant, a walkout can greatly enhance your home's value and usability, especially if used to create a rental unit or additional living space. At Prime Basement Renovations, we provide transparent pricing and customized solutions to fit your budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          {ourRenovatorData1?.map((data) => {
            return (
              <div
                key={data.id}
                className="how_we_cart___bg pt-[14px] pb-[21px] px-2"
              >
                <p className="text-[20px] text-center font-bold text-black leading-normal">
                  {data.title}
                </p>
                <p className="text-lg font-normal text-black leading-[35px] text-center">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center mt-[18px] 2xl:mt-[21px] 3xl:mt-[24px] 4xl:mt-[27px] 5xl:mt-[30px] gap-[18px] 2xl:gap-[21px] 3xl:gap-[24px] 4xl:gap-[27px] 5xl:gap-[30px] mt-[25px]">
          <div className="w-full md:w-1/3 how_we_cart___bg pt-[14px] pb-[21px] px-2">
            <p className="text-[20px] text-center font-bold text-black leading-normal">
            Permits and Compliance
            </p>
            <p className="text-lg font-normal text-black leading-[35px] text-center">
            Obtaining necessary permits and adhering to local building codes are crucial aspects of the project.
            </p>
          </div>
          <div className="w-full md:w-1/3 how_we_cart___bg pt-[14px] pb-[21px] px-2">
            <p className="text-[20px] text-center font-bold text-black leading-normal">
            Customization
            </p>
            <p className="text-lg font-normal text-black leading-[35px] text-center">
            Unique features like landscaping, lighting, or additional structural enhancements may increase costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
