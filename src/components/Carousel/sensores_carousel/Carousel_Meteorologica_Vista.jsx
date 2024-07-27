import React from 'react';
import  ImgTempEjemplo from "../img/ImgTempEjemplo.png"
import  ImgTempEjemplo1 from "../img/ImgTempEjemplo1.png"
import Carousel_Meteorologica_Principal from './Carousel_Meteorologica_Principal';
const Carousel_Images = () => {
    const sensors = [
        {
            img: ImgTempEjemplo1,
            title: 'Sensor de Humedad',
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
            title: ' Humedad 23',
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
            title: 'Sensor de Humedad 23',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: 'Sensor de Humedad',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: 'Sensor de Humedad 3333333',
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
