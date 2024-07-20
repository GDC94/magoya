/* eslint-disable react/function-component-definition */
import type { SVGProps } from "react";

import * as React from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const CornerBottomRightSvg: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2px"
      {...props}
    >
      <path
        d="M14 0V9.17157C14 9.70201 13.7893 10.2107 13.4142 10.5858L10.5858 13.4142C10.2107 13.7893 9.70201 14 9.17157 14H0"
        stroke="#b9b8b2"
      />
    </svg>
  );
};

export const ArrowTop: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M66.6667 33.4262H50V50H66.6667V33.4262ZM74.8611 13.2312L63.0556 25.0696L74.8611 36.9081L86.6667 25.0696L74.8611 13.2312ZM99.8611 0H83.1944V16.7131H99.8611V0ZM49.8611 50.1393H33.3333V66.8524H50V50.1393M33.3333 66.8524H16.6667V83.4262H33.3333V66.7131V66.8524ZM16.6667 83.2869H0V100H16.6667V83.2869ZM67.0833 0H4.72222V16.7131H66.9444L67.0833 0ZM100 33.0084H83.3333V95.4039H100V33.0084Z"
        fill="black"
      />
    </svg>
  );
};

export const Logo: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.8062 8.99556L28.7282 1H51.8503L59.8283 8.99556H20.8062ZM19.9399 48.979L11.9619 41.0376V17.8639L19.9399 9.86727V48.979ZM63.022 20.6925L71 28.6329V51.8123L63.022 59.8043V20.6925ZM23.1296 19.8239L31.052 11.8273H54.1742L62.1517 19.8239H23.1296ZM51.1933 63.0039L43.2708 71H20.1492L12.1712 63.0039H51.1933ZM52.0601 23.0195L60.0386 30.9604V54.1346L52.0601 62.1312V23.0195ZM8.9785 51.3049L1.00001 43.3594V20.1852L8.9785 12.1886V51.3049ZM48.8694 52.174L40.9475 60.165H17.8253L9.84786 52.174H48.8694Z"
        fill="black"
        stroke="black"
      />
    </svg>
  );
};
