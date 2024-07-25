{/*import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types'; // Para validación de propiedades

// Propiedades predeterminadas para el mapa
const defaultProps = {
    height: '250px', // Ajustado para mejor visualización
    width: '100%',
};

// Clave de API de Google Maps (reemplaza con tu clave)
const GOOGLE_MAPS_API_KEY = 'AIzaSyCtme10pzgKSPeJVJrG1O3tjR6lk98o4w8';

const Maps_Container = ({ sensors }) => {
    const [selectedSensor, setSelectedSensor] = React.useState(null);

    const mapStyles = {
        height: defaultProps.height,
        width: defaultProps.width,
    };

    // Determina el centro del mapa basado en los sensores
    const center = sensors.length > 0 
        ? { lat: sensors[0].latitude, lng: sensors[0].longitude }
        : { lat: -16.39889, lng: -71.535 };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={center}
            >
                {sensors.map((sensor, index) => (
                    <Marker
                        key={index}
                        position={{ lat: sensor.latitude, lng: sensor.longitude }}
                        onClick={() => setSelectedSensor(sensor)}
                        icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" // Icono personalizado
                    />
                ))}
                
                {selectedSensor && (
                    <InfoWindow
                        position={{ lat: selectedSensor.latitude, lng: selectedSensor.longitude }}
                        onCloseClick={() => setSelectedSensor(null)}
                    >
                        <div>
                            <h4>{selectedSensor.name}</h4>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

// Validación de las propiedades
Maps_Container.propTypes = {
    sensors: PropTypes.arrayOf(PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
};

export default Maps_Container;
*/}