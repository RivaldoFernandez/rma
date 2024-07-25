import React, { useState, useEffect } from 'react';
import "../sensores_carousel/Carousel_Principal_Meteoro.css"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel_Meteorologica_Principal = ({ sensors }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sensorsToShow = 2; // Para la vista de dos contenidos imagenes
    const totalSensors = sensors.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 2000); // Desplazamiento automático cada 2 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSensors);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSensors) % totalSensors);
    };

    // Duplica las imágenes para crear el efecto de bucle
    const extendedSensors = [...sensors, ...sensors];

    return (
        <div className="meteor-carousel">
            <button onClick={prevSlide} className="meteor-carousel-button">
                <FaChevronLeft size={30} />
            </button>
            <div className="meteor-carousel-images">
                <div className="meteor-carousel-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / sensorsToShow)}%)` }}>
                    {extendedSensors.map((sensor, index) => (
                        <div key={index} className='meteor-sensor-item'>
                            <div className='meteor-sensor-content'>
                                <img className='meteor-sensor-img' src={sensor.img} alt="Sensor" />
                                <div className='meteor-sensor-details'>
                                    <span className='meteor-sensor-title'>{sensor.title}</span>
                                    <h1 className='meteor-sensor-covered-area'>{sensor.coveredArea}</h1>
                                    <h2 className='meteor-sensor-location'>{sensor.location}</h2>
                                    <h3 className='meteor-sensor-model'>{sensor.model}</h3>
                                    <h4 className='meteor-sensor-specifications'>{sensor.specifications}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className="meteor-carousel-button">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default Carousel_Meteorologica_Principal;
