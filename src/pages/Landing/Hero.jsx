import React from 'react';
import Button from '../../components/Button';
import backgroundVideo from '../../assets/background-video.mp4';

const Hero = () => {

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                {/* Dynamic Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8 md:mb-10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white/50">AI-Powered Digital Agency</span>
                </div>

                <h1 className="display-text font-semibold text-white mb-6 md:mb-8 font-aura-header">
                    Design your <span className="font-newsreader italic font-normal text-red-500">vision</span> with <br className="hidden md:block" /> creative excellence
                </h1>

                <p className="body-large text-white/40 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
                    We design and develop world-class websites and mobile apps powered by AI. Experience fast, beautiful solutions built to scale and grow your business.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                    <Button href="https://calendar.app.google/ZpsRA6kSoBHSGfh59" className="w-full sm:w-auto inline-flex items-center justify-center">
                        Schedule a Call
                    </Button>
                    <button className="text-white/60 font-bold hover:text-white transition-colors flex items-center gap-2 group">
                        View Our Work
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
