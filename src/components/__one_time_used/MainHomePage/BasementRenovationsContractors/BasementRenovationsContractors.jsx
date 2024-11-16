"use client"
import React from "react";
import "./BasementRenovationsContractors.css";
import Image from 'next/image';
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "",
  "Vinyl Pools",
  "Fiberglass Pools",
  "Concrete Pools",
  "ICF Pools (Insulated Concrete Form)",
];

const TABLE_ROWS = [
  {
    id : 1,
    img : "/assets/swimming_pool_contractors/poolComparison/time.png",
    title : "Installation Time",
    vinyl: (
      <>
        <p>Moderate (4-8 weeks).</p>
      </>
    ),
    fiberglass: (
      <>
        <p>Quick installation (1-3 <br/> weeks).</p>
      </>
    ),
    concrete: (
      <>
        <p>Longest (3-6 months).</p>
      </>
    ),
    icf: (
      <>
        <p>Moderate (6-10 weeks).</p>
      </>
    ),
  },
  
  
  
];


const BasementRenovationsContractors = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.ourBasementRenovation__IconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Our Basement Renovation Contractors Do's and Don'ts
          </h2>
          <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>">
          The cost of basement renovation in Toronto can vary widely depending on several factors, including the scope of the project, the size of your basement, the quality of materials used, and the complexity of the work involved. However, here's a general breakdown to give you an idea of what to expect: The cost of basement renovations in Toronto can vary significantly based on your goals, the level of customization, and the features you want to include. It's important to consult with a professional renovation company like Prime Basement Renovations to get an accurate estimate tailored to your needs. We can help you prioritize your budget, suggest cost-saving options, and ensure the project is completed on time and to your specifications.
          </p>
        </div>
      {/* <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD?.map((head) => (
                <th key={head} className="p-4 pt-10 border border-[#838383] bg-[#E1FFFE]">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none text-lg font-bold text-black "
                  >
                    <h3 className="text-[20px] font-bold text-black">{head}</h3>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS?.map(({ number, img, title, vinyl, fiberglass, concrete, icf }) => {
              return (
                <tr key={number}>
                  <td className="p-4 border border-[#838383] bg-[#E1FFFE]">
                    <Image className="w-[46px] h-[46px] mx-auto" src={img} alt="time" width={46} height={46}/>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      <h4 className="text-center pt-[10px] text-lg font-bold text-black">{title}</h4>
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px] border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {vinyl}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {fiberglass}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {concrete}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px]  border border-[#838383] bg-[#E1FFFE]">
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-base 5xl:text-lg text-center font-normal text-black"
                    >
                      {icf}
                    </Typography>
                  </td>
                </tr>
                
              );
            })}
          </tbody>
        </table>
      </Card> */}
    </div>
  );
};

export default BasementRenovationsContractors;
