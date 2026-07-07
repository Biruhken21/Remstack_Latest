import React from 'react';
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
        <section id="process" className="py-24 bg-gray-50/30 dark:bg-[#0f172a]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        Our Integrated Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
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

                {/* Process Timeline */}
                <div className="relative">
                    {/* Connection line - desktop */}
                    <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {processes.map((process, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.15 }}
                                className="relative text-center group"
                            >
                                {/* Desktop step number circle */}
                                <div className="hidden lg:flex absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center text-sm font-bold shadow-lg z-10">
                                    {process.step}
                                </div>

                                <div className={`bg-gradient-to-br ${process.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <process.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-secondary dark:text-white mb-3">{process.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{process.desc}</p>

                                {/* Mobile step indicator */}
                                <div className="lg:hidden mt-4 flex items-center justify-center gap-2">
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        Step {process.step}
                                    </span>
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