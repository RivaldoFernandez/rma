import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Login.css';
import logo from '../assets/logofibertel.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://3p7jzhtc-8000.brs.devtunnels.ms/api/token/', {
        username: username,
        password: password
      });

      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access); // Almacenar el access token
      localStorage.setItem('refreshToken', refresh); // Almacenar el refresh token

      navigate('/iniciio'); // Corregir el enlace de navegación
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container flex justify-start items-center h-screen">
      <div className="login-tom bg-white border-slate-600 rounded-md p-10 shadow-lg">
        <img src={logo} alt="FIBERTEL Logo" className="mx-auto mb-4" style={{ width: '150px' }} />
        
        <form onSubmit={handleSubmit} className="input-group">
          <div className="input-group">
            <label htmlFor="username" className="title-user-pass text-green-600">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="title-user-pass text-green-600">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
              required
            />
          </div>
          
          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="espacio bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 custom-button"
            >
              Ingresar
            </button>

            <a href="/enviar_email" className="text-green-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;