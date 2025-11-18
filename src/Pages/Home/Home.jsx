import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from './Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())


const Home = () => {

const bannerDocs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices bannerDocs={bannerDocs}></OurServices> 
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;