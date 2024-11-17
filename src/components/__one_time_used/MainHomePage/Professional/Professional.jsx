import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Professional = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/professional.png" alt="professional" width={813} height={662} className='w-full'/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.professional__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Professional Basement Renovation Contractors in Toronto</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>At Prime Basement Renovations, we pride ourselves on being a professional basement renovation contractor in Toronto dedicated to transforming your basement into a beautiful and functional space. We understand that renovating a basement can be a significant investment, so we prioritize quality and craftsmanship in every detail. Our contractors are well-versed in the latest building codes and construction techniques, allowing us to create safe, durable, and stylish spaces that enhance your home's value.
                    From the initial consultation to the final walkthrough, our approach is centered on collaboration and communication. We work closely with you to understand your vision, budget, and timeline, providing tailored solutions that fit your needs. Whether you want to create a cozy family area, a home office, or an entertainment zone, our team will bring your ideas to life with precision and care. Our commitment to excellence has earned us a reputation as one of Toronto's most trusted basement renovation contractors. If you're looking for professional basement renovation contractors in Toronto who will treat your project with the utmost care and professionalism, look no further than Prime Basement Renovations.</p>
                </div>
            </div>
        </div>
    );
};

export default Professional;