
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles = "text-black font-bold hover:text-blue-600 transition-colors";
  const mobileNavLinkStyles = "block py-2 text-black font-bold hover:text-blue-600 transition-colors";

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Purvi Group Of Company</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className={navLinkStyles}>Home</a>
            <a href="#services" className={navLinkStyles}>Services</a>
            <a href="#booking" className={navLinkStyles}>Book Now</a>
            <a href="#contact" className={navLinkStyles}>Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className={mobileNavLinkStyles}>Home</a>
            <a href="#services" className={mobileNavLinkStyles}>Services</a>
            <a href="#booking" className={mobileNavLinkStyles}>Book Now</a>
            <a href="#contact" className={mobileNavLinkStyles}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}