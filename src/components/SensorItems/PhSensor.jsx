// PhSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import PotenciH from '../img_com/ph.png'; // Ajusta el path

const PhSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='PH'
            value='8'
            iconSrc={PotenciH}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default PhSensor;
