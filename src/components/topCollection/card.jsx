import React from 'react';
import { Arkhan17, Item4 } from '../../imageSrc';
import Eth from '../commons/Eth';

const Card = () => {
    return (
        <div>
           <img src={Item4} alt="" /> 
           <div className='flex justify-between mt-7'>
            <div className='flex gap-3  items-center'>
                <div>
                <img width={45} src={Arkhan17} alt="" />
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>The Futr Abstr</h4>
                    <p className='text-[#363639]'>10 in the stock</p>
                </div>
            </div>
            <div className='text-[#363639] font-semibold'>
                <Eth name={'Highest Bid'}/>
            </div>
           </div>
        </div>
    );
};

export default Card;