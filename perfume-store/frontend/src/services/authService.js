import api from './api';

export const login = async (credentials) => {
  // return api.post('/users/login/', credentials);
  return { data: { token: 'dummy_token', user: { name: 'Admin' } } };
};

export const register = async (userData) => {
  // return api.post('/users/register/', userData);
  return { data: { token: 'dummy_token', user: { name: userData.name } } };
};
