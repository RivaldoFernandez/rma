import React, { useState, useEffect } from "react";
import "../Programacion_Riego/Programacion_Riego_Valula.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modals_Valvule from "../Modals/Modals_Valvule";
import axios from 'axios';

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
  const [descarga, setDescarga] = useState(""); // Descarga del sistema
  const [eto, setEto] = useState(""); // ET0
  const [kc, setKc] = useState(""); // Kc
  const [frequency, setFrequency] = useState(""); // Frecuencia de riego
  const [irrigationTime, setIrrigationTime] = useState(""); // Hora de riego
  const [startTime, setStartTime] = useState(""); // Hora de inicio
  const [endTime, setEndTime] = useState(""); // Hora de fin
  const [selectedWeek, setSelectedWeek] = useState(getWeekNumber(new Date()) + 1);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setStartDateStart(today);
    setStartDateEnd(today);
    fetchEt0(); //Llamar a la función para obtener la evotranspiracion
    fetchDescarga(); // Llamar a la función para obtener la descarga del sistema
    fetchLastWatering(); // Llamar a la función para obtener el último riego programado
  }, []);

  const fetchDescarga = async () => {
    try {
      const response = await axios.get('https://test-production-18cc.up.railway.app/api/esp32/1/descarga/');
      setDescarga(response.data.descarga); // Ajustar según el formato de la respuesta de tu API
    } catch (error) {
      console.error('Error fetching descarga:', error);
    }
  };

  const fetchEt0 = async () => {
    try {
      const response = await axios.get('https://test-production-18cc.up.railway.app/api/lecturasRaspberry/ultimaSemana/1/');
      const data = response.data;
  
      if (Array.isArray(data) && data.length > 0) {
        setEto(data[0].et0); // Ajustar para obtener el et0 del primer objeto en el array
      } else {
        console.error('Error: La respuesta de la API no es un array o está vacía.');
      }
    } catch (error) {
      console.error('Error fetching ET0:', error);
    }
  };

  const fetchLastWatering = async () => {
    try {
      const response = await axios.get('https://test-production-18cc.up.railway.app/api/programa/ultimoRiegoProgramado/1/');
      setLastWatering(response.data.fecha); // Ajustar según el formato de la respuesta de tu API
    } catch (error) {
      console.error('Error fetching LastWatering:', error);
    }
  };

  useEffect(() => {
    if (kc && frequency && eto && descarga) {
      const hoursOfIrrigation = (eto * kc * frequency * 10) / descarga;
      const irrigationHours = Math.floor(hoursOfIrrigation);
      const irrigationMinutes = Math.round((hoursOfIrrigation - irrigationHours) * 60);
      setIrrigationTime(`${irrigationHours} horas y ${irrigationMinutes} minutos`);

      if (startTime) {
        const end = new Date(new Date(`1970-01-01T${startTime}:00Z`).getTime() + hoursOfIrrigation * 60 * 60 * 1000);
        setEndTime(end.toISOString().substr(11, 5));
      }
    }
  }, [kc, frequency, eto, descarga, startTime]);

  const saveChanges = async () => {
    const volumeHa = (eto * kc * frequency * 10) / descarga; // Calcular volumen por ha
    const payload = {
      fecha: startDateStart,
      semana: selectedWeek,
      hora_inicio: startTime,
      hora_fin: endTime,
      kc: parseFloat(kc),
      volumen_ha: volumeHa,
      idEsp32: 1, // Ajustar según sea necesario
    };

    try {
      await axios.post('https://test-production-18cc.up.railway.app/api/programas/', payload);
      alert('Datos guardados exitosamente');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error guardando los datos');
    }

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

  const handleFrequencyChange = (event) => {
    const freq = event.target.value;
    setFrequency(freq);

    if (freq && lastWatering) {
      const startDayIndex = new Date(lastWatering).getDay();
      const updatedDays = days.map((day, index) => ({
        ...day,
        checked: ((index - startDayIndex) % parseInt(freq, 10) === 0)
      }));
      setDays(updatedDays);
    }
  };

  const resetForm = () => {
    const today = new Date().toISOString().split("T")[0];
    setStartDateStart(today);
    setStartDateEnd(today);
    setKc("");
    setFrequency("");
    setIrrigationTime("");
    setStartTime("");
    setEndTime("");
    setDays([
      { name: "Lunes", checked: false },
      { name: "Martes", checked: false },
      { name: "Miércoles", checked: false },
      { name: "Jueves", checked: false },
      { name: "Viernes", checked: false },
      { name: "Sábado", checked: false },
      { name: "Domingo", checked: false },
    ]);
    setIsEditing(false);
  };

  // Obtener la semana actual
  const currentWeek = getWeekNumber(new Date());

  // Generar la semana siguiente
  const nextWeek = currentWeek + 1;

  // Manejar el cambio de selección
  const handleChange = (event) => {
    const weekNumber = parseInt(event.target.value, 10);
    setSelectedWeek(weekNumber);
    const { startOfWeek, endOfWeek } = getWeekStartAndEndDates(new Date().getFullYear(), weekNumber);
    setStartDateStart(startOfWeek);
    setStartDateEnd(endOfWeek);
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
                  <input
                    type="number"
                    id="kc"
                    value={kc}
                    onChange={(e) => setKc(e.target.value)}
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule-2">
                  <label htmlFor="frequency" className="label-kc-valvule">
                    Frecuencia de Riego:
                  </label>
                  <input
                    type="number"
                    id="frequency"
                    value={frequency}
                    onChange={handleFrequencyChange}
                    className="ingress-kc-valvule"
                  />
                </div>
                <div className="container-kc-valvule-2">
                  <label htmlFor="irrigationTime" className="label-kc-valvule">
                    Horas de Riego:
                  </label>
                  <input
                    type="text"
                    id="irrigationTime"
                    value={irrigationTime}
                    readOnly
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
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
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
                    value={endTime}
                    readOnly
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
                    readOnly
                    className="date-title-ultimo-valvula"
                  />
                </div>
                <div className="container-eto-valvula">
                  <label htmlFor="eto" className="label-ETo mr-4">
                    ET0:
                  </label>
                  <input
                    type="number"
                    id="eto"
                    value={eto}
                    readOnly
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
                    value={descarga}
                    readOnly
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
                onClick={resetForm}
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

// Función para obtener la fecha de inicio y fin de la semana
const getWeekStartAndEndDates = (year, weekNumber) => {
  const firstDayOfYear = new Date(year, 0, 1);
  const daysOffset = (weekNumber - 1) * 7;
  const startOfWeek = new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + daysOffset));
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  return {
    startOfWeek: startOfWeek.toISOString().split('T')[0],
    endOfWeek: endOfWeek.toISOString().split('T')[0],
  };
};
