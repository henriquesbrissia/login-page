import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../utils/queries';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  
  const { data: user, isPending, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    retry: false
  });

  const login = (token) => {
    localStorage.setItem('token', token)
    navigate(ROUTES.DASHBOARD)
  };

  const logout = () => {
    localStorage.removeItem('token')
    navigate(ROUTES.SIGN_IN)
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isPending, isError, error }}>
      {children}
    </AuthContext.Provider>
  )
}
