import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const ExpertContractor = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-left" className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/basementWalkoutInToronto/expert_contractor.png" alt="expert contractor" width={804} height={763} className='w-full'/>
                </div>
                <div data-aos="fade-right" className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.expertContractors__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Expert Toronto Basement Walkout Contractors</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>When adding a basement walkout to your home, trust the experts at Prime Basement Renovations. As experienced basement contractors in Toronto, we specialize in creating seamless, stylish, and functional separate entrances that enhance your property's value and usability. Our skilled team handles every aspect of the project, including design, excavation, waterproofing, and finishing. We ensure that your walkout meets local building codes, prioritizing safety and durability while delivering a solution that complements your home's aesthetics. Whether creating a private entry for tenants or improving access to your basement, Prime Basement Renovations brings unmatched craftsmanship and attention to detail to every project. At Prime Basement Renovations, we pride ourselves on offering personalized service tailored to your needs. We start with a comprehensive consultation to understand your goals and assess your property's layout and structural requirements. Our team then develops a custom plan that optimizes space, functionality, and curb appeal. We use top-grade materials and the latest techniques to ensure your basement stands the test of time. From proper drainage systems to energy-efficient designs, we take care of every detail, so you don't have to worry about future maintenance issues. As a trusted name in Toronto, we have completed numerous walkout projects for homeowners across the city. Our satisfied clients are a testament to our dedication, professionalism, and outstanding results.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExpertContractor;