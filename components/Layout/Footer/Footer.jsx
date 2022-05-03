import React from 'react';
import Link from 'next/link'
import logo from "@/public/assets/jpg/general/logo2.png"
import Image from 'next/image'
import { FacebookFilled, InstagramFilled, PhoneFilled, MailFilled, HomeFilled } from '@ant-design/icons';

const Footer = () => {
    return ( 
        <div className="footer">
            <hr />
            <div className='social-media'>
                <span className='follow-us'>
                  Seguinos en nuestras redes
                </span>
                <div className='icons'>
                    <Link href='https://www.facebook.com/Coronado-Hotel-Mina-Clavero-103042262369478'>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        <FacebookFilled 
                          style={{ color: '#222222', marginRight:5 }} 
                        />
                    </a>
                    </Link>
                    <a 
                      href='https://www.instagram.com/hotelcoronadobar/'
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        <InstagramFilled 
                          style={{ color: '#222222', marginLeft:5 }}  
                        />
                    </a>
                </div>
            </div>
            <div className='contact-data'>
                <div className='container'>
                <div className='contact'>
                <Link href="https://api.whatsapp.com/send?phone=5493465449481&text=&source=&data">
                    <a 
                      style={{ display: 'flex', justifyContent: 'center' }}  
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                    <PhoneFilled style={{ color: '#222222' }} />
                    </a>
                </Link>
                    <h3 className='title'>+54 9 3465-449481</h3>
                    <span className='data'>Consultas y reservas</span>
                </div>
                <div className='contact'>
                    <MailFilled style={{ color: '#222222' }} />
                    <h3 className='title'>coronadohotel.recepcion@gmail.com</h3>
                    <span className='data'>Consultas</span>
                </div>
                <div className='contact'>
                    <HomeFilled style={{ color: '#222222' }} />
                    <h3 className='title'>Av. San Martín 2300</h3>
                    <span className='data'>Mina Clavero, Cordoba</span>
                </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='bottom-left'>
                    <Link href="/" passHref>
                      <Image src={logo} alt="Coronado" />
                    </Link>
                    <div className='contact' style={{ marginLeft: 20 }}>
                        <h3 className='title-bottom'>Av. San Martín 2300</h3>
                        <span className='data-bottom'>Mina Clavero, Cordoba</span>
                    </div>
                </div>
                <div className='bottom-right'>
                <div className="nav">
                    <Link
                      className="font-size-14 kit__utils__link"
                      href="/"
                    >
                    Home
                    </Link>
                    <Link
                      className="font-size-14 kit__utils__link"
                      href="/rooms"
                    >
                    Nuestras habitaciones
                    </Link>
                    <Link
                      className="font-size-14 kit__utils__link"
                      href="/resto"
                    >
                    Resto
                    </Link>
                    <Link
                      className="font-size-14 kit__utils__link"
                      href="/contact"
                    >
                    Contacto
                    </Link>
                </div>
                </div>
            </div>
            <div className='copyright'>
                <span>© Copyright Hotel Coronado. Todos los derechos reservados.</span>
            </div>
        </div>
     );
}
 
export default Footer;