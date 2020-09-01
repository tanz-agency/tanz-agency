import React from "react";
import { createGlobalStyle } from "styled-components";
import { StyledProps } from "styles";

export const Base = createGlobalStyle`
  html {
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    font-family: ${({ theme }: StyledProps) => theme.fonts.base};
    color: ${({ theme }: StyledProps) => theme.palette.neutral1};
    text-size-adjust: 100%;

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        position: relative;
    }
  }
`;

export const Typography = createGlobalStyle`
  *::selection {
    background: ${({ theme }: StyledProps) => theme.palette.neutral3};
  }

  h1 {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.xll};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.bold};
      line-height: 1.2;
  }
  
  h2 {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.xl};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.bold};
      line-height: 1.2;
  }
  
  h3 {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.l};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.semiBold};
  }
  
  h4 {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.m};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.semiBold};
  }
  
  h5 {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.s};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.semiBold};
  }
  
  h6 {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.s};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.semiBold};
      color: ${({ theme }: StyledProps) => theme.palette.neutral4};
  }
  
  p,
  span {
      font-size: ${({ theme }: StyledProps) => theme.fontSizes.s};
      font-weight: ${({ theme }: StyledProps) => theme.fontWeights.medium};
  }
`;

export const GlobalStyles = () => (
    <>
        <Base />
        <Typography />
    </>
);
