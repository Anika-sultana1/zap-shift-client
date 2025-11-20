import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png'
import amazonVector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import startPeople from '../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';
import image1 from '../../assets/live-tracking.png'
import image2 from '../../assets/safe-delivery.png'

const Brands = () => {

const brandsLogos = [amazon, amazonVector, casio, moonstar, randstad, star, startPeople]

    return (
    <div>
        <h1 className='font-bold text-secondary text-2xl text-center my-10'>We've helped thousands of sales teams</h1>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
        >


    {
        brandsLogos.map((brandsLogo, index) => <SwiperSlide key={index}>
            <img src={brandsLogo} alt="" />
        </SwiperSlide>)
    }



{/* 
            <SwiperSlide>
<img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
<img src={amazonVector} alt="" />
            </SwiperSlide>
            <SwiperSlide>
<img src={casio} alt="" />
            </SwiperSlide>
            <SwiperSlide>
<img src={moonstar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
<img src={randstad} alt="" />
            </SwiperSlide>
            <SwiperSlide>
<img src={star} alt="" />
            </SwiperSlide>
            <SwiperSlide>
<img src={startPeople} alt="" />
            </SwiperSlide> */}

        </Swiper>
          <div className="divider mx-20"></div>
          <div className="flex flex-col gap-5 rounded-box shadow-md my-10 mx-20">
  
  <div className="flex gap-10 p-5 bg-white rounded-2xl">
    <div><img className="size-30 rounded-box" src={image1}/></div>
     <div className="divider divider-horizontal"></div>
    <div className='flex flex-col justify-center items-star space-y-2'>
      <p className='font-semibold text-2xl text-secondary'>Live Parcel Tracking</p>
    
    <p className="list-col-wrap text-xs">
      Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
    </p>
 </div>
  </div>
  <div className="flex gap-10 p-5 bg-white rounded-2xl">
    <div><img className="size-30 rounded-box" src={image2}/></div>
     <div className="divider divider-horizontal"></div>
    <div className='flex flex-col justify-center items-star space-y-2'>
      <p className='font-semibold text-2xl text-secondary'>100% Safe Delivery</p>
    
    <p className="list-col-wrap text-xs">
      We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
    </p>
 </div>
  </div>
  <div className="flex gap-10 p-5 bg-white rounded-2xl">
    <div><img className="size-30 rounded-box" src={image2}/></div>
     <div className="divider divider-horizontal"></div>
    <div className='flex flex-col justify-center items-star space-y-2'>
      <p className='font-semibold text-2xl text-secondary'>24/7 Call Center Support</p>
    
    <p className="list-col-wrap text-xs">
     Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
    </p>
 </div>
  </div>


  
</div>
    </div>
    );
};

export default Brands;