
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2 bg-neuro-black/80 backdrop-blur-lg' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-neuro-blue rounded-full opacity-50 blur-md animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">N</div>
            </div>
            <span className="text-xl font-bold tracking-tight text-gradient">NeuroFlux</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">About</a>
          <a href="#research" className="text-sm text-white/80 hover:text-white transition-colors">Research</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
          <a href="#demo" className="btn-outline text-sm py-2">Request Demo</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neuro-darker/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#research"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#demo"
              className="btn-outline text-center py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
