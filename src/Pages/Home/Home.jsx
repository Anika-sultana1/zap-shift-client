import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';

const Home = () => {

const bannerDocs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices bannerDocs={bannerDocs}></OurServices>

        </div>
    );
};

export default Home;