import styled from "styled-components";
import { StyledProps } from "styles";
import { motion } from "framer-motion";

export const StyledButtonBase = styled(motion.button)`
    min-width: 180px;
    max-width: 220px;
    height: 42px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
`;

export const StyledPrimaryButton = styled(StyledButtonBase)`
    background: ${({ theme }: StyledProps) => theme.palette.neutral1};
    color: ${({ theme }: StyledProps) => theme.palette.neutral3};

    &:hover {
        background: ${({ theme }: StyledProps) => theme.palette.neutral3};
        color: ${({ theme }: StyledProps) => theme.palette.neutral1};
        border: ${({ theme }: StyledProps) => `2px solid ${theme.palette.neutral1}`};
    }
`;

export const StyledSecondaryButton = styled(StyledButtonBase)`
    background: ${({ theme }: StyledProps) => theme.palette.neutral2};
    color: ${({ theme }: StyledProps) => theme.palette.neutral1};
    border: ${({ theme }: StyledProps) => `2px solid ${theme.palette.neutral3}`};

    &:hover {
        background: ${({ theme }: StyledProps) => theme.palette.neutral3};
        color: ${({ theme }: StyledProps) => theme.palette.neutral1};
    }
`;
