import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Elevating  = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-left" className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/elevating.png" alt="elevating" width={630} height={676} className='w-full'/>
                </div>
                <div data-aos="fade-right" className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.elevating__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Elevating Basement Renovation Through Design</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>At Prime Basement Renovations, we specialize in transforming basements into stylish, functional spaces that elevate your home's value and appeal. We bring a design-first approach to every project, ensuring each basement renovation is tailored to your unique vision and lifestyle needs. From creating cozy family rooms and home theaters to modern offices and personal gyms, our team combines craftsmanship with creativity to unlock the potential of your basement. With attention to detail, high-quality materials, and a commitment to customer satisfaction, Prime Basement Renovations is dedicated to making your dream basement a reality. We believe that exceptional design is the cornerstone of any successful basement renovation. Elevating your basement through thoughtful and innovative design enhances its functionality and transforms it into a space that reflects your style and meets your family's needs. Design plays a critical role in maximizing the potential of your basement. Our expert team focuses on creating layouts that optimize space, ensuring that every square foot is utilized effectively. Whether you envision a cozy lounge, a home gym, or a productive workspace, our design specialists work collaboratively to develop a customized plan that aligns with your vision. Contact us today to schedule a consultation and take the first step toward transforming your basement into the space of your dreams!</p>
                </div>
            </div>
        </div>
    );
};

export default Elevating ;