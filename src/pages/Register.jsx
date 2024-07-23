import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';
import logo from '../assets/logofibertel.png';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const registerSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es requerido" }),
  username: z.string().min(1, { message: "El nombre de usuario es requerido" }),
  email: z.string().email({ message: "Correo electrónico no válido" }),
  contraseña: z.string().min(7, { message: "Contraseña mínima de 7 caracteres" }),
  confirmar_contraseña: z.string().min(7, { message: "Confirmar contraseña es obligatorio" }),
  role: z.string().min(1, { message: "Selecciona tu rol" }),
  raspberry: z.string().min(1, { message: "Selecciona tu Raspberry" }),
}).refine((data) => data.contraseña === data.confirmar_contraseña, {
  message:[""],
  path: ["confirmar_contraseña"],
});

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login');
  };

  const contraseña = watch('contraseña');
  const confirmar_contraseña = watch('confirmar_contraseña');

  return (
    <div className="register-container flex justify-start items-center h-screen">
      <div className="register-tom bg-white border-gray-600 rounded-md p-10 shadow-lg">
        <img src={logo} alt="FIBERTEL Logo" className="mx-auto mb-4 " style={{ width: '150px' }} />
        <form onSubmit={handleSubmit(onSubmit)} className="input-group">
          <div className="input-group">
            <label htmlFor="nombre" className="block color-title">Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Ingresa tu nombre"
              {...register('nombre')}
            />
            {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="username" className="block color-title">Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Ingresa tu nombre de usuario"
              {...register('username')}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email" className="block color-title">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Ingresa tu correo"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="contraseña" className="block color-title">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="contraseña"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Ingresa tu contraseña"
                {...register('contraseña')}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-4">
                {showPassword ? (
                  <AiFillEyeInvisible onClick={() => setShowPassword(false)} className="cursor-pointer text-xl" />
                ) : (
                  <AiFillEye onClick={() => setShowPassword(true)} className="cursor-pointer text-xl" />
                )}
              </div>
            </div>
            {errors.contraseña && <p className="text-red-500">{errors.contraseña.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="confirmar_contraseña" className="block color-title">Confirmar Contraseña</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmar_contraseña"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Confirma tu contraseña"
                {...register('confirmar_contraseña')}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-4">
                {showConfirmPassword ? (
                  <AiFillEyeInvisible onClick={() => setShowConfirmPassword(false)} className="cursor-pointer text-xl" />
                ) : (
                  <AiFillEye onClick={() => setShowConfirmPassword(true)} className="cursor-pointer text-xl" />
                )}
              </div>
            </div>
            {errors.confirmar_contraseña && <p className="text-red-500">{errors.confirmar_contraseña.message}</p>}
            {contraseña !== confirmar_contraseña && (
              <p className="text-red-500">Las contraseñas no coinciden</p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="role" className="color-title block ">Rol</label>
            <select
              id="role"
              {...register('role')}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.role ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
            >
              <option value="">Selecciona tu rol</option>
              <option value="dev">Dev</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="raspberry" className="color-title block ">Raspberry</label>
            <select
              id="raspberry"
              {...register('raspberry')}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.raspberry ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
            >
              <option value="">Selecciona tu Raspberry</option>
              <option value="raspberry1">Raspberry 1</option>
              <option value="raspberry2">Raspberry 2</option>
              <option value="raspberry3">Raspberry 3</option>
            </select>
            {errors.raspberry && <p className="text-red-500 text-sm mt-1">{errors.raspberry.message}</p>}
          </div>
          <button
            type="submit"
            className="color-buttom w-full  text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 mb-4 mt-4 custom-button"
          >
            Registrarse
          </button>
          <button
            type="button"
            className="w-full bg-yellow-100 text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition duration-300 custom-button"
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
