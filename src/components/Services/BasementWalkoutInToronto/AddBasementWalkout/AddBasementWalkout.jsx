"use client";

import "./AddBasementWalkout.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Link from "next/link";

const benefitsData = [
  {
    id: 1,
    img: "/assets/basementWalkoutInToronto/addBasementWalkout/addBasement1.png",
    title: "Creating a Rental Unit",
    desc: "Looking to generate rental income, a basement walkout is essential for creating a private, self-contained apartment with a separate entrance.",
  },
  {
    id: 2,
    img: "/assets/basementWalkoutInToronto/addBasementWalkout/addBasement2.png",
    title: "Improving Accessibility",
    desc: "A basement walkout provides easy outdoor access, making it ideal for families who use their basements as recreational spaces, home gyms, or additional living areas.",
  },
  {
    id: 3,
    img: "/assets/basementWalkoutInToronto/addBasementWalkout/addBasement3.png",
    title: "Increasing Property Value",
    desc: "Homes with walkout basements often attract higher resale prices due to their convenience and versatility.",
  },
  {
    id: 4,
    img: "/assets/basementWalkoutInToronto/addBasementWalkout/addBasement4.png",
    title: "Maximizing Natural Light & Ventilation",
    desc: "Walkout basements are a great way to bring more natural light and fresh air into an otherwise dark, enclosed space, making the basement feel brighter and more inviting.",
  },
  {
    id: 5,
    img: "/assets/basementWalkoutInToronto/addBasementWalkout/addBasement5.png",
    title: "Expanding Living Space",
    desc: "If your family is growing or you need extra space, a basement walkout can help turn your basement into a fully functional living area.",
  },
  {
    id: 6,
    img: "/assets/basementWalkoutInToronto/addBasementWalkout/addBasement6.png",
    title: "Working with a Sloped Lot",
    desc: "Homes on sloped lots are ideal for walkout basements because the natural grade of the land makes it easier to construct an exterior door and access point.",
  }
];

const AddBasementWalkout = () => {
  return (
    <div className=" ">
      <div
        data-aos="zoom-in"
        className="container padding__top"
      >
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.addBasementWalkout__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            When to add Basement Walkout?
            </h2>
            <p className='text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>Adding a basement walkout is a smart investment to enhance your home's functionality, value, and accessibility. Here are some key scenarios when adding a basement walkout might be the perfect choice: Whether planning a renovation or building a new home, adding a basement walkout is a versatile solution that improves functionality and aesthetics. Consult with Prime Basement Renovations in Toronto to explore how a walkout can enhance your property!</p>
          </div>
          {/* first div  */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[25px]">
            {benefitsData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="cart__bg__addBasement px-[18px] pt-[16px] pb-[22px]"
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px]"
                  />
                  <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
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

export default AddBasementWalkout;
