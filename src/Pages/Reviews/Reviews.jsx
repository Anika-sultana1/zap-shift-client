import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import customerTop from '../../assets/customer-top.png'

const Reviews = ({reviewsPromise}) => {

const reviews = use(reviewsPromise)
console.log('reviews', reviews)
    return (
        <div className='my-20'>
           <div className='flex flex-col justify-center items-center'>
<img className='my-10' src={customerTop} alt="" />

            <h3 className='text-3xl text-center mb-5 text-secondary font-bold'>What our customers are sayings</h3>
           <p className='text-center mb-24'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
           </div>
           <Swiper effect={'coverflow'}
           grabCursor={true}
           slidesPerView={3}
           coverflowEffect={{
            rotate:30,
            stretch:'50%', 
            depth:200,
            modifier:1,
            scale:0.75,
            slideShadows:true,
           }}
           autoplay={
            {
                delay:1000,
                disableOnInteraction: false,
            }
           }
           pagination={true}
           modules={[EffectCoverflow, Pagination, Autoplay]}
           className='mySwiper'>
{
    reviews.map(reviewCard=> <SwiperSlide key={reviewCard.id}>
        <ReviewCard reviewCard={reviewCard}></ReviewCard>
    </SwiperSlide> )
}
           </Swiper>
        </div>
    );
};

export default Reviews;