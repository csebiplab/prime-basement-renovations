import React from "react";
import "./BasementWalkoutInTorontoBanner.css";
import Link from "next/link";

const BasementWalkoutInTorontoBanner = () => {
  return (
    <div className="banner__bg py-[62px] md:py-[75px] lg:py-[88px] xl:py-[101px] 2xl:py-[114px] 3xl:py-[127px] 4xl:py-[140px] 5xl:py-[158px]">
      <div className="container h-full flex flex-col items-start justify-center">
        <h1 className="text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] 3xl:text-[50px] 4xl:text-[52px] 5xl:text-[55px] font-bold text-white leading-normal">
          Basement Renovation <br /> in Toronto
        </h1>
        <p className="text-lg font-normal text-white leading-normal">
          Prime Basement Renovations offers top-notch basement renovation in{" "}
          <br className="hidden md:block"/> Toronto, enhancing your home with style, function, and quality{" "}
          <br className="hidden md:block" /> finishes.
        </p>
        <div className="mt-[35px]">
          <button className="flex items-center gap-[10px] py-[15px] px-[12px] text-base font-bold text-white leading-normal rounded-[8px] bg-primary-700">
            <Link className="text-white" href="tel:647-449-9512">Get a Free Quote</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
            >
              <path
                d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989593 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM1 6.75H21V5.25H1V6.75Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasementWalkoutInTorontoBanner;
