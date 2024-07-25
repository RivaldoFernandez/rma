// MapsVista.jsx

import React, { useState } from 'react';
import MapContainer from './MapContainer';
import SensorModal from './Modals_Maps';

const Maps_Vista = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [sensors, setSensors] = useState([]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleAddSensor = (sensor) => {
        setSensors([...sensors, sensor]);
        closeModal();
    };

    const handleEditSensor = (index, updatedSensor) => {
        const updatedSensors = sensors.map((sensor, i) => i === index ? updatedSensor : sensor);
        setSensors(updatedSensors);
    };

    const handleDeleteSensor = (index) => {
        const updatedSensors = sensors.filter((_, i) => i !== index);
        setSensors(updatedSensors);
    };

    return (
        <div className='maps-sensores-1'>
            <h1 className='title-gm-1'>Maps</h1>
            <h2>Este mapa muestra la ubicación de todos los sensores instalados.</h2>
            <MapContainer sensors={sensors} />
            <button className='title-gm-localizar' onClick={openModal}>Localizar</button>
            <SensorModal
                isOpen={isModalOpen}
                onClose={closeModal}
                sensors={sensors}
                onAddSensor={handleAddSensor}
                onEditSensor={handleEditSensor}
                onDeleteSensor={handleDeleteSensor}
            />
        </div>
    );
};

export default Maps_Vista;
