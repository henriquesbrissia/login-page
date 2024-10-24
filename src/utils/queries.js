import { server } from './axios';

export const fetchUser = async () => {
  const token = localStorage.getItem('token');
  const response = await server.get('/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
