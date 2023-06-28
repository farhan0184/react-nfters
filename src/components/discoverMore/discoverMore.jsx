import React from 'react';
import { filter } from '../../imageSrc';
import { nfts } from './nftsdb';
import NftsItem from './nftsItem';

const btnList = ['All Catagories','Art', 'Celebrities','Gaming','Sport', 'Music', 'Crypto']


    
const DiscoverMore = () => {
    return (
        <div className='bg-[rgba(217,224,236,0.2)] py-16'>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-2xl font-bold'>DISCOVER MORE NFTS</h1>
                <div className='mt-5 md:flex justify-between'>
                    <div className='flex md:flex-row flex-wrap md:gap-2 md:justify-normal justify-around'>
                        {
                            btnList.flatMap((item,idx) => 
                                <div className='mt-5 md:mt-0' key={idx}>
                                    <button className={`py-1 px-3 rounded-[20px] ${idx === 0? 'bg-[#3D00B7] text-white':'bg-[#DCDCDC] cursor-pointer text-black hover:bg-[#3D00B7] hover:text-white'} `}>{item}</button>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <button className='flex gap-1 items-center border-[#3D00B7] border-[1px] hover:bg-[#3D00B7] hover:text-white  text-[#3D00B7] px-3 py-1 rounded-[20px] md:mt-0 mt-5'>
                            <img className='w-5 h-4' src={filter} alt="" />
                            All Filters
                        </button>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-4 md:gap-4 mt-10'>
                    {
                        nfts.map(item =>
                          <NftsItem key={item.id} item={item}/>   
                        )
                    }
                </div>
                <div className='mt-10 flex justify-center'>
                    <button className={`border-2 border-[#3D00B7] px-5 py-3 rounded-[30px] text-[#3D00B7] hover:bg-[#3D00B7] hover:text-white`}>More NFTs</button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;