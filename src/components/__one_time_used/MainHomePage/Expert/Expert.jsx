import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Expert = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/expert.png" alt="expert" width={813} height={697} className='w-full'/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.expert__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Expert, Well Equipped Renovation Contractors</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Prime Basement Renovations is proud to be recognized as an expert, well-equipped renovation contractor specializing in basement transformations. Our team of seasoned professionals brings extensive knowledge and experience to every project, ensuring that your renovation is executed to the highest standards. We understand that a successful renovation requires skill, the right tools, and equipment. Our contractors are fully equipped with state-of-the-art technology and high-quality materials, allowing us to tackle any challenge efficiently and effectively. From initial design to final touches, we utilize our expertise and advanced tools to create beautiful, functional spaces that enhance your home.Our commitment to excellence is reflected in our comprehensive services, which include design consultation, structural modifications, plumbing and electrical work, and stunning finishes. We collaborate closely with our clients to ensure their vision is realized, providing personalized solutions that meet their unique needs. At Prime Basement Renovations, we prioritize quality craftsmanship, clear communication, and customer satisfaction. Trust our expert, well-equipped renovation contractors to turn your basement into a space you'll love for years. Contact us today to discuss your project and experience the difference that expertise and professionalism can make!</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;