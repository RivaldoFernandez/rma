import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "../Modals/Modals_Riego.css"; 

// Modal configurado desde la raiz
Modal.setAppElement('#root');

// Los dias
const daysOfWeek = [
    { id: 'monday', label: 'L' },
    { id: 'tuesday', label: 'M' },
    { id: 'wednesday', label: 'M'},
    { id: 'thursday', label: 'J' },
    { id: 'friday', label: 'V' },
    { id: 'saturday', label: 'S' },
    { id: 'sunday', label: 'D' },
];

const ValveModal = ({ isOpen, onRequestClose, valve }) => {
    const [startDate, setStartDate] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);

    //Fechaa actual segun sea el dia
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setStartDate(today);
    }, []);

    // Se maneja los checkboxes de los días de la semana
    const handleChange = (event) => {
        const { id, checked } = event.target;
        setSelectedDays(prevSelectedDays => 
            checked
                ? [...prevSelectedDays, id]
                : prevSelectedDays.filter(day => day !== id)
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={`Programación de ${valve}`}
            className="modal"
            overlayClassName="overlay"
        >
            <h2>Programación de Válvula - {valve}</h2>
            <form>
                <div>
                    <label htmlFor="startDate">Fecha</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <h1 className='text-center font-bold mt-8'>Ciclo de Riego (días)</h1>
                <div className="flex gap-4 mb-8 mt-8">
                    {daysOfWeek.map(day => (
                        <label key={day.id} className="flex items-center">
                            <input
                                type="checkbox"
                                id={day.id}
                                checked={selectedDays.includes(day.id)}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">{day.label}</span>
                        </label>
                    ))}
                </div>

                <div className="p-4">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="start-time" className="text-gray-700 font-medium ml-4">Hora de Inicio</label>
                            <input
                                type="time"
                                id="start-time"
                                defaultValue="08:30" // Valor que se nos mostrara por defecto
                                className="border border-gray-300 rounded-lg p-2 ml-20 w-24 text-right"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="end-time" className="text-gray-700 font-medium ml-4">Hora de Fin</label>
                            <input
                                type="time"
                                id="end-time"
                                defaultValue="17:00" // Valor que se nos mostrara por defecto
                                className="border border-gray-300 rounded-lg p-2 ml-20 w-24 text-right"
                            />
                        </div>
                    </div>
                </div>

                <div className="modal-buttons flex justify-between">
                    <button type="button" onClick={onRequestClose}>Cerrar</button>
                    <button type="button" onClick={() => {
                        console.log('Datos guardados');
                        onRequestClose();
                    }}>Guardar</button>
                </div>
            </form>
        </Modal>
    );
};

export default ValveModal;
