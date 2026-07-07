import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, Cpu, Database, Palette } from 'lucide-react';

const solutions = [
    { title: 'Web Applications', desc: 'Scalable, responsive web apps built with modern frameworks for optimal performance.', icon: Monitor, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android that engage users.', icon: Smartphone, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { title: 'Cloud Solutions', desc: 'Cloud-native architectures using AWS, Azure, and GCP for scalability and reliability.', icon: Cloud, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
    { title: 'AI & Data Analytics', desc: 'Leverage machine learning and data analytics to gain actionable business insights.', icon: Cpu, color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { title: 'API Integration', desc: 'Seamless third-party API integrations to extend your software capabilities.', icon: Database, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { title: 'UI/UX Design', desc: 'User-centered design that creates intuitive, engaging, and beautiful interfaces.', icon: Palette, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
];

const DigitalSolutions = () => {
    return (
        <section className="py-24 bg-gray-50/50 dark:bg-[#0f172a]/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                    >
                        Solutions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        What Digital Solutions Does <span className="gradient-text">Your Business</span> Need?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        From web apps to AI-powered analytics, we deliver end-to-end digital solutions tailored to your business.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="section-divider mt-6"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 p-6 rounded-xl shadow-md hover:border-primary hover:shadow-lg transition-all"
                        >
                            <div className={`w-14 h-14 ${solution.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                                <solution.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold text-secondary dark:text-white mb-2">{solution.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{solution.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalSolutions;