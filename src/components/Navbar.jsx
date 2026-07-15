import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

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
                    : 'bg-white/80 dark:bg-secondary/80 backdrop-blur-sm'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="border-b border-gray-100/80 dark:border-gray-800/80">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* ===== MOBILE NAVBAR ===== */}
                        <div className="lg:hidden">
                            {/* Top row: Logo | Brand | Toggle */}
                            <div className="flex items-center justify-between py-2 md:py-3">
                                <Link
                                    to="/"
                                    onClick={handleHomeClick}
                                    className="flex items-center flex-shrink-0"
                                >
                                    <img
                                        src="/logo/image.png"
                                        alt="RS"
                                        className="h-8 md:h-10 w-auto object-contain"
                                    />
                                </Link>

                                <Link
                                    to="/"
                                    onClick={handleHomeClick}
                                    className="flex-1 flex items-center justify-center mx-2"
                                >
                                    <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight whitespace-nowrap text-gray-900 dark:text-white">
                                        Remstack<span className="text-primary"> Technologies</span>
                                    </span>
                                </Link>

                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex-shrink-0 p-2.5 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                >
                                    {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                                </button>
                            </div>
                            {/* Bottom row: Tagline badges with thin scrollbar */}
                            <style>{`
                                .tagline-scroll::-webkit-scrollbar { height: 2px; }
                                .tagline-scroll::-webkit-scrollbar-track { background: transparent; }
                                .tagline-scroll::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
                                .dark .tagline-scroll::-webkit-scrollbar-thumb { background: #4b5563; }
                                .tagline-scroll { scrollbar-width: thin; }
                            `}</style>
                            <div className="flex items-center justify-start md:justify-center gap-1.5 py-1 overflow-x-auto tagline-scroll -mx-4 px-4">
                                <div className="flex items-center gap-1 bg-gray-50/80 dark:bg-gray-800/40 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700/50 shrink-0 whitespace-nowrap">
                                    <span className="text-[8px] md:text-[9px] font-medium italic text-gray-500 dark:text-gray-400">Get Certified</span>
                                    <span className="text-[8px] md:text-[9px] font-semibold italic text-primary">Professionals</span>
                                </div>
                                <div className="w-2 h-px bg-gray-200 dark:bg-gray-700 shrink-0"></div>
                                <div className="flex items-center gap-1 bg-gray-50/80 dark:bg-gray-800/40 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700/50 shrink-0 whitespace-nowrap">
                                    <span className="text-[8px] md:text-[9px] font-medium italic text-gray-500 dark:text-gray-400">Fast</span>
                                    <span className="text-[8px] md:text-[9px] font-semibold italic text-accent">Delivery</span>
                                </div>
                                <div className="w-2 h-px bg-gray-200 dark:bg-gray-700 shrink-0"></div>
                                <div className="flex items-center gap-1 bg-gray-50/80 dark:bg-gray-800/40 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700/50 shrink-0 whitespace-nowrap">
                                    <span className="text-[8px] md:text-[9px] font-medium italic text-gray-500 dark:text-gray-400">Quality</span>
                                    <span className="text-[8px] md:text-[9px] font-semibold italic text-emerald-500 dark:text-emerald-400">Assured</span>
                                </div>
                                <div className="w-2 h-px bg-gray-200 dark:bg-gray-700 shrink-0"></div>
                                <div className="flex items-center gap-1 bg-gray-50/80 dark:bg-gray-800/40 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700/50 shrink-0 whitespace-nowrap">
                                    <span className="text-[8px] md:text-[9px] font-medium italic text-gray-500 dark:text-gray-400">Cost</span>
                                    <span className="text-[8px] md:text-[9px] font-semibold italic text-amber-500 dark:text-amber-400">Effective</span>
                                </div>
                            </div>
                        </div>

                        {/* ===== DESKTOP NAVBAR ===== */}
                        <div className="hidden lg:flex items-center py-3 md:py-4">
                            {/* Left: RS Logo + Brand (grouped together with professional border) */}
                            <Link
                                to="/"
                                onClick={handleHomeClick}
                                className="flex items-center gap-3 flex-shrink-0 group/brand"
                            >
                                <div className="relative p-1 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 group-hover/brand:border-primary/50 group-hover/brand:shadow-md transition-all duration-300">
                                    <img
                                        src="/logo/image.png"
                                        alt="RemStack Technologies"
                                        className="h-10 md:h-11 w-auto object-contain rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-lg md:text-xl lg:text-2xl font-black tracking-tight">
                                        <span className="text-gray-900 dark:text-white">Rem</span>
                                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
                                    </span>
                                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-primary/80 to-accent/80 bg-clip-text text-transparent">
                                        Technologies
                                    </span>
                                </div>
                            </Link>

                            {/* Center: Tagline divider (Get Certified Professionals | Fast Delivery | Quality Assured | Cost Effective) */}
                            <div className="hidden xl:flex items-center mx-6 lg:mx-8">
                                <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                                <div className="flex flex-col mx-3 leading-snug">
                                    <span className="text-[10px] lg:text-[11px] font-medium italic text-gray-500 dark:text-gray-400 tracking-wide">
                                        Get Certified
                                    </span>
                                    <span className="text-[10px] lg:text-[11px] font-semibold italic text-primary dark:text-primary tracking-wide">
                                        Professionals
                                    </span>
                                </div>
                                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
                                <div className="flex flex-col mx-3 leading-snug">
                                    <span className="text-[10px] lg:text-[11px] font-medium italic text-gray-500 dark:text-gray-400 tracking-wide">
                                        Fast
                                    </span>
                                    <span className="text-[10px] lg:text-[11px] font-semibold italic text-accent dark:text-accent tracking-wide">
                                        Delivery
                                    </span>
                                </div>
                                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
                                <div className="flex flex-col mx-3 leading-snug">
                                    <span className="text-[10px] lg:text-[11px] font-medium italic text-gray-500 dark:text-gray-400 tracking-wide">
                                        Quality
                                    </span>
                                    <span className="text-[10px] lg:text-[11px] font-semibold italic text-emerald-500 dark:text-emerald-400 tracking-wide">
                                        Assured
                                    </span>
                                </div>
                                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
                                <div className="flex flex-col mx-3 leading-snug">
                                    <span className="text-[10px] lg:text-[11px] font-medium italic text-gray-500 dark:text-gray-400 tracking-wide">
                                        Cost
                                    </span>
                                    <span className="text-[10px] lg:text-[11px] font-semibold italic text-amber-500 dark:text-amber-400 tracking-wide">
                                        Effective
                                    </span>
                                </div>
                                <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                            </div>

                            {/* Right: Nav Lists (starting from center of navbar) */}
                            <div className="flex items-center justify-end flex-1 ml-4 lg:ml-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center space-x-0.5 bg-gray-50/70 dark:bg-gray-800/50 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        {navLinks.map((link, i) => (
                                            <Link
                                                key={i}
                                                to={link.path}
                                                onClick={link.onClick}
                                                className={`px-3 py-1.5 text-sm md:text-base font-medium rounded-lg transition-all ${
                                                    location.pathname === link.path
                                                        ? 'text-primary bg-primary/5'
                                                        : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}

                                        <div
                                            className="relative"
                                            onMouseEnter={handleServicesMouseEnter}
                                            onMouseLeave={handleServicesMouseLeave}
                                        >
                                            <button
                                                onClick={handleServicesClick}
                                                className="px-3 py-1.5 text-sm md:text-base font-medium rounded-lg transition-all flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5"
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
                                    </div>

                                    <Link
                                        to="/contact"
                                        className="px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-sm md:text-base hover:from-primary-dark hover:to-accent-light transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== MOBILE MENU ===== */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 }
                }}
                className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl"
            >
                <div className="px-4 pt-4 pb-8 space-y-1">
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

                    <div className="h-px bg-gray-100 dark:bg-gray-800 my-3"></div>

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