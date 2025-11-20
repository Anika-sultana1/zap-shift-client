import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from './Brands';
import Reviews from '../Reviews/Reviews';
import Merchant from './Merchant';
import FAQ from './FAQ';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())


const Home = () => {

const bannerDocs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices bannerDocs={bannerDocs}></OurServices> 
            <Brands></Brands>
            <Merchant></Merchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
       <FAQ></FAQ>
        </div>
    );
};

export default Home;