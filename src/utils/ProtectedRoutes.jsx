import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from './routes';

export const ProtectedRoutes = () => {
  const { auth } = useAuth()
  return auth ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
};
