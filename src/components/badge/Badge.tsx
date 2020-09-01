import React from "react";
import { StyledBadge } from "./styled";

interface BadgeProps {
    text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }: BadgeProps) => {
    return <StyledBadge>{text}</StyledBadge>;
};
