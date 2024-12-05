import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./Underpinning.css";

const Underpinning = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[30px]'>
                <div data-aos="fade-right" className='md:col-span-1'>
                    <Image src="/assets/basementWalkoutInToronto/underpinning.png" alt="underpinning image" width={803} height={752} className='w-full'/>
                </div>
                <div data-aos="fade-left" className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.underpinning__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal'>Underpinning for a Basement Walkout Toronto</h2>
                    <p className='text-base 5xl:text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]'>Underpinning is critical in many walkout projects, especially in Toronto, where homes often require structural modifications to support deeper excavation or create a walkout on sloped properties. At Prime Basement Renovations, we specialize in professional underpinning services to ensure your foundation is safe, secure, and compliant with local building codes. Our underpinning process involves carefully strengthening and lowering the existing foundation to create additional headroom or accommodate a new entrance.
                    </p>
                    <p className='text-base 5xl:text-lg font-normal leading-[35px] text-black text-center md:text-left'>Key benefits of underpinning for a basement walkout include:
                    </p>
                    <div className="flex items-center gap-[10px] 2xl:gap-[12px] 5xl:gap-[14px]">
                        <div className="w-[10px] h-[117px] underpinning_bar_bg"/>
                        <div>
                            <p className='text-base 5xl:text-lg font-normal leading-[35px] text-black text-center md:text-left'><strong>Increased Ceiling Height:</strong> This makes your basement feel more open and livable.</p>
                            <p className='text-base 5xl:text-lg font-normal leading-[35px] text-black text-center md:text-left'><strong>Enhanced Structural Stability:</strong> Ensures the safety and longevity of your foundation.</p>
                            <p className='text-base 5xl:text-lg font-normal leading-[35px] text-black text-center md:text-left'><strong>Improved Property Value: </strong> Adds functionality and appeal to your home.</p>
                        </div>
                    </div>
                    <p className='text-base 5xl:text-lg font-normal leading-[35px] text-black text-center md:text-left'>Our experienced team manages the entire process, from engineering assessments to excavation and reinforcement, ensuring minimal disruption to your property. Whether adding a rental unit, expanding living space, or upgrading your home, we provide reliable underpinning solutions tailored to your project needs. Contact Prime Basement Renovations today to discuss underpinning for your walkout and take the first step toward transforming your space!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Underpinning;