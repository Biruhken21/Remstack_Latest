import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [servicesTimeout, setServicesTimeout] = useState(null);
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
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'DevOps Services', path: '/services/devops-services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Server Installation', path: '/services/server-installation' },
        { name: 'Data Migration', path: '/services/data-migration' },
        { name: 'CCTV Installation', path: '/services/cctv-installation' },
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

    const handleTeamsClick = () => {
        setIsOpen(false);
        navigate('/');
        setTimeout(() => {
            const teamSection = document.getElementById('team');
            if (teamSection) {
                teamSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Main navigation
    const navLinks = [
        { label: 'Home', path: '/', onClick: handleHomeClick },
        { label: 'About', path: '/about' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Teams', path: '/#team', onClick: handleTeamsClick },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 dark:bg-secondary/95 backdrop-blur-md shadow-lg shadow-black/5' 
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Primary Navigation Bar */}
            <div className="border-b border-gray-100 dark:border-gray-800">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Mobile Navbar Layout */}
                        <div className="lg:hidden flex justify-between items-center py-2 md:py-3">
                            {/* Logo - Left */}
                            <Link
                                to="/"
                                className="flex items-center flex-shrink-0 -ml-2"
                                onClick={handleHomeClick}
                            >
                                <Logo className="h-3 md:h-4" isScrolled={isScrolled} showText={false} />
                            </Link>

                            {/* Brand Text - Center */}
                            <Link
                                to="/"
                                className="flex-1 flex justify-center mx-2"
                                onClick={handleHomeClick}
                            >
                                <span className={`text-lg font-bold tracking-tight whitespace-nowrap ${
                                    isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'
                                }`}>
                                    Remstack<span className="text-primary"> Technologies</span>
                                </span>
                            </Link>

                            {/* Menu Button - Right */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                                    isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'
                                }`}
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Desktop Navbar Layout */}
                        <div className="hidden lg:flex justify-between items-center py-3 md:py-4">
                            {/* Logo */}
                            <Link
                                to="/"
                                className="flex items-center gap-4 group ml-0 md:ml-0 -ml-4"
                                onClick={handleHomeClick}
                            >
                                <Logo className="h-4 md:h-5" isScrolled={isScrolled} />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="flex items-center space-x-1 bg-gray-50/50 dark:bg-gray-800/50 px-6 md:px-8 py-2 md:py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 ml-12">
                                {navLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        to={link.path}
                                        onClick={link.onClick}
                                        className={`px-3 md:px-4 py-2 text-sm font-medium rounded-lg transition-all ${
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
                                        className={`px-3 md:px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                                            isScrolled || !isHomePage
                                                ? 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                                                : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-white/10'
                                        }`}
                                    >
                                        Services
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                                    </button>
                                    {servicesDropdown && (
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50 max-h-96 overflow-y-auto">
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

                                {/* CTA Button */}
                                <Link
                                    to="/contact"
                                    className="ml-3 px-5 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-sm hover:from-primary-dark hover:to-accent-light transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Full height overlay style for better mobile UX */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 }
                }}
                className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 shadow-xl"
            >
                <div className="px-4 pt-4 pb-8 space-y-1">
                    {/* Main Links */}
                    <div className="space-y-1">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.path}
                                onClick={link.onClick}
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile Services Sub-links */}
                        <div className="px-4 py-2">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</p>
                            <div className="space-y-0.5">
                                {serviceItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-primary/5 hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 dark:bg-gray-800 my-3"></div>

                    {/* CTA */}
                    <div className="px-4 pt-2">
                        <Link
                            to="/contact"
                            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-sm hover:from-primary-dark hover:to-accent-light transition-all shadow-md"
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