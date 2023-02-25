import React, { FC, useMemo } from 'react';
import 'twin.macro';
import { useGetProducts, useGetCategory } from 'hooks/products/productsHooks';

const ProductDetail: FC = () => {
  const { data: productsAPIres } = useGetProducts();
  const productsData = useMemo(() => productsAPIres?.data ?? {}, []);

  return (
    <div tw="flex w-full min-h-screen max-w-[1366px] mx-auto">
      <div tw="flex flex-row h-full w-full min-h-[800px] justify-center items-center bg-red-300">
        <p>ce</p>
      </div>
    </div>
  );
};

export default ProductDetail;
