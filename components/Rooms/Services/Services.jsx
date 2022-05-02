import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWifi,
  faCheck,
  faCar,
  faBed,
  faBellConcierge,
  faUtensils,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
    return ( 
        <div className='services-container'>
        <div className='service'>
            <div>
                <span className='title'>Internet</span>
                <FontAwesomeIcon
                    icon={faWifi}
                    style={{ fontSize: 22, color: "#222222", marginLeft: 15 }}
                /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Wi Fi</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Habitaciones</span>
                <FontAwesomeIcon
                    icon={faBed}
                    style={{ fontSize: 22, color: "#222222", marginLeft: 15 }}
                /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Aire acondicionado</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Servicios</span>
                <FontAwesomeIcon
                    icon={faBellConcierge}
                    style={{ fontSize: 22, color: "#222222", marginLeft: 15 }}
                /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Servicio de lavanderia completo</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Estacionamiento y transporte</span>
                <FontAwesomeIcon
                    icon={faCar}
                    style={{ fontSize: 22, color: "#222222", marginLeft: 15 }}
                /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Estacionamiento</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Comidas y bebidas</span>
                <FontAwesomeIcon
                    icon={faUtensils}
                    style={{ fontSize: 22, color: "#222222", marginLeft: 15 }}
                /> 
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Restaurante</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Bar</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Servicio de mesa</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Desayuno tipo bufé</span>
            </div>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Baños</span>
                <FontAwesomeIcon
                    icon={faUtensils}
                    style={{ fontSize: 22, color: "#222222", marginLeft: 15 }}
                /> 
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Baño privado</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Bañera en algunas habitaciones</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 20, color: "#666a6e", marginRight: 5 }}
                /> 
                <span className='item'>Ducha</span>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default Services;