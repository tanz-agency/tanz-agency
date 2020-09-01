import styled from "styled-components";
import { Link } from "gatsby";
import { StyledProps } from "styles";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const StyledLink = styled(Link)`
    padding: 10px;
    color: ${({ theme }: StyledProps) => theme.palette.neutral1};
    transition: color 0.3s;

    &:hover,
    &:focus-within {
        color: ${({ theme }: StyledProps) => theme.palette.neutral3};
    }

    &.active,
    &:focus-within {
        color: ${({ theme }: StyledProps) => theme.palette.neutral3};
    }
`;
