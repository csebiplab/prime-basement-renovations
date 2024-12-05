import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-right" className='md:col-span-1'>
                    <Image src="/assets/basementWalkoutInToronto/aboutUs.png" alt="about Us" width={813} height={802} className='w-full h-[424px] md:h-[802px]'/>
                </div>
                <div data-aos="fade-left" className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.aboutUs__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>About Our Basement Excavation Company</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>At Prime Basement Renovations, we specialize in professional basement excavation services in Toronto, delivering precision and expertise to every project. With years of experience, our team is equipped to handle the most complex excavation needs, whether adding a basement walkout, increasing ceiling height, or laying the foundation for a new basement space. We prioritize safety, efficiency, and adherence to local regulations, ensuring your project is completed on time and to the highest standards. Our process begins with a detailed assessment of your property to ensure that every excavation aspect is carefully planned and executed. We use state-of-the-art equipment and proven techniques to minimize disruption to your property while delivering exceptional results.
                    </p>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left'>At Prime Basement Renovations, we understand that every project is unique. That's why we work closely with you to customize our services to meet your specific needs, whether it's creating additional living space, preparing for a home extension, or enhancing the value of your property. With a strong emphasis on transparency and communication, we keep you informed at every project stage, ensuring your peace of mind. Trust our skilled professionals to handle every detail, from initial permits to the final cleanup. Experience the difference with Prime Basement Renovations—your go-to expert for basement excavation in Toronto. Choose Prime Basement Renovations for reliable, high-quality basement excavation services that transform your vision into reality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;