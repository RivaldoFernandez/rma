import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../Modals/Modals_Valvule.css";

// Configuración de Modal para el root
Modal.setAppElement("#root");

const Modals_Valvule = ({ isOpen, onRequestClose, day, valve }) => {
  const [startDate, setStartDate] = useState("");

  // Configura la fecha actual
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
  }, []);

  const saveChanges = () => {
    // Lógica para guardar cambios
    console.log("Cambios guardados");
    onRequestClose(); // Cierra el modal después de guardar
  };

  const closeModal = () => {
    // Muestra un cuadro de confirmación antes de cerrar
    const userConfirmed = window.confirm(
      "¿Estás seguro de que quieres salir sin guardar los cambios?"
    );
    if (userConfirmed) {
      onRequestClose(); // Cierra el modal solo si el usuario confirma
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={`Programación de ${valve}`}
      className="modal-valvulas"
      overlayClassName="overlay-valvulas"
    >
      <div className="flex-container-valvulas">
        <h2 className="title-riego-valvulas">Edición de Riego para {day}</h2>
        <span className="text-right-valvulas">Válvula {valve}</span>
      </div>
      <form>
        <div className="container-irrigation-izquierda-derecha-valvulas">
          <div className="container-izquierda-valvulas">
            <label htmlFor="startDateStart" className="label-del-valvulas">
              Día
            </label>
            <input
              type="date"
              id="startDateStart"
              name="startDateStart"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="date-del-irrigation-valvulas"
            />
            <div className="container-kc-valvulas">
              <label htmlFor="kc" className="label-kc-valvulas">
                KC:
              </label>
              <input type="text" id="kc" className="ingress-kc-valvulas" />
            </div>
            <div className="container-kc-valvulas">
              <label htmlFor="frequency" className="label-kc-valvulas">
                FC:
              </label>
              <input
                type="text"
                id="frequency"
                className="ingress-kc-valvulas"
              />
            </div>
            <div className="container-kc-valvulas">
              <label htmlFor="irrigationTime" className="label-kc-valvulas">
                Horas:
              </label>
              <input type="time" id="endTime" className="ingress-kc-valvulas" />
            </div>
            <div className="container-kc-valvulas">
              <label htmlFor="startTime" className="label-kc-valvulas">
                Hora de Inicio:
              </label>
              <input type="time" id="endTime" className="ingress-kc-valvulas" />
            </div>
            <div className="container-kc-valvulas">
              <label htmlFor="endTime" className="label-kc-valvulas">
                Hora de Fin:
              </label>
              <input type="time" id="endTime" className="ingress-kc-valvulas" />
            </div>
          </div>

          <div className="container-derecha-valvulas">
            <label
              htmlFor="lastWatering"
              className="date-title-ultimo-valvulas"
            >
              Último riego programado:
            </label>
            <input
              type="date"
              id="lastWatering"
              name="lastWatering"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="date-title-ultimo-valvulas"
            />
            <div className="container-eto-valvulas">
              <label htmlFor="eto" className="label-ETo-valvulas">
                ETo:
              </label>
              <input type="text" id="eto" className="ingress-eto-valvulas" />
            </div>
            <div className="container-eto-valvulas">
              <label htmlFor="systemDischarge" className="label-ETo-valvulas">
                Descarga del Sistema:
              </label>
              <input
                type="text"
                id="systemDischarge"
                className="ingress-eto-valvulas"
              />
            </div>
          </div>
        </div>
        <div className="modal-buttons-valvulas">
          <button
            type="button"
            className="btn-save-valvulas"
            onClick={saveChanges}
          >
            Guardar Cambios
          </button>
          <button
            type="button"
            className="btn-cancel-valvulas"
            onClick={closeModal}
          >
            Salir
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modals_Valvule;
