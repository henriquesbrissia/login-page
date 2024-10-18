import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { ROUTES } from './utils/routes';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Dashboard } from './pages/dashboard';
import { ProtectedRoutes } from './utils/ProtectedRoutes';
import { AuthProvider } from './utils/AuthContext';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.SIGN_IN} replace />} />
              <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
              <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
              <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
              <Route element={<ProtectedRoutes/>}>
                  <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
    </QueryClientProvider>
  );
};
