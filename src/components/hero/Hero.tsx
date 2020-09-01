import React, { ReactNode } from "react";
import { Image, ButtonGroup } from "components";
import { StyledHero, StyledHeroCopy, StyledImage } from "./styled";

interface HeroProps {
    title?: string;
    description?: string;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ title, description, primaryAction, secondaryAction }: HeroProps) => {
    return (
        <StyledHero>
            <StyledHeroCopy>
                <h1>{title}</h1>
                <p>{description}</p>
                <ButtonGroup>
                    {primaryAction}
                    {secondaryAction}
                </ButtonGroup>
            </StyledHeroCopy>
            <StyledImage>
                <Image />
            </StyledImage>
        </StyledHero>
    );
};
