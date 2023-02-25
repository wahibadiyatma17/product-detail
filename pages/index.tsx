import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import 'twin.macro';

import Homepage from 'components/Container/Homepage';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>MIFX Homepage Test</title>
        <meta name="description" content={''} />
      </Head>
      <Homepage />
    </>
  );
};

export default Index;
