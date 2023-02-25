import React, { FC, useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import 'twin.macro';

interface BasePreviewImagePositionProps {
  currentPosition: number;
  totalPreviewImage: number;
  onPrev: () => void;
  onNext: () => void;
}

export type PreviewImagePositionProps = BasePreviewImagePositionProps;

const PreviewImageNavigation: FC<PreviewImagePositionProps> = (props) => {
  const { currentPosition, totalPreviewImage, onPrev, onNext } = props;

  const [rightChevronMouseEnter, setRightChevronMouseEnter] = useState<boolean>(false);
  const [leftChevronMouseEnter, setLeftChevronMouseEnter] = useState<boolean>(false);
  useEffect(() => {
    setRightChevronMouseEnter(false);
    setLeftChevronMouseEnter(false);
  }, [currentPosition]);

  return (
    <>
      {currentPosition !== 1 && (
        <div
          tw="absolute bottom-[50%] left-[-12px] cursor-pointer transition-all"
          onMouseEnter={() => setLeftChevronMouseEnter(true)}
          onMouseLeave={() => setLeftChevronMouseEnter(false)}
          onClick={onPrev}
        >
          <FaChevronCircleLeft
            size={'36px'}
            color={leftChevronMouseEnter ? '#000000' : '#F2F5F9'}
          />
        </div>
      )}

      {currentPosition !== totalPreviewImage && (
        <div
          tw="absolute bottom-[50%] right-[-12px] cursor-pointer transition-all"
          onMouseEnter={() => setRightChevronMouseEnter(true)}
          onMouseLeave={() => setRightChevronMouseEnter(false)}
          onClick={onNext}
        >
          <FaChevronCircleRight
            size={'36px'}
            color={rightChevronMouseEnter ? '#000000' : '#F2F5F9'}
          />
        </div>
      )}

      <div tw="flex flex-row absolute bottom-2 right-4 items-center">
        <BiChevronLeft size={'16px'} tw="cursor-pointer" onClick={onPrev} />
        <span tw="text-xs font-light text-black text-center min-w-[1.25rem]">
          {currentPosition}/{totalPreviewImage}
        </span>
        <BiChevronRight size={'16px'} tw="cursor-pointer" onClick={onNext} />
      </div>
    </>
  );
};

export default PreviewImageNavigation;
