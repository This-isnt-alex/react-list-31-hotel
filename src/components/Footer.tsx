import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">
                PRETTY HOMES <span className="text-emerald-400">INTERIORS</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Transforming spaces into beautiful, functional environments that reflect your personality and enhance your lifestyle.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Full Home Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Room Makeovers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Space Planning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Lighting Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Furniture Curation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Commercial Design</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#portfolio" className="text-gray-300 hover:text-emerald-400 transition-colors">Portfolio</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-emerald-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-emerald-400" />
                  <span className="text-gray-300">hello@prettyhomesinteriors.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 text-emerald-400 mt-1" />
                  <span className="text-gray-300">123 Design Street<br />Creative District, CA 90210</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 mb-4 lg:mb-0">Get design tips, project showcases, and special offers delivered to your inbox.</p>
            </div>
            <div className="lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Pretty Homes Interiors. All rights reserved.</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <ul className="flex flex-wrap space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
