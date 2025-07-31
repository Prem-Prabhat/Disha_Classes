import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, MessageCircle, TwitterIcon, X } from 'lucide-react';
import logo from "@/assets/logo.jpg"; // Assuming you have your logo
import { Button } from '@/components/ui/button';

// A reusable component for footer links to keep code clean and ensure usage of React Router's Link
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors duration-300">
      {children}
    </Link>
  </li>
);


const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+918540890133?text=Hello! I want to know more about Disha Class.', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Disha Class Logo" className="w-14 h-14 object-contain rounded-lg" />
              <span className="text-2xl font-bold">Disha Class</span>
            </Link>
            <p className="text-gray-400 text-base pr-4">
              Empowering students with excellent Math & Science education. Your success is our mission.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="btn-success w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Links & Classes Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul className="space-y-3">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/classes">Classes</FooterLink>
                <FooterLink to="/admission">Admission</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Our Programs</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Class 10th - Math & Science</li>
                <li>Class 11th - Math & Science</li>
                <li>Class 12th - Math & Science</li>
                <li>Board Exam Preparation</li>
              </ul>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-base">
                  Parsad Vigah, Near Narad Museum, Nawadah, Bihar 805110
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+918540890133" className="hover:text-white transition-colors">+91 85408 90133</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:dishaclassesnawada@gmail.com" className="hover:text-white transition-colors break-all">dishaclassesnawada@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Disha Class. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@dishaclasses52" target='_blank' rel="noopener noreferrer" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/dishaclassesnawada/" target='_blank' rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/DishaClassesNawadah" target='_blank' rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://x.com/Abodh_kumar8" target='_blank' rel="noopener noreferrer" className="bg-black p-2 rounded-full hover:bg-gray-800 transition-colors">
              <X className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
