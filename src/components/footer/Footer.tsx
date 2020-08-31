import React from "react";
import { StyledFooter } from "./styled";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            © Tanz {new Date().getFullYear()}
            <div className="col">
                <p>Tanz Sp z o.o.</p>
                <p>ul. Produkcji 89</p>
                <p>10-XXX Kraków, Poland</p>
                <p>VAT-ID: PL32408XXX20</p>
                <p>REGON: 32849123084</p>
            </div>
            <div className="col">
                <p>Contact</p>
                <p>contact@tanz.agency</p>
            </div>
        </StyledFooter>
    );
};
