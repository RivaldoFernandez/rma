import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LinealConductividadE from "../components/LinealChart/LinealConductividadE";
import LinealBarometro from "../components/LinealChart/LinealBarometro";
import LinealPH from "../components/LinealChart/LinealPH";
import LinealPiranometro from "../components/LinealChart/LinealPiranometro";
import LinealAnemometro from "../components/LinealChart/LinealAnemometro";
import LinealTemperatura from "../components/LinealChart/LinealTemperatura";
import LinealHumedad from "../components/LinealChart/LinealHumedad";
import TemperaturaSensor from "../components/SensorItems/TemperaturaSensor";
import HumedadSensor from "../components/SensorItems/HumedadSensor";
import ConductividadSensor from "../components/SensorItems/ConductividadSensor";
import BarometroSensor from "../components/SensorItems/BarometroSensor";
import PhSensor from "../components/SensorItems/PhSensor";
import PiranometroSensor from "../components/SensorItems/PiranometroSensor";
import AnemometroSensor from "../components/SensorItems/AnemometroSensor";
import Maps_img from "../assets/img/maps_geogra.png";
import "../style/Inicio.css";

// Importa los íconos necesarios

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
  FaBell,
  FaUser,
} from "react-icons/fa";

const Inicio = () => {
  const [sensorSeleccionado, setSensorSeleccionado] = useState("Temperatura"); // Sensor por defecto

  const renderizarGrafico = () => {
    switch (sensorSeleccionado) {
      case "Temperatura":
        return <LinealTemperatura />;
      case "Humedad":
        return <LinealHumedad />;
      case "Conductividad eléctrica":
        return <LinealConductividadE />;
      case "PH":
        return <LinealPH />;
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
    return location.pathname === path ? "menu-link-1 active" : "menu-link-1";
  };

  return (
    <div className="inicio-container-1">
      <div className="content-1">
        <div className="sidebar-1 fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
          <ul className="sidebar-menu-1">
            <li>
              <Link to="/iniciio" className="menu-link-1">
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
                <FaHome className="menu-icon-1" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className={getLinkClass("/monitoreo")}>
                <FaChartLine className="menu-icon-1" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className={getLinkClass("/historial")}>
                <FaHistory className="menu-icon-1" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className={getLinkClass("/sensores")}>
                <FaCloudSun className="menu-icon-1" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className={getLinkClass("/campo")}>
                <FaMapSigns className="menu-icon-1" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link
                to="/programacion_riego"
                className={getLinkClass("/programacion_riego")}
              >
                <FaTint className="menu-icon-1" />
                <span>Programación</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className={getLinkClass("/tarea")}>
                <FaClipboardList className="menu-icon-1" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-1">
          <ul>
              <li>
                <Link
                  to="/Ajustes_Cuenta"
                  className={getLinkClass("/Ajustes_Cuenta")}
                >
                  <FaCog className="menu-icon-1" />
                  <span>Ajustes</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className={getLinkClass("/login")}>
                  <FaSignOutAlt className="menu-icon-1" />
                  <span>Cerrar Sesión</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="inicio-content-1 ml-64">
          <div className="search-cont-1">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Buscar"
                className="search-bar-1"
                style={{ width: "60%", marginRight: "5" }}
              />
              <div className="icons-1" style={{ marginRight: "auto" }}>
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
          <div className="bienve-nombre-1">
            <span>
              Bienvenido, <strong>Rivaldo Fernandez</strong> Hoy es 18 de Julio
              de 2024
            </span>
          </div>
          <div className="contenido-sensores-1">
            <ul className="cont-sensor-1">
              <TemperaturaSensor
                isSelected={sensorSeleccionado === "Temperatura"}
                onClick={() => setSensorSeleccionado("Temperatura")}
              />
              <HumedadSensor
                isSelected={sensorSeleccionado === "Humedad"}
                onClick={() => setSensorSeleccionado("Humedad")}
              />
              <ConductividadSensor
                isSelected={sensorSeleccionado === "Conductividad eléctrica"}
                onClick={() => setSensorSeleccionado("Conductividad eléctrica")}
              />
              <BarometroSensor
                isSelected={sensorSeleccionado === "Barómetro"}
                onClick={() => setSensorSeleccionado("Barómetro")}
              />
              <PhSensor
                isSelected={sensorSeleccionado === "PH"}
                onClick={() => setSensorSeleccionado("PH")}
              />
              <PiranometroSensor
                isSelected={sensorSeleccionado === "Piranómetro"}
                onClick={() => setSensorSeleccionado("Piranómetro")}
              />
              <AnemometroSensor
                isSelected={sensorSeleccionado === "Anemómetro"}
                onClick={() => setSensorSeleccionado("Anemómetro")}
              />
            </ul>
          </div>

          <div className="grafico-maps-1">
            <div className="grafico-reporte-1">
              <h1 className="font-bold mb-2 font-black text-center text-xl ">
                Gráfico
              </h1>
              {renderizarGrafico()}
            </div>
            <div className="maps-sensores-1-3">
              <div>
                <h1 className="font-bold mb-2 font-black text-center text-xl">
                  Maps
                </h1>
                <h2 className=" text-gray-1000 text-lg ">
                  Este mapa muestra la ubicación de todos los sensores
                  instalados.
                </h2>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={Maps_img}
                    style={{ width: "400px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
