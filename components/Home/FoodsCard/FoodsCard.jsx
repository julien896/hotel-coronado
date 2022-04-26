import React from 'react';
import Image from 'next/image'
import fish from '../../../public/assets/jpg/foods/fish.jpg'


const FoodsCard = () => {
    return ( 
        <div className='foods-container'>
            <div className='image'>
                <Image src={fish} alt='' />
            </div>
            <div className='text'>
                <div className='us'><p>NUESTRA COCINA</p></div>
                <div className='hotel'>Hotel Coronado</div>
                <div className='description'>
                    Joya de hospitalidad, ubicada en la zona centrica de Mina Clavero.<br/>
                    El hotel combina diseño y modernidad en todas sus instalaciones.
                </div>
            </div>
        </div>
     );
}
 
export default FoodsCard;