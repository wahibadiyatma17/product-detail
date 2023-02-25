import React, { FC } from 'react';
import Image from 'next/image';
import { css } from 'twin.macro';
import { ProductDetailDataType, ProductImageActiveType } from 'types/productDetailTypes';

interface BaseOtherProductImagesProps {
  imageActive: ProductImageActiveType;
  productActive: ProductDetailDataType;
  setImageActive: React.Dispatch<React.SetStateAction<ProductImageActiveType>>;
}

type OtherProductImagesProps = BaseOtherProductImagesProps;

const OtherProductImages: FC<OtherProductImagesProps> = (props) => {
  const { imageActive, productActive, setImageActive } = props;
  return (
    <div tw="flex flex-row gap-6 w-full items-center justify-center mx-auto">
      {productActive?.images.map((data: string, idx: number) => (
        <div
          tw="h-full shadow-sm p-1 rounded-lg cursor-pointer transition-all"
          key={idx}
          css={cssOtherProductImage(idx === imageActive?.index)}
          onClick={() =>
            setImageActive({
              index: idx,
              imageUrl: data,
            })
          }
        >
          <div tw="w-[4rem] h-[4rem] relative">
            <Image src={data} alt={`product image`} fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherProductImages;

const cssOtherProductImage = (isImageActive: boolean) => css`
  border: ${isImageActive ? '1.5px solid #4CA85E' : '0.5px solid #E2E8F0'} !important;
  :hover {
    transform: scale(1.02);
  }
`;
