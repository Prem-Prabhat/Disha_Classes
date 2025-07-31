import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { CustomArrowProps } from 'react-slick';
import { Testimonials } from '@/data/data';

// --- Testimonials Data ---
const testimonials = Testimonials

const NextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 cursor-pointer z-10`}
            onClick={onClick}
        >
            <ChevronRight className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors" />
        </div>
    );
};

const PrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 cursor-pointer z-10`}
            onClick={onClick}
        >
            <ChevronLeft className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors" />
        </div>
    );
};


// --- Main Section Component ---
const TestimonialsCarousel = () => {
    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px", // We control spacing with slide width
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
        customPaging: () => (
            <div className="w-2.5 h-2.5 mt-12 rounded-full bg-gray-300 transition-all"></div>
        ),
        responsive: [
            {
                breakpoint: 1024, // For tablets
                settings: {
                    slidesToShow: 1,
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 640, // For mobile
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                }
            }
        ]
    };

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Real Results, <span className="text-blue-600">Real Stories</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Hear what our successful students have to say about their journey with Disha Class.
                    </p>
                </motion.div>

                {/* Slider */}
                <div className="testimonial-slider">
                    <Slider {...sliderSettings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-2 md:px-4">
                                <Card className="h-full flex flex-col rounded-2xl bg-white border border-gray-200/70 shadow-md p-8 transition-all duration-500 ease-in-out transform slick-slide-card">
                                    <CardContent className="flex flex-col gap-6 p-0">
                                        <Quote className="w-10 h-10 text-blue-300" />
                                        <p className="text-gray-700 text-lg italic min-h-[120px] leading-relaxed">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-4 pt-6 mt-auto border-t border-gray-200">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-14 h-14 rounded-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = 'https://i.pravatar.cc/150';
                                                }}
                                            />
                                            <div className="flex-grow">
                                                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                                                <p className="text-sm text-gray-500">{testimonial.class}</p>
                                            </div>
                                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                {testimonial.score}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* Custom CSS to handle the scaling of side slides */}
            <style>{`
                .testimonial-slider .slick-slide {
                    padding-top: 20px; /* Space for the center card to scale up */
                    padding-bottom: 20px;
                }
                .testimonial-slider .slick-slide .slick-slide-card {
                    opacity: 0.5;
                    transform: scale(0.9);
                }
                .testimonial-slider .slick-center .slick-slide-card {
                    opacity: 1;
                    transform: scale(1.05);
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                }
                .slick-dots li button:before {
                    content: '' !important;
                }
                .slick-dots li.slick-active div {
                    background-color: #3b82f6 !important; /* Blue-500 */
                }
            `}</style>
        </section>
    );
};

export default TestimonialsCarousel;
