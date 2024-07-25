{/*import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modals_Maps.css'; // Asegúrate de que la ruta es correcta

const Modals_Maps = ({ isOpen, onClose, sensors, onAddSensor, onEditSensor, onDeleteSensor }) => {
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const sensor = { name, latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
        if (editIndex !== null) {
            onEditSensor(editIndex, sensor);
        } else {
            onAddSensor(sensor);
        }
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setLatitude('');
        setLongitude('');
        setEditIndex(null);
    };

    const handleEdit = (index) => {
        const sensor = sensors[index];
        setName(sensor.name);
        setLatitude(sensor.latitude);
        setLongitude(sensor.longitude);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        onDeleteSensor(index);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
            className="modal"
            overlayClassName="overlay"
        >
            <h2 className="text-2xl font-bold mb-4">
                {editIndex !== null ? 'Editar Sensor' : 'Agregar Sensor'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Latitud:</label>
                    <input
                        type="number"
                        step="any"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Longitud:</label>
                    <input
                        type="number"
                        step="any"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        required
                    />
                </div>
                <div className="button-group">
                    <button
                        type="submit"
                        className="button add"
                    >
                        {editIndex !== null ? 'Guardar Cambios' : 'Agregar'}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            resetForm();
                            onClose(); // Close the modal
                        }}
                        className="button cancel"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            <h3 className="text-xl font-semibold mt-6">Lista de Sensores</h3>
            <ul className="sensor-list">
                {sensors.map((sensor, index) => (
                    <li key={index}>
                        <span>{sensor.name} (Lat: {sensor.latitude}, Lng: {sensor.longitude})</span>
                        <div>
                            <button
                                onClick={() => handleEdit(index)}
                                className="edit"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                className="delete"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </Modal>
    );
};

export default Modals_Maps;*/}