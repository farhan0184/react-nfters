import React from 'react';
import { Imgp1, Imgp2, Imgp3, Imgp4 } from '../../imageSrc';

const PersonImg = () => {
    return (
        <div>
            <div className='flex '>
                <div className=''>
                    <img src={Imgp1} alt="" />
                </div>
                <div className='ml-[-10px]'>
                    <img src={Imgp2} alt="" />
                </div>
                <div className='ml-[-10px]'>
                    <img src={Imgp3} alt="" />
                </div>
                <div className='ml-[-10px]'>
                    <img src={Imgp4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PersonImg;