import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "RemStack Technologies - Custom Software & Digital Transformation",
    description = "RemStack Technologies is a premier software development company in Ethiopia, specializing in custom software, mobile apps, web development, and digital marketing.",
    canonical,
    ogImage = "/logo.png",
    ogType = "website",
    twitterHandle = "@remstacktech",
    robots = "index, follow",
    locale = "en_US",
    siteName = "RemStack Technologies",
    geoRegion = "ET-AA",
    geoPlacename = "Addis Ababa",
    geoPosition = "9.0320;38.7469",
    icbm = "9.0320, 38.7469"
}) => {
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://remstack.tech/');

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content={robots} />
            <meta name="theme-color" content="#0F172A" />
            <meta name="apple-mobile-web-app-capable" content="yes" />

            {/* Geo metadata */}
            <meta name="geo.region" content={geoRegion} />
            <meta name="geo.placename" content={geoPlacename} />
            <meta name="geo.position" content={geoPosition} />
            <meta name="ICBM" content={icbm} />

            {/* Open Graph */}
            <meta property="og:locale" content={locale} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />

            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/logo.png" />
        </Helmet>
    );
};

export default SEO;
