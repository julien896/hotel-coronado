import React from 'react';
import WhatsappContact from '../base/WhatsappContact';
import ContactUs from './ContactUs/ContactUs';
import ContactForm from './Form/Form';
import GMap from './Map/Map'

const Contact = () => {
    return ( 
        <div className='contact-container'>
            <WhatsappContact />
            <ContactUs />
            <GMap />
            <ContactForm />
        </div>
     );
}
 
export default Contact;