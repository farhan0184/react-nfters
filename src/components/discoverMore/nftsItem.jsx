import React from 'react';
import RateEth from '../commons/RateEth';
import PersonImg from './personImg';

const NftsItem = ({item}) => {
    return (
        <div key={item.id} className='border-[1px] p-3 bg-white rounded-2xl md:mb-0 mb-5'>
            <div className='relative'>
                <img className=' w-full h-72' src={item.img} alt="" />
                <div className='absolute -bottom-4 left-3'>
                    <PersonImg/>
                </div>
            </div>
            <div className='w-[90%] mx-auto mt-5'>
                <div className='my-3 border-b-[1px] border-[#F4F4F4]'>
                    <div className=''>
                        <h4 className='text-xl font-bold ml-1'>{item.name}</h4>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div>
                            <RateEth rate={item.price} />
                        </div>
                        <div>
                            <span className='text-[#838383]'>1 to {item.items}</span>
                        </div>
                    </div>
                </div>
                <div className='my-2 text-[#5539A8] flex justify-between items-center'>
                    <div>
                        <span className=' px-2 py-1 rounded-[20px] bg-[#F5F5F5]'>{item.hours} left</span>
                    </div>
                    <div>
                        <h5 className='text-xl'>Place a bid</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftsItem;