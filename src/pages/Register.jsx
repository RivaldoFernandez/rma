

const Register = () => {
    return (
      <div>
        <div className="bg-white border-gray-600 rounded-md p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">FIBERTEL</h1>
          <form className="relative my-4">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-yellow-400">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-yellow-400">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contraseña" className="block text-yellow-400">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmar_contraseña" className="block text-yellow-400">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmar_contraseña"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Confirma tu contraseña"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-300 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 mb-2 fond-bold"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Registrarse
            </button>
            <button
              type="submit"
              className="w-full bg-yellow-100 text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition duration-300 font-bold"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Iniciar Sesión
            </button>

          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  