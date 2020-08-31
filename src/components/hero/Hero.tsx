import React from "react";
import { Image, Button } from "components";
import { StyledHero, StyledHeroCopy, StyledImage } from "./styled";

export const Hero: React.FC = () => {
    return (
        <StyledHero>
            <StyledHeroCopy>
                <h1>Cut</h1>
                <p>Let clients do the job.</p>
                <Button text="Get it" />
            </StyledHeroCopy>
            <StyledImage>
                <Image />
            </StyledImage>
        </StyledHero>
    );
};
