import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-16 md:py-24 bg-secondary dark:bg-[#0a0f1a] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight"
                >
                    Ready to Start Your Outsourced Project?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/70 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
                >
                    Partner with RemStack's remote team to build scalable, innovative solutions. Experience the power of outsourced development with local accountability.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
                >
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-sm md:text-base hover:from-primary-dark hover:to-accent-light transition-all shadow-lg inline-flex items-center justify-center gap-2 min-h-[48px]"
                    >
                        Start Your Project
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                    <Link
                        to="/portfolio"
                        className="w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-sm md:text-base hover:bg-white/20 transition-all min-h-[48px] flex items-center justify-center"
                    >
                        View Our Work
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;