import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'How does your remote team model work?',
        a: 'Our distributed team works across time zones to provide 24/7 productivity. We use modern collaboration tools like Slack, Zoom, and project management platforms to ensure seamless communication and transparency throughout your project.'
    },
    {
        q: 'What are the benefits of outsourced development?',
        a: 'Outsourcing with RemStack gives you access to top-tier talent at competitive rates, reduced operational costs, scalability on demand, and the ability to focus on your core business while we handle the technical implementation.'
    },
    {
        q: 'How do you ensure quality with remote teams?',
        a: 'We implement rigorous quality assurance processes, regular code reviews, automated testing, and daily standups. Our experienced project managers ensure consistent communication and milestone tracking.'
    },
    {
        q: 'What is your typical project timeline?',
        a: 'Project timelines vary based on complexity. A typical web application takes 6-12 weeks, mobile apps 8-16 weeks, and enterprise solutions 12-24 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
        q: 'What technologies do you specialize in?',
        a: 'We specialize in modern tech stacks including React, Next.js, Flutter, Node.js, Python, and cloud platforms like AWS. We choose the best technology for each project based on your specific requirements.'
    },
    {
        q: 'Do you provide post-launch support?',
        a: 'Absolutely! We offer comprehensive maintenance and support packages including bug fixes, updates, performance monitoring, and feature enhancements to ensure your solution runs smoothly.'
    },
];

const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-[#1a2332] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        FAQ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-lg text-gray-500 dark:text-gray-400 px-2"
                    >
                        Everything you need to know about working with our remote team.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="section-divider mt-6"
                    ></motion.div>
                </div>

                <div className="space-y-2 md:space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:border-primary hover:shadow-md transition-all overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-3 md:p-4 text-left"
                            >
                                <span className="font-medium text-xs md:text-sm text-secondary dark:text-white pr-4">{faq.q}</span>
                                <ChevronDown className={`w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-3 md:px-4 pb-3 md:pb-4 text-xs text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-700 pt-3">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;