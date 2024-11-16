import Image from "next/image";

const UpperNavbar = () => {
  return (
    <nav className="container py-2 bg__uppernav hidden md:block">
      <div className="flex items-center justify-between">
        <p className="text-base font-normal leading-normal text-black">
          For <strong className="font-bold">premium basement renovation</strong> in <span className="text-primary-600 font-bold">Toronto</span>
        </p>

        <div className="flex items-center gap-[35px]">
          <ul className="flex items-center gap-[35px]">
            <li className="text-base font-normal leading-normal text-primary-500 cursor-pointer">About Us</li>
            <li className="text-base font-normal leading-normal text-primary-500 cursor-pointer">Gallery</li>
            <li className="text-base font-normal leading-normal text-primary-500 cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex items-center gap-[5px]">
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
              <p className="text-xs text-black font-normal leading-normal ">Service Support 24/7</p>
              <p className="text-base font-bold leading-normal text-black">647-449-9512</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
