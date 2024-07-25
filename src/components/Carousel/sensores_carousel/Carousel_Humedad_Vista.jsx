import React from 'react';
import  ImgTempEjemplo from "../img/ImgTempEjemplo.png";
import  ImgTempEjemplo1 from "../img/ImgTempEjemplo1.png"
import Carousel_Humedad_Principal from './Carousel_Humedad_Principal';
const Carousel_Humedad_Vista = () => {
    const sensors = [
        {
            img: ImgTempEjemplo1,
            title: 'Válvula 1',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo,
            title: 'Válvula 2',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        // Agrega más sensores según sea necesario
        {
            img: ImgTempEjemplo1,
            title: 'Válvula 3',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        {
            img: ImgTempEjemplo,
            title: 'Válvula 4',
            coveredArea: 'Área cubierta: 100 m²',
            location: 'Ubicación en el campo:',
            model: 'Modelo: -----',
            specifications: 'Más especificaciones',
        },
        

    ];

    return (
        <div>
            <Carousel_Humedad_Principal sensors={sensors} />
        </div>
    );
};
export default Carousel_Humedad_Vista;
