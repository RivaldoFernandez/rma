import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logofibertel.png";

// Importa los componentes de sensores
import TemperaturaSensor from "../components/SensorItems/TemperaturaSensor";
import HumedadSensor from "../components/SensorItems/HumedadSensor";
import ConductividadSensor from "../components/SensorItems/ConductividadSensor";
import BarometroSensor from "../components/SensorItems/BarometroSensor";
import PhSensor from "../components/SensorItems/PhSensor";
import PiranometroSensor from "../components/SensorItems/PiranometroSensor";
import AnemometroSensor from "../components/SensorItems/AnemometroSensor";

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
} from "react-icons/fa";

import "../style/Monitoreo.css";
//import useAxios from '../hooks/UseAxios';
const Monitoreo = () => {
  // const {data, error, loading} = useAxios( 'https://3p7jzhtc-8000.brs.devtunnels.ms/api/lecturasRaspberry/ultima/1/');
  // if (loading) return <p>cargando</p>;
  // if (error) return  <p>error {error.message}</p>;

  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "menu-link-2 active" : "menu-link-2";
  };

  return (
    <div className="monitoreo-container-2">
      <div className="content-2">
        <div className="sidebar-2 fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
          <ul className="sidebar-menu-2">
            <li>
              <Link to="/iniciio" className="menu-link-2">
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
                <FaHome className="menu-icon-2" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className={getLinkClass("/monitoreo")}>
                <FaChartLine className="menu-icon-2" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className={getLinkClass("/historial")}>
                <FaHistory className="menu-icon-2" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className={getLinkClass("/sensores")}>
                <FaCloudSun className="menu-icon-2" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className={getLinkClass("/campo")}>
                <FaMapSigns className="menu-icon-2" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link
                to="/programacion_riego"
                className={getLinkClass("/programacion_riego")}
              >
                <FaTint className="menu-icon-2" />
                <span>Programación</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className={getLinkClass("/tarea")}>
                <FaClipboardList className="menu-icon-2" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-2">
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

        <div className="monitoreo-content-2 ml-64">
          <div className="search-cont-2">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Buscar"
                className="search-bar-2"
                style={{ width: "60%", marginRight: "5" }}
              />
              <div className="icons-2" style={{ marginRight: "auto" }}>
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
          <div className="valvula-container">
            <h1 className="nombre-valvula">
              <strong>Válvula</strong>
            </h1>

            <div className="selecction-valvula">
              <h1 className="selecionar-valvu">Seleccionar Válvula:</h1>
              <select name="valvula">
                <option value="valvula1">Válvula 1</option>
                <option value="valvula2">Válvula 2</option>
                <option value="valvula3">Válvula 3</option>
              </select>
            </div>
          </div>

          <div className="contenido-sensores-2">
            <ul className="cont-sensor-2">
              <li className="sensores-item-2">
                <HumedadSensor />
              </li>
              <li className="sensores-item-2">
                <ConductividadSensor />
              </li>

              <li className="sensores-item-2">
                <PhSensor />
              </li>
            </ul>
          </div>
          <div>
            <h1 className="nombre-estacion">
              <strong>Estación meteorológica:</strong>
            </h1>

            <div className="contenido-sensores-2">
              <ul className="cont-sensor-2">
                <li className="sensores-item-v-2">
                  <TemperaturaSensor />
                </li>
                <li className="sensores-item-v-2">
                  <PiranometroSensor />
                </li>

                <li className="sensores-item-v-2">
                  <HumedadSensor />
                </li>
                <li className="sensores-item-v-2">
                  <AnemometroSensor />
                </li>
                <li className="sensores-item-v-2">
                  <BarometroSensor />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoreo;
