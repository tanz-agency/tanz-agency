import React from "react";

import { Button, BUTTONS, Hero, Layout, Seo } from "components";
import { Link } from "gatsby";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Hero
            title="Cutting boards made simple."
            description="Super cool software. For a super high price."
            primaryAction={
                <Link to="/about">
                    <Button text="Check out" />
                </Link>
            }
            secondaryAction={
                <Link to="/products">
                    <Button text="Remind me" variant={BUTTONS.SECONDARY} />
                </Link>
            }
        />
    </Layout>
);

export default IndexPage;
