import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import "../style/Recuperar_Contraseña.css";

const passwordSchema = z.object({
  nuevaContraseña: z
    .string()
    .min(3, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

const Recuperar_Contraseña = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const { token } = useParams(); // Access the token from the URL
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(`reset-password/${token}/`, {
        password: data.nuevaContraseña,
      });

      console.log("Contraseña restablecida:", response.data);
      setSubmitMessage("Tu contraseña ha sido restablecida con éxito.");

      // Redirect after 2 seconds to the login interface
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage(
        "Error al restablecer la contraseña. Inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="recuperar-contrasena-container flex justify-center items-center h-screen">
      <div className="recuperar-contrasena-form bg-white border-slate-600 rounded-md p-20 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Restablecer Contraseña</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group-password">
            <label
              htmlFor="nuevaContraseña"
              className="input-group-password text-green-600"
            >
              Nueva Contraseña
            </label>
            <input
              type="password"
              id="nuevaContraseña"
              {...register("nuevaContraseña")}
              className={`input-group-password px-3 py-2 mt-1 text-gray-800 bg-white rounded-md border ${
                errors.nuevaContraseña ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              placeholder="Ingresa tu nueva contraseña"
            />
            {errors.nuevaContraseña && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nuevaContraseña.message}
              </p>
            )}
          </div>

          {submitMessage && (
            <p className="text-green-600 mt-4">{submitMessage}</p>
          )}
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mt-4"
          >
            Restablecer Contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recuperar_Contraseña;
