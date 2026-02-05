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
    React.useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

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
