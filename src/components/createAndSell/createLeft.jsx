import React from 'react';
import { Arkhan171, Ellipse95, Item1, Item2, Item3 } from '../../imageSrc';

const CreateLeft = () => {
    return (
        <div className='md:flex justify-between items-center  hidden'>
            <div className='flex flex-col items-end gap-20'>
                <div className='relative w-72'>
                    <img className='w-72' src={Item1} alt="" />
                    <div className='absolute -bottom-8 -right-8'>
                        <img width={70} src={Arkhan171} alt="" />
                    </div>
                </div>
                <div className='relative w-52'>
                    <img className='w-52' src={Item3} alt="" />
                    <div className='absolute -bottom-8 -right-8'>
                        <img width={70} src={Ellipse95} alt="" />
                    </div>
                </div>
            </div>
            <div className='relative w-60'>
                <img className='w-60' src={Item2} alt="" />
                <div className='absolute -bottom-8 -right-8'>
                    <img width={70} src={Ellipse95} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CreateLeft;