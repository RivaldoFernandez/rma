
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Monitoreo from './pages/Monitoreo';
import Historial from './pages/Historial';
import Sensores from './pages/Sensores';
import Campo from './pages/Campo';
import Ajustes_Cuenta from './pages/Ajustes_Cuenta';
import './App.css';
import SideBar from './components/Sidebar';
import Recuperar_Contraseña from './pages/RecuperarContraseña';
import Enviar_Email from './pages/Enviar_Email';
import Notificaciones from './pages/Noticaciones';
import Tarea from './pages/Tarea';
import Programacion_Riego from './pages/Programacion';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Inicio /> : <Login onLogin={handleLogin} />} />
      <Route path="/iniciio" element={ <Inicio/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/monitoreo" element={<Monitoreo />} />
      <Route path="/historial" element={<Historial/>}/>
      <Route path="/sensores" element={<Sensores/>}/>
      <Route path="/campo" element={<Campo/>}/>
      <Route path="/ajustes_cuenta" element={<Ajustes_Cuenta/>}/>
      <Route path="/sidebar" element={<SideBar/>}/> {/* Se elimina */}
      <Route path="/notificaciones" element={<Notificaciones/>}/> {/* Se elimina */}
      <Route path="/recuperar_contraseña" element={<Recuperar_Contraseña/>}/>
      <Route path="/enviar_email" element={<Enviar_Email/>}/>
      <Route path="/tarea" element={<Tarea/>}/>
      <Route path="/programacion_riego" element={<Programacion_Riego/>}/>
    </Routes>
  );
}


export default App;
