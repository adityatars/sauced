import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";

const NEW_LOGO_URL = "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/MainLogomark_Orange_PNG.png";

const services = [
  { label: "Footwear Development and Sourcing", href: "/services/footwear-development" },
  { label: "Apparel Development and Sourcing", href: "/services/apparel-sourcing" },
  { label: "Custom Gifting Merch", href: "/services/b2b-custom-gifting" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img 
                src={NEW_LOGO_URL} 
                alt="SAUCED" 
                className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:opacity-80"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Services Dropdown - Opens on Hover */}
              <div 
                ref={servicesRef} 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="relative text-sm font-medium text-sauce hover:text-sauce/80 transition-colors duration-300 group flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="w-72 glass-dark rounded-xl shadow-2xl border border-quartz/10 overflow-hidden py-2">
                        {services.map((service, index) => (
                          <motion.a
                            key={service.label}
                            href={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="block px-4 py-3 text-sm text-sauce/80 hover:text-sauce hover:bg-quartz/10 transition-colors"
                          >
                            {service.label}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <NavItem key={link.label} href={link.href} label={link.label} />
              ))}
            </div>

            {/* CTA Button with glow */}
            <div className="hidden md:block">
              <Button
                className="relative bg-sauce text-quartz hover:bg-sauce/90 rounded-full font-semibold px-6 glow-sauce hover:glow-sauce transition-all duration-300"
                size="sm"
                onClick={openModal}
              >
                Book Your 1st Free Discovery Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-sauce transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-carbon md:hidden overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-carbon via-carbon to-sauce/20" />
            
            <div className="relative flex flex-col items-center justify-center h-full gap-6 p-8">
              {/* Services in Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-sauce/50 uppercase tracking-wider mb-4">Services</p>
                <div className="flex flex-col gap-2">
                  {services.map((service, index) => (
                    <motion.a
                      key={service.label}
                      href={service.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                      className="text-lg text-sauce/70 hover:text-sauce transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <div className="h-px w-24 bg-sauce/20 my-4" />

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-4xl font-black text-sauce tracking-tight hover:text-sauce/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="bg-sauce text-quartz hover:bg-sauce/90 rounded-full font-semibold px-8 py-6 text-lg glow-sauce"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                >
                  Book Your 1st Free Discovery Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Google Calendar Modal */}
      <GoogleCalendarModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      className="relative text-sm font-medium text-sauce hover:text-sauce/80 transition-colors duration-300 group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sauce transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default Navbar;
