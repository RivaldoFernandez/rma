import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logofibertel.png";
import { AiOutlineSetting } from "react-icons/ai";
import ValveModal from "../components/Modals/Modals_Riego";
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
import "../style/Campo.css";
import CarouselCampoVista from "../components/Carousel/CarouselCampoVista";

const Campo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentValve, setCurrentValve] = useState("");

  const openModal = (valve) => {
    setCurrentValve(valve);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "menu-link active" : "menu-link";
  };

  return (
    <div className="main-container">
      <div className="content">
        <div className="sidebar fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
          <ul className="sidebar-menu">
            <li>
              <Link to="/iniciio" className="menu-link">
                <img
                  src={logo}
                  alt="Inicio"
                  className="mb-4"
                  style={{ width: "150px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/inicio" className="menu-link">
                <FaHome className="menu-icon" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/monitoreo" className="menu-link">
                <FaChartLine className="menu-icon" />
                Monitoreo
              </Link>
            </li>
            <li>
              <Link to="/historial" className="menu-link">
                <FaHistory className="menu-icon" />
                Historial
              </Link>
            </li>
            <li>
              <Link to="/sensores" className="menu-link">
                <FaCloudSun className="menu-icon" />
                Sensores
              </Link>
            </li>
            <li>
              <Link to="/campo" className={getLinkClass("/campo")}>
                <FaMapSigns className="menu-icon" />
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
              <Link to="/tarea" className="menu-link">
                <FaClipboardList className="menu-icon" />
                Tarea
              </Link>
            </li>
          </ul>
          <div className="settings-logout">
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
        <div className="main-content ml-64">
          <div className="search-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Buscar"
                className="search-input"
                style={{ width: "60%", marginRight: "5px" }}
              />
              <div className="icons-container" style={{ marginRight: "auto" }}>
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

          <div className="field-container">
            <div className="field-images">
              <div className="image-text-setting">
                <h1>
                  <strong>Imágenes del campo</strong>
                </h1>
              </div>
              <h2>
                En esta sección puedes ver imágenes de tu campo para un análisis
                de estado y crecimiento.
              </h2>
              <div className="image-info">
                <CarouselCampoVista />
              </div>
            </div>
          </div>
          <div className="field-container">
            <div className="topology">
              <h1>
                {" "}
                <strong>Topología</strong>
              </h1>
              <h2>
                Este gráfico muestra la estructura y comunicación entre la
                estación meteorológica y las válvulas.
              </h2>
            </div>
            <div className="valve-control">
              <h1>
                <strong>Control de válvulas</strong>
              </h1>
              <h2>
                En esta sección puedes controlar el estado de las válvulas
              </h2>
              <div className="valve-item-container">
                {[
                  "Válvula 1",
                  "Válvula 2",
                  "Válvula 3",
                  "Válvula 4",
                  "Válvula 5",
                ].map((valve, index) => (
                  <div key={index} className="valve-text-setting">
                    <h1>
                      <strong>{valve}</strong>
                    </h1>
                    <AiOutlineSetting
                      className="valve-settings-icon"
                      alt="ValvulaComponent"
                      onClick={() => openModal(valve)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ValveModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        valve={currentValve}
      />
    </div>
  );
};

export default Campo;
