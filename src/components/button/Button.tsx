import React from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ text, variant = "primary" }: ButtonProps) => {
    return <StyledButton variant={variant}>{text}</StyledButton>;
};
