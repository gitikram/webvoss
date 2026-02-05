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

const Testimonials = () => {
    // Duplicate for infinite loop
    const row1 = [...testimonials, ...testimonials];
    const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

    return (
        <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
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
