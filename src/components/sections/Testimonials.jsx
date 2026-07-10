import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Abebech Tesfaye',
        role: 'CEO, EthioMart',
        content: 'RemStack transformed our e-commerce platform. Our sales increased by 200% in just 3 months. Their remote team is incredibly professional and responsive.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    },
    {
        name: 'Dawit Haile',
        role: 'Founder, GreenTech Solutions',
        content: 'The mobile app they built for us is flawless. Working with their outsourced team was seamless - fast communication, excellent quality, and on-time delivery.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
        name: 'Sara Mohammed',
        role: 'CTO, EduConnect',
        content: 'RemStack\'s remote development team delivered our school management system on time and within budget. Their outsourced model saved us 40% compared to local agencies.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/50 dark:bg-[#0f172a]/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        What Our <span className="gradient-text">Clients Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2"
                    >
                        Don't just take our word for it. Hear from businesses we've helped transform through outsourced development.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="section-divider mt-6"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5 md:p-6 rounded-xl shadow-sm hover:border-primary hover:shadow-md transition-all relative"
                        >
                            <Quote className="absolute top-3 right-3 md:top-4 md:right-4 w-5 h-5 md:w-6 md:h-6 text-primary/20" />
                            <div className="flex items-center gap-1 mb-2 md:mb-3">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm font-medium">"{testimonial.content}"</p>
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-primary/30"
                                />
                                <div>
                                    <p className="font-bold text-secondary dark:text-white text-xs md:text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;