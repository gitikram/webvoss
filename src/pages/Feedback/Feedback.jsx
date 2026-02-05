import React, { useEffect } from 'react';
import Button from '../../components/Button';

const testimonials = [
    {
        text: "Aura has transformed how we monitor our deployments. The visibility is simply unparalleled.",
        name: "Alex Rivera",
        role: "CTO at Nexus",
        avatar: "A"
    },
    {
        text: "The most intuitive platform I've used in years. It just works.",
        name: "Sarah Chen",
        role: "Lead Engineer",
        avatar: "S"
    },
    {
        text: "Finally a tool that understands the developer workflow.",
        name: "Jordan Lee",
        role: "Senior Developer",
        avatar: "J"
    },
    {
        text: "Beautiful design and even better functionality. A must-have.",
        name: "Elena Rossi",
        role: "Design Lead",
        avatar: "E"
    },
    {
        text: "The support team is incredible. They really care about your success.",
        name: "Mark Wilson",
        role: "Founder",
        avatar: "M"
    },
    {
        text: "Shipping faster than ever thanks to Aura.",
        name: "David Kim",
        role: "Product Manager",
        avatar: "D"
    },
    {
        text: "Scalability was our biggest concern, but Aura handled it with ease.",
        name: "Michael Torres",
        role: "VP of Engineering",
        avatar: "M"
    },
    {
        text: "The analytics dashboard is a game changer for our marketing team.",
        name: "Emily White",
        role: "CMO",
        avatar: "E"
    },
    {
        text: "Redefined how we approach project management.",
        name: "Chris Paul",
        role: "Project Lead",
        avatar: "C"
    }
];

const TestimonialCard = ({ t }) => (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 glass-card p-6 md:p-8 rounded-[24px] md:rounded-[32px] hover:border-red-500/30 transition-colors duration-300">
        <p className="text-white/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">"{t.text}"</p>
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10 border border-white/10 flex items-center justify-center text-white text-xs font-bold">
                {t.avatar}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{t.role}</p>
            </div>
        </div>
    </div>
);

const FeedbackCTA = () => {
    return (
        <section className="py-20 md:py-24 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto glass-card p-10 md:p-32 rounded-[48px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] z-[1]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] z-[1]"></div>

                <h2 className="display-text font-semibold text-white mb-10 tracking-tighter leading-tight relative z-10 font-aura-header">
                    Ready to share <br /> your <span className="text-red-500 font-newsreader italic font-normal">experience?</span>
                </h2>

                <p className="body-large text-white/40 mb-14 max-w-2xl mx-auto relative z-10 capitalize">
                    We'd love to hear from you. Join the conversation and help us grow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative z-10">
                    <Button to="/contact" className="w-full sm:w-auto !px-16 !py-5 md:!text-lg">
                        Get in Touch
                    </Button>
                    <a href="#" className="text-white/60 font-bold hover:text-white transition-colors group">
                        Learn More <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

const Feedback = () => {
    useEffect(() => {
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

    // Create variations for rows to look random
    const row1 = [...testimonials, ...testimonials];
    const row2 = [...testimonials.slice(2), ...testimonials.slice(0, 2), ...testimonials.slice(2), ...testimonials.slice(0, 2)];
    const row3 = [...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)];
    const row4 = [...testimonials.slice(1), ...testimonials.slice(0, 1), ...testimonials.slice(1), ...testimonials.slice(0, 1)];
    const row5 = [...testimonials.slice(5), ...testimonials.slice(0, 5), ...testimonials.slice(5), ...testimonials.slice(0, 5)];
    const row6 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden items-center justify-center flex flex-col bg-grid-white">
                {/* Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] animate-float pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed pointer-events-none" />

                <div className="container mx-auto px-6 text-center relative z-10 animate-on-scroll">
                    <h1 className="display-text font-bold mb-6 tracking-tighter">
                        Client <span className="text-red-500 italic font-medium font-newsreader">Stories</span>
                    </h1>
                    <p className="body-large text-white/60 max-w-2xl mx-auto leading-relaxed">
                        See how Aura contributes to the success of world-class teams and ambitious projects.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </section>

            {/* Feedback Carousels */}
            <section className="py-20 relative overflow-hidden">
                <div className="flex flex-col gap-8 md:gap-12">
                    {/* Row 1 - Left to Right */}
                    <div className="marquee-container animate-on-scroll">
                        <div className="marquee-content" style={{ animation: 'marquee-scroll-reverse 45s linear infinite' }}>
                            {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
                        </div>
                    </div>

                    {/* Row 2 - Right to Left */}
                    <div className="marquee-container animate-on-scroll">
                        <div className="marquee-content" style={{ animation: 'marquee-scroll 50s linear infinite' }}>
                            {row2.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
                        </div>
                    </div>

                    {/* Row 3 - Left to Right */}
                    <div className="marquee-container animate-on-scroll">
                        <div className="marquee-content" style={{ animation: 'marquee-scroll-reverse 48s linear infinite' }}>
                            {row3.map((t, i) => <TestimonialCard key={`r3-${i}`} t={t} />)}
                        </div>
                    </div>

                    {/* Row 4 - Right to Left */}
                    <div className="marquee-container animate-on-scroll">
                        <div className="marquee-content" style={{ animation: 'marquee-scroll 55s linear infinite' }}>
                            {row4.map((t, i) => <TestimonialCard key={`r4-${i}`} t={t} />)}
                        </div>
                    </div>

                    {/* Row 5 - Left to Right */}
                    <div className="marquee-container animate-on-scroll">
                        <div className="marquee-content" style={{ animation: 'marquee-scroll-reverse 52s linear infinite' }}>
                            {row5.map((t, i) => <TestimonialCard key={`r5-${i}`} t={t} />)}
                        </div>
                    </div>

                    {/* Row 6 - Right to Left */}
                    <div className="marquee-container animate-on-scroll">
                        <div className="marquee-content" style={{ animation: 'marquee-scroll 60s linear infinite' }}>
                            {row6.map((t, i) => <TestimonialCard key={`r6-${i}`} t={t} />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <FeedbackCTA />
        </div>
    );
};

export default Feedback;
