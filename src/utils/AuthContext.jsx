import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(token);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token)
    setAuth(token);
    navigate(ROUTES.DASHBOARD)
  };

  const logout = () => {
    localStorage.removeItem('token')
    setAuth(null)
    navigate(ROUTES.SIGN_IN)
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
