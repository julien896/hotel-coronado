import React from 'react';
import Image from 'next/image'
import room from '@/public/assets/jpg/rooms/4.jpeg'

const Rooms = () => {
    return ( 
/*         <div className='rooms-page-container'>
            <div className='room'>
                <div className='image'><Image src={room} alt='' /></div>
                <div className='title'><h3>Simple</h3></div>
            </div>
            <div className='room'>
                <div className='title'><h3>Doble</h3></div>
                <div className='image'><Image src={room} alt='' /></div>
            </div>
            <div className='room'>
                <div className='image'><Image src={room} alt='' /></div>
                <div className='title'><h3>Cuadruple</h3></div>
            </div>
        </div> */
        <div className='rooms-page-container'>
        <div className='room'>
            <div className='title'><h3>Simple</h3></div>
            <div className='image'><Image src={room} alt='' /></div>
        </div>
        <div className='room'>
            <div className='title'><h3>Doble</h3></div>
            <div className='image'><Image src={room} alt='' /></div>
        </div>
        <div className='room'>
            <div className='title'><h3>Cuadruple</h3></div>
            <div className='image'><Image src={room} alt='' /></div>
        </div>
        </div>
     );
}
 
export default Rooms;