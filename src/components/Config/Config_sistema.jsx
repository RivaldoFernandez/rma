import React, { useState } from "react";
import "./ConfigSistema.css"; // Importa el archivo CSS

const ConfigSistema = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="config-container">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        Riego Automático
      </label>
      <div
        className={`collapsible-content ${
          isChecked ? "expanded" : "collapsed"
        }`}
      >
        <select className="input-field" disabled={!isChecked}>
          {/* <option value="">Selecciona ESP32</option>
          <option value="esp32-1">ESP32 1</option>
          <option value="esp32-2">ESP32 2</option> */}
        </select>
        <div className="input-container">
          <input
            type="number"
            placeholder="Capacidad de campo"
            className={`input-field ${!isChecked ? "disabled-input" : ""}`}
            disabled={!isChecked}
          />
          <input
            type="number"
            placeholder="Punto de marchites permanente"
            className={`input-field ${!isChecked ? "disabled-input" : ""}`}
            disabled={!isChecked}
          />
          <button className="save-button" disabled={!isChecked}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigSistema;
