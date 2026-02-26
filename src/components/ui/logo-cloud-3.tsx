import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
    src?: string;
    alt: string;
    name?: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
                className
            )}
        >
            <InfiniteSlider gap={42} reverse duration={80} durationOnHover={25}>
                {logos.map((logo) => (
                    <div key={`logo-${logo.alt}`} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        {logo.src && (
                            <img
                                alt={logo.alt}
                                className="pointer-events-none h-5 select-none md:h-6"
                                height={logo.height || "auto"}
                                loading="lazy"
                                src={logo.src}
                                width={logo.width || "auto"}
                            />
                        )}
                        {logo.name && (
                            <span className="text-gray-200 font-medium text-base md:text-lg whitespace-nowrap tracking-tight">
                                {logo.name}
                            </span>
                        )}
                    </div>
                ))}
            </InfiniteSlider>
        </div>
    );
}
