import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-right" className='md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/aboutUs.png" alt="about Us" width={808} height={764} className='w-full'/>
                </div>
                <div data-aos="fade-left" className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.aboutUs__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>About Our Toronto Basement Renovation Company</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Prime Basement Renovations is a leading basement renovation company in Toronto, dedicated to transforming underutilized spaces into stylish, functional areas. With a focus on quality craftsmanship and personalized design, we bring your vision to life, whether you're looking to add a cozy family room, a home office, or a modern entertainment space. Our team works closely with clients to ensure each project meets high standards, delivering beautiful and practical results. We prioritize open communication and transparency from the initial consultation to the final walkthrough. Our designers collaborate with you to create a layout that suits your lifestyle, while our experienced contractors execute the plan with precision and care. Whether you envision a sleek, modern look or a warm, inviting atmosphere, we tailor our services to match your unique style. At Prime Basement Renovations, we understand that your basement is an extension of your home, and we are committed to maximizing its potential. Our skilled team utilizes the latest techniques and high-quality materials to ensure durability and aesthetic appeal. We take pride in our attention to detail and strive to exceed our clients's expectations at every stage of the renovation process. Additionally, we stay up-to-date with the latest trends and building codes to ensure your renovation looks great and complies with safety regulations. Our commitment to excellence has earned us a reputation as one of Toronto's most trusted basement renovation companies.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;