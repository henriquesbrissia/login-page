import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ROUTES } from './utils/routes';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.SIGN_IN} replace />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

