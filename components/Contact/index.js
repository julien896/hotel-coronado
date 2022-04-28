import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import ContactForm from './Form/Form';

const Contact = () => {
    return ( 
        <div className='contact-container'>
            <ContactUs />
            <ContactForm />
        </div>
     );
}
 
export default Contact;