import React from 'react';
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
    }
];

const TestimonialCard = ({ t }) => (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#0a0a0a]/80 border border-red-500/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm flex flex-col h-[280px]">
        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-red-500 fill-red-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="text-white/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base flex-grow">"{t.text}"</p>
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white text-xs font-bold">
                {t.avatar}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{t.role}</p>
            </div>
        </div>
        {/* Red gradient border effect at bottom */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    </div>
);

const Testimonials = () => {
    // Duplicate for infinite loop
    const row1 = [...testimonials, ...testimonials];
    const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

    return (
        <section id="testimonials" className="section-padding relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 text-center mb-16 md:mb-24 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                    Loved by <span className="font-newsreader italic font-normal text-red-500">passionate</span> builders
                </h2>
                <p className="text-white/40 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                    Choose the plan that fits your growth and creative excellence.
                </p>
            </div>

            <div className="relative z-10 flex flex-col gap-8 md:gap-12">
                {/* Row 1 - Left to Right (Reverse Marquee) */}
                <div className="marquee-container">
                    <div className="marquee-content" style={{ animation: 'marquee-scroll-reverse 40s linear infinite' }}>
                        {row1.map((t, i) => (
                            <TestimonialCard key={`row1-${i}`} t={t} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right to Left (Standard Marquee) */}
                <div className="marquee-container">
                    <div className="marquee-content" style={{ animation: 'marquee-scroll 40s linear infinite' }}>
                        {row2.map((t, i) => (
                            <TestimonialCard key={`row2-${i}`} t={t} />
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative z-10 flex justify-center mt-12 md:mt-16">
                <Button to="/feedback" className="uppercase tracking-widest text-xs md:text-sm">
                    View All Feedback
                </Button>
            </div>
        </section>
    );
};

export default Testimonials;
