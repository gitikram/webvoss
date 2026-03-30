import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Projects", href: "/projects" },
        { name: "Feedback", href: "/feedback" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300 pointer-events-none">
            <div className={`pointer-events-auto flex flex-col w-full max-w-6xl transition-all duration-500 rounded-[32px] md:rounded-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-2xl overflow-hidden ${isOpen ? 'max-h-[600px]' : 'max-h-[68px] md:max-h-[76px]'}`}>
                {/* Header Row */}
                <div className="flex items-center justify-between w-full px-6 py-4 md:px-8 md:py-4 h-[68px] md:h-[76px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <svg className="w-7 h-7 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                            <line x1="14" y1="4" x2="10" y2="20" />
                        </svg>
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tighter font-bricolage leading-none mt-0.5">webvoss</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="hover:text-white transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Only Button */}
                        <a 
                            href="https://calendar.app.google/ZpsRA6kSoBHSGfh59" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hidden md:flex items-center justify-center px-8 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10 active:scale-95"
                        >
                            Schedule a Call
                        </a>

                        {/* Hamburger */}
                        <button
                            className="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2 rounded-full hover:bg-white/5 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={`w-6 h-0.5 bg-white transition-all transform origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-white transition-all transform ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-white transition-all transform origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                <div className={`flex flex-col gap-6 px-6 pb-8 pt-4 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'} transition-all duration-500`}>
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-white/50 hover:text-white transition-colors border-b border-white/5 pb-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Only Button - Now under Contact Us */}
                    <div className="pt-2">
                        <a 
                            href="https://calendar.app.google/ZpsRA6kSoBHSGfh59" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-full py-4 text-sm font-bold bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10 active:scale-95"
                        >
                            Schedule a Call
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
