import { server } from './axios';

export const forgotPassword = async ({ email }) => {
  const response = await server.post('/api/user/forgot-password', {
    email,
  });
  return response.data;
};

export const resetPassword = async ({ resetToken, newPassword }) => {
  const response = await server.post('/api/user/reset-password', {
    resetToken,
    newPassword,
  });
  return response.data;
};

export const signIn = async ({ email, password }) => {
  const response = await server.post('/api/user/sign-in', {
    email,
    password,
  });
  return response.data;
};

export const signUp = async ({ email, password }) => {
  const response = await server.post('/api/user/sign-up', {
    email,
    password,
  });
  return response.data;
};
