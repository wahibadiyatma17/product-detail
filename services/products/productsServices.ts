import axios from 'axios';
import productsEndpoint from './productsEndpoint';

export const getProducts = () => {
  return axios.get(productsEndpoint.products);
};
