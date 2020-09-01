import styled from "styled-components";
import { StyledProps } from "styles";

export const StyledHero = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0;

    @media (max-width: ${({ theme }: StyledProps) => theme.breakpoints.mobile}) {
        flex-direction: column-reverse;
    }
`;

export const StyledHeroCopy = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: ${({ theme }: StyledProps) => theme.breakpoints.mobile}) {
        width: 100%;
    }

    h1 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 20px;
    }
`;

export const StyledImage = styled.div`
    width: 500px;
`;
