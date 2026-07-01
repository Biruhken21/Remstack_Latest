import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "RemStack Technologies - Custom Software & Digital Transformation",
    description = "RemStack Technologies is a premier software development company in Ethiopia, specializing in custom software, mobile apps, web development, and digital marketing.",
    canonical = "https://remstack.tech/",
    ogImage = "/logo.png",
    ogType = "website",
    twitterHandle = "@remstacktech"
}) => {
    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />
        </Helmet>
    );
};

export default SEO;
