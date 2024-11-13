import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Experienced = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/experienced.png" alt="experienced" width={803} height={730} className='w-full'/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.experienced__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Experienced Basement Renovation Services Toronto</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Prime Basement Renovations offers experienced basement renovation services in Toronto, providing homeowners with the expertise needed to transform their basements into beautiful, functional spaces. Our skilled team is dedicated to delivering high-quality craftsmanship and personalized solutions tailored to your specific needs. With years of experience in the industry, we understand the nuances of basement renovations, from addressing potential moisture issues to optimizing layout and design. We work closely with you throughout the process, starting with an in-depth consultation to understand your vision and preferences. Our designers will help you create a customized plan that reflects your style while ensuring maximum functionality. At Prime Basement Renovations, we use only the best materials and cutting-edge techniques to ensure your renovation is durable and visually appealing. We have the skills and knowledge to add an extra bedroom, create a home theater, or build a recreational area to make your ideas a reality. Our commitment to customer satisfaction means we prioritize open communication and transparency in every project. If you're ready to elevate your basement, trust Prime Basement Renovations for experienced basement renovation services in Toronto. Contact us today to discuss your project and get started on your journey to a stunning new basement!</p>
                </div>
            </div>
        </div>
    );
};

export default Experienced;