import React from 'react';
import UpperLeft from './upperLeft';
import UpperRight from './upperRight';
import DownFooter from './downFooter';

const Footer = () => {
    return (
        <div className='bg-white pt-16'>
            <div className='w-[90%] mx-auto'>
                <div className='md:flex gap-5'>
                    <UpperLeft/>
                    <UpperRight/>
                </div>

                <div>
                    <DownFooter/>
                </div>
            </div>

        </div>
    );
};

export default Footer;