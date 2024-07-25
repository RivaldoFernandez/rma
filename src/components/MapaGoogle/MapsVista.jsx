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
        <div className='p-4  rounded-lg'>
            <h1 className='font-bold mb-2 text-gray-800 text-center'>
                Maps
            </h1>
            <h2 className=' text-gray-600 text-lg '>Este mapa muestra la ubicación de todos los sensores instalados.</h2>
            <MapContainer sensors={sensors} />
            <button
                className='mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mx-auto block'
                onClick={openModal}
            >
                Localizar
            </button>

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
