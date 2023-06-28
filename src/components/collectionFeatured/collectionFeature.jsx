import React from 'react';

const CollectionFeature = ({ item }) => {
    return (
        <div className='hover:border-gray-300 hover:border-2 hover:p-3 hover:-mt-5 hover:-mr-5 hover:rounded-2xl' key={item.id}>
            <div className='flex gap-3'>
                <div>
                    <img className='md:h-72 h-[274px] md:w-[290px] w-60' src={item.img1} alt="" />
                </div>
                <div className='flex flex-col md:gap-4 gap-2'>
                    <img className='w-[103px] h-[86px] rounded-xl' src={item.img2} alt="" />
                    <img className='w-[103px] h-[86px] rounded-xl' src={item.img3} alt="" />
                    <img className='w-[103px] h-[86px] rounded-xl' src={item.img4} alt="" />
                </div>
            </div>
            <div className='mt-3'>
                <h4 className='font-semibold text-xl'>{item.col_name}</h4>
                <div className='mt-2 flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <img src={item.imgP} alt="" />
                        <p>by {item.p_name}</p>
                    </div>
                    <button className='text-[#2639ED] border-[1px] border-[#2639ED] px-4 py-1 rounded-[30px] hover:bg-[#2639ED] hover:text-white'>Total {item.items} items</button>
                </div>
            </div>
        </div>
    );
};

export default CollectionFeature;