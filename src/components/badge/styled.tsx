import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledProps } from "styles";

export const StyledBadge = styled(motion.span)`
    max-width: 250px;
    width: max-content;
    padding: 3px 7px;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: ${({ theme }: StyledProps) => theme.fontWeights.semiBold};
    font-size: ${({ theme }: StyledProps) => theme.fontSizes.xs};
    color: ${({ theme }: StyledProps) => theme.palette.neutral2};
    background-color: ${({ theme }: StyledProps) => theme.palette.accent1};
    border-radius: 3px;
`;
