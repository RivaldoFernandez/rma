// SensorList.jsx
import React, { useState } from 'react';
import TemperaturaSensor from './TemperaturaSensor';
import HumedadSensor from './HumedadSensor';
import ConductividadSensor from './ConductividadSensor';
import BarometroSensor from './BarometroSensor';
import PhSensor from './PhSensor';
import PiranometroSensor from './PiranometroSensor';
import AnemometroSensor from './AnemometroSensor';

const SensorList = () => {
    const [sensorSeleccionado, setSensorSeleccionado] = useState('');

    return (
        <div className='contenido-sensores-1'>
            <ul className='cont-sensor-1'>
                <TemperaturaSensor
                    isSelected={sensorSeleccionado === 'Temperatura'}
                    onClick={() => setSensorSeleccionado('Temperatura')}
                />
                <HumedadSensor
                    isSelected={sensorSeleccionado === 'Humedad'}
                    onClick={() => setSensorSeleccionado('Humedad')}
                />
                <ConductividadSensor
                    isSelected={sensorSeleccionado === 'Conductividad eléctrica'}
                    onClick={() => setSensorSeleccionado('Conductividad eléctrica')}
                />
                <BarometroSensor
                    isSelected={sensorSeleccionado === 'Barómetro'}
                    onClick={() => setSensorSeleccionado('Barómetro')}
                />
                <PhSensor
                    isSelected={sensorSeleccionado === 'PH'}
                    onClick={() => setSensorSeleccionado('PH')}
                />
                <PiranometroSensor
                    isSelected={sensorSeleccionado === 'Piranómetro'}
                    onClick={() => setSensorSeleccionado('Piranómetro')}
                />
                <AnemometroSensor
                    isSelected={sensorSeleccionado === 'Anemómetro'}
                    onClick={() => setSensorSeleccionado('Anemómetro')}
                />
            </ul>
            {/* Renderiza el gráfico según el sensor seleccionado */}
            <div className='grafico-maps-1'>
                <div className='grafico-reporte-1'>
                    <h1 className='title-gm-1'>Gráfico</h1>
                    {/* Aquí renderiza el gráfico */}
                </div>
            </div>
        </div>
    );
};

export default SensorList;
