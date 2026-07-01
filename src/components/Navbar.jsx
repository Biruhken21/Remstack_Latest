import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [servicesTimeout, setServicesTimeout] = useState(null);
    const { theme, toggleTheme } = useTheme();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const serviceItems = [
        { name: 'Custom Software', path: '/services/custom-software' },
        { name: 'Mobile Apps', path: '/services/mobile-apps' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Startup Consulting', path: '/services/startup-consulting' },
        { name: 'Graphics Design', path: '/services/graphics-design' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
    ];

    const isHomePage = location.pathname === '/';

    const handleServicesMouseEnter = () => {
        if (servicesTimeout) clearTimeout(servicesTimeout);
        setServicesDropdown(true);
    };

    const handleServicesMouseLeave = () => {
        const timeout = setTimeout(() => setServicesDropdown(false), 300);
        setServicesTimeout(timeout);
    };

    const handleHomeClick = () => {
        setIsOpen(false);
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleServicesClick = () => {
        setIsOpen(false);
        navigate('/');
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const navLinks = [
        { label: 'Home', path: '/', onClick: handleHomeClick },
        { label: 'About', path: '/about' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 dark:bg-secondary/95 backdrop-blur-md shadow-lg shadow-black/5 py-3' 
                    : 'bg-transparent py-5'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 group mr-8"
                        onClick={handleHomeClick}
                    >
                        <Logo className="h-8" isScrolled={isScrolled} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.path}
                                onClick={link.onClick}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                                    location.pathname === link.path
                                        ? 'text-primary bg-primary/5'
                                        : isScrolled || !isHomePage
                                            ? 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                                            : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-white/10'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleServicesMouseEnter}
                            onMouseLeave={handleServicesMouseLeave}
                        >
                            <button
                                onClick={handleServicesClick}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                                    isScrolled || !isHomePage
                                        ? 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                                        : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-white/10'
                                }`}
                            >
                                Services
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {servicesDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                                    {serviceItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-primary/5 hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className={`w-px h-5 mx-3 ${isScrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-300 dark:bg-gray-600'}`}></div>

                        {/* Dark/Light Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all ${
                                isScrolled || !isHomePage
                                    ? 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                                    : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-white/10'
                            }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="ml-3 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <Link
                            to="/contact"
                            className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all"
                        >
                            Get Started
                        </Link>
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-colors ${
                                isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'
                            }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${
                                isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 }
                }}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl"
            >
                <div className="px-4 pt-4 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
                    <Link
                        to="/"
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>

                    {/* Services Dropdown Mobile */}
                    <div>
                        <button
                            onClick={() => setServicesDropdown(!servicesDropdown)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                            Services
                            <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {servicesDropdown && (
                            <div className="mt-1 ml-4 space-y-1">
                                {serviceItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors rounded-lg"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/about"
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>

                    <Link
                        to="/portfolio"
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Portfolio
                    </Link>

                    <Link
                        to="/contact"
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>

                    <div className="h-px bg-gray-100 dark:bg-gray-800 my-4"></div>

                    <div className="pt-2 px-4">
                        <Link
                            to="/contact"
                            className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;