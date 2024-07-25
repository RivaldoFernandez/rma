import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CarouselCampo.css';

const CarouselCampo = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const totalItems = items.length;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval); 
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const getVisibleItems = () => {
        let visibleItems = [];
        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % totalItems;
            visibleItems.push(items[index]);
        }
        return visibleItems;
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">
                <FaChevronLeft size={30} />
            </button>
            <div className="carousel-images">
                {getVisibleItems().map((item, index) => (
                    <div key={index} className='sensores-item-4'>
                        <div className='value-icon-container-4'>
                            <img className='sensor-img-4' src={item.img} alt="Sensor" />
                            <div className='container-text'>
                                <span className='sensor-date'>{item.date}</span>
                                <span className='sensor-time'>{item.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default CarouselCampo;
