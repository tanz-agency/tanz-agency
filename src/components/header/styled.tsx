import styled from "styled-components";
import { Link } from "gatsby";

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
`;

export const StyledLink = styled(Link)`
    &.active {
        color: #dddddd;
    }
`;
