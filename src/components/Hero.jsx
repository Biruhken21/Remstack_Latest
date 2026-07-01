import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Rocket, Globe, CheckCircle, Layers, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

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

    const circleFeatures = [
        { icon: Code, label: 'Web Apps', color: 'bg-blue-500' },
        { icon: Smartphone, label: 'Mobile', color: 'bg-purple-500' },
        { icon: Cloud, label: 'Cloud', color: 'bg-cyan-500' },
        { icon: Database, label: 'Data', color: 'bg-emerald-500' },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#0f172a] dark:to-blue-900/20 pt-20 pb-16">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-50"></div>

                {/* Floating Elements */}
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${item.color}`}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left z-10"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-primary font-semibold text-sm tracking-wide">
                                Transforming Ideas into Digital Reality
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary dark:text-white leading-tight mb-6">
                            We Build <span className="gradient-text">Digital</span> Solutions That <span className="gradient-text">Matter</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            From web apps to mobile solutions, we craft innovative software that drives growth and transforms businesses across Ethiopia and beyond.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/#services"
                                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-base hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Our Services
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white dark:bg-gray-800 text-secondary dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-base hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                            >
                                Start a Project
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-secondary dark:text-white">20+</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Projects</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-secondary dark:text-white">12+</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Clients</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-secondary dark:text-white">100%</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Satisfaction</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Graphic/Illustration - Right Side Circle with Animations */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative z-10 hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Outer rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                            ></motion.div>

                            {/* Middle ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[8%] rounded-full border border-accent/30"
                            ></motion.div>

                            {/* Inner pulsing ring */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-[16%] rounded-full border-2 border-primary/40"
                            ></motion.div>

                            {/* Central circle with gradient */}
                            <div className="absolute inset-[20%] bg-gradient-to-br from-primary to-accent rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-grid opacity-20"></div>
                                <div className="text-center p-8 relative z-10">
                                    <Code className="w-16 h-16 text-white mx-auto mb-3" />
                                    <h3 className="text-2xl font-bold text-white mb-1">RemStack</h3>
                                    <p className="text-white/90 text-sm">Innovation Hub</p>
                                </div>
                            </div>

                            {/* Orbiting feature icons */}
                            {circleFeatures.map((feature, i) => {
                                const angle = (i * 90) * (Math.PI / 180);
                                const radius = 42;
                                const x = 50 + radius * Math.cos(angle);
                                const y = 50 + radius * Math.sin(angle);

                                return (
                                    <motion.div
                                        key={i}
                                        className="absolute"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                        animate={{
                                            y: [0, -8, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.5
                                        }}
                                    >
                                        <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                            <feature.icon className="w-7 h-7 text-white" />
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Quality</p>
                                        <p className="font-bold text-secondary dark:text-white text-sm">Assured</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Fast</p>
                                        <p className="font-bold text-secondary dark:text-white text-sm">Delivery</p>
                                    </div>
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