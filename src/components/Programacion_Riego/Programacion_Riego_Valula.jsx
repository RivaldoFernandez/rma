import React, { useState, useEffect } from "react";
import "../Programacion_Riego/Programacion_Riego_Valula.css";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

const Programacion_Valvula = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Nuevo estado para el modo de edición
  const [startDate, setStartDate] = useState("");
  const [valve, setValve] = useState("");
  const [days, setDays] = useState([
    { name: "Lunes", checked: false },
    { name: "Martes", checked: false },
    { name: "Miércoles", checked: false },
    { name: "Jueves", checked: false },
    { name: "Viernes", checked: false },
    { name: "Sábado", checked: false },
    { name: "Domingo", checked: false },
  ]);

  // Establece la fecha actual por defecto
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
  }, []);

  const openModal = (valveName) => {
    setValve(valveName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false); // Desactiva el modo de edición al cerrar el modal
  };

  const saveChanges = () => {
    // Aquí podrías añadir lógica para guardar los cambios
    setIsEditing(false); // Desactiva el modo de edición después de guardar
    closeModal();
  };

  const handleEdit = () => {
    setIsEditing(true); // Activa el modo de edición
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
    updatedDays[index].checked = false; // Solo desmarcar el checkbox
    setDays(updatedDays);
  };

  // edicion de dia
  const [isEditingSemana, setIsEditingSemana] = useState(false); // Estado para el modo de edición de la semana
  const [week, setWeek] = useState(""); // Estado para el valor de la semana

  const handleEditSemana = () => {
    setIsEditingSemana(true); // Activa el modo de edición de la semana
  };

  const handleSaveSemana = () => {
    setIsEditingSemana(false); // Desactiva el modo de edición de la semana después de guardar
  };

  return (
    <div className="valve-program-container">
      <div className="valve-content">
        <div className="valve-welcome">
          <h1 className="valve-title">
            <strong>Valvula 01</strong>
          </h1>
          <div className="week-container">
            <span>Semana: </span>
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
                <FaSave className="icon save-icon" onClick={handleSaveSemana} />
              </div>
            ) : (
              <div className="view-week">
                <span>{week || "Sin asignar"}</span>
                <FaEdit className="icon edit-icon" onClick={handleEditSemana} />
              </div>
            )}
          </div>

          <div className="container-general-form">
            <div className="valve-container">
              <div className="valve-container-left">
                <div className="container-del-al">
                  <label htmlFor="startDateStart" className="valve-label-from">
                    Del
                  </label>
                  <input
                    type="date"
                    id="startDateStart"
                    name="startDateStart"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="valve-date-input"
                  />
                  <label htmlFor="startDateEnd" className="valve-label-to">
                    al
                  </label>
                  <input
                    type="date"
                    id="startDateEnd"
                    name="startDateEnd"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="valve-date-input"
                  />
                </div>
                <InputField id="kc" label="KC" />
                <InputField id="frequency" label="Frecuencia de Riego" />
                <InputField id="irrigationTime" label="Hora de Riego" />
                <InputField id="startTime" label="Hora de Inicio" />
                <InputField id="endTime" label="Hora de Fin" />
              </div>
              <div className="valve-container-right">
                <div className="container-del-al">
                  <label
                    htmlFor="lastWatering"
                    className="valve-date-title-last"
                  >
                    Último riego programado:
                  </label>
                  <input
                    type="date"
                    id="lastWatering"
                    name="lastWatering"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="valve-date-input"
                  />
                </div>
                <InputField id="eto" label="ETo" />
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
                          <FaEdit
                            className="icon edit-icon"
                            onClick={handleEdit} // Mostrar el ícono de editar en modo normal
                          />
                        )}
                        <FaTrash
                          className="icon delete-icon"
                          onClick={() => handleDelete(index)} // Mostrar el ícono de eliminar y desmarcar el checkbox
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
      {isModalOpen && (
        <div className="valve-overlay">
          <div className="valve-modal">
            <button className="valve-btn-save" onClick={saveChanges}>
              Guardar
            </button>
            <button className="valve-btn-cancel" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de campo de entrada reutilizable
const InputField = ({ id, label }) => (
  <div className="valve-input-field-container">
    <label htmlFor={id} className="valve-input-field-label">
      {label}
    </label>
    <input
      type="text"
      id={id}
      pattern="[A-Za-z0-9]*"
      title="Solo se permiten letras y números"
      className="valve-input-field"
    />
  </div>
);

export default Programacion_Valvula;
