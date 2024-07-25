// MapContainer.jsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Propiedades predeterminadas para el mapa
const defaultProps = {
    height: '200px',
    width: '100%',
};

const Maps_Container = ({ sensors }) => {
    const mapStyles = {
        height: defaultProps.height,
        width: defaultProps.width,
    };

    // Si no hay sensores, se centra en una coordenada predeterminada
    const center = sensors.length > 0 
        ? { lat: sensors[0].latitude, lng: sensors[0].longitude }
        : { lat: -16.39889, lng: -71.535 };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCtme10pzgKSPeJVJrG1O3tjR6lk98o4w8"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={center}
            >
                {sensors.map((sensor, index) => (
                    <Marker
                        key={index}
                        position={{ lat: sensor.latitude, lng: sensor.longitude }}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Maps_Container;
