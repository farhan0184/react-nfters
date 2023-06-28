import React from 'react';
import Navbar from '../navbar';
import HomeRight from './homeRight';
import HomeLeft from './homeLeft';

const Home = () => {
    return (
        <div className='mb-36'>
            <Navbar />
            <div className='md:flex w-[90%] mx-auto md:pt-36 pt-20 -z-50'>
                <HomeLeft/>
                <HomeRight/>
            </div>
        </div>
    );
};

export default Home;