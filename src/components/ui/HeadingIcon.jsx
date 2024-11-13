import Image from "next/image";

const HeadingIcon = ({ text = "empty text", classes = {} }) => {
  return (
    <div className="flex items-center pb-2">
      <Image
        src="/assets/primeBasementHomePage/headingIcon.png"
        width={31}
        height={17}
        alt="section logo"
        className="h-[17px] w-[31px] mr-2 text-dark text-base"
      />
      <p className={`text-center text-base ${classes?.textWhite}`}>{text}</p>
    </div>
  );
};

export default HeadingIcon;
