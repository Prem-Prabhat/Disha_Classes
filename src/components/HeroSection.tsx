import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { ArrowRight, Star, Users, Video } from 'lucide-react';

import { Button } from '@/components/ui/button';
 

// Import your images
import classroomEnvironment from '@/assets/classroom-environment.jpg';
import heroImage from '@/assets/hero-education.jpg';
import Carousel from './Crousel';

const handleWhatsApp = () => {
    window.open('https://wa.me/+918540890133?text=Hi! I\'m interested in classes at Disha Class. Can you share more info?', '_blank');
};

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
};


const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Backgrounds and Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-blue-100"></div>
            <div className="absolute inset-0 mix-blend-overlay opacity-25">
                <Carousel images={[classroomEnvironment, heroImage]} />
            </div>
            <div className="absolute inset-0 bg-black/10"></div> {/* Darker overlay for better contrast */}

            {/* Content */}
            <motion.div
                className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-shadow-md"
                    variants={itemVariants}
                >
                    Learn Smarter with
                    <span className="block text-yellow-300 mt-2">Disha Class</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200"
                    variants={itemVariants}
                >
                    Trusted coaching for Classes 10-12. Unlock your potential with expert teachers, clear concepts, and complete support for boards & beyond.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={itemVariants}
                >
                    <Link to="/admission">
                        <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg">
                            Book Free Demo Class
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto text-lg px-8 py-4 bg-transparent border-2 border-gray-300 text-white hover:bg-white hover:text-blue-700 font-bold transition-all duration-300 rounded-lg hover:scale-105"
                        onClick={handleWhatsApp}
                    >
                        Contact on WhatsApp
                    </Button>
                </motion.div>

                {/* Trust Signals / Highlights */}
                <motion.div
                    className="mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-300"
                    variants={itemVariants}
                >
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-yellow-300" />
                        <span className="text-sm font-medium">Expert Teachers</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-300" />
                        <span className="text-sm font-medium">Top Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Video className="w-5 h-5 text-yellow-300" />
                        <span className="text-sm font-medium">Free Demo Available</span>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default HeroSection;
