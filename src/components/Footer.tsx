import { MapPin, Phone, Mail, MessageCircle, Youtube, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+918540890133?text=Hello! I want to know more about Disha Class.', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold">Disha Class</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students in Classes 10th-12th with excellent Math & Science education. 
              Your success is our mission.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="btn-success w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-primary-glow transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary-glow transition-colors">About Us</a></li>
              <li><a href="/classes" className="hover:text-primary-glow transition-colors">Classes</a></li>
              <li><a href="/admission" className="hover:text-primary-glow transition-colors">Admission</a></li>
              <li><a href="/contact" className="hover:text-primary-glow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Classes</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Class 10th - Math & Science</li>
              <li>Class 11th - Math & Science</li>
              <li>Class 12th - Math & Science</li>
              <li>CBSE & State Board</li>
              <li>Board Exam Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-glow" />
                <span className="text-sm">
                  Parsad vigah, NearBy - Narad Museum,<br />
                  Nawadah, Bihar 805110
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary-glow" />
                <span className="text-sm">+918540890133</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary-glow" />
                <span className="text-sm">dishaclassesnawada@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="https://www.youtube.com/@dishaclasses52" target='_blank' className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/dishaclassesnawada/" target='_blank' className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/DishaClassesNawadah" target='_blank' className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Disha Class. All rights reserved. | Designed for educational excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;