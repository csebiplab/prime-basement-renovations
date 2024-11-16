import React from "react";
import "./ContactNow.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";

const ContactNow = () => {
  return (
    <div className="container padding__all">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[27px]">
        <div className="md:col-span-2">
          <div>
            <HeadingIcon text={headingIconText.contactNow__IconText} />
          </div>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
            Get Free Professional Consultation
          </h2>
          <ul className="pt-[26px]">
            <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px]"> <Image src="/assets/primeBasementHomePage/icons/map.png" alt="map icon" width={28} height={28}/> <Link className="text-black" href="location:163 Bowes rd, Toronto">163 Bowes rd, Toronto</Link> </li>
            <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px] py-[33px]"> <Image src="/assets/primeBasementHomePage/icons/phone.png" alt="phone icon" width={28} height={28}/> <Link className="text-black" href="tel:647-449-9512">647-449-9512</Link></li>
            <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px]"> <Image src="/assets/primeBasementHomePage/icons/mail.png" alt="mail icon" width={28} height={28}/> <Link className="text-black" href="mailto:basement Renovation@gmail.com">basement Renovation@gmail.com</Link></li>
            <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px] pt-[33px]">
            <Image src="/assets/primeBasementHomePage/icons/clock.png" alt="clock icon" width={28} height={28}/>
              {" "}
              <span><strong>Mon & SUN</strong> by Appointment{" "}
              <strong>TUE - SAT</strong> (10am - 7pm)</span>
            </li>
          </ul>
          <div className="mt-[35px]">
            <button className="flex items-center gap-[5px] text-base text-white font-bold leading-normal py-[15px] px-[10px] rounded-[8px] bg-primary-700">
              Make Appointment{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
              >
                <path
                  d="M1 5.16992C0.585786 5.16992 0.25 5.50571 0.25 5.91992C0.25 6.33414 0.585786 6.66992 1 6.66992V5.16992ZM21.5303 6.45025C21.8232 6.15736 21.8232 5.68249 21.5303 5.38959L16.7574 0.616621C16.4645 0.323728 15.9896 0.323728 15.6967 0.616621C15.4038 0.909514 15.4038 1.38439 15.6967 1.67728L19.9393 5.91992L15.6967 10.1626C15.4038 10.4555 15.4038 10.9303 15.6967 11.2232C15.9896 11.5161 16.4645 11.5161 16.7574 11.2232L21.5303 6.45025ZM1 6.66992H21V5.16992H1V6.66992Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:col-span-3">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.9407491954576!2d0.12261867609581635!3d51.55098547182316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a5b168f1a7ff%3A0x2a120e6e2ebb8a0e!2s16%20Bowes%20Rd%2C%20Dagenham%20RM8%202XJ%2C%20UK!5e0!3m2!1sen!2sbd!4v1731768175688!5m2!1sen!2sbd"
            width="822"
            height="544"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactNow;
