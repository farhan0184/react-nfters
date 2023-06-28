import React from 'react';
import { Item2, Item3 } from '../../imageSrc';
import RightTopImg from './rightTopImg';

const HomeRight = () => {
    return (
        <div className='md:w-[40%] md:mt-0 mt-32 relative '>
            <div className='absolute'>
                <RightTopImg/>
            </div>
            <div className='absolute right-10 md:top-6 top-5 -z-20'>
                <img className='md:w-full w-[80%] md:ml-0 ml-16' src={Item2} alt="" />
            </div>
            <div className='absolute md:right-3 right-0 md:top-12 top-10 -z-50'>
                <img className='md:w-full w-[60%] md:ml-0 ml-32' src={Item3} alt="" />
            </div>

        </div>
    );
};

export default HomeRight;