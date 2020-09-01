import styled from "styled-components";
import { StyledProps } from "styles";

export const StyledButtonBase = styled.button`
    min-width: 180px;
    max-width: 220px;
    height: 42px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

export const StyledPrimaryButton = styled(StyledButtonBase)`
    background: ${({ theme }: StyledProps) => theme.palette.black};
    color: ${({ theme }: StyledProps) => theme.palette.grey};
    transition: background-color 0.3s, color 0.3s, border 0.3s;

    &:hover {
        background: ${({ theme }: StyledProps) => theme.palette.grey};
        color: ${({ theme }: StyledProps) => theme.palette.black};
        border: ${({ theme }: StyledProps) => `2px solid ${theme.palette.black}`};
    }
`;

export const StyledSecondaryButton = styled(StyledButtonBase)`
    background: ${({ theme }: StyledProps) => theme.palette.white};
    color: ${({ theme }: StyledProps) => theme.palette.black};
    border: ${({ theme }: StyledProps) => `2px solid ${theme.palette.grey}`};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background: ${({ theme }: StyledProps) => theme.palette.grey};
        color: ${({ theme }: StyledProps) => theme.palette.black};
    }
`;
