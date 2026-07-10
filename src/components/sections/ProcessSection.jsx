import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Search, Layers, Code2, ShieldCheck, Rocket } from 'lucide-react';

const processes = [
    { step: '01', title: 'Discovery & Research', desc: 'We dive deep into your business goals, target audience, and market landscape to define the perfect solution strategy.', icon: Search, color: 'from-blue-500 to-blue-600' },
    { step: '02', title: 'UX/UI Strategy', desc: 'Creating intuitive user experiences with wireframes, prototypes, and visual designs that align with your brand identity.', icon: Layers, color: 'from-purple-500 to-purple-600' },
    { step: '03', title: 'Agile Development', desc: 'Rapid, iterative development using modern tech stacks with bi-weekly sprints and continuous integration.', icon: Code2, color: 'from-indigo-500 to-indigo-600' },
    { step: '04', title: 'Quality Assurance', desc: 'Comprehensive testing including unit, integration, and end-to-end tests to ensure bullet-proof performance.', icon: ShieldCheck, color: 'from-emerald-500 to-emerald-600' },
    { step: '05', title: 'Deployment & Launch', desc: 'Smooth deployment to production with zero-downtime strategies, monitoring, and performance optimization.', icon: Rocket, color: 'from-orange-500 to-orange-600' },
];

const ProcessSection = () => {
    return (
        <section id="process" className="py-16 md:py-24 bg-gray-50/30 dark:bg-[#0f172a]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        Our Integrated Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2"
                    >
                        A streamlined approach from concept to launch, ensuring quality at every step.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="section-divider mt-6"
                    ></motion.div>
                </div>

                {/* Mobile: Vertical Timeline | Desktop: Horizontal 5-column */}
                <div className="relative">
                    {/* Desktop connection line */}
                    <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>

                    {/* Mobile vertical timeline line */}
                    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
                        {processes.map((process, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.15 }}
                                className="relative text-center group pl-14 lg:pl-0"
                            >
                                {/* Vertical timeline dot (mobile) */}
                                <div className="lg:hidden absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-sm z-10 -translate-x-1/2"></div>

                                {/* Desktop step number */}
                                <div className="hidden lg:flex absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center text-sm font-bold shadow-lg z-10">
                                    {process.step}
                                </div>

                                <div className="flex items-start lg:block">
                                    <div className={`bg-gradient-to-br ${process.color} p-3 md:p-4 rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <process.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <div className="text-left lg:text-center ml-4 lg:ml-0 lg:mt-6">
                                        <h3 className="text-sm md:text-lg font-bold text-secondary dark:text-white mb-1.5 md:mb-3">{process.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{process.desc}</p>
                                        {/* Step badge mobile */}
                                        <span className="inline-block lg:hidden mt-2 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                            Step {process.step}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;