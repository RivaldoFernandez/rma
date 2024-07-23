// ConductividadSensor.jsx
import React from 'react';
import SensorItem from './SensorItem';
import ConductividadE from '../img_com/c_electrica.png'; // Ajusta el path

const ConductividadSensor = ({ isSelected, onClick }) => {
    return (
        <SensorItem
            sensor='Conductividad eléctrica'
            value='151 S/cm'
            iconSrc={ConductividadE}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
};

export default ConductividadSensor;
