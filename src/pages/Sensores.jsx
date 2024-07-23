import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logofibertel.png';
import ajustesIcon from '../assets/icons/ajustes.png';
import cerrarIcon from '../assets/icons/cerrar.png';
import alarmIcon from '../assets/notificaciones.png';
import profileIcon from '../assets/usuario.png';

import { FaHome, FaChartLine, FaHistory, FaCloudSun, FaMapSigns, FaClipboardList } from 'react-icons/fa';

import '../style/Sensores.css';
import Carousel_Meteorologica_Vista from '../components/Carousel/Carousel_Meteorologica_Vista';
import Carousel_Humedad_Vista from '../components/Carousel/Carousel_Humedad_Vista';

const Monitoreo = () => {
return (
<div className="sensores-container-4">
    <div className="content-4">
        <div className="sidebar-4">
            <ul className="sidebar-menu-4">
                <li>
                    <Link to="/iniciio" className="menu-link-4">
                        <img src={logo} alt="Inicio" className="mb-4" style={{ width: '150px' }} />
                    </Link>
                </li>
                <li>
                    <Link to="/iniciio" className="menu-link-4">
                        <FaHome className="menu-icon-4" />
                        Inicio
                    </Link>

                </li>
                <li>
                    <Link to="/monitoreo" className="menu-link-4">
                        <FaChartLine className="menu-icon-4" />
                        Monitoreo
                    </Link>

                </li>
                <li>
                    <Link to="/historial" className="menu-link-4">
                        <FaHistory className="menu-icon-4" />
                        Historial
                    </Link>
                </li>
                <li>
                    <Link to="/sensores" className="menu-link-4">
                        <FaCloudSun className="menu-icon-4" />
                        <span>Sensores</span>
                    </Link>
                </li>
                <li>
                    <Link to="/campo" className="menu-link-4">
                        <FaMapSigns className="menu-icon-4" />
                        <span>Campo</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tarea" className="menu-link-4">
                        <FaClipboardList className="menu-icon-4" />
                        <span>Tarea</span>
                    </Link>
                </li>
            </ul>
            <div className='ajustes-cerrar-4'>
                <ul>
                    <li>
                        <Link to="/Ajustes_Cuenta" className="menu-link-4">
                        <img src={ajustesIcon} alt="Ajustes" className="menu-icon-4" />
                        <span>Ajustes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="menu-link-4">
                        <img src={cerrarIcon} alt="Cerrar" className="menu-icon-4" />
                        <span>Cerrar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>


        <div className="sensores-content-4">

            <div className='search-cont-4'>
                <div style={{ display: 'flex' , alignItems: 'center' }}>
                    <input type="text" placeholder="Buscar" className="search-bar-4" style={{ width: '60%' ,
                        marginRight: '5' }} />
                    <div className="icons-4" style={{ marginRight: 'auto' }}>
                        <Link to="/notificaciones">
                            <img src={alarmIcon} alt="Notificaciones" className="icon-4" />
                        </Link>
                        <Link to="/ajustes_cuenta">
                            <img src={profileIcon} alt="Ajustes_Cuenta" className="icon-4 profile-icon" />
                        </Link>
                    </div>
                </div>

            </div>
            
            <div class="container">
                <h1 className='Estacion-mt-4'><strong>Estación Meteorológica :</strong></h1>
            </div>

            <div className='contenido-sensores-4'>
                <Carousel_Meteorologica_Vista/>
            </div>

            <div class="container">
            <h2 className='Estacion-mt-4'><strong>Sensores de Humedad</strong></h2>
            </div>

            <div className='contenido-sensores-4'>
                <Carousel_Humedad_Vista/>
            </div>
            
        </div>
    </div>
</div>
);
}

export default Monitoreo;