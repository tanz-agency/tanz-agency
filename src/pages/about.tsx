import React from "react";
import { Link } from "gatsby";

import { Layout, SEO } from "src/components";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <p>About us description</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default AboutPage;
