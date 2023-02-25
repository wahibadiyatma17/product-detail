import React, { FC, useMemo } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import Image from 'next/image';
import 'twin.macro';

import DefaultButton from 'components/Buttons/DefaultButton';
import { useGetProducts } from 'hooks/products/productsHooks';

const ProductDetail: FC = () => {
  const { data: productsAPIres, isLoading: isProductsAPILoading } = useGetProducts();
  const productsData = useMemo(() => productsAPIres?.data ?? [], [productsAPIres]);

  console.log('wahib productsData', productsData);

  return (
    <div tw="flex w-full min-h-screen max-w-[1366px] mx-auto">
      <div tw="flex flex-row h-screen w-full justify-center items-center gap-8">
        {!isProductsAPILoading && (
          <>
            <div tw="flex flex-col items-end justify-center gap-8 w-5/12">
              <div tw="h-full border-[1px] border-solid shadow-md p-8">
                <div tw="relative w-[25rem] h-[25rem] ">
                  <Image
                    src={productsData?.[0]?.image}
                    alt="product image"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div>
                <div tw="flex flex-row gap-6 w-full">
                  {productsData?.slice(0, 5)?.map((data: any, idx: number) => (
                    <div tw="h-full border-[1px] border-solid shadow-md p-1" key={idx}>
                      <div tw="w-[4rem] h-[4rem] relative">
                        <Image
                          src={data?.image}
                          alt={`product ${data?.name}`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div tw="flex flex-col gap-2 w-6/12 h-[572px] py-12 px-4">
              <h3 tw="font-semibold text-red-400 text-sm">SALE</h3>
              <h1 tw="font-bold text-black text-xl">{productsData[0]?.name}</h1>
              <div tw="flex flex-row gap-2 w-[200px] h-[20px] items-center">
                <div tw="relative h-[14px] w-[96px]">
                  <Image
                    src={
                      `/icons/icon-star-${productsData[0].rating}.svg` ?? '/icons/icon-star-5.svg'
                    }
                    alt={`rating icon`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span tw="text-sm text-gray-400">({productsData[0].reviewCount} reviews)</span>
              </div>
              <h3 tw="font-bold text-black text-2xl">{productsData[0]?.price}</h3>

              <div tw="w-full h-[1px] bg-gray-200 my-6 shadow-sm"></div>

              <div tw="flex flex-row gap-4">
                <DefaultButton
                  theme="yellow"
                  text="Add To Cart"
                  suffix={<MdAddShoppingCart size={24} />}
                />
                <DefaultButton theme="green" text="Buy Now" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
