import React from 'react';
import  ImgTempEjemplo from "../img/ImgTempEjemplo.png"
import  ImgTempEjemplo1 from "../img/ImgTempEjemplo1.png"
import Carousel_Meteorologica_Principal from './Carousel_Meteorologica_Principal';
const Carousel_Images = () => {
    const sensors = [
        {
            img: ImgTempEjemplo1,
            title: 'Proimerrrrrroooooooo',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo,
            title: 'Sensor de Humedad',
            coveredArea: 'Área cubierta: 150 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: ' Humedad',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo,
            title: 'Sensor de Humedad',
            coveredArea: 'Área cubierta: 150 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: 'fernandez ',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: 'rivaldo ',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: 'ultimo ',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },


    ];

    return (
        <div>
            <Carousel_Meteorologica_Principal sensors={sensors} />
        </div>
    );
};
export default Carousel_Images;
