import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LinealConductividadE from '../components/LinealChart/LinealConductividadE';
import LinealBarometro from '../components/LinealChart/LinealBarometro';
import LinealPH from '../components/LinealChart/LinealPH';
import LinealPiranometro from '../components/LinealChart/LinealPiranometro';
import LinealAnemometro from '../components/LinealChart/LinealAnemometro';
import LinealTemperatura from '../components/LinealChart/LinealTemperatura';
import LinealHumedad from '../components/LinealChart/LinealHumedad';
import TemperaturaSensor from '../components/SensorItems/TemperaturaSensor';
import HumedadSensor from '../components/SensorItems/HumedadSensor';
import ConductividadSensor from '../components/SensorItems/ConductividadSensor';
import BarometroSensor from '../components/SensorItems/BarometroSensor';
import PhSensor from '../components/SensorItems/PhSensor';
import PiranometroSensor from '../components/SensorItems/PiranometroSensor';
import AnemometroSensor from '../components/SensorItems/AnemometroSensor';
import '../style/Inicio.css'


// Importa los íconos necesarios
import alarmIcon from '../assets/notificaciones.png';
import profileIcon from '../assets/usuario.png';
import logo from '../assets/logofibertel.png';
import ajustesIcon from '../assets/icons/ajustes.png';
import cerrarIcon from '../assets/icons/cerrar.png';



import { FaHome, FaChartLine, FaHistory, FaCloudSun, FaMapSigns, FaClipboardList} from 'react-icons/fa';
import Maps_Vista from '../components/MapaGoogle/MapsVista';


const Inicio = () => {
    const [sensorSeleccionado, setSensorSeleccionado] = useState('Temperatura'); // Sensor por defecto

    const renderizarGrafico = () => {
        switch (sensorSeleccionado) {
            case 'Temperatura':
                return <LinealTemperatura />;
            case 'Humedad':
                return <LinealHumedad />;
            case 'Conductividad eléctrica':
                return <LinealConductividadE />;
            case 'PH':
                return <LinealPH />;
            case 'Barómetro':
                return <LinealBarometro />;
            case 'Piranómetro':
                return <LinealPiranometro />;
            case 'Anemómetro':
                return <LinealAnemometro />;
            default:
                return null;
        }
    };

    
    return (
        <div className="inicio-container-1">
            <div className="content-1">
                <div className="sidebar-1 fixed top-0 left-0 h-screen w-64 bg-white overflow-hidden">
                    <ul className="sidebar-menu-1">
                        <li>
                            <Link to="/iniciio" className="menu-link-1">
                                <img src={logo} alt="Inicio" className="mb-4" style={{ width: '150px' }} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/iniciio" className="menu-link-1">
                                <FaHome className="menu-icon-1" />
                                Inicio
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/monitoreo" className="menu-link-1">
                                <FaChartLine className="menu-icon-1" />
                                Monitoreo
                            </Link>

                        </li>
                        <li>
                        <Link to="/historial" className="menu-link-1">
                                <FaHistory className="menu-icon-1" />
                                Historial
                            </Link>
                        </li>
                        <li>
                            <Link to="/sensores" className="menu-link-1">
                                <FaCloudSun className="menu-icon-1" />
                                <span>Sensores</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/campo" className="menu-link-1">
                                <FaMapSigns className="menu-icon-1" />
                                <span>Campo</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tarea" className="menu-link-1">
                                <FaClipboardList className="menu-icon-1" />
                                <span>Tarea</span>
                            </Link>
                        </li>
                    </ul>
                    <div className='ajustes-cerrar-1'>
                        <ul>
                            <li>
                                <Link to="/Ajustes_Cuenta" className="menu-link-1">
                                    <img src={ajustesIcon} alt="Ajustes" className="menu-icon-1" />
                                    <span>Ajustes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="menu-link-1">
                                    <img src={cerrarIcon} alt="Cerrar" className="menu-icon-1" />
                                    <span>Cerrar Sesión</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="inicio-content-1 ml-64">
                    <div className='search-cont-1'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="text" placeholder="Buscar" className="search-bar-1" style={{ width: '60%', marginRight: '5' }} />
                            <div className="icons-1" style={{ marginRight: 'auto' }}>
                                <Link to="/notificaciones">
                                    <img src={alarmIcon} alt="Notificaciones" className="icon-1" />
                                </Link>
                                <Link to="/ajustes_cuenta">
                                    <img src={profileIcon} alt="Ajustes_Cuenta" className="icon-1 profile-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='bienve-nombre-1'>
                        <h1>Bienvenido, <strong>Rivaldo Fernandez</strong> Hoy es 18 de Julio de 2024</h1>
                    </div>
                    <div className='contenido-sensores-1'>
                        <ul className='cont-sensor-1'>
                            <TemperaturaSensor
                                isSelected={sensorSeleccionado === 'Temperatura'}
                                onClick={() => setSensorSeleccionado('Temperatura')}
                            />
                            <HumedadSensor
                                isSelected={sensorSeleccionado === 'Humedad'}
                                onClick={() => setSensorSeleccionado('Humedad')}
                            />
                            <ConductividadSensor
                                isSelected={sensorSeleccionado === 'Conductividad eléctrica'}
                                onClick={() => setSensorSeleccionado('Conductividad eléctrica')}
                            />
                            <BarometroSensor
                                isSelected={sensorSeleccionado === 'Barómetro'}
                                onClick={() => setSensorSeleccionado('Barómetro')}
                            />
                            <PhSensor
                                isSelected={sensorSeleccionado === 'PH'}
                                onClick={() => setSensorSeleccionado('PH')}
                            />
                            <PiranometroSensor
                                isSelected={sensorSeleccionado === 'Piranómetro'}
                                onClick={() => setSensorSeleccionado('Piranómetro')}
                            />
                            <AnemometroSensor
                                isSelected={sensorSeleccionado === 'Anemómetro'}
                                onClick={() => setSensorSeleccionado('Anemómetro')}
                            />
                        </ul>
                    </div>
                    {/* Renderiza el gráfico según el sensor seleccionado */}
                    <div className='grafico-maps-1'>
                        <div className='grafico-reporte-1'>
                            <h1 className='title-gm-1'>Gráfico</h1>
                            {renderizarGrafico()}
                        </div>
                        <div className='maps-sensores-1-3'>
                            <div className='title-gm-1-3'>
                                <Maps_Vista/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
