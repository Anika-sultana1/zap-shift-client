import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {

const reviews = use(reviewsPromise)
console.log('reviews', reviews)
    return (
        <div className='my-10'>
           <div>
            <h3 className='text-3xl text-center mb-5 text-secondary font-bold'>Reviews</h3>
           <p className='text-center mb-24'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti amet, ducimus sunt ipsa quasi tempora quia at. Expedita deserunt id voluptatum temporibus odio non tenetur saepe, labore quibusdam commodi aliquam.</p>
           </div>
           <Swiper effect={'coverflow'}
           grabCursor={true}
           slidesPerView={3}
           coverflowEffect={{
            rotate:50,
            stretch:0, 
            depth:100,
            modifier:1,
            slideShadows:true,
           }}
           pagination={true}
           modules={[EffectCoverflow, Pagination]}
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