import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import MainTopBar from '../../Layout/TopBar/TopBar';
import { WhatsAppOutlined } from '@ant-design/icons';

const HomeCard = () => {

    const [whatsappActive, setWhatsappActive] = useState(false)

    const changeWhatsapp = () => {
      window.scrollY >= 250 ? setWhatsappActive(true) : setWhatsappActive(false)
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeWhatsapp)
    }, []);

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
              <span>Mina Clavero</span>
            </div>
            {whatsappActive ?
            <Link
              className="font-size-14 kit__utils__link"
              href="https://api.whatsapp.com/send?phone=5493544565876&text=&source=&data"
            >
            <a target="_blank" rel="noopener noreferrer">
            <WhatsAppOutlined 
                style={{ 
                    color: 'white', 
                    background: 'rgba(37, 211, 102, 0.8)',
                    borderRadius: '50%',
                    position: 'fixed', 
                    fontSize: 80, 
                    left: '90%',
                    top: '80%',
                    zIndex: 30,
                    transition: '1s ease' 
                }}
            />
            </a>
            </Link> 
            : null}
          </div>
        </div>
        </>
     );
}
 
export default HomeCard;