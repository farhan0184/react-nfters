import React from 'react';
import { fastTransaction, growth } from '../../imageSrc';

const About = () => {
    return (
        <div className='bg-[#D9E0EC]/20 md:mt-0 mt-[500px]'>
            <div className='flex md:flex-row flex-col md:h-[350px] h-[500px] w-[90%] mx-auto  items-center md:gap-3  gap-10 justify-center'>
            <div className='md:w-[37%] w-full'>
                <h1 className='text-4xl text-black font-bold'>THE AMAZING NFT ART OF THE WORLD HERE</h1>
            </div>
            <div className='md:w-[30%] w-full flex'>
                <div className='px-3 mt-1'>
                    <img src={fastTransaction} alt="" width={100} />
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Fast Transaction</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero adipisci eius neque explicabo, inventore sint perferendis sit.
                    </p>
                </div>
            </div>
            <div className='md:w-[30%] w-full flex'>
                <div className='px-3 mt-1'>
                    <img src={growth} alt=""  width={100}/>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Fast Transaction</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero adipisci eius neque explicabo, inventore sint perferendis sit.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;