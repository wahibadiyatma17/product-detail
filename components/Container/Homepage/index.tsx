import React, { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

import { useGetProducts } from 'hooks/products/productsHooks';
import { ProductDetailDataType } from 'types/productDetailTypes';
import { BiChevronRight } from 'react-icons/bi';

const Homepage: FC = () => {
  const { data: productsAPIres } = useGetProducts();
  const productsData = useMemo(
    () => (productsAPIres?.data as Array<ProductDetailDataType>) ?? [],
    [productsAPIres],
  );

  const router = useRouter();
  return (
    <div tw="flex flex-col w-full h-full min-h-screen items-center justify-center max-w-[1366px] mx-auto gap-8">
      <h4 tw="font-semibold text-xl">Select Your Product</h4>
      <div tw="flex flex-row gap-4 justify-center flex-wrap max-w-[80%]">
        {productsData?.map((data: ProductDetailDataType, idx: number) => (
          <StyledProductItem onClick={() => router.push(`/product-detail/${idx}`)} key={idx}>
            <span tw="text-sm">{data.name}</span>
            <BiChevronRight size={'16px'} />
          </StyledProductItem>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

const StyledProductItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: max-content;
  min-width: 7.5rem;
  ${tw`shadow-sm border-solid border-[1px] transition-all`}

  :hover {
    transform: scale(1.02);
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

    svg {
      transform: translate(0.25rem, 0);
    }
  }
`;
