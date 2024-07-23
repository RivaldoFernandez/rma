// MapContainer.jsx

import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: '200px',
        width: '100%'
        
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCPW0gwxdN3V7it2qNWndld9kkKvxFjNJo"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={{
                    lat:  -16.39889,
                    lng: -71.535
                }}
            />
        </LoadScript>
    );
};

export default MapContainer;
