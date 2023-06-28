import React from 'react';
import Button from '../commons/button';
import { Dot } from '../../imageSrc';

const HomeLeft = () => {
    return (
        <div className='md:w-[60%] '>
            <h1 className='md:text-5xl text-4xl font-bold mb-10'>DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
            <p className='md:w-[62%] text-xl md:mb-10 mb-5'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
            <div className='relative'>
                <img className='md:ml-[-40px] w-[28%]' src={Dot} alt="" />
                <div className='absolute top-0'>
                    <div>
                        <Button name={'Explore Now'} />
                    </div>
                    <div className='flex mt-10 gap-6'>
                        <div>
                            <h1 className='md:text-5xl text-4xl font-bold'>98K+</h1>
                            <p className='text-xl ml-2  '>Artwork</p>
                        </div>
                        <div>
                            <h1 className='md:text-5xl text-4xl font-bold'>15K+</h1>
                            <p className='text-xl ml-2 '>Action</p>
                        </div>
                        <div>
                            <h1 className='md:text-5xl text-4xl font-bold'>12K+</h1>
                            <p className='text-xl ml-2'>Artist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLeft;