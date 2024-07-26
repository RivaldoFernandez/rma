import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logofibertel.png";
import ajustesIcon from "../assets/icons/ajustes.png";
import cerrarIcon from "../assets/icons/cerrar.png";
import alarmIcon from "../assets/notificaciones.png";
import profileIcon from "../assets/usuario.png";

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
} from "react-icons/fa";

import "../style/Monitoreo.css";
//import useAxios from '../hooks/UseAxios';
const Monitoreo = () => {
  // const {data, error, loading} = useAxios( 'https://3p7jzhtc-8000.brs.devtunnels.ms/api/lecturasRaspberry/ultima/1/');
  // if (loading) return <p>cargando</p>;
  // if (error) return  <p>error {error.message}</p>;

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
              <Link to="/iniciio" className="menu-link-2">
                <FaHome className="menu-icon-2" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className="menu-link-2">
                <FaChartLine className="menu-icon-2" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className="menu-link-2">
                <FaHistory className="menu-icon-2" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className="menu-link-2">
                <FaCloudSun className="menu-icon-2" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className="menu-link-2">
                <FaMapSigns className="menu-icon-2" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className="menu-link-2">
                <FaClipboardList className="menu-icon-2" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-2">
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
                <Link to="/notificaciones">
                  <img
                    src={alarmIcon}
                    alt="Notificaciones"
                    className="icon-2"
                  />
                </Link>
                <Link to="/ajustes_cuenta">
                  <img
                    src={profileIcon}
                    alt="Ajustes_Cuenta"
                    className="icon-2 profile-icon"
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
