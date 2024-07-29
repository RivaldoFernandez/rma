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
  FaSignOutAlt,
  FaCog,
  FaUser,
  FaTools,
  FaLifeRing,
  FaTint ,
} from "react-icons/fa";
import "../style/Ajustes_Cuenta.css";

const Ajustes_Cuenta = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "menu-link-ajustes active" : "menu-link-ajustes";
  };


  return (
    <div className="ajustes-container-ajustes">
      <div className="content-ajustes">
        <div className="sidebar-ajustes fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden ">
          <ul className="sidebar-menu-ajustes">
            <li>
              <Link to="/iniciio" className="menu-link-ajustes">
                <img
                  src={logo}
                  alt="Inicio"
                  className="mb-4"
                  style={{ width: "150px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/iniciio" className="menu-link-ajustes">
                <FaHome className="menu-icon-ajustes" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className="menu-link-ajustes">
                <FaChartLine className="menu-icon-ajustes" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className="menu-link-ajustes">
                <FaHistory className="menu-icon-ajustes" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className="menu-link-ajustes">
                <FaCloudSun className="menu-icon-ajustes" />
                <span>Sensores</span>
              </Link>
            </li>
            <li>
              <Link to="/campo" className="menu-link-ajustes">
                <FaMapSigns className="menu-icon-ajustes" />
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
              <Link to="/tarea" className="menu-link-ajustes">
                <FaClipboardList className="menu-icon-ajustes" />
                <span>Tarea</span>
              </Link>
            </li>
          </ul>
          <div className="ajustes-cerrar-ajustes">
            <ul>
              <li>
                <Link to="/Ajustes_Cuenta" className={getLinkClass("/Ajustes_Cuenta")}>
                  <FaCog className="menu-icon-1  ml-1.5" />
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

        <div className="ajustes-content-ajustes ">
          <div className="search-cont-ajustes ml-64">
            <input
              type="text"
              placeholder="Buscar configuración"
              className="search-bar-ajustes"
            />
            <div className="ajustes-icon-option">
              <div
                className="section cursor-pointer"
                onClick={() => handleOptionClick("general")}
              >
                <FaCog className="icon" />
                <h1>General</h1>
              </div>
              <div
                className="section cursor-pointer"
                onClick={() => handleOptionClick("perfil")}
              >
                <FaUser className="icon" />
                <h1 className="text-position">Perfil y contraseña</h1>
              </div>
              <div
                className="section cursor-pointer"
                onClick={() => handleOptionClick("configuracion")}
              >
                <FaTools className="icon" />
                <h1>Configuración del Sistema</h1>
              </div>
              <div
                className="section cursor-pointer"
                onClick={() => handleOptionClick("soporte")}
              >
                <FaLifeRing className="icon" />
                <h1>Soporte y ayuda</h1>
              </div>
            </div>
          </div>

          <div className="resultado-content-ajustes">
            {selectedOption === "general" && (
              <form>
                <h2 className="text-title-option">Configuración General</h2>
              </form>
            )}
            {selectedOption === "perfil" && (
              <form>
                <h2 className="text-title-option">Perfil y Contraseña</h2>
                <p className="datos-perfil">
                  <strong>Nombre Completo:</strong> Ornela Rincón
                </p>
                <p className="datos-perfil">
                  <strong>Correo Electrónico:</strong> ornela_rincon@gmail.com
                </p>
                <p className="datos-perfil">
                  <strong>Contraseña Actual:</strong> ***********
                </p>
              </form>
            )}
            {selectedOption === "configuracion" && (
              <form>
                <h2 className="text-title-option">Configuración del Sistema</h2>
              </form>
            )}
            {selectedOption === "soporte" && (
              <form>
                <h2 className="text-title-option">Soporte y Ayuda</h2>
              </form>
            )}
            {!selectedOption && (
              <h2 className="text-title-option">
                Selecciona una opción para ver el contenido
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajustes_Cuenta;
