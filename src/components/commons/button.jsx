import React from 'react';

const Button = ({name}) => {
    return (
        <button className='bg-[#3D00B7] px-10 py-4 rounded-[30px] text-white font-bold'>
            {name}
        </button>
    );
};

export default Button;