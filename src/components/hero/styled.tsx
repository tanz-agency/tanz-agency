import styled from "styled-components";

export const StyledHero = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0;
`;

export const StyledHeroCopy = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 30px;
    }

    p {
        color: #a0a0a0;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 20px;
    }
`;

export const StyledImage = styled.div`
    width: 500px;
`;
