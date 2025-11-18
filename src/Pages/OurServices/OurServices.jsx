import React from 'react';
import service from '../../assets/service.png'

const OurServices = ({bannerDocs}) => {

    return (
        <div className='text-center p-[100px] bg-secondary text-white space-y-4 rounded-2xl '>
<h3 className='font-bold text-3xl '>Our Services</h3>
<p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
<div className='grid grid-cols-3 gap-4'>
    {bannerDocs.map(bannerDoc => (
<div className='w-[350px] h-[300px] bg-white text-secondary flex flex-col justify-center items-center rounded-2xl space-y-2 hover:bg-primary'>
   <img src={service} alt="" />
    <h3 className='font-bold text-2xl'>{bannerDoc.title}</h3>
    <p className=''>{bannerDoc.description}</p>
</div>
    )

    )}
</div>
        </div>
    );
};

export default OurServices;