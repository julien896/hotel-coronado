import React from 'react';
import HomeCard from './HomeCard/HomeCard';
import PresentationCard from './PresentationCard/PresentationCard';
import Footer from '../Layout/Footer/Footer';
import RoomsCard from './RoomsCard/RoomsCard';
import FoodsCard from './FoodsCard/FoodsCard';

const Home = () => {
    return ( 
        <>
            <HomeCard />
            <PresentationCard />
            <RoomsCard />
            <FoodsCard />
            <Footer />
        </>
    );
}
 
export default Home;