import React from "react";
import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import "./OurBasementRenovation.css";

const ourRenovatorData1 = [
    {
        id : 1, 
        title : "Do Plan and Design Thoroughly",
        desc : "Work with our expert contractors to create a detailed design and layout that meets your needs and maximizes the potential of your space. Proper planning ensures an efficient and functional renovation."
    },
    {
        id : 2, 
        title : "Do Set a Realistic Budget",
        desc : "Establish a clear budget from the start. Our team will help you be aware of all costs and potential adjustments along the way."
    },
    {
        id : 3, 
        title : "Do Ensure Proper Permits",
        desc : "Our contractors handle the paperwork to ensure compliance with local building codes."
    },
    {
        id : 4, 
        title : "Do Communicate Regularly",
        desc : "Keep in touch with your contractor throughout the renovation. Open communication helps avoid misunderstandings and ensures that the project stays on track."
    },
    {
        id : 5, 
        title : "Do Consider Insulation and Ventilation",
        desc : "Proper insulation and ventilation are essential for comfort and energy efficiency in your finished basement. Our team can advise on the best solutions for your space."
    }
]
const ourRenovatorData2 = [
    {
        id : 1, 
        title : "Don't Skip the Prep Work",
        desc : "Rushing through the initial stages, such as waterproofing and foundation inspection, can lead to future problems. We ensure thorough preparation to avoid costly issues down the road."
    },
    {
        id : 2, 
        title : "Don't Overlook Needs",
        desc : "Good lighting is key to any basement renovation. Don't plan for natural and artificial lighting to create a welcoming atmosphere."
    },
    {
        id : 3, 
        title : "Don't Try DIY Electrical or Plumbing",
        desc : "Basement renovations often require specialized work. Our licensed professionals handle all electrical and plumbing to meet safety standards and code requirements."
    },
    {
        id : 4, 
        title : "Don't ignore structural integrity",
        desc : "Address any potential structural issues before beginning the renovation. Neglecting these concerns can compromise the safety and longevity of your finished basement."
    },
    {
        id : 5, 
        title : "Don't Expect Instant Results",
        desc : "Basement renovations take time, and rushing the process can lead to mistakes. Patience and careful craftsmanship are key to achieving the best possible outcome."
    }
]

const OurBasementRenovation = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.ourBasementRenovation__IconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Our Basement Renovation Contractors Do's and Don'ts
          </h2>
        </div>

        {/* Our Renovators Do's part  */}
        <div className="flex justify-center items-center my-[25px]">
            <buttton className="btn__first text-[20px] 5xl:text-[25px] font-bold leading-normal text-white text-center py-[4px] md:py-[10px] 5xl:py-[17px] px-[50px] lg:px-[140px] 5xl:px-[170px]">Our Basement Renovation Contractors Do's</buttton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
            {
                ourRenovatorData1?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg pt-[14px] pb-[21px] px-2">
                        <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">{data.title}</p>
                        <p className="text-lg font-normal text-black leading-[35px] text-center">{data.desc}</p>
                    </div>
                })
            }
        </div>

        {/* Our Renovators Don’ts part  */}
        <div className="flex justify-center items-center my-[25px]">
            <buttton className="btn__second text-[20px] 5xl:text-[25px] font-bold leading-normal text-white text-center py-[4px] md:py-[10px] 5xl:py-[17px] px-[50px] lg:px-[140px] 5xl:px-[170px]">Our Basement Renovation Contractors Don'ts</buttton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
            {
                ourRenovatorData2?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg pt-[14px] pb-[21px] px-2">
                        <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">{data.title}</p>
                        <p className="text-lg font-normal text-black leading-[35px] text-center">{data.desc}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default OurBasementRenovation;
