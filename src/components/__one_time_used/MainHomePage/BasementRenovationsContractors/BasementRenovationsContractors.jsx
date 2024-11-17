"use client";
import React from "react";
import "./BasementRenovationsContractors.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import { Card, Typography } from "@material-tailwind/react";

// const TABLE_HEAD = [
//   "",
//   "Vinyl Pools",
//   "Fiberglass Pools",
//   "Concrete Pools",
//   "ICF Pools (Insulated Concrete Form)",
// ];

// first table row 
const TABLE_ROWS = [
  {
    id: 1,
    img: "/assets/primeBasementHomePage/average_cost.png",
    title: (
      <span>Average Costs</span>
    ),
    desc : (
      <>
        <span>Average Basement Renovation <br/> Costs in Toronto</span>
      </>
    ),
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Basic renovation (finishing a basement):-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">This includes drywall installation, flooring (carpet, laminate, or basic <br/> vinyl), painting, and lighting. It's ideal if you're turning an unfinished <br/> space into a simple living area or storage space.</span>
      </>
    ),
    fiberglass: (
      <>
        <p>
        Cost: $20,000 to $35,000
        </p>
      </>
    )
  },
  {
    id: 2,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Mid-Range Renovation (Additional Features):-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">This type of renovation often includes upgraded flooring (hardwood or <br/> tile), custom cabinetry, improved lighting, and basic plumbing or <br/> electrical work.</span>
      </>
    ),
    fiberglass: (
      <>
        <p>
        Cost: $35,000 to $60,000
        </p>
      </>
    )
  },
  {
    id: 3,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">High-end renovation (luxury basement remodel):-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">If you're creating a high-end living space with features like a home <br/> theater, wet bar, luxury bathroom, custom storage solutions, or adding <br/> separate rooms (like bedrooms or a full kitchen), the costs can go up. </span>
      </>
    ),
    fiberglass: (
      <>
        <p>
        Cost: $60,000 to $100,000+
        </p>
      </>
    )
  },
  {
    id: 4,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Basement Apartments or Legal Suites:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">Converting your basement into a legal rental apartment or suite <br/> involves additional work such as soundproofing, meeting building code <br/> requirements, adding a separate entrance, and installing kitchen.</span>
      </>
    ),
    fiberglass: (
      <>
        <p>
        Cost: $80,000 to $150,000+
        </p>
      </>
    )
  },
];
// second table row 
const TABLE_ROWS1 = [
  {
    id: 1,
    img: "/assets/primeBasementHomePage/average_cost.png",
    title: (
      <span>Factors Affecting Costs</span>
    ),
    desc : (
      <>
        <span>Factors Affecting Basement <br/> Renovation Costs</span>
      </>
    ),
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Size of the Basement:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">Larger basements will naturally cost more to renovate. Costs are often calculated with prices ranging from <br/> <strong>$50 to $150+</strong> per square foot, depending on the complexity and materials.</span>
      </>
    )
  },
  {
    id: 2,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Layout and Design:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">The more complex the design (e.g., creating separate rooms, adding a bathroom or kitchen, or reshaping the <br/> space), the higher the costs will be.</span>
      </>
    )
  },
  {
    id: 3,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Materials:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">High-quality flooring (hardwood, tile, or custom options), premium lighting, and high-end fixtures will <br/> increase renovation costs.</span>
      </>
    )
  },
  {
    id: 4,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Plumbing and Electrical Work:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">If you need to add a bathroom, kitchen, or wet bar or upgrade your electrical system to accommodate new <br/> appliances, these costs can add up quickly.</span>
      </>
    )
  },
  {
    id: 5,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Permit Fees:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">In Toronto, certain basement renovations (especially those involving plumbing, electrical work, or structural <br/> changes) will require permits. The cost of permits varies depending on the nature of the work and the <br/> municipality.</span>
      </>
    )
  },
  {
    id: 6,
    vinyl: (
      <>
        <span className="text-lg font-bold text-black leading-normal">Professional Labor:-</span> <br/>
        <span className="text-lg font-normal text-black leading-[35px]">Hiring a licensed contractor, electrician, plumber, and designer will factor into your budget.</span>
      </>
    )
  },
];

const BasementRenovationsContractors = () => {
  return (
    <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.ourBasementRenovation__IconText} />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Our Basement Renovation Contractors Do's and Don'ts
        </h2>
        <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>">
          The cost of basement renovation in Toronto can vary widely depending
          on several factors, including the scope of the project, the size of
          your basement, the quality of materials used, and the complexity of
          the work involved. However, here's a general breakdown to give you an
          idea of what to expect: The cost of basement renovations in Toronto
          can vary significantly based on your goals, the level of
          customization, and the features you want to include. It's important to
          consult with a professional renovation company like Prime Basement
          Renovations to get an accurate estimate tailored to your needs. We can
          help you prioritize your budget, suggest cost-saving options, and
          ensure the project is completed on time and to your specifications.
        </p>
      </div>
      {/* first cart  */}
      <Card className="h-full w-full overflow-scroll mt-[25px]">
        <table className="w-full min-w-max table-auto text-left">
          {/* <thead>
            <tr>
              {TABLE_HEAD?.map((head) => (
                <th
                  key={head}
                  className="p-4 pt-10 border border-[#838383] bg-[#E1FFFE]"
                >
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
          </thead> */}
          <tbody>
            {TABLE_ROWS?.map(
              ({ number, img, title, desc, vinyl, fiberglass }) => {
                return (
                  <tr key={number}>
                    <td className="p-4 cart__bg">
                      {
                        img && <Image
                        className="w-[46px] h-[46px]"
                        src={img}
                        alt="time"
                        width={46}
                        height={46}
                      />
                      }
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        <h4 className="text-left pt-[15px] text-[22px] font-bold text-black leading-normal">
                          {title}
                        </h4>
                        <p className="text-lg text-left font-normal leading-[25px] text-black">{desc}</p>
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px] cart__bg">
                      <Typography
                        variant="small"
                        className=""
                      >
                        {vinyl}
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px] cost__bg">
                      <Typography
                        variant="small"
                        className="text-lg font-bold text-center leading-[35px] text-black"
                      >
                        {fiberglass}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
      {/* second cart  */}
      <Card className="h-full w-full overflow-scroll mt-[25px]">
        <table className="w-full min-w-max table-auto text-left">
          {/* <thead>
            <tr>
              {TABLE_HEAD?.map((head) => (
                <th
                  key={head}
                  className="p-4 pt-10 border border-[#838383] bg-[#E1FFFE]"
                >
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
          </thead> */}
          <tbody>
            {TABLE_ROWS1?.map(
              ({ number, img, title, desc, vinyl }) => {
                return (
                  <tr key={number}>
                    <td className="p-4 cart__bg">
                      {
                        img && <Image
                        className="w-[46px] h-[46px]"
                        src={img}
                        alt="time"
                        width={46}
                        height={46}
                      />
                      }
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        <h4 className="text-left pt-[15px] text-[22px] font-bold text-black leading-normal">
                          {title}
                        </h4>
                        <p className="text-lg text-left font-normal leading-[25px] text-black">{desc}</p>
                      </Typography>
                    </td>
                    <td className="py-[4px] px-[17px] cart__bg">
                      <Typography
                        variant="small"
                        className=""
                      >
                        {vinyl}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default BasementRenovationsContractors;
