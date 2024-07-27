import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "../Modals/Modals_Riego.css"; 
import { FaEdit, FaTrash } from 'react-icons/fa';

// Modal configurado desde la raíz
Modal.setAppElement('#root');

const ValveModal = ({ isOpen, onRequestClose, valve }) => {
    const [startDate, setStartDate] = useState('');

    // Fecha actual según sea el día
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setStartDate(today);
    }, []);

    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={`Programación de ${valve}`}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="flex-container">
                <h2 className='title-riego'>Programación de Válvula</h2>
                <span className='text-right'>{valve}</span>
            </div>
            <form>
                <div>
                    <label htmlFor="startDateStart" className='label-del'>Del</label>
                    <input
                        type="date"
                        id="startDateStart"
                        name="startDateStart"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='date-del-irrigation'
                    />
                    <label htmlFor="startDateEnd" className='label-al'> al</label>
                    <input
                        type="date"
                        id="startDateEnd"
                        name="startDateEnd"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='date-al-irrigation'
                    />
                    <label htmlFor="lastWatering" className='date-title-ultimo'>Último riego programado:</label>
                    <input
                        type="date"
                        id="lastWatering"
                        name="lastWatering"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='date-title-ultimo'
                    />
                </div>
                <div className='container-irrigation-izquierda-derecha'>
                    <div className='container-izquierda'>
                        <div className='container-kc'>
                            <label htmlFor="kc" className='label-kc'>KC</label>
                            <input
                                type='text'
                                id='kc'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-kc'
                            />
                        </div>
                        <div className='container-kc'>
                            <label htmlFor="frequency" className='label-kc'>Frecuencia de Riego:</label>
                            <input
                                type='text'
                                id='frequency'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-kc'
                            />
                        </div>
                        <div className='container-kc'>
                            <label htmlFor="irrigationTime" className='label-kc'>Hora de Riego:</label>
                            <input
                                type='text'
                                id='irrigationTime'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-kc'
                            />
                        </div>
                        <div className='container-kc'>
                            <label htmlFor="startTime" className='label-kc'>Hora de Inicio:</label>
                            <input
                                type='text'
                                id='startTime'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-kc'
                            />
                        </div>
                        <div className='container-kc'>
                            <label htmlFor="endTime" className='label-kc'>Hora de Fin:</label>
                            <input
                                type='text'
                                id='endTime'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-kc'
                            />
                        </div>
                    </div>

                    <div className='container-derecha'>
                        <div className='container-eto'>
                            <label htmlFor="eto" className='label-ETo'>ETo</label>
                            <input
                                type='text'
                                id='eto'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-eto'
                            />
                        </div>
                        <div className='container-eto'>
                            <label htmlFor="systemDischarge" className='label-ETo'>Descarga del Sistema:</label>
                            <input
                                type='text'
                                id='systemDischarge'
                                pattern="[A-Za-z0-9]*"
                                title="Solo se permiten letras y números"
                                className='ingress-eto'
                            />
                        </div>
                    </div>
                </div>
                <div className="modal-buttons">
                    <button type="button" className="btn-save" onClick={() => saveChanges()}>Guardar Cambios</button>
                    <button type="button" className="btn-cancel" onClick={() => closeModal()}>Cancelar</button>
                </div>
            </form>
        </Modal>
    );
};

export default ValveModal;
