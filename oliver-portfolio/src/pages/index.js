import React from 'react';
import {
    AboutSection,
    // ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Oliver Baldwin Edwards" />
            <Page useSplashScreenAnimation={false}>
                <HeroSection sectionId="hero" />
                {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} /> */}
                <AboutSection sectionId="about" heading="About Me" />
                <InterestsSection sectionId="details" heading="Skills" />
                <ProjectsSection sectionId="features" heading="Projects" />
                <ContactSection sectionId="contact" heading="Contact" />
            </Page>
        </>
    );
}
