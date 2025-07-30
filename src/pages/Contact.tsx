import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Education Street", "Knowledge City, State 123456", "Near Central Library"],
      action: "Get Directions",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Parsad vigah, NearBy - Narad Museum Nawadah, Bihar 805110"],
      action: "Call Now",
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@dishaclass.com", "Quick response guaranteed", "24/7 Email Support"],
      action: "Send Email",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+918540890133", "Instant responses", "Share documents easily"],
      action: "Chat Now",
      color: "text-green-600"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "By Appointment Only" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        variant: "default"
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Send Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+918540890133?text=Hello! I want to know more about Disha Class.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+918540890133', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@dishaclass.com?subject=Inquiry about Disha Class', '_self');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Disha+Class+Nawadah', '_blank');
  };

  const getActionHandler = (title: string) => {
    switch (title) {
      case "Our Location":
        return handleDirections;
      case "Call Us":
        return handleCall;
      case "Email Us":
        return handleEmail;
      case "WhatsApp":
        return handleWhatsApp;
      default:
        return () => {};
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're here to help you with any questions about our classes and admission process
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the most convenient way to contact us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-feature text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={getActionHandler(info.title)}
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-elegant">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-gradient-primary">Send us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you soon</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="btn-hero w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={handleDirections}
                      >
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="card-elegant">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Office Hours</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Need immediate help?</strong><br />
                      WhatsApp us anytime for quick responses!
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      className="w-full mt-3 btn-success"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to frequently asked questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-feature">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What are the fees?</h3>
                <p className="text-sm text-muted-foreground">Contact us for current fee structure and payment options.</p>
              </CardContent>
            </Card>
            <Card className="card-feature">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">When do classes start?</h3>
                <p className="text-sm text-muted-foreground">New batches start every month. Flexible joining dates available.</p>
              </CardContent>
            </Card>
            <Card className="card-feature">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you provide study materials?</h3>
                <p className="text-sm text-muted-foreground">Yes, comprehensive study materials are included with admission.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today and take the first step towards academic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              className="btn-secondary text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              onClick={handleCall}
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;