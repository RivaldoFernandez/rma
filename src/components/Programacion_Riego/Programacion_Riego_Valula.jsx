import React, { useState, useEffect } from "react";
import "../Programacion_Riego/Programacion_Riego_Valula.css";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
import Modals_Valvule from "../Modals/Modals_Valvule";

const Programacion_Valvula = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [startDateStart, setStartDateStart] = useState(""); // Fecha de inicio
  const [startDateEnd, setStartDateEnd] = useState(""); // Fecha de fin
  const [lastWatering, setLastWatering] = useState(""); // Último riego
  const [days, setDays] = useState([
    { name: "Lunes", checked: false },
    { name: "Martes", checked: false },
    { name: "Miércoles", checked: false },
    { name: "Jueves", checked: false },
    { name: "Viernes", checked: false },
    { name: "Sábado", checked: false },
    { name: "Domingo", checked: false },
  ]);
  const [isEditingSemana, setIsEditingSemana] = useState(false);
  const [week, setWeek] = useState("");
  const [valve] = useState("01"); // Número de la válvula

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState(""); // Día actual para editar

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setStartDateStart(today);
    setStartDateEnd(today);
    setLastWatering(today);
  }, []);

  const saveChanges = () => {
    setIsEditing(false);
    closeModal();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCheckboxChange = (index) => {
    if (isEditing) {
      const updatedDays = [...days];
      updatedDays[index].checked = !updatedDays[index].checked;
      setDays(updatedDays);
    }
  };

  const handleDelete = (index) => {
    const updatedDays = [...days];
    updatedDays[index].checked = false;
    setDays(updatedDays);
  };

  const handleEditSemana = () => {
    setIsEditingSemana(true);
  };

  const handleSaveSemana = () => {
    setIsEditingSemana(false);
  };

  const openModal = (day) => {
    setCurrentDay(day);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="valve-program-container">
      <div className="valve-content">
        <div className="valve-welcome">
          <h1 className="valve-title">
            <strong>Válvula {valve}</strong>
          </h1>
          <div className="week-container">
            <span>
              {" "}
              <strong>Semana: </strong>
            </span>
            {isEditingSemana ? (
              <div className="edit-week">
                <input
                  type="number"
                  min="0"
                  max="auto"
                  className="ingreso-semana"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                />
                <FaSave
                  className="save-icon-container"
                  onClick={handleSaveSemana}
                />
              </div>
            ) : (
              <div className="view-week">
                <span className="ver-datos-semanas">
                  {week || "Sin asignar"}
                </span>
                <FaEdit
                  className="edit-icon-container"
                  onClick={handleEditSemana}
                />
              </div>
            )}
          </div>

          <div className="container-general-form">
            <div className="valve-container">
              <div className="valve-container-left">
                <div className="container-del-al">
                  <label htmlFor="startDateStart" className="label-del-valvule">
                    Del
                  </label>
                  <input
                    type="date"
                    id="startDateStart"
                    name="startDateStart"
                    value={startDateStart}
                    onChange={(e) => setStartDateStart(e.target.value)}
                    className="date-del-irrigation-valvule"
                  />
                  <label htmlFor="startDateEnd" className="label-al-valvule">
                    {" "}
                    al
                  </label>
                  <input
                    type="date"
                    id="startDateEnd"
                    name="startDateEnd"
                    value={startDateEnd}
                    onChange={(e) => setStartDateEnd(e.target.value)}
                    className="date-al-irrigation-valvule"
                  />
                </div>
                <div className="container-kc-valvule">
                  <label htmlFor="kc" className="label-kc-valvule">
                    KC
                  </label>
                  <input type="number" id="kc" className="ingress-kc-valvule" />
                </div>
                <div className="container-kc-valvule">
                  <label htmlFor="frequency" className="label-kc-valvule">
                    Frecuencia de Riego:
                  </label>
                  <input
                    type="number"
                    id="frequency"
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule">
                  <label htmlFor="irrigationTime" className="label-kc-valvule">
                    Hora de Riego:
                  </label>
                  <input
                    type="time"
                    id="irrigationTime"
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule">
                  <label htmlFor="startTime" className="label-kc-valvule">
                    Hora de Inicio:
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule">
                  <label htmlFor="endTime" className="label-kc-valvule">
                    Hora de Fin:
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    className="ingress-kc-valvule"
                  />
                </div>
              </div>

              <div className="valve-container-right">
                <div className="container-ultimo-riego">
                  <label
                    htmlFor="lastWatering"
                    className="date-title-ultimo-valvula"
                  >
                    Último riego programado:
                  </label>
                  <input
                    type="date"
                    id="lastWatering"
                    name="lastWatering"
                    value={lastWatering}
                    onChange={(e) => setLastWatering(e.target.value)}
                    className="date-title-ultimo-valvula"
                  />
                </div>
                <div className="container-eto-valvula">
                  <label htmlFor="eto" className="label-ETo">
                    ETo
                  </label>
                  <input
                    type="text"
                    id="eto"
                    pattern="[A-Za-z0-9]*"
                    title="Solo se permiten letras y números"
                    className="ingress-eto-valvula"
                  />
                </div>
                <div className="container-eto-valvula">
                  <label htmlFor="systemDischarge" className="label-ETo">
                    Descarga del Sistema:
                  </label>
                  <input
                    type="text"
                    id="systemDischarge"
                    pattern="[A-Za-z0-9]*"
                    title="Solo se permiten letras y números"
                    className="ingress-eto-valvula"
                  />
                </div>
                <div className="day-checkbox">
                  {days.map((day, index) => (
                    <div key={index} className="valve-day-checkbox">
                      <input
                        type="checkbox"
                        id={`day-${day.name}`}
                        name={day.name}
                        checked={day.checked}
                        onChange={() => handleCheckboxChange(index)}
                        disabled={!isEditing} // Deshabilitar el checkbox si no está en modo de edición
                        className="valve-day-checkbox-input"
                      />
                      <label
                        htmlFor={`day-${day.name}`}
                        className="valve-day-checkbox-label"
                      >
                        {day.name}
                      </label>
                      <div className="valve-day-icons">
                        {isEditing ? (
                          <FaSave
                            className="icon save-icon"
                            onClick={saveChanges} // Mostrar el ícono de guardar en modo de edición
                          />
                        ) : (
                          <MdCheckBox
                            className="icon check-icon"
                            onClick={handleEdit} // Mostrar el ícono de editar en modo normal
                          />
                        )}
                        <FaEdit
                          className="icon edit-icon"
                          onClick={() => openModal(day.name)} // Mostrar el Modals_Valvule con el nombre del día actual
                        />
                        <FaTrash
                          className="icon delete-icon"
                          onClick={() => handleDelete(index)} // Manejar la eliminación del checkbox
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="valve-form-buttons">
              <button
                type="button"
                className="valve-btn-save"
                onClick={saveChanges}
              >
                Guardar
              </button>
              <button
                type="button"
                className="valve-btn-cancel"
                onClick={closeModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalIsOpen && (
        <Modals_Valvule
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          day={currentDay} // Pasar el nombre del día actual al componente Modals_Valvule
          valve={valve} // Pasar el número de la válvula al componente Modals_Valvule
        />
      )}
    </div>
  );
};

export default Programacion_Valvula;
