// Sidebar.jsx
import React, { useState } from 'react';
import logo from '../assets/logofibertel.png'; 
import logoCollapsed from '../assets/PuntoFibertel.png';
import inicioIcon from '../assets/icons/inicio.png';
import historialIcon from '../assets/icons/historial.png';
import sensorIcon from '../assets/icons/sensores.png';
import campoIcon from '../assets/icons/campo.png';
import ajustesIcon from '../assets/icons/ajustes.png';
import cerrarIcon from '../assets/icons/cerrar.png';
import MonitoreoIc from '../assets/icons/monitoreo.png';
import Temperatura from '../components/img_com/temperatura.png';
import Humedad from '../components/img_com/humedad.png';
import ConductividadE from '../components/img_com/c_electrica.png';
import PotenciH from '../components/img_com/ph.png';
import Barometro from '../components/img_com/barometro.png';
import Piranometro from '../components/img_com/piranometro.png';
import Anemometro from '../components/img_com/anemometro.png';
import MapsGeo from '../assets/img/maps_geogra.png'

import LinealConductividadE from '../components/LinealChart/LinealConductividadE';
import LinealBarometro from '../components/LinealChart/LinealBarometro';
import LinealPH from '../components/LinealChart/LinealPH';
import LinealPiranometro from '../components/LinealChart/LinealPiranometro';
import LinealAnemometro from '../components/LinealChart/LinealAnemometro';
import LinealTemperatura from '../components/LinealChart/LinealTemperatura';
import LinealHumedad from '../components/LinealChart/LinealHumedad';


import { FaBell, FaUser } from 'react-icons/fa';


const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const [sensorSeleccionado, setSensorSeleccionado] = useState('Temperatura'); // Sensor por defecto

    // Función para renderizar el gráfico según el sensor seleccionado
    const renderizarGrafico = () => {
        switch (sensorSeleccionado) {
            case 'Temperatura':
                return <LinealTemperatura/>; // Asegúrate de pasar los datos relevantes al componente LinealChart
            case 'Humedad':
                return <LinealHumedad/>;
            case 'Conductividad eléctrica':
                return <LinealConductividadE />;
            case 'PH':
                return <LinealPH/>;
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
        <div className="flex">
            <aside className={`fixed top-0 left-0 h-screen bg-white transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'} overflow-y-auto flex flex-col justify-between`}>
                <div>
                    <div className="flex items-center justify-center p-2">
                        <button onClick={toggleSidebar} className="bg-transparent border-0 p-2">
                            <img src={isExpanded ? logo : logoCollapsed} alt="Logo" className="w-40" style={{ width: '150px' }} />
                        </button>
                    </div>
                    <ul className="mt-8 space-y-2">
                        <li className="flex items-center p-2">
                            <a href="/iniciio" className="flex items-center text-black hover:bg-gray-50 p-2">
                                <img src={inicioIcon} alt="Logo" className="w-40" style={{ width: '30px'}} />
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Inicio</span>
                            </a>
                        </li>
                        <li className="flex items-center p-2">
                            <a href="#" className="flex items-center text-black hover:bg-gray-50 p-2">
                                <img src={MonitoreoIc} alt="Logo" className="w-40" style={{ width: '30px'}} />
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Monitoreo</span>
                            </a>
                        </li>
                        <li className="flex items-center p-2">
                            <a href="#" className="flex items-center text-black hover:bg-gray-50 p-2">
                                <img src={historialIcon} alt="Logo" className="w-40" style={{ width: '30px'}} />
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Historial</span>
                            </a>
                        </li>
                        <li className="flex items-center p-2">
                            <a href="#" className="flex items-center text-black hover:bg-gray-50 p-2">
                                <img src={sensorIcon} alt="Logo" className="w-40" style={{ width: '30px'}} />
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Sensores</span>
                            </a>
                        </li>
                        <li className="flex items-center p-2">
                            <a href="#" className="flex items-center text-black hover:bg-gray-50 p-2">
                                <img src={campoIcon} alt="Logo" className="w-40" style={{ width: '30px'}} />
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Campo</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 space-y-2">
                    <li className="flex items-center p-2">
                        <a href="#" className="flex items-center text-black hover:bg-gray-50 p-2">
                            <img src={ajustesIcon} alt="Logo" className="w-40" style={{ width: '30px'}} />
                            <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Ajustes</span>
                        </a>
                    </li>
                    <li className="flex items-center p-2">
                        <a href="#" className="flex items-center text-black hover:bg-gray-50 p-2">
                            <img src={cerrarIcon} alt="Logo" className="w-40" style={{ width: '30px'}} />
                            <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Cerrar Sesión</span>
                        </a>
                    </li>
                </div>
            </aside>
            
            <div className={`bg-blue-200 flex-1 p-4 transition-all duration-300 ${isExpanded ? 'ml-64' : 'ml-16'} min-h-screen`}>
                <div className="flex items-center bg-white rounded-lg p-2.5">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="flex-grow p-2 border border-gray-300 rounded-md ml-60"
                    />
                    <div className="flex items-center space-x-4 mr-40">
                        <FaBell className="text-2xl cursor-pointer" />
                        <FaUser className="text-2xl cursor-pointer" />
                    </div>
                </div>
                <div className='bienve-nombre-1'>
                    <h1>Bienvenido, <strong>Rivaldo Fernandez </strong> Hoy es 18 de Julio de 2024</h1>
                </div>
                <div className=" mt-4 p-4 rounded-lg ">
                    <ul className="flex flex-wrap gap-4">
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('Barómetro')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">900 hPa</span>
                                <img className="w-8 h-8" src={Barometro} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium">Barómetro</span>
                        </li>
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('Temperatura')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">25°C</span>
                                <img className="w-8 h-8" src={Temperatura} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium">Temperatura</span>
                        </li>
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('Humedad')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">60%</span>
                                <img className="w-8 h-8" src={Humedad} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium">Húmedad</span>
                        </li>
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('Conductividad eléctrica')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">151 S/cm</span>
                                <img className="w-8 h-8" src={ConductividadE} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium text-center">Conductividad eléctrica</span>
                        </li>
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('PH')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">8</span>
                                <img className="w-8 h-8" src={PotenciH} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium">PH</span>
                        </li>
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('Piranómetro')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">500 W/m²</span>
                                <img className="w-8 h-8" src={Piranometro} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium">Piranómetro</span>
                        </li>
                        <li className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors w-48" onClick={() => setSensorSeleccionado('Anemómetro')}>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-semibold">29 m/s</span>
                                <img className="w-8 h-8" src={Anemometro} alt="Sensores" />
                            </div>
                            <span className="text-lg font-medium">Anemómetro</span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4">
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center">Gráfico</h1>
                    <div className="w-full h-80">
                        {renderizarGrafico()}
                    </div>
                </div>

                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center">Maps</h1>
                    <h2 className="text-lg ">Este mapa muestra la ubicación de todos los sensores instalados.</h2>
                    <img src={MapsGeo} alt="Mapa de sensores" className="w-auto h-auto rounded-lg shadow-sm"/>
                </div>
            </div>

            </div>

        </div>
    );
};

export default Sidebar;
