import React from "react";
import { Link } from "gatsby";

import { Layout, Seo } from "components";

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <h1>About</h1>
        <p>About us description</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default AboutPage;
