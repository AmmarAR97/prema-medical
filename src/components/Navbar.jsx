import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Products", href: "#products" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#location" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-secondary/20 py-2" : "bg-transparent py-4"
        )}>


            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="logo.svg"
                        alt="Prema Medicals - Healthcare Logo"
                        className="h-9 w-9 md:h-10 md:w-10 transition-transform group-hover:scale-105"
                    />
                    <div>
                        <h1 className="font-heading font-bold text-xl leading-none text-primary">PREMA</h1>
                        <p className="text-xs font-semibold tracking-wider text-charcoal">MEDICALS</p>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                scrolled ? "text-charcoal" : "text-charcoal"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="tel:9611341740" className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
                        Call Now
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-3 text-charcoal min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-secondary/50 rounded-full transition-colors"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-secondary/20 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);

                                        // Delay scroll until after menu close animation
                                        setTimeout(() => {
                                            if (link.href === "#") {
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            } else {
                                                const element = document.querySelector(link.href);
                                                if (element) {
                                                    const headerOffset = 80;
                                                    const elementPosition = element.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }
                                        }, 300);
                                    }}
                                    className="text-lg font-medium text-charcoal py-3 border-b border-secondary/20 hover:text-primary min-h-[44px] cursor-pointer hover:pl-2 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:9611341740"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-colors shadow-md shadow-primary/20"
                            >
                                Call Now
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
