import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const CTA = () => {
    const videoRef = useRef(null);
    const videoUrl = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/b17f76a1270818e8cdc55e8719b9ace8/manifest/video.m3u8";

    useEffect(() => {
        let hls;
        if (videoRef.current) {
            const video = videoRef.current;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Safari and iOS support HLS natively
                video.src = videoUrl;
            } else if (Hls.isSupported()) {
                // Use hls.js for other browsers
                hls = new Hls();
                hls.loadSource(videoUrl);
                hls.attachMedia(video);
            }
        }
        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [videoUrl]);

    return (
        <section className="py-20 md:py-24 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto glass-card p-10 md:p-32 rounded-[48px] md:rounded-[64px] text-center relative overflow-hidden animate-on-scroll">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>

                {/* Background Glows (kept but placed above video) */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] z-[1]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] z-[1]"></div>

                <h2 className="display-text font-semibold text-white mb-10 tracking-tighter leading-tight relative z-10 font-aura-header">
                    Ready to launch <br /> your <span className="text-red-500 font-newsreader italic font-normal">vision?</span>
                </h2>

                <p className="body-large text-white/40 mb-14 max-w-2xl mx-auto relative z-10 capitalize">
                    Join the list of manufacturers and designers shipping with Aura today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative z-10">
                    <button className="shiny-cta-red w-full sm:w-auto !px-16 !py-5 md:!text-lg">
                        Get Started Now
                    </button>
                    <a href="#" className="text-white/60 font-bold hover:text-white transition-colors group">
                        Talk to an expert <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;

