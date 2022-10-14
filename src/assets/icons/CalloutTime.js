import React from "react";

import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  Rect,
  LinearGradient,
  Stop,
} from "react-native-svg";


export default function CalloutTime() {
  return (
    
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_169_31678)">
        <Path
          d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
          stroke="url(#paint0_linear_169_31678)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 5V9L10.6667 10.3333"
          stroke="url(#paint1_linear_169_31678)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_169_31678"
          x1="1.33325"
          y1="0.51463"
          x2="16.7253"
          y2="2.89941"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#53E88B" />
          <Stop offset="1" stop-color="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_169_31678"
          x1="8"
          y1="4.67251"
          x2="11.1335"
          y2="4.91526"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#53E88B" />
          <Stop offset="1" stop-color="#15BE77" />
        </LinearGradient>
        <ClipPath id="clip0_169_31678">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
