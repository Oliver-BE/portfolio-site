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
            {/* To turn on the splash screen animation, change the prop below */}
            <Page useSplashScreenAnimation={true}>
                <HeroSection sectionId="hero" />
                {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} /> */}
                <AboutSection sectionId="about" heading="About Me" />
                <InterestsSection sectionId="skills" heading="Skills" />
                <ProjectsSection sectionId="projects" heading="Projects" />
                <ContactSection sectionId="contact" heading="Contact" />
            </Page>
        </>
    );
}
