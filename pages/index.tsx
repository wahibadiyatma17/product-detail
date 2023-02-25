import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import 'twin.macro';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>MIFX Homepage Test</title>
        <meta name="description" content={''} />
      </Head>
      <div tw="flex w-full h-full min-h-screen items-center justify-center">
        <h4 tw="font-bold text-xl">Welcome This is Homepage</h4>
      </div>
    </>
  );
};

export default Index;
