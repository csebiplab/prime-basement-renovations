"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UpperNavbar from "./UpperNavbar";
import "./NavHeader.css";

// our services nav menu
// const our_service_menu_items = {
//   interior: [
//     // {
//     //   title: "Swimming Pool Installation In Vaughan",
//     //   route: "/swimming-pool-installation-in-vaughan",
//     // },
//   ],
// };

// function OurServiceManu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = (data = []) => {
//     return data?.map(({ route, title }, key) => (
//       <Link href={route} key={key}>
//         <MenuItem className="rounded-md">
//           <Typography color="blue-gray">{title}</Typography>
//         </MenuItem>
//       </Link>
//     ));
//   };

//   return (
//     <>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//         className="bg-gray-100"
//       >
//         <MenuHandler>
//           <div
//             className="font-medium text-lg"
//             aria-expanded={isMenuOpen} // Dynamically set the value based on the menu state
//             aria-haspopup="true" // Indicating this element triggers a popup
//             id=":RrarjtaH2:"
//             role="button"
//           >
//             <ListItem
//               className="flex items-center text-lg text-dark-500 font-bold px-1 lg:px-4 xl:px-5 2xl:px-6 -mt-[9px]"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Our Services
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </div>
//         </MenuHandler>
//         <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
//           <div className="container grid grid-cols-3 gap-y-2">
//             <div>
//               <h3 className="mb-1 text-primary-600 font-semibold">Interior</h3>
//               <ul>
//                 <li>{renderItems(our_service_menu_items.interior)}</li>
//               </ul>
//             </div>
//           </div>
//         </MenuList>

//         {isMobileMenuOpen ? (
//           <>
//             <div className="block lg:hidden">
//               <Collapse open={isMobileMenuOpen}>
//                 <h4 className="text-primary-600 mb-1 font-semibold">
//                   Interior
//                 </h4>
//                 <ul>
//                   <li>{renderItems(our_service_menu_items.interior)}</li>
//                 </ul>
//                 <hr className="my-1" />
//               </Collapse>
//             </div>
//           </>
//         ) : (
//           ""
//         )}
//       </Menu>
//     </>
//   );
// }

// our services nav list end
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center border-0 outline-none ">
      <div className="border-b-2 md:border-0 border-bg-primary-500">
        <Typography
          as={Link}
          href="/"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full text-sm lg:text-sm xl:text-base 2xl:text-lg"
        >
          <ListItem className="flex items-start md:items-center text-base text-black font-bold leading-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
            Design and Planning
          </ListItem>
        </Typography>
      </div>

      {/* <div className="mt-[6px]">
        <OurServiceManu />
      </div> */}
      <div className="border-b-2 md:border-0 border-bg-primary-500">
        <Typography
          as={Link}
          href="/"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
        >
          <ListItem className="flex items-start md:items-center text-base text-black font-bold leading-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
            Waterproofing
          </ListItem>
        </Typography>
      </div>

      <div className="border-b-2 md:border-0 border-bg-primary-500">
        <Typography
          as={Link}
          href="/"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
        >
          <ListItem className="flex items-start md:items-center text-base text-black font-bold leading-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
            Plumbing Installation
          </ListItem>
        </Typography>
      </div>

      <div className="border-b-2 md:border-0 border-bg-primary-500">
        <Typography
          as={Link}
          href="/"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg "
        >
          <ListItem className="flex items-start md:items-center text-base text-black font-bold leading-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
            Flooring Installation
          </ListItem>
        </Typography>
      </div>
    </List>
  );
}

export function NavHeader() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="container block md:hidden">
        <div className="container w-full flex justify-center items-center gap-[5px] pt-1">
          <Image
            src="/assets/primeBasementHomePage/icons/canada.png"
            alt="canada icon"
            width={24}
            height={26}
            className="w-[24px] h-[26px]"
          />
          <marquee className="w-full" direction="left">
            <p className=" text-base font-normal leading-normal text-black">
              For{" "}
              <strong className="font-bold">premium basement renovation</strong>{" "}
              in <span className="text-primary-600 font-bold">Toronto,</span>{" "}
              trust <strong>Prime Basement Renovations</strong> to create
              stylish, functional spaces tailored to your needs.
            </p>
          </marquee>
        </div>
      </div>
      <UpperNavbar />
      <header className="sticky top-0 z-50">
        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-1 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" aria-label="Home">
                <Image
                  // src="/assets/primeBasementHomePage/nav__logo.png"
                  src="/assets/primeBasementHomePage/footer__logo.png"
                  alt="nav logo"
                  width={90}
                  height={60}
                  className="w-full"
                />
                <span className="sr-only">Home</span>
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>

              <div className="flex gap-x-4">
                <div className="">
                  <button className="flex items-center gap-[10px] py-[10px] md:py-[15px] px-[12px] text-base font-bold text-white leading-normal rounded-[8px] bg-primary-700">
                    <Link className="text-white" href="tel:647-449-9512">
                      Get a Free Quote
                    </Link>
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
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden !pl-4"
                  aria-label="Menu"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <Image
                      src="/assets/images/menu_bar.jpg"
                      alt="menu bar"
                      width={50}
                      height={50}
                    />
                  ) : (
                    <Image
                      src="/assets/images/menu_bar.jpg"
                      alt="menu bar"
                      width={50}
                      height={50}
                    />
                  )}
                  <span className="sr-only">Menu</span>
                </IconButton>
                {/* <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden !pl-4"
                  aria-label="Menu"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Image
                      src="/assets/primeBasementHomePage/menu_bar.png"
                      alt="menu bar"
                      width={39}
                      height={39}
                    />
                  )}
                  <span className="sr-only">Menu</span>
                </IconButton> */}
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <Drawer
        placement="left"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="paragraph" color="blue-gray">
            {/* Prime Basement Renovation */}
            <Image
              src="/assets/primeBasementHomePage/prime_basement_renovation_choose_us.png"
              alt="nav logo"
              width={90}
              height={60}
              className="w-full"
            />
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="!pl-4"
            aria-label="Menu"
            onClick={() => setOpenNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </IconButton>
        </div>
        <ul>
          <li className="text-lg font-bold text-primary-500 leading-normal border-b-2 border-bg-primary-500 pb-[15px] ">
            Home
          </li>
        </ul>
        <NavList />
        <ul>
          <li className="text-lg font-bold text-primary-500 leading-normal border-b-2 border-bg-primary-500 pb-[15px]">
            About Us
          </li>
          <li className="text-lg font-bold text-primary-500 leading-normal border-b-2 border-bg-primary-500 py-[15px]">
            Gallery
          </li>
          <li className="text-lg font-bold text-primary-500 leading-normal border-b-2 border-bg-primary-500 py-[15px]">
            Contact us
          </li>
        </ul>

        <div className="flex items-center gap-[5px] py-[35px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M16.6322 0C12.1132 0 8.11363 2.41009 5.6927 6.08795C6.19373 6.43715 6.68211 6.91602 7.15446 7.53162C8.96055 4.64653 11.8807 2.62235 15.2596 2.18721L16.632 4.66831L18.0044 2.18716C23.1981 2.85586 27.3264 7.2661 27.9527 12.8147L25.6298 14.2811L27.9527 15.7476C27.5341 19.4572 25.5455 22.651 22.7243 24.5651C22.904 25.0028 23.0051 25.4503 23.023 25.9116C23.0362 26.2488 23.0037 26.5673 22.9383 26.8698C27.1377 24.4591 30 19.7213 30 14.2814C30 6.40641 24.0034 0 16.6322 0ZM20.0435 23.52C16.9619 20.8741 16.1002 22.1747 14.7019 23.6683C13.7257 24.7116 11.2554 22.5331 9.12246 20.2542C6.98932 17.9751 4.95054 15.3363 5.92662 14.2933C7.32496 12.7997 8.54201 11.8785 6.06471 8.58723C3.58824 5.2947 1.93736 7.82247 0.582897 9.2696C-0.980824 10.9396 0.500495 17.163 6.25785 23.3148C12.016 29.4656 17.8413 31.0472 19.4041 29.3778C20.7584 27.9306 23.1251 26.1672 20.0435 23.52ZM10.6582 16.5163C10.6582 13.5899 13.865 13.0686 13.865 11.9266C13.865 11.3725 13.4498 11.1399 13.0657 11.1399C12.3601 11.1399 11.9661 11.9821 11.9661 11.9821L10.617 11.0177C10.617 11.0177 11.3019 9.3105 13.2321 9.3105C14.446 9.3105 15.7639 10.0534 15.7639 11.7383C15.7639 14.2106 12.7752 14.6874 12.7233 15.7074H15.8782V17.3701H10.7413C10.6893 17.0598 10.6582 16.7828 10.6582 16.5163ZM16.6368 14.2773L19.5012 9.44331H21.7219V13.8448H22.6038V15.452H21.7219V17.3702H19.9264V15.452H16.6369L16.6368 14.2773ZM19.9264 13.8447V12.0709C19.9264 11.6385 19.9887 11.1839 19.9887 11.1839H19.9679C19.9679 11.1839 19.8125 11.6718 19.6046 12.0043L18.4842 13.8227V13.8448L19.9264 13.8447Z"
                fill="#DF1F26"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs text-black font-normal leading-normal ">
              Service Support 24/7
            </p>
            <p className="text-base font-bold leading-normal text-black">
              <Link className="text-black" href="tel:647-449-9512">
                647-449-9512
              </Link>
            </p>
          </div>
        </div>
        {/* button  */}
        <div className="">
          <button className="flex items-center gap-[10px] py-[15px] px-[12px] text-base font-bold text-white leading-normal rounded-[8px] bg-primary-700">
            <Link className="text-white" href="tel:647-449-9512">
              Get a Free Quote
            </Link>
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
      </Drawer>
    </>
  );
}
