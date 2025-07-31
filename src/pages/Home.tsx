import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import classroomEnvironment from "@/assets/classroom-environment.jpg";
import HeroSection from "@/components/HeroSection";
import ClassProgramsMinimalist from "@/components/ClassProgramsSleek";
import VideoCard from "@/components/VideoCard";
import TestimonialsCarousel from "@/components/TestimonialCarousel";
import { Features, Videos } from "@/data/data";

const Home = () => {

  // Features data
  const features = Features;

  // Animation variants for the container
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // YouTube video data
  const videos = Videos;

  // WhatsApp link handler
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+918540890133?text=Hi! I'm interested in classes at Disha Class. Can you share more info?",
      "_blank"
    );
  };

  // A simple functional component for the background pattern
  const BackgroundPattern = () => (
    <div
      className="absolute inset-0 w-full h-full opacity-10"
      style={{
        backgroundImage: "radial-gradient(#fff 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    ></div>
  );
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <HeroSection />
      </section>

      {/* why chose Disha class */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Why Choose <span className="text-blue-600">Disha Class?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every student can shine with the right guidance. We combine clear
              teaching, regular practice, and personal support to unlock your
              true potential.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              className="w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={classroomEnvironment}
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Features Column */}
            <motion.div
              className="space-y-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-5 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* our classes */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClassProgramsMinimalist />
        </div>
      </section>

      {/* YouTube Previews */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              See Our Teaching in <span className="text-blue-600">Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get a feel for our engaging and effective teaching style. Watch a
              preview of our actual classes.
            </p>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.videoId}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <VideoCard
                  videoId={video.videoId}
                  title={video.title}
                  description={video.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24">
        <TestimonialsCarousel />
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-700 via-blue-500 to-sky-500 text-white overflow-hidden">
        <BackgroundPattern />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Your journey towards better marks and deeper understanding starts
              with a single step.
            </p>
          </motion.div>

          {/* Main CTA Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Book Your Free Demo Class
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-x-6 gap-y-2 text-gray-200 mb-8">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>1-on-1 with an Expert</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Clear Your Doubts</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Obligation</span>
              </div>
            </div>
            <Link to="/admission">
              <Button className="w-full sm:w-auto text-lg px-10 py-6 bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg">
                Claim Your Free Spot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-300">Have questions? We're here to help.</p>
            <Button
              variant="link"
              className="text-lg text-white hover:text-yellow-300 font-semibold mt-1"
              onClick={handleWhatsApp}
            >
              Contact us on WhatsApp: +91 85408 90133
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
