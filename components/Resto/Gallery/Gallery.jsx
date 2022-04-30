import React from 'react';
import Image from 'next/image'
import st from '@/public/assets/jpg/foods/st.png'
import st2 from '@/public/assets/jpg/foods/st2.png'
import st3 from '@/public/assets/jpg/foods/st3.png'
import st9 from '@/public/assets/jpg/foods/st9.jpg'
import st6 from '@/public/assets/jpg/foods/st6.png'
import st4 from '@/public/assets/jpg/foods/st4.png'
import st11 from '@/public/assets/jpg/foods/st11.png'
import st7 from '@/public/assets/jpg/foods/st7.jpg'
import st8 from '@/public/assets/jpg/foods/st8.jpg'
import coffee from '@/public/assets/jpg/foods/coffee.jpg'
import st10 from '@/public/assets/jpg/foods/st10.png'
import bar from '@/public/assets/jpg/general/bar.png'
import bar1 from '@/public/assets/jpg/general/10.jpg'


const Gallery = () => {
    return ( 
    <div className='gallery-container'>
        <div className='row'>
            <Image src={bar} alt='' />
            <Image src={bar1} alt='' />
        </div>
        <div className='row-1'>
            <Image src={st9} alt='' />
            <Image src={st3} alt='' />
            <Image src={st2} alt='' />
            <Image src={st} alt='' />
        </div>
{/*         <div className='row-2'>
            <div><h2 className='title'>Nuestra propuesta</h2></div>
            <p></p>
        </div> */}
        <div className='row-3'>
            <Image src={st11} alt='' />
            <Image src={st7} alt='' />
            <Image src={st10} alt='' />
        </div>
        <div className='row-4'>
{/*             <Image src={st8} alt='' />
            <Image src={coffee} alt='' /> */}
            <Image src={st4} alt='' />
            <Image src={st6} alt='' />
        </div>
    </div>
    );
}
 
export default Gallery;