import React from 'react';
import ParallaxGenerator from '@/components/base/ParallaxGenerator';

const OurProposal = () => {
    return ( 
        <>
        <ParallaxGenerator 
            bgImageStyle={{maxHeight: '705px', maxWidth: '1150px'}} 
            bgImage="https://i.ibb.co/MMSH0ch/sss.png"
            title="Resto Bar"
            description={<>Las carnes rojas y blancas, las pastas y sus salsas, la combinación de especias, aceites y secretos en la cocción,<br/>
            son los desafíos de nuestro chef y su equipo a la hora de elaborar los platos.<br />
            Los cócteles clásicos, vinos y whiskies de etiqueta se suman a los atractivos de nuestra propuesta gastronomica.</>}
        />

        </>
     );
}
 
export default OurProposal;