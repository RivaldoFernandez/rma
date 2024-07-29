import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import logo from '../assets/logofibertel.png'; 

// Define your validation schema here (e.g., username and password are required)
const loginSchema = z.object({
  username: z.string().min( { message: "Usuario requerido" }),
  contraseña: z.string().min( { message: "Contraseña requerida" }),
});

const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Call onLogin to set authentication state (if needed)
    onLogin();

    // Redirect to the /inicio path after successful login
    navigate('/iniciio');
  };

  return (
    <div className="login-container flex justify-start items-center h-screen">
      <div className="login-tom bg-white border-slate-600 rounded-md p-10 shadow-lg">
        <img src={logo} alt="FIBERTEL Logo" className="mx-auto mb-4" style={{ width: '150px' }} />
        <form onSubmit={handleSubmit(onSubmit)} className="input-group">
          <div className="input-group">
            <label htmlFor="username" className="title-user-pass text-green-600">Usuario</label>
            <input
              type="text"
              id="username"
              {...register('username')}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
              placeholder="Ingresa tu usuario"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="contraseña" className="title-user-pass text-green-600">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              {...register('contraseña')}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.contraseña ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
              placeholder="Ingresa tu contraseña"
            />
            {errors.contraseña && <p className="text-red-500 text-sm mt-1">{errors.contraseña.message}</p>}
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
      </div>
    </div>
  );
};

export default Login;
