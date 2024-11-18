import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const ReadyToStart = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-right" className='md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/readyToStart.png" alt="ready to start" width={813} height={662} className='w-full'/>
                </div>
                <div data-aos="fade-left" className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.readyToStart__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Ready to Start Your Basement Renovation Project</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Prime Basement Renovations is here to turn your basement dreams into reality! Based in Toronto, we specialize in transforming underutilized basement spaces into functional, beautiful areas that add value to your home. We handle everything from design and planning to finishing touches, ensuring your basement renovation is seamless and stress-free. It can be a game room, a guest suite, or a home gym. No matter the purpose, we tailor each project to create a space that blends functionality with aesthetics, enhancing your lifestyle and property value. From concept to completion, Prime Basement Renovations provides a personalized approach that centers around your vision and budget. Our experts guide you through each phase, offering custom designs and high-quality materials that match your style and needs. With meticulous attention to detail, we ensure that every element—from flooring and lighting to insulation and plumbing—is handled carefully. Choosing Prime Basement Renovations means partnering with a dedicated team that values clear communication, reliability, and top-notch craftsmanship. Ready to take the first step? Contact us today to schedule a consultation and transform your basement into a space you'll love!</p>
                </div>
            </div>
        </div>
    );
};

export default ReadyToStart;