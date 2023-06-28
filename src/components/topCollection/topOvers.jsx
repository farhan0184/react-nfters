import React from 'react';
import { topList } from './topDb';
import TopOver from './topOver';

const TopOvers = () => {
    return (
        <div className='md:border-l-[1px] md:border-[#ECECEC] md:pl-8 md:mt-0 mt-10'>
            <h1 className='text-2xl font-bold'>TOP COLLECTIONS OVER</h1>
            <p className='text-xl text-[#3D00B7]'>Last 7 Days</p>
            <div className='mt-3'>
                {
                    topList.map(item =>
                        <TopOver key={item.id} item={item}/>
                    )
                }
            </div>
        </div>
    );
};

export default TopOvers;