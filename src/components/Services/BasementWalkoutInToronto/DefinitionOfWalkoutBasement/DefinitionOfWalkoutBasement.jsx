import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const DefinitionOfWalkoutBasement = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div data-aos="fade-right" className='md:col-span-1'>
                    <Image src="/assets/basementWalkoutInToronto/definitionOfWalkoutBasement.png" alt="definition of walkout basement" width={812} height={471} className='w-full'/>
                </div>
                <div data-aos="fade-left" className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.definitionOfWalkoutBasement__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>What is a Walkout Basement?</h2>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>A walkout basement is a type of basement that includes a separate entrance, typically with a door that opens directly to the outdoors. Walkout basements are often designed on sloped lots that are fully or partially underground. Additionally, walkout basements can significantly boost a property's value and appeal, particularly in urban areas like Toronto, where additional living space is highly desirable.
                    </p>
                    <p className='text-lg font-normal leading-[35px] text-black text-center md:text-left'>This feature provides convenience, increases natural light, and enhances ventilation, making the basement feel more like an above-ground living space. Walkout basements are commonly used to add functionality to a home, such as creating rental units, guest suites, home offices, or recreation areas. If you're considering adding or upgrading a walkout basement, trust professionals like Prime Basement Renovations to deliver exceptional results tailored to your home's needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DefinitionOfWalkoutBasement;