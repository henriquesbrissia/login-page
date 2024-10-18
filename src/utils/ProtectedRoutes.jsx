import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from './routes';

export const ProtectedRoutes = () => {
  const { token } = useAuth()
  return token ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
};
