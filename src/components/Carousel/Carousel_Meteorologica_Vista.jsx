import React from 'react';
import CarouselSpacing from './Carousel_Meteorologica _Principal';
import  ImgTempEjemplo from '../Carousel/img/ImgTempEjemplo.png'
import  ImgTempEjemplo1 from '../Carousel/img/ImgTempEjemplo1.png'
const Carousel_Images = () => {
    const sensors = [
        {
            img: ImgTempEjemplo1,
            title: 'Sensor de Temperatura',
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
            title: 'Sensor de Temperatura',
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
            title: 'Sensor de Temperatura',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo1,
            title: 'Sensor de Humedad',
            coveredArea: 'Área cubierta: 150 m²',
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
            title: 'Sensor de Humedad',
            coveredArea: 'Área cubierta: 150 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },

    ];

    return (
        <div>
            <CarouselSpacing sensors={sensors} />
        </div>
    );
};
export default Carousel_Images;
