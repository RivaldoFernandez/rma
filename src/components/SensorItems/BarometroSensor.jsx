// BarometroSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import Barometro from '../img_com/barometro.png'; // Ajusta el path

const BarometroSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='Barómetro'
            value='900 hPa'
            iconSrc={Barometro}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default BarometroSensor;
