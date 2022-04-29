import React from 'react';
import GoogleMapReact from 'google-map-react';

const GMap = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: -31.7237421,
          lng: -65.0086854
        },
        zoom: 15
      };

    return ( 
        <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact 
        /* bootstrapURLKeys={{ key: "AIzaSyD9JHUyupozNNbADOmNQzFSSMoAheekvGM" }} */
        bootstrapURLKeys={{ key: "AIzaSyCpkK8XnI8-_M5rBYaH3h_BNvDXuH3D7ic" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
    >
        <AnyReactComponent text="Coronado Hotel & Suites" lat={-31.7237421} lng={-65.0086854} />
    </GoogleMapReact>
    </div>
     );
}
 
export default GMap