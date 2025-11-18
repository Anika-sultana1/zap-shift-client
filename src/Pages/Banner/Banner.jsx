import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../assets/banner/banner1.png'
import bannerImg2 from '../../assets/banner/banner2.png'
import bannerImg3 from '../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <Carousel className='my-[36px] rounded-2xl' autoPlay infiniteLoop showThumbs={false}>
            
            {[bannerImg1, bannerImg2, bannerImg3].map((img, idx) => (
                <div key={idx} className="relative w-[1295px] h-[750px]">
                    <img className="w-full h-full  rounded-3xl object-cover" src={img} alt={`Banner ${idx + 1}`} />

       
                    <div className="absolute left-2 md:left-10 bottom-10 md:bottom-20 max-w-4xl space-y-5 z-10">
                        <p className="text-secondary text-xl md:text-2xl font-semibold drop-shadow-lg leading-relaxed whitespace-nowrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis animi vero! Nemo dignissimos ullam <br /> consequuntur ad adipisci itaque maxime ut qui consectetur ipsam, voluptatem, quis facere id velit et!
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-primary text-black font-semibold rounded-full shadow-lg">
                                Track Your Parcel
                            </button>
                            <button className="px-6 py-3 border border-white text-secondary rounded-full font-semibold shadow-lg">
                                Be A Rider
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </Carousel>
    );
};

export default Banner;
