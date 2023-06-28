import React from 'react';

const Button = ({name}) => {
    return (
        <button className='bg-[#3D00B7] px-10 py-4 rounded-[30px] text-white font-bold hover:border-[#3D00B7] hover:border-[1px] hover:text-[#3D00B7] hover:bg-white'>
            {name}
        </button>
    );
};

export default Button;