import styled from "styled-components";
import { StyledProps } from "styles";

export const StyledTeaser = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0;

    @media (max-width: ${({ theme }: StyledProps) => theme.breakpoints.mobile}) {
        flex-direction: column-reverse;
    }
`;

export const StyledTeaserCopy = styled.div`
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
        color: ${({ theme }: StyledProps) => theme.palette.neutral4};
        margin-bottom: 20px;
    }
`;

export const StyledTeaserImage = styled.div`
    width: 500px;
`;
