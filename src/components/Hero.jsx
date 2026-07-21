import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Rocket, Globe, CheckCircle, Layers, Database, Cloud, Server, Shield, HardDrive, Camera } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const rotatingServices = [
    { title: 'Custom Software', icon: Code, color: 'from-blue-500 to-blue-600' },
    { title: 'Mobile Apps', icon: Smartphone, color: 'from-purple-500 to-purple-600' },
    { title: 'Web Development', icon: Globe, color: 'from-emerald-500 to-emerald-600' },
    { title: 'Cloud Solutions', icon: Cloud, color: 'from-cyan-500 to-cyan-600' },
    { title: 'DevOps', icon: Server, color: 'from-orange-500 to-orange-600' },
    { title: 'Cybersecurity', icon: Shield, color: 'from-rose-500 to-rose-600' },
    { title: 'Data Migration', icon: Database, color: 'from-amber-500 to-amber-600' },
    { title: 'CCTV & Security', icon: Camera, color: 'from-teal-500 to-teal-600' },
];

const Hero = () => {
    // eslint-disable-next-line no-unused-vars
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const [currentService, setCurrentService] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % rotatingServices.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const handleServicesClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const floatingIcons = [
        { Icon: Code, color: "text-blue-500", top: "15%", left: "8%", delay: 0 },
        { Icon: Smartphone, color: "text-purple-500", top: "20%", right: "12%", delay: 2 },
        { Icon: Rocket, color: "text-cyan-500", bottom: "25%", left: "12%", delay: 4 },
        { Icon: Globe, color: "text-emerald-500", bottom: "20%", right: "8%", delay: 1 },
    ];

    const stats = [
        { number: '20+', label: 'Projects' },
        { number: '12+', label: 'Clients' },
        { number: '100%', label: 'Satisfaction' },
    ];

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-8 sm:pb-10 md:pt-28 md:pb-16">
            {/* Background Image - dimmed slightly for better text readability */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/homepageback.png)' }}>
                <div className="absolute inset-0 hero-bg-overlay bg-gradient-to-br from-white/70 via-white/60 to-gray-50/70 dark:from-gray-900/70 dark:via-[#0f172a]/60 dark:to-blue-900/70"></div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid opacity-20 md:opacity-30"></div>

                {/* Floating Elements - hidden on mobile for cleaner look */}
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${item.color} hidden md:block`}
                        style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay
                        }}
                    >
                        <item.Icon className="w-10 h-10 opacity-15" />
                    </motion.div>
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left z-10 order-2 lg:order-1"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3 sm:mb-4 md:mb-6 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold text-xs sm:text-sm tracking-wide">
                               We are Remote teams for IT and software solutions
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary dark:text-white leading-tight mb-3 sm:mb-4 md:mb-6">
                            We Build <span className="gradient-text">Digital</span> IT Solutions That <span className="gradient-text">Matter</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-sm sm:text-md md:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Your trusted remote team for IT and software solutions. We deliver outsourced projects with excellence, connecting global businesses with top-tier talent.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2.5 md:gap-4 justify-center lg:justify-start">
                            <a
                                href="/#services"
                                onClick={handleServicesClick}
                                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base hover:from-primary-dark hover:to-accent-light transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                            >
                                Our Services
                                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                to="/contact"
                                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-secondary dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                            >
                                Start a Project
                            </Link>
                        </motion.div>

                        {/* Stats - 3 columns on mobile */}
                        <motion.div variants={itemVariants} className="mt-6 sm:mt-8 md:mt-12">
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-md mx-auto lg:mx-0">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-0 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none">
                                        <p className="text-lg sm:text-2xl md:text-3xl font-bold text-secondary dark:text-white">{stat.number}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium leading-tight">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Graphic/Illustration - Right Side - Hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 hidden lg:flex items-center justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-full aspect-square max-w-[480px] mx-auto">
                            {/* Subtle background glow */}
                            <motion.div
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/[0.07] to-accent/[0.07] blur-3xl"
                            />

                            {/* Clean Monitor Card */}
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-[5%] bg-white dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/40 overflow-hidden"
                            >
                                {/* Minimal top accent */}
                                <div className="h-1 bg-gradient-to-r from-primary to-accent" />

                                {/* Header */}
                                <div className="px-5 pt-4 pb-3 border-b border-gray-50 dark:border-gray-700/30">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                                <Code className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">RemStack</p>
                                                <p className="text-[9px] text-gray-400">Technology Platform</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-[8px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Live</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-5 space-y-3.5">

                                    {/* Service label */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Our Services</span>
                                        <span className="text-[9px] text-gray-300 dark:text-gray-500">{currentService + 1} / {rotatingServices.length}</span>
                                    </div>

                                    {/* Rotating Service Card - Clean */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentService}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.45, ease: "easeInOut" }}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-50/50 dark:from-gray-700/30 dark:to-gray-700/10 border border-gray-100 dark:border-gray-700/30"
                                        >
                                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rotatingServices[currentService].color} flex items-center justify-center shadow-sm`}>
                                                {React.createElement(rotatingServices[currentService].icon, { className: "w-5 h-5 text-white" })}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                                    {rotatingServices[currentService].title}
                                                </p>
                                                <p className="text-[10px] text-gray-400">Expert team · Remote delivery</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Capabilities */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {['Web', 'Mobile', 'Cloud', 'Security', 'Data'].map((tag, i) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.6 + i * 0.05 }}
                                                className="px-2.5 py-1 text-[9px] font-medium rounded-md bg-gray-50 dark:bg-gray-700/30 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700/30"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-50 dark:border-gray-700/20">
                                        {[
                                            { value: '99.9%', label: 'Uptime' },
                                            { value: '100%', label: 'Delivery' },
                                            { value: '24/7', label: 'Support' },
                                        ].map((metric, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1 + i * 0.08 }}
                                                className="text-center"
                                            >
                                                <p className="text-xs font-bold text-gray-900 dark:text-white">{metric.value}</p>
                                                <p className="text-[8px] text-gray-400 font-medium">{metric.label}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Minimal floating indicator - Top Right */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-[9px] font-medium text-gray-700 dark:text-gray-200">Active</span>
                                </div>
                            </motion.div>

                            {/* Minimal floating indicator - Bottom Left */}
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-1.5">
                                    <Globe className="w-3 h-3 text-gray-400" />
                                    <span className="text-[9px] font-medium text-gray-700 dark:text-gray-200">Remote</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;