import LinealConductividadE from "../components/LinealChart/LinealConductividadE";
import LinealBarometro from "../components/LinealChart/LinealBarometro";
import LinealPH from "../components/LinealChart/LinealPH";
import LinealPiranometro from "../components/LinealChart/LinealPiranometro";
import LinealAnemometro from "../components/LinealChart/LinealAnemometro";
import LinealTemperatura from "../components/LinealChart/LinealTemperatura";
import LinealHumedad from "../components/LinealChart/LinealHumedad";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logofibertel.png";

import alarmIcon from "../assets/notificaciones.png";
import profileIcon from "../assets/usuario.png";

import {
  FaHome,
  FaChartLine,
  FaHistory,
  FaCloudSun,
  FaMapSigns,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaTint ,
} from "react-icons/fa";

import "../style/Historial.css";

const Historial = () => {
  const [selectedEstacion1, setSelectedEstacion1] = useState("Válvula 1");
  const [selectedValor1, setSelectedValor1] = useState("Humedad");
  const [selectedValor2, setSelectedValor2] = useState("Temperatura");

  const handleEstacionChange1 = (event) => {
    const value = event.target.value;
    setSelectedEstacion1(value);
  };

  const handleValorChange1 = (event) => {
    const value = event.target.value;
    setSelectedValor1(value);
  };

  const handleValorChange2 = (event) => {
    const value = event.target.value;
    setSelectedValor2(value);
  };

  const renderChart1 = () => {
    switch (selectedValor1) {
      case "Humedad":
        return <LinealHumedad />;
      case "Barómetro":
        return <LinealBarometro />;
      case "Piranómetro":
        return <LinealPiranometro />;
      case "Anemómetro":
        return <LinealAnemometro />;
      default:
        return null;
    }
  };

  const renderChart2 = () => {
    switch (selectedValor2) {
      case "Temperatura":
        return <LinealTemperatura />;
      case "Humedad":
        return <LinealHumedad />;
      case "Barómetro":
        return <LinealBarometro />;
      case "Piranómetro":
        return <LinealPiranometro />;
      case "Anemómetro":
        return <LinealAnemometro />;
      default:
        return null;
    }
  };

  return (
    <div className="historial-container-3">
      <div className="content-3">
        <div className="sidebar-3 fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
          <ul className="sidebar-menu-3">
            <li>
              <Link to="/iniciio" className="menu-link-3">
                <img
                  src={logo}
                  alt="Inicio"
                  className="mb-4"
                  style={{ width: "150px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/iniciio" className="menu-link-3">
                <FaHome className="menu-icon-3" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className="menu-link-3">
                <FaChartLine className="menu-icon-3" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className="menu-link-3">
                <FaHistory className="menu-icon-3" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className="menu-link-3">
                <FaCloudSun className="menu-icon-3" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className="menu-link-3">
                <FaMapSigns className="menu-icon-3" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link to="/programacion_riego" className="menu-link-1">
                <FaTint  className="menu-icon-1" />
                <span>Programación</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className="menu-link-3">
                <FaClipboardList className="menu-icon-3" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-3">
            <ul>
              <li>
                <Link to="/Ajustes_Cuenta" className="menu-link-1">
                  <FaCog className="menu-icon-1" />
                  <span>Ajustes</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="menu-link-1">
                  <FaSignOutAlt className="menu-icon-1" />
                  <span>Cerrar Sesión</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="historial-content-3 ml-64">
          <div className="search-cont-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Buscar"
                className="search-bar-3"
                style={{ width: "60%", marginRight: "5px" }}
              />
              <div className="icons-3" style={{ marginRight: "auto" }}>
                <Link to="/notificaciones">
                  <img
                    src={alarmIcon}
                    alt="Notificaciones"
                    className="icon-3"
                  />
                </Link>
                <Link to="/ajustes_cuenta">
                  <img
                    src={profileIcon}
                    alt="Ajustes_Cuenta"
                    className="icon-3 profile-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="filtros-container">
            <div className="filtro-item">
              <h1 className="titulo">Seleccione estación</h1>
              <select
                name="valvula"
                className="select"
                value={selectedEstacion1}
                onChange={handleEstacionChange1}
              >
                <option value="">Seleccione</option>
                <option value="Válvula 1">Válvula 1</option>
                <option value="Válvula 2">Válvula 2</option>
                <option value="Válvula 3">Válvula 3</option>
              </select>
            </div>
            <div className="filtro-item">
              <h1 className="titulo">Seleccione valor:</h1>
              <select
                name="valor"
                className="select"
                value={selectedValor1}
                onChange={handleValorChange1}
              >
                <option value="">Seleccione</option>
                <option value="Humedad">Humedad</option>
              </select>
            </div>
            <div className="filtro-item">
              <h1 className="titulo">REPORTE</h1>
              <h1 className="subtitulo">Semanal</h1>
            </div>
          </div>
          <div className="mensaje-container">
            <div className="sensor-humdad-3">{renderChart1()}</div>
          </div>
          <div className="filtros-container-meteorologica">
            <div className="filtro-item">
              <h1 className="titulo">Estación meteorológica</h1>
            </div>
            <div className="filtro-item">
              <h1 className="titulo">Seleccione valor:</h1>
              <select
                name="valor"
                className="select"
                value={selectedValor2}
                onChange={handleValorChange2}
              >
                <option value="">Seleccione</option>
                <option value="Temperatura">Temperatura</option>
                <option value="Humedad">Humedad</option>
                <option value="Barómetro">Barómetro</option>
                <option value="Piranómetro">Piranómetro</option>
                <option value="Anemómetro">Anemómetro</option>
              </select>
            </div>
            <div className="filtro-item">
              <h1 className="titulo">REPORTE</h1>
              <h1 className="subtitulo">Semanal</h1>
            </div>
          </div>
          <div className="mensaje-container">
            <div className="sensor-humdad-3">{renderChart2()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historial;
