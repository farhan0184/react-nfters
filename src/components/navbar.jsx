import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleNavbar = () => {
        setOpen(!open);
    };
    return (
        <nav className={`md:border-b-[1px] md:border-[#EFEFEF] md:fixed w-[100%]   ${open ? '': 'md:bg-white bg-gray-500'} z-50`}>
            <div className='md:flex py-4 w-[90%] mx-auto'>
                <div className='pr-16 text-[#3D00B7]  py-4 md:border-r-[1px] md:border-[#F4F4F4]'>
                    <h1 className='text-3xl font-bold'>NFTERS</h1>
                </div>
                <div className="md:hidden flex justify-end mt-[-50px]">
                    <button
                        className=""
                        onClick={toggleNavbar}>
                        {open ? <HiMenuAlt1 size={30} /> : <HiOutlineX size={30} />}</button>
                </div>
                <div className={`md:flex items-center font-bold transition-all md:mt-0 md:my-0 my-5 duration-300 ${open ? 'mt-[-670px] ' : ''}`}>
                    <ul className='md:flex md:gap-12 md:ml-16'>
                        <li className='py-2 cursor-pointer hover:text-[#3D00B7]'>Marketplace</li>
                        <li className='py-2 cursor-pointer hover:text-[#3D00B7]'>Resource</li>
                        <li className='py-2 cursor-pointer hover:text-[#3D00B7]'>About</li>
                    </ul>
                    <div className='flex items-center md:my-0 my-5 md:ml-16 border-[1px] md:w-[26%] w-[90%] border-[#EFEFEF] rounded-[30px] bg-white' >
                        <input className='px-5 py-2 rounded-l-[30px] border-0 w-[90%]' type="text " placeholder='Search'/>
                        <button className='md:pr-3'><CiSearch size='1.5rem' /></button>
                    </div>
                    <button className='py-3 md:mx-4 mr-6 md:px-6 px-10 rounded-[30px] bg-[#3D00B7] text-[white] hover:border-[#3D00B7] hover:border-2 hover:text-[#3D00B7] hover:bg-white'>Upload</button>
                    <button className='px-2 py-2 border-2 rounded-[30px] ml-1 border-[#3D00B7] text-[#3D00B7] hover:bg-[#3D00B7] hover:text-white'>Connect Wallet</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;