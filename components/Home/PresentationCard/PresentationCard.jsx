import React from 'react';
import Image from 'next/image'
import room from '../../../public/assets/jpg/rooms/room1.jpg'
import vitreaux from '../../../public/assets/jpg/general/vitreaux.jpg'
import canteen from '../../../public/assets/jpg/general/canteen.jpg'
import canteen2 from '../../../public/assets/jpg/general/canteen2.jpg'
import coffee from '../../../public/assets/jpg/foods/coffee.jpg'
import chicken from '../../../public/assets/jpg/foods/chicken.jpg'

const PresentationCard = () => {
    return ( 
        <div className='presentation-container'>
            <div className='text'> 
                <div className='us'><p>NOSOTROS</p></div>
                <div className='hotel'>Hotel Coronado</div>
                <div className='description'>
                    Joya de hospitalidad, ubicada en la zona centrica de Mina Clavero.<br/>
                    El hotel combina diseño y modernidad en todas sus instalaciones.
                </div>
            </div>
            <div className='images'>
                <div className='image'><Image src={room} alt='' /></div>
                <div className='image'><Image src={canteen} alt='' /></div>
                <div className='image'><Image src={chicken} alt='' /></div>
                <div className='image'><Image src={vitreaux} alt='' /></div>
                <div className='image'><Image src={coffee} alt='' /></div>
                <div className='image'><Image src={canteen2} alt='' /></div>
            </div>
        </div>
     );
}
 
export default PresentationCard;