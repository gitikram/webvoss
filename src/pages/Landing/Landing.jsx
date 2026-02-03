import React from 'react';
import Hero from './Hero';
import LogoMarquee from './LogoMarquee';
import Founder from './Founder';
import Features from './Features';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import CTA from './CTA';

const Landing = () => {
    return (
        <main>
            <Hero />
            <LogoMarquee />
            <Founder />
            <Features />
            <Projects />
            <Testimonials />
            <Pricing />
            <CTA />
        </main>
    );
};

export default Landing;
