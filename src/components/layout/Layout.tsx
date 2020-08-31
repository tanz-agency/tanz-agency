import React from "react";
import { Header, Footer, Container } from "components";
import { StyledMain } from "./styled";
import "styles/base.scss";

export const Layout: React.FC = ({ children }) => (
    <>
        <Header />
        <Container>
            <StyledMain>{children}</StyledMain>
            <Footer />
        </Container>
    </>
);
