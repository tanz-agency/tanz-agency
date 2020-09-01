import styled from "styled-components";
import { Link } from "gatsby";
import { StyledProps } from "styles";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: ${({ theme }: StyledProps) => theme.palette.neutral2};
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledLogo = styled.div`
    font-weight: ${({ theme }: StyledProps) => theme.fontWeights.bold};
    font-size: ${({ theme }: StyledProps) => theme.fontSizes.l};
    color: ${({ theme }: StyledProps) => theme.palette.neutral1};
`;

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const StyledLink = styled(Link)`
    padding: 10px;
    color: ${({ theme }: StyledProps) => theme.palette.neutral4};

    &.active,
    &:hover,
    &:focus-within {
        color: ${({ theme }: StyledProps) => theme.palette.neutral1};
        text-decoration: underline;
    }
`;
