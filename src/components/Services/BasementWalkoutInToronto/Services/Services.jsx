import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./Services.css";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    img: "/assets/basementWalkoutInToronto/services/service1.png",
    title: "Basement Walkout Construction",
    desc: "Enhance your home's accessibility and value with professional basement walkout construction by Prime Basement Renovations. Our basement contractors specialize in creating durable, code-compliant walkouts tailored to your property's layout and needs. From excavation to waterproofing and finishing, our team delivers seamless results that transform your basement into a functional and inviting space. Looking to add a rental unit, increase natural light, or improve access, we offer comprehensive solutions tailored to your goals. Our experienced professionals handle all aspects of the construction process, ensuring attention to detail and high-quality craftsmanship at every step. From digging and excavation to installing steps, doors, and drainage systems, we ensure that your walkout is built to last. Trust Prime Basement Renovations for expert basement construction in Toronto, delivering a custom-built solution that adds value and versatility to your home.",
  },
  {
    id: 2,
    img: "/assets/basementWalkoutInToronto/services/service2.png",
    title: "Basement Walkout Installation Toronto",
    desc: "Prime Basement Renovations offers expert basement walkout installation services in Toronto, providing homeowners with a seamless and efficient way to add direct outdoor access to their basements. Whether you're seeking to create a rental unit, improve natural light, or enhance your basement's functionality, we specialize in designing and installing custom walkouts that meet your needs. Our team handles everything from excavation and structural work to waterproofing and final finishes, ensuring your walkout is functional, safe, and visually appealing. Trust Prime Basement Renovations for high-quality craftsmanship and exceptional service to transform your basement with a professional walkout installation. Contact us today for a consultation!",
  },
  {
    id: 3,
    img: "/assets/basementWalkoutInToronto/services/service3.png",
    title: "Basement Walkout Finishing",
    desc: "At Prime Basement Renovations, we offer expert basement walkout finishing services to complete your project with style and functionality. After the initial construction of your walkout, we focus on the finishing touches that make your space stand out. Our team handles installing durable steps and doors, adding landscaping, and other exterior elements that enhance curb appeal. We ensure proper waterproofing and drainage systems to protect your home. Whether you want a sleek modern finish or a more traditional look, we tailor every detail to your vision. Trust us to create a beautiful and functional walkout that transforms your basement into a valuable, accessible part of your home. Contact Prime Basement Renovations today to start planning your walkout finishing!",
  },
  {
    id: 4,
    img: "/assets/basementWalkoutInToronto/services/service4.png",
    title: "Basement Walkout Design",
    desc: "At Prime Basement Renovations, we specialize in creating custom basement walkout designs that blend functionality with aesthetics. Whether you're looking to add a rental unit, create a more accessible living space, or enhance your basement's natural light and ventilation, we work closely with you to design the perfect walkout for your home. The process of our walkout design starts with a detailed consultation to understand your needs. From there, we craft a design that complements your existing structure while maximizing space and curb appeal. We ensure every walkout design is visually appealing and practical, incorporating durable steps, secure doors, effective drainage systems, and proper waterproofing. Let us help you transform your basement into a functional and inviting space with a custom basement design tailored to your home. Reach out to Prime Basement Renovations now to initiate the process!",
  },
  {
    id: 5,
    img: "/assets/basementWalkoutInToronto/services/service5.png",
    title: "Basement Walkout Repairs",
    desc: "Ensure the safety and functionality of your property with basement walkout repair services from Prime Basement Renovations. Over time, wear and tear, water damage, or structural issues can compromise your walkout's integrity. Our expert team specializes in diagnosing and repairing all types of problems, including cracks, drainage issues, door misalignments, and step damage. We use high-quality materials and advanced techniques to restore your walkout, ensuring it is secure, waterproof, and visually appealing. Whether minor repairs or a complete overhaul, we provide reliable solutions that stand the test of time. You can trust Prime Basement Renovations for professional walkout repairs in Toronto. Contact us today to schedule an assessment and keep your basement in top condition!",
  },
  {
    id: 6,
    img: "/assets/basementWalkoutInToronto/services/service6.png",
    title: "Building Basement Walkouts",
    desc: "Building a basement walkout is an excellent way to enhance your home's functionality, accessibility, and value. At Prime Basement Renovations, we specialize in designing and constructing custom walkouts tailored to your needs. Whether you want to create a private entrance for a rental unit, improve natural light and ventilation, or provide direct outdoor access, we deliver solutions that combine durability and style. Our comprehensive process includes property assessment, excavation, structural work, waterproofing, and finishing. We ensure compliance with all local building codes and prioritize safety and quality at every step of the project. With years of experience serving Toronto homeowners, our team has earned a reputation for excellence and reliability. You can trust Prime Basement Renovations to transform your basement with a professionally built walkout that enhances form and function. Contact us today to get started!",
  },
];


const Services = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex justify-center items-center">
          <HeadingIcon text={headingIconText.services__IconText} />
        </div>
        <div className="">
          <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center">
          Professional Basement Walkout Services
          </h2>
          <p className='text-lg font-normal leading-[35px] text-black text-center mt-[10px]'>Transform your basement with professional basement walkout services from Prime Basement Renovations. We specialize in designing and constructing custom walkouts that add convenience, functionality, and value to your Toronto home. Whether adding a private entrance for a rental unit, improving access to your basement, or increasing natural light, our expertise ensures a seamless and stress-free experience.
          </p>
        </div>
        {/* cart data  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[15px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id}>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={433}
                  height={250}
                />
                <div className="service__cart__bg px-[8px] pt-[4px] pb-[16px] h-[800px] 2xl:h-[650px]">
                  <h3 className="text-lg 5xl:text-[20px] font-bold text-black leading-[30px] text-center pb-[5px]">
                    {data.title}
                  </h3>
                  <p className="text-base font-normal text-black leading-[30px] text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Services;
