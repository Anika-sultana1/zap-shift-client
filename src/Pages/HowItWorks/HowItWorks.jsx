import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/UseAxios';
import bookingIcon from '../../assets/bookingIcon.png'

const HowItWorks = () => {

const axios = useAxios();
const [zapShift, setZapShift] = useState([])
useEffect( ()=>{

axios.get('/zapShift')
.then(result => {
    console.log(result.data)
    setZapShift(result.data)
})
.catch(err=> {
    console.log(err)
})
},[axios])


    return (
        <div className='my-[100px]'>
            <h1 className='text-3xl font-bold text-secondary ml-10 m-2'>How It Works
                
            </h1>
            <div className='grid grid-cols-4 gap-3 mx-10 mb-5'>
                {
                    zapShift.map(zap=> (
                        <div key={zap._id}>
                            <div className='bg-white text-secondary flex flex-col justify-start items-start rounded-2xl  p-10 space-y-2 '>
                               <img src={bookingIcon} alt="" />
                                <h3 className='font-bold text-2xl'>{zap.title}</h3>
                                <p className=''>{zap.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowItWorks;