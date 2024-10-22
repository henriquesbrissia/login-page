import { useContext } from 'react';
import { AuthContext } from '../utils/AuthContext';

export const useAuth = () => {
  const user = useContext(AuthContext);

  if (user === undefined) {
    throw new Error('useAuth must be used with a authContext');
  }

  return user;
};
