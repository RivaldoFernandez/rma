// PiranometroSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import Piranometro from '../img_com/piranometro.png'; // Ajusta el path

const PiranometroSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='Piranómetro'
            value='50 W/m²'
            iconSrc={Piranometro}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default PiranometroSensor;
