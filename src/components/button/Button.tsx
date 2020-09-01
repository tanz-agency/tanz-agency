import React from "react";
import { BUTTONS } from "./types";
import { StyledPrimaryButton, StyledSecondaryButton } from "./styled";

interface ButtonProps {
    text: string;
    variant?: BUTTONS;
}

export const Button: React.FC<ButtonProps> = ({ text, variant = BUTTONS.PRIMARY }: ButtonProps) => {
    if (variant === BUTTONS.SECONDARY) {
        return <StyledSecondaryButton>{text}</StyledSecondaryButton>;
    }

    return <StyledPrimaryButton>{text}</StyledPrimaryButton>;
};
