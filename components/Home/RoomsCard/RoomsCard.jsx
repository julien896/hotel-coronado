import React from 'react';
import { Button } from 'antd';
import Link from 'next/link'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image'
import room1 from '@/public/assets/jpg/rooms/room1.jpg'
import room2 from '@/public/assets/jpg/rooms/room2.jpg'
import room3 from '@/public/assets/jpg/rooms/room3.jpg'


const RoomsCard = () => {
    return ( 
        <div className='rooms-container'>
            <div className='text'>
                <h2>Nuestras habitaciones</h2>
                <Button><Link href="/rooms">Ver Detalles</Link></Button>
            </div>
            <div className='carousel'>
            <AwesomeSlider>
                <div><Image src={room3} alt='' /></div>
                <div><Image src={room1} alt='' /></div>
                <div><Image src={room2} alt='' /></div>
            </AwesomeSlider>
            </div>
        </div>
     );
}
 
export default RoomsCard;