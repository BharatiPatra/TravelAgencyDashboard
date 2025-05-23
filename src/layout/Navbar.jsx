import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 backdrop-blur-md" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />

      {/* Border Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
              Wander
            </span>
            <span className="text-white">Lust</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                  : "text-gray-400 hover:text-purple-400 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                  : "text-gray-400 hover:text-purple-400 transition-colors"
              }
            >
              Destinations
            </NavLink>
            <NavLink
              to="/tours"
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                  : "text-gray-400 hover:text-purple-400 transition-colors"
              }
            >
              Tours
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                  : "text-gray-400 hover:text-purple-400 transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                  : "text-gray-400 hover:text-purple-400 transition-colors"
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="hidden md:block">
            <Button
              variant="primary"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full">
          <div className="bg-gradient-to-b from-gray-900/95 to-gray-900/90 backdrop-blur-md border-t border-purple-500/20">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                    : "text-gray-400 hover:text-purple-400 transition-colors py-2"
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/destinations"
                className={({ isActive }) =>
                  isActive
                    ? "text-white py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                    : "text-gray-400 hover:text-purple-400 transition-colors py-2"
                }
                onClick={closeMenu}
              >
                Destinations
              </NavLink>
              <NavLink
                to="/tours"
                className={({ isActive }) =>
                  isActive
                    ? "text-white py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                    : "text-gray-400 hover:text-purple-400 transition-colors py-2"
                }
                onClick={closeMenu}
              >
                Tours
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                    : "text-gray-400 hover:text-purple-400 transition-colors py-2"
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-400"
                    : "text-gray-400 hover:text-purple-400 transition-colors py-2"
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <Button
                variant="primary"
                fullWidth
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
