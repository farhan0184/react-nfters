import React from 'react';
import { FaEthereum } from 'react-icons/fa';

const Eth = ({name}) => {
    return (
        <div className=''>
            <p className='text-[10px] mb-2 ml-1'>{name}</p>
            <div className='flex gap-1'>
                <FaEthereum size={20} />
                <span>0.25 ETH</span>
            </div>
        </div>
    );
};

export default Eth;