import React from "react";
import Slider from "react-slick";
import { cn } from "@/lib/utils";

interface ImageItem {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: ImageItem[]; // Accepts array of objects with src and alt
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, className }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className={cn("w-full h-full overflow-hidden", className)}>
            <Slider {...sliderSettings}>
                {images.map(({ src, alt }, index) => (
                    <div key={index} className="relative w-full h-screen">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // prevent infinite loop
                                target.src = "/placeholder.png"; // fallback image if original fails
                            }}
                            loading="lazy" // Lazy loading for performance
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
