import React from 'react';
import { verify } from '../../imageSrc';
import { FaEthereum } from 'react-icons/fa';

const TopOver = ({item}) => {
    return (
        <div className={`flex justify-between items-center py-5 ${item.id !== 5 ? 'border-b-[1px] border-[#F0F0F0]': ''}`}>
                            <h4 className='text-xl'>{item.id}</h4>
                            <div className='relative '>
                                <img src={item.img} alt="" />
                                <div className={` ${item.active ? 'absolute -right-3 -top-1 ': 'hidden'}`}>
                                    <img src={verify} alt="" />
                                </div>
                            </div>
                            <div>
                                <h5 className='font-semibold ml-1'>{item.name}</h5>
                                <div className='flex mt-2'>
                                    <FaEthereum size={20}/>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                            <h4 className={`text-xl ${item.color? 'text-[#14C8B0]': 'text-[#FF002E]'}`}>{item.rate}</h4>
                        </div>
    );
};

export default TopOver;