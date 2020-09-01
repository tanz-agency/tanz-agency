import React from "react";
import { StyledFooter, StyledCopyright, StyledCategoryHeading, StyledCategoryElement } from "./styled";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledCopyright>© Tanz {new Date().getFullYear()}</StyledCopyright>
            <div className="col">
                <StyledCategoryHeading>Tanz Sp. z o.o.</StyledCategoryHeading>
                <StyledCategoryElement>ul. Produkcji 89</StyledCategoryElement>
                <StyledCategoryElement>10-XXX Kraków, Poland</StyledCategoryElement>
                <StyledCategoryElement>VAT-ID: PL32408XXX20</StyledCategoryElement>
                <StyledCategoryElement>REGON: 32849123084</StyledCategoryElement>
            </div>
            <div className="col">
                <StyledCategoryHeading>Contact</StyledCategoryHeading>
                <StyledCategoryElement>contact@tanz.agency</StyledCategoryElement>
            </div>
        </StyledFooter>
    );
};
