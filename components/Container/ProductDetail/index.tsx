import React, { FC, useEffect, useMemo, useState } from 'react';
import { Skeleton } from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md';
import { BiChevronLeft } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { useRouter } from 'next/router';
import 'twin.macro';

import DefaultButton from 'components/Buttons/DefaultButton';
import { useGetProducts } from 'hooks/products/productsHooks';
import { ProductDetailDataType, ProductImageActiveType } from 'types/productDetailTypes';

import OtherProductImages from './OtherProductImages';
import PreviewImageNavigation from './PreviewImageNavigation';

const ProductDetail: FC = () => {
  const router = useRouter();

  const { data: productsAPIres, isLoading: isProductsAPILoading } = useGetProducts();
  const productsData = useMemo(
    () => (productsAPIres?.data as Array<ProductDetailDataType>) ?? [],
    [productsAPIres],
  );

  const [productActive, setProductActive] = useState<ProductDetailDataType | undefined>(undefined);
  const [imageActive, setImageActive] = useState<ProductImageActiveType>({
    index: 0,
    imageUrl: productActive?.image,
  });
  const { id } = router.query;
  const productDetailId = id as string;

  useEffect(() => {
    if (router.isReady) {
      setProductActive(productsData[parseInt(productDetailId)]);
      setImageActive({
        index: 0,
        imageUrl: productsData[parseInt(productDetailId)]?.image,
      });
    }
  }, [productsData]);

  return (
    <div tw="flex flex-col w-full min-h-screen max-w-[1366px] mx-auto relative">
      <div tw="flex  h-screen w-full justify-center items-center gap-8 flex-col pt-[132px] px-4 lg:(flex-row pt-0)">
        {!isProductsAPILoading && (
          <>
            <div tw="flex flex-col items-center justify-center gap-4 w-full lg:(w-5/12 items-end)">
              <div tw="relative rounded-lg shadow-md border-[0.5px] border-solid w-full h-[24rem] lg:(w-[29.25rem] h-[29.25rem])">
                {isProductsAPILoading ? (
                  <Skeleton />
                ) : (
                  <Image
                    src={imageActive?.imageUrl!}
                    alt="product image"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
                <PreviewImageNavigation
                  currentPosition={(imageActive?.index ?? 0) + 1}
                  totalPreviewImage={productActive?.images.length ?? 1}
                  onPrev={() =>
                    imageActive?.index > 0 &&
                    setImageActive({
                      index: imageActive?.index - 1,
                      imageUrl: productActive?.images[imageActive?.index - 1],
                    })
                  }
                  onNext={() =>
                    imageActive?.index < (productActive?.images.length ?? 3) &&
                    setImageActive({
                      index: imageActive?.index + 1,
                      imageUrl: productActive?.images[imageActive?.index + 1],
                    })
                  }
                />
              </div>
              <div tw="w-full lg:w-[29.25rem]">
                <OtherProductImages
                  productActive={productActive!}
                  imageActive={imageActive}
                  setImageActive={setImageActive}
                />
              </div>
            </div>

            <div tw="flex flex-col gap-2 h-[572px] py-12 px-4 w-full lg:(w-6/12)">
              <h3 tw="font-semibold text-red-400 text-sm">SALE</h3>
              <h1 tw="font-bold text-black text-xl">{productActive?.name}</h1>
              <div tw="flex flex-row gap-2 w-[200px] h-[20px] items-center">
                <div tw="relative h-[14px] w-[96px]">
                  <Image
                    src={
                      `/icons/icon-star-${productActive?.rating}.svg` ?? '/icons/icon-star-5.svg'
                    }
                    alt={`rating icon`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span tw="text-sm text-gray-400">({productActive?.reviewCount} reviews)</span>
              </div>
              <h3 tw="font-bold text-black text-2xl">{productActive?.price}</h3>

              <div tw="w-full h-[1px] bg-gray-200 my-6 shadow-sm"></div>

              <div tw="flex flex-row gap-4">
                <DefaultButton
                  theme="yellow"
                  text="Add To Cart"
                  suffix={<MdAddShoppingCart size={24} />}
                  onClick={() => toast.success(`Successfully Added ${productActive?.name} To Cart`)}
                />
                <DefaultButton
                  theme="green"
                  text="Buy Now"
                  onClick={() => toast.success(`Successfully Buy ${productActive?.name}`)}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div
        tw="flex cursor-pointer items-center justify-between px-3 py-2 w-[max-content] gap-3 absolute top-4 left-0 lg:left-10"
        onClick={() => router.back()}
      >
        <BiChevronLeft size={'24px'} />
        <span>Back</span>
      </div>
    </div>
  );
};

export default ProductDetail;
