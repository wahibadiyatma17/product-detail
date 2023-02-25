import { useQuery } from 'react-query';

import { getProducts } from 'services/products/productsServices';
import { getCategory } from 'services/category/categoryServices';

export const useGetProducts = () => {
  return useQuery(['products'], () => getProducts());
};

export const useGetCategory = () => {
  return useQuery(['category'], () => getCategory());
};
