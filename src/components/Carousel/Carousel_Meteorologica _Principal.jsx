import React, { useState } from 'react';
import "../Carousel/Carousel_Principal_Meteoro.css"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ sensors }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sensorsToShow = 2; // Para la vista de dos contenidos imagenes

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(sensors.length / sensorsToShow));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(sensors.length / sensorsToShow)) % Math.ceil(sensors.length / sensorsToShow));
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button">
                <FaChevronLeft size={30} />
            </button>
            <div className="carousel-images">
                {sensors.slice(currentIndex * sensorsToShow, currentIndex * sensorsToShow + sensorsToShow).map((sensor, index) => (
                    <div key={index} className='sensores-item-4'>
                        <div className='value-icon-container-4'>
                            <img className='sensor-img-4' src={sensor.img} alt="Sensores" style={{ width: '180px' }} />
                            <div className='container-text'>
                                <span className='sensor-value-4'>{sensor.title}</span>
                                <h1>{sensor.coveredArea}</h1>
                                <h2>{sensor.location}</h2>
                                <h3>{sensor.model}</h3>
                                <h4>{sensor.specifications}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default Carousel;
