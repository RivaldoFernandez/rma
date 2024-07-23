import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logofibertel.png';
import ajustesIcon from '../assets/icons/ajustes.png';
import cerrarIcon from '../assets/icons/cerrar.png';
import alarmIcon from '../assets/notificaciones.png';
import profileIcon from '../assets/usuario.png';
import ImgCampo from '../assets/img/enviadocampo.png'
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import ValveModal from "../components/Modals/Modals_Riego"; // Importa el componente del modal


import { FaHome, FaChartLine, FaHistory, FaCloudSun, FaMapSigns, FaClipboardList } from 'react-icons/fa';


import '../style/Campo.css';

const Campo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentValve, setCurrentValve] = useState('');

    const openModal = (valve) => {
        setCurrentValve(valve);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

return (
<div className="campo-container-5">
    <div className="content-5">
        <div className="sidebar-5">
            <ul className="sidebar-menu-5">
                <li>
                    <Link to="/iniciio" className="menu-link-5">
                        <img src={logo} alt="Inicio" className="mb-4" style={{ width: '150px' }} />
                    </Link>
                </li>
                <li>
                    <Link to="/iniciio" className="menu-link-5">
                        <FaHome className="menu-icon-5" />
                        Inicio
                    </Link>

                </li>
                <li>
                    <Link to="/monitoreo" className="menu-link-5">
                        <FaChartLine className="menu-icon-5" />
                        Monitoreo
                    </Link>

                </li>
                <li>
                    <Link to="/historial" className="menu-link-5">
                        <FaHistory className="menu-icon-5" />
                        Historial
                    </Link>
                </li>
                <li>
                    <Link to="/sensores" className="menu-link-5">
                        <FaCloudSun className="menu-icon-5" />
                        <span>Sensores</span>
                    </Link>
                </li>
                <li>
                    <Link to="/campo" className="menu-link-5">
                        <FaMapSigns className="menu-icon-5" />
                        <span>Campo</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tarea" className="menu-link-5">
                        <FaClipboardList className="menu-icon-5" />
                        <span>Tarea</span>
                    </Link>
                </li>
            </ul>
            <div className='ajustes-cerrar-5'>
                <ul>
                    <li>
                        <Link to="/Ajustes_Cuenta" className="menu-link-5">
                        <img src={ajustesIcon} alt="Ajustes" className="menu-icon-5" />
                        <span>Ajustes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Cerrar" className="menu-link-5">
                        <img src={cerrarIcon} alt="Cerrar" className="menu-icon-5" />
                        <span>Cerrar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="historial-content-5">
            <div className='search-cont-5'>
                <div style={{ display: 'flex' , alignItems: 'center' }}>
                    <input type="text" placeholder="Buscar" className="search-bar-5" style={{ width: '60%' ,
                        marginRight: '5px' }} />
                    <div className="icons-5" style={{ marginRight: 'auto' }}>
                        <Link to="/notificaciones">
                            <img src={alarmIcon} alt="Notificaciones" className="icon-5" />
                        </Link>
                        <Link to="/ajustes_cuenta">
                            <img src={profileIcon} alt="Ajustes_Cuenta" className="icon-5 profile-icon" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='contenedor-3-campos-5'>
                <div className='topologia-5'>
                    <h1> <strong>Topologia</strong></h1>
                    <h2>Este gráfico muestra la estructura y comunicación entre la estación meteorológica y las
                        válvulas.</h2>
                    {/* Aquí puedes agregar contenido relacionado con Topologia */}
                </div>
                <div className='control-valvula-5'>
                            <h1><strong>Control de válvulas</strong></h1>
                            <h2>En esta sección puedes controlar el estado de las válvulas</h2>
                            <div className='contenedor-item-valvula'>
                                {['Válvula 1', 'Válvula 2', 'Válvula 3', 'Válvula 4', 'Válvula 5'].map((valve, index) => (
                                    <div key={index} className='text-setting-valvula-5'>
                                        <h1><strong>{valve}</strong></h1>
                                        <AiOutlineSetting
                                            className="ajustes-icon-5"
                                            alt="ValvulaComponent"
                                            onClick={() => openModal(valve)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
            </div>
            <div className='contenedor-3-campos-5'>
                <div className='imagenes-mostrados-5'>
                    <div className='text-setting-5'>
                        <h1><strong>Imágenes del campo</strong></h1>
                        <AiOutlineSetting className="ajustes-icon"  alt="AjustesImg"/>
                    </div>


                        <h2>En esta sección puedes ver imágenes de tu campo para un análisis de estado y crecimiento.</h2>
                    <div className="imagen-con-info">
                        <div className='imagen-fecha-colum'>
                            <img src={ImgCampo} alt="Imagen del campo" />
                            <p>2024-07-18 15:30</p>
                        </div>
                        <div className='imagen-fecha-colum'>
                            <img src={ImgCampo} alt="Imagen del campo" />
                            <p>2024-07-18 15:30</p>
                        </div>
                        <div className='imagen-fecha-colum'>
                            <img src={ImgCampo} alt="Imagen del campo" />
                            <p>2024-07-18 15:30</p>
                        </div>

                        <div className='imagen-fecha-colum'>
                            <div className="ver-mas-btn">
                                <AiOutlinePlus style={{ fontSize: '35px', color: '#000000' }} />
                                <h1><strong>Ver más</strong></h1>
                            </div>
                        </div>
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