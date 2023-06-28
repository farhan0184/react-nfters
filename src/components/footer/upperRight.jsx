import React from 'react';
const mrkPlace = ['All NFTs', 'New', 'Art', 'Sports', 'Utility', 'Music', 'Domain Name']
const myAccount = ['Profile', 'Favorite', 'My Collections', 'Settings']
const UpperRight = () => {
    return (
        <div className='md:w-[71%] mt-4 flex md:flex-row flex-col md:gap-12 gap-8 md:ml-3'>
            <div>
                <h1 className='text-xl font-bold mb-5'>Market Place</h1>
                {
                    mrkPlace.flatMap((item, idx) =>
                        <div key={idx}>
                            <p className='py-1 hover:text-[#2639ED]'>{item}</p>
                        </div>
                    )
                }
            </div>
            <div>
                <h1 className='text-xl font-bold mb-5'>My Account</h1>
                {
                    myAccount.flatMap((item, idx) =>
                        <div key={idx}>
                            <p className='py-1 hover:text-[#2639ED]'>{item}</p>
                        </div>
                    )
                }
            </div>
            <div>

            </div>
            <div className='md:w-[48%]'>
                <h1 className='text-xl font-bold mb-5'>Stay In The Loop</h1>
                <p className='text-[#565656] mb-5'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                <div className='w-full border-[#F1F1F1] rounded-[30px] border-[1px] '>
                    <input className='py-3 md:px-4 px-1 rounded-l-[30px]' type="text" placeholder='Enter Your email address.' />
                    <button className='py-2 md:ml-4 px-5 bg-[#2639ED] text-white rounded-[30px] hover:border-[#2639ED] hover:border-[1px] hover:text-[#2639ED] hover:bg-white'>Subscribe Now</button>
                </div>
            </div>
        </div>
    );
};

export default UpperRight;