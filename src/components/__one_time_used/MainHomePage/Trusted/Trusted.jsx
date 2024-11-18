import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Trusted  = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-left" className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/primeBasementHomePage/trusted.png" alt="trusted" width={620} height={767} className='w-full'/>
                </div>
                <div data-aos="fade-right" className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.trusted__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Trusted Basement Renovation Toronto</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Prime Basement Renovations is a trusted, leading basement renovation company in Toronto for transforming underutilized spaces into beautiful, functional living areas. With a commitment to quality craftsmanship, attention to detail, and exceptional customer service, Prime Basement Renovations delivers personalized solutions that enhance the value and comfort of your home. Whether you're looking to create a cozy retreat, a modern entertainment space, or an extra bedroom, our experienced team ensures seamless, stress-free renovations tailored to your needs.Prime Basement Renovations offers a comprehensive range of services, including custom layouts, flooring, lighting, plumbing, and electrical work. Our team works closely with clients to bring their vision to life, delivering projects on time and within budget. With a reputation for reliability and professionalism, Prime Basement Renovations has earned the trust of homeowners across Toronto for transforming basements into beautiful, practical spaces that enhance everyday living. Our renovators collaborate with you to create a layout that suits your lifestyle, while our experienced contractors execute the plan with precision and care. Whether you envision a sleek, modern look or a warm, inviting atmosphere, we tailor our services to match your unique style.</p>
                </div>
            </div>
        </div>
    );
};

export default Trusted ;