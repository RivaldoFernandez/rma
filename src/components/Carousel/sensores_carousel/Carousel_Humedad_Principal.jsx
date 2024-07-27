import React, { useState } from 'react';
import "../sensores_carousel/Carousel_Humedad_Principal.css"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel_Humedad_Principal = ({ sensors }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sensorsToShow = 2; // Para la vista de dos contenidos imágenes

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(sensors.length / sensorsToShow));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(sensors.length / sensorsToShow)) % Math.ceil(sensors.length / sensorsToShow));
    };

    return (
        <div className="humed-carousel">
            <button onClick={prevSlide} className="humed-carousel-button" aria-label="Previous slide">
                <FaChevronLeft size={30} />
            </button>
            <div className="humed-carousel-images">
                <div className="humed-carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100 / sensorsToShow}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {sensors.length > 0 ? sensors.map((sensor, index) => (
                        <div key={index} className='humed-sensor-item'>
                            <div className='humed-sensor-content'>
                                <img className='humed-sensor-img' src={sensor.img} alt={sensor.title || "Sensor"} />
                                <div className='humed-sensor-details'>
                                    <span className='humed-sensor-title'>{sensor.title}</span>
                                    <h1 className='humed-sensor-covered-area'>{sensor.coveredArea}</h1>
                                    <h2 className='humed-sensor-location'>{sensor.location}</h2>
                                    <h3 className='humed-sensor-model'>{sensor.model}</h3>
                                    <h4 className='humed-sensor-specifications'>{sensor.specifications}</h4>
                                </div>
                            </div>
                        </div>
                    )) : <p>No sensors available</p>}
                </div>
            </div>
            <button onClick={nextSlide} className="humed-carousel-button" aria-label="Next slide">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default Carousel_Humedad_Principal;
