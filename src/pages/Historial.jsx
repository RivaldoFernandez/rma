import LinealConductividadE from "../components/LinealChart/LinealConductividadE";
import LinealBarometro from "../components/LinealChart/LinealBarometro";
import LinealPiranometro from "../components/LinealChart/LinealPiranometro";
import LinealAnemometro from "../components/LinealChart/LinealAnemometro";
import LinealTemperatura from "../components/LinealChart/LinealTemperatura";
import LinealHumedad from "../components/LinealChart/LinealHumedad";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logofibertel.png";

import {
  FaHome,
  FaChartLine,
  FaHistory,
  FaCloudSun,
  FaMapSigns,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaTint,
  FaUser,
  FaCalendarAlt,
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
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "menu-link-3 active" : "menu-link-3";
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/"; // Redirige al usuario al inicio de sesión al cerrar sesión
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
              <Link to="/iniciio" className={getLinkClass("/iniciio")}>
                <FaHome className="menu-icon-3" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className={getLinkClass("/monitoreo")}>
                <FaChartLine className="menu-icon-3" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className={getLinkClass("/historial")}>
                <FaHistory className="menu-icon-3" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className={getLinkClass("/sensores")}>
                <FaCloudSun className="menu-icon-3" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className={getLinkClass("/campo")}>
                <FaMapSigns className="menu-icon-3" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link
                to="/programacion_riego"
                className={getLinkClass("/programacion_riego")}
              >
                <FaTint className="menu-icon-3" />
                <span>Programación</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className={getLinkClass("/tarea")}>
                <FaClipboardList className="menu-icon-3" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-3">
            <ul>
              <li>
                <Link to="/Ajustes_Cuenta" className="menu-link-3">
                  <FaCog className="menu-icon-3" />
                  <span>Ajustes</span>
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout} className="menu-link-3">
                  <FaSignOutAlt className="menu-icon-3" />
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
                <Link to="/ajustes_cuenta">
                  <FaUser
                    className="icon-1 profile-icon"
                    size={24}
                    aria-label="Ajustes Cuenta"
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
            <div className="filtro-item-humedad">
              <div className="lista-horizontal">
                <span>6M</span>
                <span>3M</span>
                <span>1M</span>
                <span>7D</span>
              </div>
              <div className="calendario">
                <FaCalendarAlt  size={24} />
              </div>
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
            <div className="filtro-item-meteoro">
              <div div className="lista-horizontal-meteorologica">
                <span>1S</span>
                <span>1M</span>
                <span>3M</span>
                <span>6M</span>
                <span>1A</span>
              </div>
              <div className="calendario-meteorologica">
                <FaCalendarAlt  size={24} />
              </div>
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
