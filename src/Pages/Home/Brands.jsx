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
    </div>
    );
};

export default Brands;