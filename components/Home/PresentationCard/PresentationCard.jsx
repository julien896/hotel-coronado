import React from 'react';
import Image from 'next/image'
import room from '@/public/assets/jpg/rooms/room1.jpg'
import vitreaux from '@/public/assets/jpg/general/vitreaux.jpg'
import canteen2 from '@/public/assets/jpg/general/canteen2.jpg'
import coffee from '@/public/assets/jpg/foods/coffee.jpg'
import bar from '@/public/assets/jpg/general/16.jpg'
import outside from '@/public/assets/jpg/general/outside.jpeg'

const PresentationCard = () => {
    return ( 
        <div className='presentation-container'>
            <div className='text'> 
                <div className='us'><p>NOSOTROS</p></div>
                <div className='hotel'>Hotel Coronado</div>
                <div className='description'>
                    Un clásico en el corazón de Mina Clavero desde hace más de 50 años.<br/>
                    Su calidez y particular diseño hacen de esta esquina un emblema
                    del valle de Traslasierra.<br/> Estamos enfocados en brindar buenas experiencias
                    en nuestro servicio de hospitalidad.<br/>
                    Queremos que nuestros huéspedes y comensales siempre deseen volver.
                </div>
            </div>
            <div className='images'>
                <div className='image'><Image src={outside} alt='' /></div>
                <div className='image'><Image src={coffee} alt='' /></div>
                <div className='image'><Image src={bar} alt='' /></div>
                <div className='image'><Image src={vitreaux} alt='' /></div>
                <div className='image'><Image src={canteen2} alt='' /></div>
                <div className='image'><Image src={room} alt='' /></div>
            </div>
        </div>
     );
}
 
export default PresentationCard;