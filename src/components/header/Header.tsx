import React from "react";
import { Link } from "gatsby";
import { Container, Button } from "components";
import { StyledHeader, StyledNavigation, StyledLink, StyledWrapper } from "./styled";

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledWrapper>
                    <Link to="/">Tanz</Link>
                    <StyledNavigation>
                        <StyledLink to="/about" activeClassName="active">
                            About
                        </StyledLink>
                        <StyledLink to="/products" activeClassName="active">
                            Products
                        </StyledLink>
                        <Button text="Get it" />
                    </StyledNavigation>
                </StyledWrapper>
            </Container>
        </StyledHeader>
    );
};
