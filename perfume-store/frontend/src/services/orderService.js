import api from './api';

export const createOrder = async (orderData) => {
  // return api.post('/orders/', orderData);
  return { data: { id: 'ORD12345' } };
};

export const getOrders = async () => {
  // return api.get('/orders/');
  return { data: [] };
};
