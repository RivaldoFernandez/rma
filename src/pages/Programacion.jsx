import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Programacion.css";

// Importa los íconos necesarios
import logo from "../assets/logofibertel.png";

import {
  FaHome,
  FaChartLine,
  FaHistory,
  FaCloudSun,
  FaMapSigns,
  FaClipboardList,
  FaTint,
  FaCog,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import Programacion_Valvula from "../components/Programacion_Riego/Programacion_Riego_Valula";

const Programacion_Riego = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "menu-link-programacion active"
      : "menu-link-programacion";
  };

  return (
    <div className="program-container-programacion">
      <div className="content-programacion">
        <div className="sidebar-programacion fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
          <ul className="sidebar-menu-programacion">
            <li>
              <Link to="/iniciio" className="menu-link-programacion">
                <img
                  src={logo}
                  alt="Inicio"
                  className="mb-4"
                  style={{ width: "150px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/iniciio" className="menu-link-programacion">
                <FaHome className="menu-icon-programacion" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className="menu-link-programacion">
                <FaChartLine className="menu-icon-programacion" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className="menu-link-programacion">
                <FaHistory className="menu-icon-programacion" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className="menu-link-programacion">
                <FaCloudSun className="menu-icon-programacion" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className="menu-link-programacion">
                <FaMapSigns className="menu-icon-programacion" />
                <span>Campo</span>
              </Link>
            </li>
            <li>
              <Link
                to="/programacion_riego"
                className={getLinkClass("/programacion_riego")}
              >
                <FaTint className="menu-icon-programacion" />
                <span>Programación</span>
              </Link>
            </li>
            <li>
              <Link to="/tarea" className="menu-link-programacion">
                <FaClipboardList className="menu-icon-programacion" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-programacion">
            <ul>
              <li>
                <Link to="/Ajustes_Cuenta" className="menu-link-programacion">
                  <FaCog className="menu-icon-programacion" />
                  <span>Ajustes</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="menu-link-programacion">
                  <FaSignOutAlt className="menu-icon-programacion" />
                  <span>Cerrar Sesión</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="program-content-programacion ml-64">
          <div className="search-cont-programacion">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Buscar"
                className="search-bar-programacion"
                style={{ width: "60%", marginRight: "5" }}
              />
              <div
                className="icons-programacion"
                style={{ marginRight: "auto" }}
              >
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
          <div className="bienve-nombre-programacion">
            <Programacion_Valvula />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programacion_Riego;
