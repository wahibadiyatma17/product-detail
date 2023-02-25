import React, { useMemo } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import 'twin.macro';
import ProductDetail from 'components/Container/ProductDetail';
import { useGetProducts } from 'hooks/products/productsHooks';
import { ProductDetailDataType } from 'types/productDetailTypes';

const ProductDetailPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MIFX Product Detail</title>
        <meta name="description" content={''} />
      </Head>
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
