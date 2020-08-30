import React from "react";
import { Link } from "gatsby";

import { Layout, SEO } from "src/components";

const ProductsPage = () => (
    <Layout>
        <SEO title="Products" />
        <h1>Products</h1>
        <p>Products description</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ProductsPage;
