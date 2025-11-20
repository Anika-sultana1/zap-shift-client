import React from 'react';
import locationImage from '../../assets/location-merchant.png'

const Merchant = () => {
    return (
        <div className='flex justify-center items-center bg-secondary rounded-2xl p-15 mx-20'>
            <div className='space-y-5 text-white'>
                <h2 className=' font-bold text-3xl'>Merchant and Customer Satisfaction <br />is Our First Priority</h2>
            <p>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
           <div className='flex gap-3'>
            <button className='bg-primary rounded-3xl p-3 px-5 text-black'>Become a Merchant</button>
            <button className='border border-primary border-dashed rounded-3xl text-primary p-3 px-5'>Earn with ZapShift Courier</button>
           </div>
          
            </div>
            <div>
                 <img src={locationImage} alt="" />
            </div>
        </div>
    );
};

export default Merchant;