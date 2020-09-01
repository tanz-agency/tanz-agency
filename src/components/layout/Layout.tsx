import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Footer, Container } from "components";
import { StyledMain } from "./styled";
import { GlobalStyles, theme } from "styles";
import "styles/scss/base.scss";

export const Layout: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
            <StyledMain>{children}</StyledMain>
            <Footer />
        </Container>
    </ThemeProvider>
);
