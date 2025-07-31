import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, HelpCircle, ShieldCheck, CheckCircle, Phone, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// --- Main Component ---
const AdmissionFormSection = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        studentPhone: '',
        parentName: '',
        parentEmail: '',
        classLevel: '',
        preferredMode: '',
        previousSchool: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.studentName) newErrors.studentName = 'Student name is required.';
        if (!formData.studentPhone) newErrors.studentPhone = 'Student phone number is required.';
        if (!formData.parentName) newErrors.parentName = 'Parent name is required.';
        if (!formData.parentEmail) newErrors.parentEmail = 'Parent email is required.';
        if (!formData.classLevel) newErrors.classLevel = 'Please select a class.';
        if (!formData.preferredMode) newErrors.preferredMode = 'Please select a preferred mode.';
        if (!formData.previousSchool) newErrors.previousSchool = 'Previous school name is required.';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        console.log("Admission Form Data:", formData);
        setIsSubmitted(true);
        // Here you would typically send data to a server
    };

    const handleInputChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/+918540890133?text=Hello! I want to know more about Disha Class.', '_blank');
    };

    return (
        <>
            <section id="admission-form" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Left Column: Admission Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <Card className="shadow-2xl rounded-2xl border border-gray-200/80 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {isSubmitted ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="flex flex-col items-center justify-center text-center p-8 min-h-[600px]"
                                            >
                                                <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
                                                <h3 className="text-3xl font-bold text-gray-800">Thank You!</h3>
                                                <p className="text-lg text-gray-600 mt-2">Your form has been submitted successfully. We will contact you shortly.</p>
                                                <Button onClick={() => { setIsSubmitted(false); setFormData({ studentName: '', studentPhone: '', parentName: '', parentEmail: '', classLevel: '', preferredMode: '', previousSchool: '', message: '' }); }} className="mt-8">
                                                    Submit Another Form
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <motion.div key="form">
                                                <CardHeader className="p-8">
                                                    <CardTitle className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">Admission Form</CardTitle>
                                                    <CardDescription className="text-lg text-gray-600">Please fill out the form below to begin.</CardDescription>
                                                </CardHeader>
                                                <CardContent className="p-8 pt-0">
                                                    <form onSubmit={handleSubmit} className="space-y-8">
                                                        {/* Student Information */}
                                                        <motion.div variants={containerVariants} className="space-y-4">
                                                            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Student Information</h3>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="studentName">Full Name</Label>
                                                                    <Input id="studentName" value={formData.studentName} onChange={(e) => handleInputChange('studentName', e.target.value)} placeholder="e.g., Priya Sharma" />
                                                                    {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>}
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="studentPhone">Phone Number</Label>
                                                                    <Input id="studentPhone" value={formData.studentPhone} onChange={(e) => handleInputChange('studentPhone', e.target.value)} type="tel" placeholder="e.g., 9876543210" />
                                                                    {errors.studentPhone && <p className="text-red-500 text-sm mt-1">{errors.studentPhone}</p>}
                                                                </div>
                                                            </div>
                                                        </motion.div>

                                                        {/* Parent/Guardian Information */}
                                                        <motion.div variants={containerVariants} className="space-y-4">
                                                            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Parent/Guardian Information</h3>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="parentName">Full Name</Label>
                                                                    <Input id="parentName" value={formData.parentName} onChange={(e) => handleInputChange('parentName', e.target.value)} placeholder="e.g., Ramesh Sharma" />
                                                                    {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="parentEmail">Email Address</Label>
                                                                    <Input id="parentEmail" value={formData.parentEmail} onChange={(e) => handleInputChange('parentEmail', e.target.value)} type="email" placeholder="e.g., parent@example.com" />
                                                                    {errors.parentEmail && <p className="text-red-500 text-sm mt-1">{errors.parentEmail}</p>}
                                                                </div>
                                                            </div>
                                                        </motion.div>

                                                        {/* Academic & Course Details */}
                                                        <motion.div variants={containerVariants} className="space-y-4">
                                                            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Academic & Course Details</h3>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="classLevel">Select Class</Label>
                                                                    <Select value={formData.classLevel} onValueChange={(value) => handleInputChange('classLevel', value)}>
                                                                        <SelectTrigger id="classLevel"><SelectValue placeholder="Select Class" /></SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectItem value="10th">Class 10th</SelectItem>
                                                                            <SelectItem value="11th">Class 11th</SelectItem>
                                                                            <SelectItem value="12th">Class 12th</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    {errors.classLevel && <p className="text-red-500 text-sm mt-1">{errors.classLevel}</p>}
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="preferredMode">Preferred Mode</Label>
                                                                    <Select value={formData.preferredMode} onValueChange={(value) => handleInputChange('preferredMode', value)}>
                                                                        <SelectTrigger id="preferredMode"><SelectValue placeholder="Select Mode" /></SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectItem value="Online">Online Batch</SelectItem>
                                                                            <SelectItem value="Offline">Offline Batch</SelectItem>
                                                                            <SelectItem value="Hybrid">Hybrid Batch</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    {errors.preferredMode && <p className="text-red-500 text-sm mt-1">{errors.preferredMode}</p>}
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <Label htmlFor="previousSchool">Previous School Name</Label>
                                                                    <Input id="previousSchool" value={formData.previousSchool} onChange={(e) => handleInputChange('previousSchool', e.target.value)} placeholder="e.g., DPS Nawada" />
                                                                    {errors.previousSchool && <p className="text-red-500 text-sm mt-1">{errors.previousSchool}</p>}
                                                                </div>
                                                            </div>
                                                        </motion.div>

                                                        {/* Message */}
                                                        <motion.div variants={containerVariants} className="space-y-2">
                                                            <Label htmlFor="message">Your Questions (Optional)</Label>
                                                            <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="If you have any questions, feel free to write them here..." />
                                                        </motion.div>

                                                        {/* Submit Button */}
                                                        <motion.div variants={containerVariants}>
                                                            <Button type="submit" size="lg" className="w-full text-lg py-7 bg-blue-600 hover:bg-blue-700" aria-label="Submit your admission application">
                                                                Submit Application
                                                                <ArrowRight className="ml-2 w-5 h-5" />
                                                            </Button>
                                                        </motion.div>
                                                    </form>
                                                </CardContent>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Right Column: Help & Info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="bg-white shadow-lg rounded-xl border">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><HelpCircle className="text-blue-500" /><span>Have Questions?</span></CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4">If you have trouble with the form or have any questions, please feel free to contact us.</p>
                                        <a href="tel:+918540890133">
                                            <Button variant="outline" className="w-full" aria-label="Call us at +918540890133">Call at +91 8540890133</Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                            <div className="space-y-6">
                                {/* Quick Contact */}
                                <Card className="card-feature">
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold">Quick Contact</h3>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-semibold">Call Now</p>
                                                    <p className="text-sm text-muted-foreground">+91 85408 90133</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <MessageCircle className="w-5 h-5 text-success" />
                                            <div>
                                                <p className="font-semibold">WhatsApp</p>
                                                <p className="text-sm text-muted-foreground">Quick responses</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-5 h-5 text-secondary" />
                                            <div>
                                                <p className="font-semibold">Email</p>
                                                <p className="text-sm text-muted-foreground">info@dishaclass.com</p>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={handleWhatsApp}
                                            className="w-full btn-success mt-4"
                                        >
                                            <MessageCircle className="w-4 h-4 mr-2" />
                                            Chat on WhatsApp
                                        </Button>
                                    </CardContent>
                                </Card>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="bg-blue-50 border-blue-200 shadow-lg rounded-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><ShieldCheck className="text-blue-500" /><span>Your Information is Secure</span></CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">We respect your privacy. The information you provide will be used solely for the admission process.</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating "Apply Now" button for mobile */}
            <div className="fixed bottom-6 right-6 z-50 sm:hidden">
                <Button
                    onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-full shadow-lg text-lg px-6 py-6 bg-blue-600 hover:bg-blue-700"
                    aria-label="Scroll to admission form"
                >
                    Apply Now
                </Button>
            </div>
        </>
    );
};

export default AdmissionFormSection;
