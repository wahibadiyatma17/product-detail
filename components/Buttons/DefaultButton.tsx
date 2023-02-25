import React, { FC, ReactNode } from 'react';
import { css } from 'twin.macro';

interface BaseButtonProps {
  suffix?: ReactNode;
  text: string;
  theme: 'green' | 'yellow';
}

type ButtonProps = BaseButtonProps;

const DefaultButton: FC<ButtonProps> = (props) => {
  const { suffix, text, theme } = props;

  return (
    <button
      tw="w-[max-content] h-[44px] min-w-[120px] flex items-center justify-center px-3 py-2 gap-2 rounded-lg transition-all"
      css={cssButton(theme)}
    >
      {suffix ?? suffix}
      <span tw="text-xs font-semibold">{text}</span>
    </button>
  );
};

export default DefaultButton;

const cssButton = (theme: 'green' | 'yellow') => css`
  background-color: ${theme == 'green' ? '#4CA85E' : '#F7C244'};
  color: ${theme == 'green' ? '#ffffff' : '#000000'};

  :hover {
    transform: scale(1.02);
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  }
`;
