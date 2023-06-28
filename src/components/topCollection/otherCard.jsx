import React from 'react';
import RateEth from '../commons/RateEth';

const OtherCard = ({ item }) => {
    return (
        <div key={item.id} className='flex gap-4'>
            <div>
                <img width={150} src={item.img} alt="" />
            </div>
            <div className='mt-2'>
                <h4 className='text-2xl font-semibold'>{item.name}</h4>
                <div className='flex gap-2 items-center mt-3'>
                    <img src={item.imgP} alt="" />
                    <div className='border-[1px] md:w-28 w-24 py-1 rounded-lg border-[#00AC4F]'>
                    <RateEth rate={0.25}/>
                    </div>

                    <span className='text-[#757575]'>1 to 8</span>
                </div>
                <button className='border-2 border-[#3D00B7] text-[#3D00B7] py-2 px-3 rounded-[30px] mt-3 hover:bg-[#3D00B7] hover:text-white'>Place a Bid</button>
            </div>
        </div>
    );
};

export default OtherCard;