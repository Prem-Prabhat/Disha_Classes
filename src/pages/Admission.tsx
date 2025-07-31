import { useState } from 'react';
import { Edit3, Calendar, CheckCircle, Phone, MessageCircle, Mail, Check, X,  MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AdmissionSteps, Benefits, CourseOptions, FaqData } from '@/data/data';
import classroomHeroImage  from '@/assets/classroom-environment.jpg';
import AdmissionForm from '@/components/AdmisionForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const admissionHeroImage = classroomHeroImage;





// Section animation variants for FAQ and other sections

const Admission = () => {
  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };
  
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    class: '',
    subject: '',
    mode: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const courseOptions = CourseOptions
  const admissionSteps = AdmissionSteps
  const faqData = FaqData
  const benefits = Benefits

  const handleWhatsApp = () => {
    window.open('https://wa.me/+918540890133?text=Hello! I want to know more about Disha Class.', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-gradient-to-br from-primary via-primary-glow to-blue-100 text-white text-center overflow-hidden">
        {/* Background decorative blur */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3 w-[700px] h-[700px] bg-gradient-to-tl from-yellow-100 via-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        {/* Content */}
        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            variants={containerVariants}
          >
            Begin Your Success Story
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-blue-100"
            variants={containerVariants}
          >
            Simple steps to join <span className="font-semibold text-yellow-400">Disha Class</span> and unlock your full academic potential in Math & Science.
          </motion.p>

          {/* Admission Process Steps */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col md:flex-row items-center gap-3 text-left">
              <Edit3 className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold">Step 1</h3>
                <p className="text-sm text-gray-300">Fill the Form</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col md:flex-row items-center gap-3 text-left">
              <Calendar className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold">Step 2</h3>
                <p className="text-sm text-gray-300">Book a Free Demo</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col md:flex-row items-center gap-3 text-left">
              <CheckCircle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold">Step 3</h3>
                <p className="text-sm text-gray-300">Confirm Your Seat</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Course Options Section */}
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
              Choose Your Learning <span className="text-blue-600">Path</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible learning options to fit every student's needs. Compare our online, offline, and hybrid batches.
            </p>
          </motion.div>

          {/* Course Cards Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {courseOptions.map((option) => (
              <motion.div
                key={option.type}
                variants={containerVariants}
                className="h-full relative" // Set parent to relative for badge positioning
              >
                {option.isRecommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                      Recommended
                    </span>
                  </div>
                )}
                <Card className={`h-full flex flex-col rounded-2xl border-2 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${option.borderColor}`}>
                  <CardHeader className={`text-center rounded-t-xl p-6 ${option.bgColor}`}>
                    <option.icon className={`w-12 h-12 mx-auto mb-3 ${option.textColor}`} />
                    <CardTitle className={`text-2xl font-bold ${option.textColor}`}>{option.title}</CardTitle>
                    <CardDescription className="text-base min-h-[40px]">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {option.features.map((feature) => (
                        <li key={feature.name} className="flex items-center">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          )}
                          <span className="text-gray-700">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-auto text-lg py-6 ${option.isRecommended
                          ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      variant={option.isRecommended ? 'default' : 'secondary'}
                      aria-label={`Select ${option.type} Plan`}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              A Simple Path to <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Joining Disha Class is straightforward. Follow these three easy steps to begin your journey.
            </p>
          </motion.div>

          {/* Steps Grid with Connecting Line */}
          <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Dashed connecting line for desktop view */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
              <svg width="100%" height="2">
                <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" strokeDasharray="8, 8" className="stroke-gray-300" />
              </svg>
            </div>

            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className="relative z-10"
              >
                <Card className="h-full text-center bg-gray-50 rounded-xl border border-gray-200/80 shadow-lg p-6">
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-5 -mt-16 shadow-md">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      <span className="text-sm font-semibold text-gray-500 block mb-1">Step {index + 1}</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission-form">
        <AdmissionForm />
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={containerVariants}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here are answers to some common questions about our online and offline coaching programs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* FAQ Accordion */}
              <motion.div className="lg:col-span-2" variants={containerVariants}>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-700 hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Contact Card */}
              <motion.div className="lg:col-span-1" variants={containerVariants}>
                <Card className="bg-blue-50 border border-blue-200 shadow-xl rounded-xl p-6 text-center">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-bold text-gray-800">Still Have Questions?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                    <p className="text-gray-600 mb-6">
                      If your question isn't listed here, feel free to reach out to us directly.
                    </p>
                    <a href="tel:+918540890133">
                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                        <Phone className="mr-2 w-5 h-5" /> Call Us Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                We're Here to <span className="text-primary">Help</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Got a question? Need help with admissions or classes? Reach out to us anytime!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left Side – Contact Details */}
              <div className="space-y-8">
                {/* Phone */}
                <motion.div variants={containerVariants} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Helpline Number</h3>
                    <p className="text-muted-foreground">Talk to our support team directly.</p>
                    <a
                      href="tel:+918540890133"
                      className="text-lg font-semibold text-blue-600 hover:underline block mt-1"
                    >
                      +91 85408 90133
                    </a>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div variants={containerVariants} className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">WhatsApp Chat</h3>
                    <p className="text-muted-foreground">Instant support via WhatsApp.</p>
                    <Button
                      onClick={handleWhatsApp}
                      variant="link"
                      className="text-lg font-semibold text-green-600 p-0 h-auto mt-1"
                    >
                      Start Chat
                    </Button>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={containerVariants} className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Email Support</h3>
                    <p className="text-muted-foreground">For any detailed queries, send us an email.</p>
                    <a
                      href="mailto:dishaclassesnawada@gmail.com"
                      className="text-lg font-semibold text-yellow-600 hover:underline break-all mt-1 block"
                    >
                      dishaclassesnawada@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Side – Map Card */}
              <motion.div variants={containerVariants}>
                <Card className="shadow-lg border rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-foreground">
                      <MapPin className="w-6 h-6 text-primary" />
                      Visit Our Center
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Parsad Vigah, Near Narad Museum, Nawadah, Bihar 805110
                    </p>
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4245.991055683576!2d85.54049957588414!3d24.890328244060807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2fef489bad2c7%3A0xfd53885aae7ce476!2sDisha%20Classes!5e1!3m2!1sen!2sin!4v1754004473754!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Disha Class Location"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admission;