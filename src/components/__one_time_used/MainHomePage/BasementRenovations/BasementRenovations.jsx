import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const BasementRenovations = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/basementRenovations.png" alt="basement renovations" width={812} height={662} className='w-full'/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.basementRenovations__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Best Basement Renovations 
                    in Toronto</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Regarding the best basement renovators in Toronto, Prime Basement Renovations stands out as a leader in the industry. Our commitment to quality and customer satisfaction ensures your renovation experience is seamless and rewarding. We specialize in turning ordinary basements into extraordinary living spaces tailored to your needs. Whether you want to create a cozy family retreat, a stylish guest suite, or a functional home office, our expert team brings years of experience and creativity to every project. At Prime Basement Renovations, we understand the unique challenges of renovating basements, from moisture management to maximizing space. Our skilled designers and contractors work closely with you to develop a comprehensive plan that addresses your vision while adhering to local building codes. We use high-quality materials and the latest construction techniques to ensure that your renovated basement looks fantastic and stands the test of time. Our focus on detail and craftsmanship guarantees that every aspect of your renovation is executed. Choose Prime Basement Renovations for the best basement renovations in Toronto and experience the transformation of your basement into a space that enhances your home and lifestyle.</p>
                </div>
            </div>
        </div>
    );
};

export default BasementRenovations;