import React from 'react';
import { colLists } from './collectionDd';
import CollectionFeature from './collectionFeature';


const CollectionFeatures = () => {
    return (
        <div className='bg-[rgba(217,224,236,0.2)] py-16'>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-4xl text-black font-bold'>COLLECTION FEATURED NFTS</h1>

                <div className='mt-8 flex md:flex-row flex-col gap-10'>
                    {
                        colLists.map(item=>
                            <CollectionFeature key={item.id} item={item}/>
                        )   
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default CollectionFeatures;