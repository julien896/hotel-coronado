import React from 'react';
import Gallery from './Gallery/Gallery';
import OurProposal from './OurProposal/OurProposal';


const Resto = () => {
    return ( 
        <div className='resto-container'>
            <OurProposal />
            <Gallery />
        </div>
     );
}
 
export default Resto;