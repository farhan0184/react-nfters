import React from 'react';
import { Arkhan17, Item1 } from '../../imageSrc';
import { FaEthereum } from 'react-icons/fa';
import Eth from '../commons/Eth';

const RightTopImg = () => {
    return (
        <div className='relative'>
                    <div className='-z-50'>
                        <img className='md:w-full w-[80%]' src={Item1} alt="" />
                    </div>
                    <div className='absolute top-5 md:left-10 left-5 text-white font-semibold'>
                        <h2 className='md:text-3xl text-2xl text-white mb-3'>Abstr Gradient NFT</h2>
                        <div className='flex items-center gap-3'>
                        <img src={Arkhan17} alt="" />
                        <p className='text-xl'>Arkhan17</p>
                        </div>
                    </div>
                    <div className='absolute bottom-5 md:left-10 left-5 '>
                        <div className='bg-white/20 text-white font-semibold md:w-80 w-60 flex justify-between px-3 py-2 rounded-2xl'>
                            <Eth name={'Current Bid'} />
                            <div>
                            <p className='text-[15px] mb-2 ml-1'>Ends in</p>
                            <p>12h 43m 42s</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute md:bottom-36 bottom-24  md:-left-12 '>
                    
                        <div className='relative w-24 h-24 rounded-full bg-[#FFE0D4]'>
                            <div className='absolute top-[45%] left-[40%]'>
                            <FaEthereum size={20}/>
                            </div>
                        </div>

                    </div>
                </div>
    );
};

export default RightTopImg;