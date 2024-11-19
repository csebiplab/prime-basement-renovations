import Image from "next/image";
import Link from "next/link";

import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import "./footer.css";
import { footerLinks } from "./Footer.utilities";

const socialIcons = [
  "/assets/primeBasementHomePage/icons/instragram.png",
  "/assets/primeBasementHomePage/icons/youtube.png",
  "/assets/primeBasementHomePage/icons/linkedin.png",
  "/assets/primeBasementHomePage/icons/facebook.png",
];
const Footer = () => {
  return (
    <div className="">
      <div className="container footer__bg ">
        <footer className="px-5 lg:px-[35px] !text-black !z-50 py-[20px] md:py-[27px]">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[17px] justify-center">
              <div className="w-full lg:w-auto">
                <div className="mx-auto flex justify-start">
                  <Image
                    src="/assets/primeBasementHomePage/footer__logo.png"
                    alt="footer logo"
                    width={153}
                    height={88}
                  />
                </div>
                <p className="text-black py-6 leading-[200%] text-start">
                  Trust our professional basement renovation contractors in
                  Toronto to transform your basement into a beautiful and
                  functional space you'll love for years. Contact us today to
                  get started!
                </p>
                {/* social icon */}
                <div className="flex items-center justify-start gap-[15px]">
                  {
                    socialIcons?.map((icon, index)=>{
                      return <div key={index} className="">
                        <Image className="w-[45px] h-[45px] social_icon_bg p-[10px]" src={icon} alt="social icon" width={25} height={25} />
                      </div>
                    })
                  }
                </div>
              </div>

              {/* Mapping through footer links */}
              {footerLinks.map((category, index) => (
                <div
                  key={index}
                  className={`mt-5 md:mt-0 text-start ${
                    category.cat === "News" ? "justify-self-center" : ""
                  }`}
                >
                  <p className="text-black !text-xl mb-5 font-bold">
                    {category.cat}
                  </p>
                  <ul>
                    {category.links.map((link, idx) => (
                      <li key={idx} className="mb-9">
                        <Link href={link.url}>
                          <span className="text-black !text-base !font-normal">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="w-full lg:w-auto text-start">
                <p className="text-black !text-xl mb-5 font-bold">Contact Us</p>

                <ul className="">
                  <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px]">
                    {" "}
                    <Image
                      src="/assets/primeBasementHomePage/icons/map.png"
                      alt="map icon"
                      width={28}
                      height={28}
                    />{" "}
                    <Link
                      className="text-black"
                      href="location:163 Bowes rd, Toronto"
                    >
                      163 Bowes rd, Toronto
                    </Link>{" "}
                  </li>
                  <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px] py-[30px]">
                    {" "}
                    <Image
                      src="/assets/primeBasementHomePage/icons/phone.png"
                      alt="phone icon"
                      width={28}
                      height={28}
                    />{" "}
                    <Link className="text-black" href="tel:647-449-9512">
                      647-449-9512
                    </Link>
                  </li>
                  <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px]">
                    {" "}
                    <Image
                      src="/assets/primeBasementHomePage/icons/mail.png"
                      alt="mail icon"
                      width={28}
                      height={28}
                    />{" "}
                    <Link
                      className="text-black"
                      href="mailto:basement Renovation@gmail.com"
                    >
                      basement Renovation@gmail.com
                    </Link>
                  </li>
                  <li className="flex items-center gap-[15px] text-black text-base font-normal leading-[25px] pt-[30px]">
                    <Image
                      src="/assets/primeBasementHomePage/icons/clock.png"
                      alt="clock icon"
                      width={28}
                      height={28}
                    />{" "}
                    <span className="text-black">
                      <strong className="text-black">Mon & SUN</strong> by
                      Appointment{" "}
                      <strong className="text-black">TUE - SAT</strong> (10am -
                      7pm)
                    </span>
                  </li>
                </ul>

                <div className="block md:hidden">
                  <div className="h-[1px] bg-[#8E8E8E] w-full mt-9 mb-4" />
                  <div className="text-center lg:text-left">
                    <p className="text-sm lg:text-base text-black">
                    © All Copyright 2024 by Prime Basement Renovations
                    </p>
                    <ul className="text-sm lg:text-base flex justify-evenly gap-2 mt-4">
                      <li className="text-white">
                        <Link href="/" className="text-black">
                          Terms & Condition
                        </Link>
                      </li>
                      <li className="text-white">
                        <Link href="/" className="text-black">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* creater company credit */}
      <div className="">
        <div className="container footer-bottom-bg flex flex-col lg:flex-row justify-between items-center py-2">
          <div className="flex justify-center items-center mb-2 lg:mb-0">
            <p className="text-sm md:text-base font-semibold text-white mr-[14px] lg:mr-4">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/primeBasementHomePage/gokundu-logo.png"
              alt="Gokundo"
              width={141}
              height={36}
              className="w-[114px] h-[30px] md:w-[141px] md:h-9"
            />
          </div>
          <div className="text-center lg:text-left hidden md:block">
            <p className="text-sm lg:text-base text-white">
            © All Copyright 2024 by Prime Basement Renovations
            </p>
          </div>
          <div className="text-center lg:text-right hidden md:block">
            <ul className="text-sm lg:text-base flex justify-evenly gap-2">
              <li className="text-white">
                <Link href="/" className="text-white">
                  Terms & Condition
                </Link>
              </li>
              <li className="text-white">
                <Link href="/" className="text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
