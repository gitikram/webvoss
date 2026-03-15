import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
    {
        src: "https://cdn.simpleicons.org/nextdotjs/white",
        alt: "Next.js",
        name: "Next.js"
    },
    {
        src: "https://cdn.simpleicons.org/nodedotjs/white",
        alt: "Node.js",
        name: "Node.js"
    },
    {
        src: "https://cdn.simpleicons.org/react/white",
        alt: "React",
        name: "React"
    },
    {
        src: "https://cdn.simpleicons.org/tailwindcss/white",
        alt: "Tailwind CSS",
        name: "Tailwind"
    },
    {
        src: "https://cdn.simpleicons.org/javascript/white",
        alt: "JavaScript",
        name: "JavaScript"
    },
    {
        src: "https://cdn.simpleicons.org/flutter/white",
        alt: "Flutter",
        name: "Flutter"
    },
    {
        src: "https://cdn.simpleicons.org/expo/white",
        alt: "Expo",
        name: "Expo"
    },
    {
        src: "https://cdn.simpleicons.org/wordpress/white",
        alt: "WordPress",
        name: "WordPress"
    },
    {
        alt: "OpenAI",
        name: "OpenAI"
    },
    {
        src: "https://cdn.simpleicons.org/googlegemini/white",
        alt: "Gemini",
        name: "Gemini"
    },
    {
        src: "https://cdn.simpleicons.org/anthropic/white",
        alt: "Anthropic",
        name: "Anthropic"
    },
    {
        src: "https://cdn.simpleicons.org/google/white",
        alt: "Google Search",
        name: "Google Search"
    },
    {
        src: "https://cdn.simpleicons.org/supabase/white",
        alt: "Supabase",
        name: "Supabase"
    },
    {
        src: "https://cdn.simpleicons.org/vercel/white",
        alt: "Vercel",
        name: "Vercel"
    },
    {
        src: "https://cdn.simpleicons.org/github/white",
        alt: "GitHub",
        name: "GitHub"
    },
    {
        src: "https://cdn.simpleicons.org/figma/white",
        alt: "Figma",
        name: "Figma"
    },
    {
        src: "https://cdn.simpleicons.org/framer/white",
        alt: "Framer",
        name: "Framer"
    },
    {
        src: "https://cdn.simpleicons.org/webflow/white",
        alt: "Webflow",
        name: "Webflow"
    }
];

const LogoMarquee = () => {
    return (
        <div className="w-full place-content-center section-padding bg-transparent">
            <div
                aria-hidden="true"
                className={cn(
                    "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
                    "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
                    "blur-[30px]"
                )}
            />

            <section className="relative mx-auto max-w-6xl px-6">
                <h2 className="mb-5 text-center font-bold text-white text-2xl tracking-tight md:text-3xl">
                    <span>Technologies We Work With</span>
                </h2>
                <div className="mx-auto my-5 h-px max-w-2xl bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

                <LogoCloud logos={logos} />

                <div className="mt-5 h-px max-w-2xl mx-auto bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
            </section>
        </div>
    );
};

export default LogoMarquee;
