import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [userRole, setUserRole] = useState(null);
  const refreshToken = localStorage.getItem("refreshToken");
  const [isLoading, setIsLoading] = useState(true);

  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      return null;
    }
  };

  const isTokenExpired = (token) => {
    if (!token) return true;
    const decodedToken = decodeToken(token);
    if (!decodedToken) return true;
    const expiration = decodedToken.exp * 1000;
    return Date.now() > expiration;
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      const newToken = response.data.access;
      setToken(newToken);
      localStorage.setItem("accessToken", newToken);
    } catch (error) {
      console.error("Error al refrescar el token:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchUserRole = async (userId) => {
      try {
        const response = await axios.get(`https://test-production-18cc.up.railway.app/api/usuarios/${userId}`);
        if (response.data) {
          const userRole = response.data.idRol;
          setUserRole(userRole);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!token || isTokenExpired(token)) {
      if (isTokenExpired(refreshToken)) {
        console.log("Token expirado, cerrando sesión...");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsLoading(false);
        navigate("/");
      } else {
        console.log("Refrescando token...");
        refreshAccessToken().then(() => {
          const newToken = localStorage.getItem("accessToken");
          const decodedToken = decodeToken(newToken);
          fetchUserRole(decodedToken.user_id);
        });
      }
    } else {
      console.log("Token válido, obteniendo rol...");
      const decodedToken = decodeToken(token);
      fetchUserRole(decodedToken.user_id);
    }
  }, [token, refreshToken]);

  if (isLoading) {
    return { isLoading, userRole };
  }

  return { token, userRole };
};

export default useAuth;
