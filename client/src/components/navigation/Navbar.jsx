import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Navigation link data for easy maintenance
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "GitHub", href: "#", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Background with subtle blur effect (Glassmorphism) */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Global navigation"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-slate-900">
            <MessageCircle className="w-7 h-7 text-indigo-600" strokeWidth={2.5} />
            <span className="text-xl font-semibold tracking-tight">Kizuna</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="#login">
              Login
            </Button>
            <Button variant="primary" size="sm" href="#register">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-slate-200 bg-white"
            aria-hidden="true"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-base font-medium text-slate-600 hover:text-slate-900 py-2"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Button variant="secondary" size="md" href="#login" className="w-full">
                  Login
                </Button>
                <Button variant="primary" size="md" href="#register" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
