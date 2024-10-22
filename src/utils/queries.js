import { server } from './axios';

export const fetchUser = async (token) => {
  const response = await server.get('/api/user/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
