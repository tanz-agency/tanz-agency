import styled from "styled-components";
import { StyledProps } from "styles";

export const StyledFooter = styled.footer`
    display: flex;
    position: relative;
    padding: 50px 0 100px;
    border-top: 1px solid lightgray;
`;

export const StyledCopyright = styled.span`
    position: absolute;
    top: 10px;
    right: 0;
    color: ${({ theme }: StyledProps) => theme.palette.neutral4};
    font-weight: ${({ theme }: StyledProps) => theme.fontWeights.regular};
    font-size: ${({ theme }: StyledProps) => theme.fontSizes.xs};
`;

export const StyledCategoryHeading = styled.p`
    font-weight: ${({ theme }: StyledProps) => theme.fontWeights.medium};
    font-size: ${({ theme }: StyledProps) => theme.fontSizes.s};
    line-height: 2;
`;

export const StyledCategoryElement = styled.p`
    font-weight: ${({ theme }: StyledProps) => theme.fontWeights.regular};
    font-size: ${({ theme }: StyledProps) => theme.fontSizes.xs};
    color: ${({ theme }: StyledProps) => theme.palette.neutral4};
    line-height: 2;
`;
