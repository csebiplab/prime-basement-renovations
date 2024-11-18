import React from "react";
import "./WorkingProcess.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const workingData = [
  {
    id: 1,
    img: "/assets/primeBasementHomePage/workingProcess/working1.png",
    title: "Initial Consultation",
    desc: "The process begins with an initial consultation to discuss your ideas, goals, and vision for your basement. Please share your preferences and needs while we assess the space and understand your needs.",
  },
  {
    id: 2,
    img: "/assets/primeBasementHomePage/workingProcess/working2.png",
    title: "Design Planning",
    desc: "Our design team will create a customized plan to incorporate your vision. We provide detailed layouts and 3D renderings, allowing you to visualize the final product. We will also discuss material selections, finishes, and budget considerations.",
  },
  {
    id: 3,
    img: "/assets/primeBasementHomePage/workingProcess/working3.png",
    title: "Proposal and Agreement",
    desc: "Once the design is finalized, we present a detailed proposal that outlines the scope of work, timelines, and costs. After your approval, we'll finalize the contract to begin the renovation.",
  },
  {
    id: 4,
    img: "/assets/primeBasementHomePage/workingProcess/working4.png",
    title: "Preparation & Permitting",
    desc: "We handle all necessary permits and approvals, ensuring compliance with local building codes. Our team prepares the site by setting up protective measures and organizing materials for a smooth workflow.",
  },
  {
    id: 5,
    img: "/assets/primeBasementHomePage/workingProcess/working5.png",
    title: "Construction Phase",
    desc: "Our experienced contractors will begin the renovation, focusing on quality workmanship and attention to detail. We keep you informed throughout the process, providing updates and addressing any questions or concerns that may arise. Regular site visits",
  },
  {
    id: 6,
    img: "/assets/primeBasementHomePage/workingProcess/working6.png",
    title: "Quality Assurance",
    desc: "As we near completion, our team controls every detail to meet our high quality.",
  },
  {
    id: 7,
    img: "/assets/primeBasementHomePage/workingProcess/working7.png",
    title: "Final Walkthrough",
    desc: "After completing the renovation, we complete a final walkthrough with you to ensure your satisfaction. We will address any last-minute adjustments and ensure you're happy with your new space.",
  },
  {
    id: 8,
    img: "/assets/primeBasementHomePage/workingProcess/working8.png",
    title: "Aftercare",
    desc: "Our commitment to you doesn't end with the renovation. We provide aftercare support to ensure your basement remains in excellent condition.",
  },
];

const WorkingProcess = () => {
  return (
    <div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="container padding__top"
      >
        <div className="flex flex-col justify-center items-center">
          <HeadingIcon text={headingIconText.workingProcess__IconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            Working Process of Our Basement Renovation Contractors Toronto
          </h2>
          <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]">
            At Prime Basement Renovations, we design our working process to
            ensure a smooth and efficient experience throughout their basement
            renovation journey. Here's a breakdown of how our professional
            basement renovation contractors in Toronto operate:
          </p>
        </div>
        {/* first div  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] 5xl:gap-[83px] pt-[25px]">
          {workingData?.map((data) => {
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

export default WorkingProcess;
