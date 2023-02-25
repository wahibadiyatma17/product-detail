import axios from 'axios';
import categoryEndpoints from './categoryEndpoints';

export const getCategory = () => {
  return axios.get(categoryEndpoints.category);
};
