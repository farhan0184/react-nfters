import React from 'react';
import { Arkhan17, Item5, Item6, Item7 } from '../../imageSrc';
import OtherCard from './otherCard';

const list = [
    {
        id: 1,
        img: Item5,
        name: 'The Futr Abstr',
        imgP: Arkhan17,
    },
    {
        id: 2,
        img: Item6,
        name: 'The Futr Abstr',
        imgP: Arkhan17,
    },
    {
        id: 3,
        img: Item7,
        name: 'The Futr Abstr',
        imgP: Arkhan17,
    },

]

const OtherCards = () => {
    return (
        <div className='md:mt-0 mt-10 flex flex-col gap-12'>
            {
                list.map(item =>
                    <OtherCard key={item.id} item={item}/>
                )
            }
        </div>
    );
};

export default OtherCards;