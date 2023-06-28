import React from 'react';
import ReactCurvedText from 'react-curved-text';
import { FaEthereum } from 'react-icons/fa';

const CircleLogo = () => {
    return (
        <div className='relative bg-[#FFE0D4] w-28  h-28 rounded-full'>
            <ReactCurvedText
                width={100}
                height={110}
                cx={55}
                cy={55}
                rx={35}
                ry={35}
                startOffset={0}
                reversed={true}
                text="LIVE AUCTION * LIVE AUCTION * "
                textProps={{ style: { fontSize: 15 } }}
            />
            <div className='absolute top-[40%] left-[40%]'>
                <FaEthereum size={24} />
            </div>
        </div>

    );
};

export default CircleLogo;