// AnemometroSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import Anemometro from '../img_com/anemometro.png'; // Ajusta el path

const AnemometroSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='Anemómetro'
            value='29 m/s'
            iconSrc={Anemometro}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default AnemometroSensor;
