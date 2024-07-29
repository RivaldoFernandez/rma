// CarouselCampoVista.jsx
import React from 'react';
import CarouselCampo from './carousel_campo';
import ImgTempEjemplo from '../Carousel/img/campo.png';
import ImgTempEjemplo1 from '../Carousel/img/uva.png';
import ImgTempEjemplo2 from '../Carousel/img/uvas.png';
import ImgTempEjemplo3 from '../Carousel/img/ImgTempEjemplo.png';
const CarouselCampoVista = () => {
    const items = [
        {
            img: ImgTempEjemplo1,
            date: '2024-07-24', // Fecha de la imagen
            time: '08:30 AM'   // Hora de la imagen
        },
        {
            img: ImgTempEjemplo2,
            date: '2021-07-23',
            time: '09:00 AM'
        },
        {
            img: ImgTempEjemplo3,
            date: '2024-07-22',
            time: '10:15 AM'
        },
        {
            img: ImgTempEjemplo2,
            date: '2020-07-21',
            time: '11:45 AM'
        },
        {
            img: ImgTempEjemplo,
            date: '2024-07-22',
            time: '10:15 AM'
        },
        {
            img: ImgTempEjemplo2,
            date: '2029-07-21',
            time: '11:45 AM'
        }
    ];

    return (
        <div>
            <CarouselCampo items={items} />
        </div>
    );
};

export default CarouselCampoVista;
