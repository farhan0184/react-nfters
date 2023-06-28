import React from 'react';
import Button from '../commons/button';

const CreateRight = () => {
    return (
        <div className='md:ml-20 md:flex items-center md:mt-12'>
            <div>
                <h2 className='text-3xl md:w-[50%] w-[89%] mb-10 font-bold'>CREATE AND SELL YOUR NFTS</h2>
                <p className='text-[#636363] mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime vel dolore, debitis sunt tempora alias temporibus velit similique saepe, eligendi rerum ea autem? Eligendi, nihil id voluptates autem eaque minus earum consequuntur voluptatibus. Suscipit voluptates animi recusandae! Praesentium, amet sequi!</p>
                <Button name={'Sign Up Now'} />
            </div>
        </div>
    );
};

export default CreateRight;