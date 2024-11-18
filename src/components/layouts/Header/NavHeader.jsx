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
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center border-0 outline-none">
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

      {/* <div className="mt-[6px]">
        <OurServiceManu />
      </div> */}

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

      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-base text-black font-bold leading-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
          Flooring Installation
        </ListItem>
      </Typography>
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
      <div className="block md:hidden">
        <p className="text-sm font-normal leading-normal text-center text-black pt-1">
          For <strong className="font-bold">premium basement renovation</strong>{" "}
          in <span className="text-primary-600 font-bold">Toronto</span>
        </p>
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
                <div className="hidden md:block">
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
                <IconButton
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
                </IconButton>
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="p" color="blue-gray">
            Prime Basement Renovation
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
        <NavList />
      </Drawer>
    </>
  );
}
