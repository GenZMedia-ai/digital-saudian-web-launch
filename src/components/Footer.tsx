
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-devora-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-hanson font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto font-roboto">
            Stay updated with our latest projects and insights from the development world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-gray-900 border-gray-800 text-white flex-1"
            />
            <Button className="bg-devora-primary hover:bg-blue-600">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Portfolio
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Tech Stack
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Process
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">Platforms</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Shopify Expert
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  WordPress Pro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  React Native
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Flutter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-hanson font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h4 className="text-xl font-hanson font-bold mr-6">Devora</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:hello@devora.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-center md:text-right font-roboto">
              © 2024 Devora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
