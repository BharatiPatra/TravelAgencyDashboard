import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />

      {/* Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
                Wander
              </span>
              <span className="text-white">Lust</span>
            </div>
            <p className="mb-4 text-gray-300">
              Creating unforgettable travel experiences since 2010. Your journey
              begins with us.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Bali, Indonesia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Santorini, Greece
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Kyoto, Japan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Machu Picchu, Peru
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Maldives
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Travel Street, Suite 100</li>
              <li>New York, NY 10001</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@wanderlust.com</li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-purple-500/20 pt-8 mt-8 text-sm text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} WanderLust Travel Agency. All
            rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
