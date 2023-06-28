import React from 'react';
import { FaEthereum } from 'react-icons/fa';

const RateEth = ({rate}) => {
    return (
        <div className='flex gap-1 justify-center text-[#00AC4F]'>
            <FaEthereum size={20} />
            <span>{rate} ETH</span>
        </div>
    );
};

export default RateEth;