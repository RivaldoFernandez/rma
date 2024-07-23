import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Enviar_Email.css'

const Enviar_Email = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Correo electrónico requerido';
    } else if (!emailRegex.test(email)) {
      return 'Correo electrónico inválido';
    }
    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    // Simulación de envío de correo
    setSubmitMessage('Te hemos enviado un correo para restablecer tu contraseña.');

    // Limpiar campos y errores
    setEmail('');
    setErrors({});

    // Redirigir después de 5 segundos
    setTimeout(() => {
      navigate('/recuperar_contraseña');
    }, 3000);
  };

  return (
    <div className="enviar-email-container flex justify-center items-center h-screen">
      <div className="enviar-email-form bg-white border-slate-600 rounded-md p-10 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Restablecer Contraseña</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="block text-green-600">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          {submitMessage && <p className="text-green-600 mt-4">{submitMessage}</p>}
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mt-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enviar_Email;
