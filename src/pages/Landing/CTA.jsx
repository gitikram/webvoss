import React from 'react';
import Button from '../../components/Button';

const ctaVideoUrl = 'https://res.cloudinary.com/dm1zvc99k/video/upload/v1774519109/red-abstrac-spining_2_t5hf2s.mp4';

const CTA = () => {
    return (
        <section className="section-padding px-4 md:px-6 overflow-hidden relative">
            <div className="max-w-6xl mx-auto glass-card px-6 py-14 sm:p-10 md:p-32 rounded-[40px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-30 pointer-events-none"
                    >
                        <source src={ctaVideoUrl} type="video/mp4" />
                    </video>
                </div>

                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-red-600/10 blur-[80px] md:blur-[100px] z-[1] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 md:w-80 h-64 md:h-80 bg-red-600/5 blur-[80px] md:blur-[100px] z-[1] pointer-events-none"></div>

                <h2 className="display-text font-semibold text-white mb-6 md:mb-10 tracking-tighter leading-tight relative z-10 font-aura-header break-words">
                    Ready to launch <br className="hidden sm:block" /> your <span className="text-red-500 font-newsreader italic font-normal">vision?</span>
                </h2>

                <p className="body-large text-white/40 mb-10 md:mb-14 max-w-2xl mx-auto relative z-10 px-0 sm:px-4">
                    Let’s turn your idea into a high-performing digital product. Our team is ready to craft a solution that stands out and delivers real results.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 relative z-10">
                    <Button href="https://calendar.app.google/ZpsRA6kSoBHSGfh59" className="w-full sm:w-auto !px-10 md:!px-16 !py-4 md:!py-5 md:!text-lg whitespace-nowrap inline-flex items-center justify-center">
                        Schedule a Call
                    </Button>
                    <a href="/contact" className="text-white/60 font-bold hover:text-white transition-colors group py-2 md:py-0">
                        Talk to Our Team <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;

