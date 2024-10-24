import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from './routes';

export const ProtectedRoutes = () => {
  const { user, isPending } = useAuth()

  if (isPending) {
    return <span>Loading...</span>
  }

  return user ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
};
