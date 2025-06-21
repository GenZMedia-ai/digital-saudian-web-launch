
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-agency-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="software">Custom Software</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <Select onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k+">$100k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-agency-blue hover:bg-blue-600 text-white py-4 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-agency-blue mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-agency-blue mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">hello@devagency.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-agency-blue mr-4" />
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-400">Riyadh, Saudi Arabia</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-agency-blue mr-4" />
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-gray-400">We respond within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Widget Placeholder */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-gray-400 mb-4">
                Prefer to talk? Book a free 30-minute consultation call.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Book a Call
              </Button>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-agency-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-agency-blue transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
