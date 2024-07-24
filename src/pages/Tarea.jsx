import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Importa los íconos necesarios
import alarmIcon from '../assets/notificaciones.png';
import profileIcon from '../assets/usuario.png';
import logo from '../assets/logofibertel.png';
import ajustesIcon from '../assets/icons/ajustes.png';
import cerrarIcon from '../assets/icons/cerrar.png';
import { FaHome, FaChartLine, FaHistory, FaCloudSun, FaMapSigns, FaClipboardList } from 'react-icons/fa';

import '../style/Tarea.css'

const Tarea = () => {


    return (
        <div className="tarea-container-6">
            <div className="content-6">
                <div className="sidebar-6 fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
                    <ul className="sidebar-menu-6">
                        <li>
                            <Link to="/iniciio" className="menu-link-6">
                                <img src={logo} alt="Inicio" className="mb-4" style={{ width: '150px' }} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/iniciio" className="menu-link-6">
                                <FaHome className="menu-icon-6" />
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/monitoreo" className="menu-link-6">
                                <FaChartLine className="menu-icon-6" />
                                Monitoreo
                            </Link>
                        </li>
                        <li>
                            <Link to="/historial" className="menu-link-6">
                                <FaHistory className="menu-icon-6" />
                                Historial
                            </Link>
                        </li>
                        <li>
                            <Link to="/sensores" className="menu-link-6">
                                <FaCloudSun className="menu-icon-6" />
                                <span>Sensores</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/campo" className="menu-link-6">
                                <FaMapSigns className="menu-icon-6" />
                                <span>Campo</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tarea" className="menu-link-6">
                                <FaClipboardList className="menu-icon-6" />
                                <span>Tarea</span>
                            </Link>
                        </li>
                    </ul>
                    <div className='ajustes-cerrar-6'>
                        <ul>
                            <li>
                                <Link to="/Ajustes_Cuenta" className="menu-link-6">
                                    <img src={ajustesIcon} alt="Ajustes" className="menu-icon-6" />
                                    <span>Ajustes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="menu-link-6">
                                    <img src={cerrarIcon} alt="Cerrar" className="menu-icon-6" />
                                    <span>Cerrar Sesión</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="tarea-content-6 ml-64">
                    <div className='search-cont-6'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="text" placeholder="Buscar" className="search-bar-6" style={{ width: '60%', marginRight: '5' }} />
                            <div className="icons-6" style={{ marginRight: 'auto' }}>
                                <Link to="/notificaciones">
                                    <img src={alarmIcon} alt="Notificaciones" className="icon-6" />
                                </Link>
                                <Link to="/ajustes_cuenta">
                                    <img src={profileIcon} alt="Ajustes_Cuenta" className="icon-6 profile-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='container-general-tarea'>
                        <div className='container-tarea'>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <strong>Tareas</strong>
                                </div>
                                <div className='report-container'>
                                    <h1 className='title-reporte'><strong>Reporte</strong></h1>
                                    <h2 className='subtitle-semanal'>Semanal</h2>
                                </div>
                                

                            </div>
                        </div>
                        <div className='container-information'>
                            <div className='container-information-reporte'>
                                <div className='title-information'>
                                    <strong>Información</strong>
                                </div>
                                <div className='report-container-date'>
                                    <h1 className='title-reporte'><strong>Fecha</strong></h1>
                                    <h2 className='subtitle-semanal'>Hora</h2>
                                </div>
                            </div>
                        </div>
                        <div className='container-information-vista'>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <h1>La válvula 1 esta comenzando a regar, tiempo programado de fin en 3 horas</h1>
                                </div>
                                <div className='report-container-date-hour'>
                                    <h1 className='title-reporte'><strong>18/07/2024</strong></h1>
                                    <h2 className='subtitle-semanal'>12:00</h2>
                                </div>
                            </div>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <h1>La válvula 1 esta comenzando a regar, tiempo programado de fin en 3 horas</h1>
                                </div>
                                <div className='report-container-date-hour'>
                                    <h1 className='title-reporte'><strong>18/07/2024</strong></h1>
                                    <h2 className='subtitle-semanal'>12:00</h2>
                                </div>
                            </div>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <h1>La válvula 1 esta comenzando a regar, tiempo programado de fin en 3 horas</h1>
                                </div>
                                <div className='report-container-date-hour'>
                                    <h1 className='title-reporte'><strong>18/07/2024</strong></h1>
                                    <h2 className='subtitle-semanal'>12:00</h2>
                                </div>
                            </div>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <h1>La válvula 1 esta comenzando a regar, tiempo programado de fin en 3 horas</h1>
                                </div>
                                <div className='report-container-date-hour'>
                                    <h1 className='title-reporte'><strong>18/07/2024</strong></h1>
                                    <h2 className='subtitle-semanal'>12:00</h2>
                                </div>
                            </div>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <h1>La válvula 1 esta comenzando a regar, tiempo programado de fin en 3 horas</h1>
                                </div>
                                <div className='report-container-date-hour'>
                                    <h1 className='title-reporte'><strong>18/07/2024</strong></h1>
                                    <h2 className='subtitle-semanal'>12:00</h2>
                                </div>
                            </div>
                            <div className='container-tarea-reporte'>
                                <div className='title-tarea'>
                                    <h1>La válvula 1 esta comenzando a regar, tiempo programado de fin en 3 horas</h1>
                                </div>
                                <div className='report-container-date-hour'>
                                    <h1 className='title-reporte'><strong>18/07/2024</strong></h1>
                                    <h2 className='subtitle-semanal'>12:00</h2>
                                </div>
                            </div>

                        </div>
                        <div className='container-buttom-6'>
                            <div className='container-buttom'>
                                <button className='my-button'>Generar Reporte PDF</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tarea;
