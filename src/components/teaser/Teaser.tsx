import React, { ReactNode } from "react";
import { Image, ButtonGroup, Badge } from "components";
import { StyledTeaser, StyledTeaserCopy, StyledTeaserImage } from "./styled";

interface TeaserProps {
    title?: string;
    description?: string;
    badge?: string;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
}

export const Teaser: React.FC<TeaserProps> = ({
    title,
    description,
    badge,
    primaryAction,
    secondaryAction,
}: TeaserProps) => {
    return (
        <StyledTeaser>
            <StyledTeaserCopy>
                {badge && <Badge text={badge} />}
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
                {(primaryAction || secondaryAction) && (
                    <ButtonGroup>
                        {primaryAction}
                        {secondaryAction}
                    </ButtonGroup>
                )}
            </StyledTeaserCopy>
            <StyledTeaserImage>
                <Image />
            </StyledTeaserImage>
        </StyledTeaser>
    );
};
