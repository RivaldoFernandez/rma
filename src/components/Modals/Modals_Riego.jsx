// ValveModal.js
import React from 'react';
import Modal from 'react-modal';

import "../Modals/Modals_Riego.css"

Modal.setAppElement('#root');

const ValveModal = ({ isOpen, onRequestClose, valve }) => (
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
                <label>Fecha</label>
                <input type="date" name="startDate" />
            </div>
            <div>
                <label>Fecha de Fin: </label>
                <input type="date" name="endDate" />
            </div>
            <div>
                <label>Frecuencia de Riego: </label>
                <select name="frequency">
                    <option value="12">12 horas</option>
                    <option value="24">24 horas</option>
                </select>
            </div>
            <div>
                <label>Tiempo de Riego: </label>
                <select name="duration">
                    <option value="2">2 horas</option>
                    <option value="4">4 horas</option>
                </select>
            </div>
            <div>
                <label>Riego automático: </label>
                <input type="checkbox" name="automatic" />
            </div>
            <div className="modal-buttons">
                <button type="button" onClick={onRequestClose}>Cerrar</button>
                <button type="button" onClick={() => {
                    // Implementar lógica de guardar aquí
                    console.log('Datos guardados');
                    onRequestClose();
                }}>Guardar</button>
            </div>
        </form>
    </Modal>
);

export default ValveModal;
