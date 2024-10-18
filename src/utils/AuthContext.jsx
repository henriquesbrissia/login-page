import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const login = (token) => {
    localStorage.setItem('token', token)
    navigate(ROUTES.DASHBOARD)
  };

  const logout = () => {
    localStorage.removeItem('token')
    navigate(ROUTES.SIGN_IN)
  }

  return (
    <AuthContext.Provider value={{ login, logout, token }}>
      {children}
    </AuthContext.Provider>
  )
}
