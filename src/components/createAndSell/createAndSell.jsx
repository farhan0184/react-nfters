import React from 'react';
import CreateLeft from './createLeft';
import CreateRight from './createRight';

const CreateAndSell = () => {
    return (
        <div className='w-[90%] mx-auto py-20'>
            <div className='md:grid md:grid-cols-2'>
                <CreateLeft/>
                <CreateRight/>
            </div>
        </div>
    );
};

export default CreateAndSell;