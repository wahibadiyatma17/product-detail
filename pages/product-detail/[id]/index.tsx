import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import 'twin.macro';

import ProductDetail from 'components/Container/ProductDetail';

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
