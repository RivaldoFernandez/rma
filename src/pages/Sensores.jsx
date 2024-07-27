import React from "react";
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
} from "react-icons/fa";

import "../style/Sensores.css";
import Carousel_Meteorologica_Vista from "../components/Carousel/sensores_carousel/Carousel_Meteorologica_Vista";
import Carousel_Humedad_Vista from "../components/Carousel/sensores_carousel/Carousel_Humedad_Vista";

/*--------------Componente principal Sensores --------------------*/
const Sensores = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "menu-link-sensores active"
      : "menu-link-sensores";
  };
  return (
    <div className="sensores-container-sensores">
      <div className="content-sensores">
        {/*-------------- Barra lateral de navegación --------------------*/}
        <div className="sidebar fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
          <ul className="sidebar-menu-sensores">
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
              <Link to="/iniciio" className="menu-link-sensores">
                <FaHome className="menu-icon-sensores" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className="menu-link-sensores">
                <FaChartLine className="menu-icon-sensores" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className="menu-link-sensores">
                <FaHistory className="menu-icon-sensores" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className={getLinkClass("/sensores")}>
                <FaCloudSun className="menu-icon-sensores" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className="menu-link-sensores">
                <FaMapSigns className="menu-icon-sensores" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link to="/programacion_riego" className="menu-link-1">
                <FaTint className="menu-icon-1" />
                <span>Programación</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className="menu-link-sensores">
                <FaClipboardList className="menu-icon-sensores" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-sensores">
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

        {/*-------------- Contenido principal de Sensores --------------------*/}
        <div className="sensores-content-sensores ml-64">
          {/*-------------- Barra de búsqueda e iconos de notificación y perfil --------------------*/}
          <div className="search-cont-sensores">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Buscar"
                className="search-bar-sensores"
                style={{ width: "60%", marginRight: "5px" }}
              />
              <div className="icons-sensores" style={{ marginRight: "auto" }}>
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

          {/*-------------- Títulos y Carouseles de Sensores --------------------*/}
          <div className="container-sensores">
            <h1 className="Estacion-mt-sensores">
              <strong>Estación Meteorológica</strong>
            </h1>
          </div>

          <div>
            <Carousel_Meteorologica_Vista />
          </div>

          <div className="container-sensores">
            <h2 className="Estacion-mt-sensores">
              <strong>Sensores de Humedad</strong>
            </h2>
          </div>

          <div>
            <Carousel_Humedad_Vista />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensores;
