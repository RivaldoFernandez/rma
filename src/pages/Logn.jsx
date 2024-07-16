//Importaciones y Definición del Esquema de Validación
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Definir esquema de validación con Zod
const loginSchema = z.object({
  usuario: z.string().min(1, { message: 'El usuario es requerido' }),
  contraseña: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
});
//Función Principal del Componente
const Logn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border-slate-600 rounded-md p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">FIBERTEL</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="relative my-4">
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-green-600">Usuario</label>
            <input
              type="text"
              id="usuario"
              {...register('usuario')}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.usuario ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
              placeholder="Introduce tu usuario"
            />
            {errors.usuario && <p className="text-red-500 text-sm mt-1">{errors.usuario.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="contraseña" className="block text-green-600">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              {...register('contraseña')}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.contraseña ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent custom-input`}
              placeholder="Introduce tu contraseña"
            />
            {errors.contraseña && <p className="text-red-500 text-sm mt-1">{errors.contraseña.message}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mb-2 custom-button"
          >
            Ingresar
          </button>
          <button
            type="button"
            className="w-full bg-blue-200 text-gray-800 py-2 px-4 rounded-md hover:bg-blue-300 transition duration-300 custom-button"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logn;