import React from 'react';
import GoogleMapReact from 'google-map-react';

const GMap = () => {

    const Map = ({ text }) => <div className="mapStyles">{text}</div>;

    const defaultProps = {
        center: {
          lat: -31.7274462,
          lng: -65.0088367
        },
        zoom: 16
      };

    return ( 
      <div style={{ height: '100vh', width: '100%', marginTop: 40 }}>
        <GoogleMapReact 
            bootstrapURLKeys={{ key: "AIzaSyD9JHUyupozNNbADOmNQzFSSMoAheekvGM" }}
            /* bootstrapURLKeys={{ key: "AIzaSyCpkK8XnI8-_M5rBYaH3h_BNvDXuH3D7ic" }} */
            defaultCenter={defaultProps.center}
            yesIWantToUseGoogleMapApiInternals
            defaultZoom={defaultProps.zoom}
        >
            <Map text="Coronado Hotel & Suites" lat={-31.7274462} lng={-65.0088367} />
        </GoogleMapReact>
      </div>
    );
}
 
export default GMap