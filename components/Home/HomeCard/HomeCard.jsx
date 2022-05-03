import React from 'react';
import MainTopBar from '@/components/Layout/TopBar/TopBar';
import WhatsappContact from '@/components/base/WhatsappContact';

const HomeCard = () => {
    return ( 
        <>
        <div 
          className="home-card" 
          style={{ backgroundImage: `url("/assets/jpg/general/test.svg")`}}
        >
          <div className="container">
            <MainTopBar />
            <div className='welcome'>
              <h2>Hotel Coronado</h2>
              <span>Resto Bar & Suites</span>
            </div>
            <WhatsappContact />
          </div>
        </div>
        </>
     );
}
 
export default HomeCard;