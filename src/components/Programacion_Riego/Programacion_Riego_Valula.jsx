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

  const openModal = (day) => {
    setCurrentDay(day);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Obtener la semana actual
  const currentWeek = getWeekNumber(new Date());

  // Generar la semana siguiente
  const nextWeek = currentWeek + 1;

  const [selectedWeek, setSelectedWeek] = useState(nextWeek);

  // Manejar el cambio de selección
  const handleChange = (event) => {
    setSelectedWeek(parseInt(event.target.value, 10));
  };

  // Mostrar semanas actuales y siguientes
  const weeksToShow = [currentWeek, nextWeek];

  return (
    <div className="valve-program-container">
      <div className="valve-content">
        <div className="valve-welcome">
          <h1 className="valve-title">
            <strong>Válvula {valve}</strong>
          </h1>
          <div className="week-container flex items-center space-x-4">
            <span className="font-bold">Semana: </span>
            <div className="filter-item-dev flex flex-col items-start justify-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <select
                name="semana"
                value={selectedWeek}
                onChange={handleChange}
                className="w-24 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {weeksToShow.map((week) => (
                  <option key={week} value={week}>
                    {week}
                  </option>
                ))}
              </select>
            </div>
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
                <div className="container-kc-valvule-2">
                  <label htmlFor="kc" className="label-kc-valvule mr-4">
                    KC:
                  </label>
                  <input type="number" id="kc" className="ingress-kc-valvule" />
                </div>
                <div className="container-kc-valvule-2">
                  <label htmlFor="frequency" className="label-kc-valvule">
                    Frecuencia de Riego:
                  </label>
                  <input
                    type="number"
                    id="frequency"
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule-2">
                  <label htmlFor="irrigationTime" className="label-kc-valvule">
                    Hora de Riego:
                  </label>
                  <input
                    type="time"
                    id="irrigationTime"
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule-2">
                  <label htmlFor="startTime" className="label-kc-valvule">
                    Hora de Inicio:
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule-2">
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
                  <label htmlFor="eto" className="label-ETo mr-4">
                    ETo:
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
                  <label htmlFor="systemDischarge" className="label-ETo mr-4">
                    Descarga del Sistema:
                  </label>
                  <input
                    type="text"
                    id="systemDischarge"
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

const getWeekNumber = (date) => {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};
