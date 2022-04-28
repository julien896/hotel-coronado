import React from 'react';
import { Form, Input, Button } from 'antd';
import Image from 'next/image'
import hotel from '../../../public/assets/jpg/general/hotel.jpg'

const ContactForm = () => {
    return ( 
        <div className='contact-form'>
          <div className='request'>Contactanos</div>
          <div className='global-container'>
          <div className='form-container'>
          <Form
            name="basic"
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item
                label="Nombre"
                name="nombre"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Telefono"
                name="telefono"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Mensaje"
                name="mensaje"
            >
                <Input.TextArea />
            </Form.Item>
            <Button className='submit-form'>Enviar</Button>
          </Form>
          </div>
          <div className='image-container'>
              <div className='container'>
                <Image src={hotel} alt='' />
              </div>
          </div>
          </div>
        </div>
     );
}
 
export default ContactForm;