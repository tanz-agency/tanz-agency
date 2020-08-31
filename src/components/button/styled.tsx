import styled from "styled-components";

interface StyledButtonProps {
    variant: "primary" | "secondary";
}

export const StyledButton = styled.button<StyledButtonProps>`
    min-width: 180px;
    max-width: 220px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    background: #333;
    color: #ddd;
`;
