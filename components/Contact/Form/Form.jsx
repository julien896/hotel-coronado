import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Image from 'next/image'
import axios from 'axios';
import { notificationSuccess, notificationError } from '@/components/base/Notifications';
import hotel from '@/public/assets/jpg/general/hotel2.png'

const ContactForm = () => {
    const [form] = Form.useForm()
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    
    const handleSubmit = () => {
        form.validateFields().then(() => {
            axios.post('api/contact', {
                name: contactData.name,
                email: contactData.email,
                phone: contactData.phone,
                message: contactData.message
            })
            .then(() => {
                notificationSuccess()
            })
            .catch(e => {
              notificationError()
              console.error(e)
            })
            form.resetFields()
            setContactData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        })
    }

    return ( 
        <div className='contact-form'>
          <div className='request'>Contactanos</div>
          <div className='global-container'>
          <div className='form-container'>
          <Form
            name="basic"
            autoComplete="off"
            layout='vertical'
            form={form}
          >
            <Form.Item
              label="Nombre"
              name="name"
              rules={[{ required: true, message: 'Por favor, ingrese su nombre.', type: 'string' }]}
            >
                <Input 
                  value={contactData.name} 
                  onChange={e => setContactData({ ...contactData, name: e.target.value })}
                />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Por favor, ingrese un Email válido.', type:'email'}]}
            >
                <Input 
                  value={contactData.email} 
                  onChange={e => setContactData({ ...contactData, email: e.target.value })}
                />
            </Form.Item>
            <Form.Item
                label="Telefono"
                name="phone"
            >
                <Input 
                  value={contactData.phone}
                  onChange={e => setContactData({ ...contactData, phone: e.target.value })} 
                />
            </Form.Item>
            <Form.Item
                label="Mensaje"
                name="message"
            >
                <Input.TextArea 
                  value={contactData.message}
                  onChange={e => setContactData({ ...contactData, message: e.target.value })}
                />
            </Form.Item>
            <Button 
              className='submit-form'
              onClick={() => handleSubmit()}
            >
                Enviar
            </Button>
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