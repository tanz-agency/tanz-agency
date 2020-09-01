import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Footer, Container } from "components";
import { StyledMain } from "./styled";
import { theme } from "styles";
import "styles/base.scss";

export const Layout: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Header />
        <Container>
            <StyledMain>{children}</StyledMain>
            <Footer />
        </Container>
    </ThemeProvider>
);
