// SensorItem.jsx
import React from 'react';

const SensorItem = ({ sensor, value, iconSrc, isSelected, onClick }) => {
    return (
        <li
            className={`sensor-item-1 ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <div className='value-icon-container-1'>
                <span className='sensor-value-1'>{value}</span>
                <img className='sensor-icon-1' src={iconSrc} alt={sensor} style={{ width: '25px' }} />
            </div>
            <span className='sensor-name-1'>{sensor}</span>
        </li>
    );
};

export default SensorItem;
