// TemperaturaSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import Temperatura from '../img_com/temperatura.png'; // Ajusta el path

const TemperaturaSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='Temperatura'
            value='25°C'
            iconSrc={Temperatura}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default TemperaturaSensor;
