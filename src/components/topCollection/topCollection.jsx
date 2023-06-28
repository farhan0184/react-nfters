import React from 'react';
import Card from './card';
import TopOvers from './topOvers';
import OtherCards from './otherCards';

const TopCollection = () => {
    return (
        <div className='w-[90%] mx-auto md:flex my-20 md:gap-10'>
            <Card/>
            <OtherCards/>
            <TopOvers/>
        </div>
    );
};

export default TopCollection;