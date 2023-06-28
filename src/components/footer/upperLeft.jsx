import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const UpperLeft = () => {
    return (
        <div className='md:w-[31%]'>
            <h1 className='text-3xl font-bold text-black'>NFTERS</h1>
            <p className='text-[#565656] mt-5'>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
            <div className='flex gap-2 mt-5'>
                <BsFacebook color='#3B5998' size={28} />
                <AiFillTwitterCircle color='#55ACEE' size={32} />
                <div className='bg-[#007AB9] w-7 h-7  flex justify-center rounded-full items-center text-white'>
                    <BiLogoLinkedin size={20} />
                </div>
            </div>
        </div>
    );
};

export default UpperLeft;