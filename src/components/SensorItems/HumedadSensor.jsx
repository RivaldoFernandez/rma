// HumedadSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import Humedad from '../img_com/humedad.png'; // Ajusta el path

const HumedadSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='Humedad'
            value='100%'
            iconSrc={Humedad}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default HumedadSensor;
