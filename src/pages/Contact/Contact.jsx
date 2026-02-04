import React, { useState } from 'react';

const faqs = [
    {
        question: "What services does Webvoss offer?",
        answer: "We specialize in high-impact web design, AI-powered web applications, custom SaaS development, and digital branding solutions tailored for modern businesses."
    },
    {
        question: "How much does a typical project cost?",
        answer: "Our project rates vary based on complexity and scope. We offer tailored packages starting from MVP builds to full-scale enterprise solutions. Contact us for a detailed quote."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital products remain secure, up-to-date, and optimized for performance."
    },
    {
        question: "What is your typical timeline?",
        answer: "Timelines depend on the project size. A standard high-end website typically takes 2-4 weeks, while complex web applications may take 8-12 weeks."
    },
    {
        question: "Can you help with rebranding?",
        answer: "Absolutely. We love breathing new life into existing brands with modern aesthetics, clearer messaging, and a revamped digital presence."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-red-500 border-red-500 rotate-45' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-white/40 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Contact = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [copied, setCopied] = useState(false);
    const email = "ellitbd24@gmail.com";
    const whatsappUrl = "https://wa.me/+8801641231411";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden items-center justify-center flex flex-col bg-grid-white">
                {/* Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] animate-float pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed pointer-events-none" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="display-text font-bold mb-6 tracking-tighter">
                        Contact <span className="text-red-500 italic font-medium font-newsreader">Us</span>
                    </h1>
                    <p className="body-large text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Reach out to Webvoss to discover how our high-quality services can significantly boost your digital presence.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full max-w-md mx-auto">
                        <a
                            href={`mailto:${email}`}
                            className="bg-white hover:bg-neutral-200 text-[#050505] border border-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-1/2 shadow-lg hover:shadow-xl group"
                        >
                            <svg className="w-5 h-5 text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Us
                        </a>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 border border-red-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-1/2 shadow-lg hover:shadow-xl group"
                        >
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </section>

            {/* FAQ & Quick Contact Section */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
                    {/* Left Column: Title & Quick Card */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 font-aura-header">
                            Frequently Asked <br /> <span className="text-red-500 font-newsreader italic font-normal">Questions</span>
                        </h2>

                        <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-white/80 mb-6 leading-relaxed">
                                If you have any other questions, feel free to reach out to us directly via email.
                            </p>
                            <button
                                onClick={handleCopyEmail}
                                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 mb-8"
                            >
                                {copied ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Copied!
                                    </>
                                ) : (
                                    "Copy Email"
                                )}
                            </button>

                            {/* Social Icons */}
                            <div className="flex items-center justify-start gap-6 pt-6 border-t border-white/10">
                                <a href="#" className="text-white/40 hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="text-white/40 hover:text-white transition-colors">
                                    <span className="sr-only">X (Twitter)</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="#" className="text-white/40 hover:text-white transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="#" className="text-white/40 hover:text-white transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full lg:w-2/3">
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={index === openIndex}
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
