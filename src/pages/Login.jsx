const Login = () => {
    return (
      <div >
        <div className="bg-white border-slate-600 rounded-md p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">FIBERTEL</h1>
          <form className="relative my-4">
            <div className="mb-4">
              <label htmlFor="usuario" className="block text-green-600">Usuario</label>
              <input
                type="text"
                id="usuario"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Introduce tu usuario"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="contraseña" className="block text-green-600">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                className="w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Introduce tu contraseña"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mb-2"
            >
              Ingresar
            </button>
            <button
              type="submit"
              className="w-full bg-blue-200 text-gray-800 py-2 px-4 rounded-md hover:bg-blue-300 transition duration-300"
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  