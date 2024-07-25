// HumedadSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import Humedad from '../img_com/humedad.png'; // Ajusta el path

const HumedadSensor = ({ isSelected, onClick, valor }) => {
    return (
        <SensorItem
            sensor='Humedad'
            value={valor}
            iconSrc={Humedad}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default HumedadSensor;
