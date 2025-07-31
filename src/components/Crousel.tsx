import React from "react";
import Slider from "react-slick";
import { cn } from "@/lib/utils"; // If you're using ShadCN utility for class merging

interface CarouselProps {
    images: string[]; // Array of image URLs
    className?: string; // Optional Tailwind/utility class override
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
                {images.map((imgSrc, index) => (
                    <div key={index} className="relative w-full h-screen">
                        <img
                            src={imgSrc}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "/placeholder.png";
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
