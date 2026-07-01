import React, { useState } from 'react';
import { ShieldCheck, Zap, Code2, Rocket, Search, Layers, Server, Settings2, Users, TrendingUp, Award, Smartphone, Globe, Palette, BarChart, ChevronDown, Star, Quote, CheckCircle, Monitor, Cloud, Cpu, Database, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SEO from '../components/SEO';

const techStackItems = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'Laravel', icon: '⚡', category: 'Backend' },
    { name: 'Flutter', icon: '📱', category: 'Mobile' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Figma', icon: '🎯', category: 'Design' },
];

const processes = [
    { step: '01', title: 'Discovery & Research', desc: 'We dive deep into your business goals, target audience, and market landscape to define the perfect solution strategy.', icon: Search, color: 'from-blue-500 to-blue-600' },
    { step: '02', title: 'UX/UI Strategy', desc: 'Creating intuitive user experiences with wireframes, prototypes, and visual designs that align with your brand identity.', icon: Layers, color: 'from-purple-500 to-purple-600' },
    { step: '03', title: 'Agile Development', desc: 'Rapid, iterative development using modern tech stacks with bi-weekly sprints and continuous integration.', icon: Code2, color: 'from-indigo-500 to-indigo-600' },
    { step: '04', title: 'Quality Assurance', desc: 'Comprehensive testing including unit, integration, and end-to-end tests to ensure bullet-proof performance.', icon: ShieldCheck, color: 'from-emerald-500 to-emerald-600' },
    { step: '05', title: 'Deployment & Launch', desc: 'Smooth deployment to production with zero-downtime strategies, monitoring, and performance optimization.', icon: Rocket, color: 'from-orange-500 to-orange-600' },
];

const testimonials = [
    {
        name: 'Abebech Tesfaye',
        role: 'CEO, EthioMart',
        content: 'RemStack transformed our e-commerce platform. Our sales increased by 200% in just 3 months. Their team is incredibly professional and responsive.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    },
    {
        name: 'Dawit Haile',
        role: 'Founder, GreenTech Solutions',
        content: 'The mobile app they built for us is flawless. Fast, intuitive, and our users love it. RemStack truly understands user experience.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
        name: 'Sara Mohammed',
        role: 'CTO, EduConnect',
        content: 'Working with RemStack was a game-changer. They delivered our school management system on time and within budget. Highly recommended!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
];

const faqs = [
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
    {
        q: 'How do you handle project communication?',
        a: 'We use agile methodology with weekly updates, Slack communication, and project management tools like Trello/Jira. You get full transparency and can track progress in real-time.'
    },
    {
        q: 'What is your pricing model?',
        a: 'We offer flexible pricing models including fixed-price for well-defined projects and hourly rates for ongoing work. We provide detailed proposals with transparent pricing before any project begins.'
    },
];

const digitalSolutions = [
    { title: 'Web Applications', desc: 'Scalable, responsive web apps built with modern frameworks for optimal performance.', icon: Monitor, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android that engage users.', icon: Smartphone, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { title: 'Cloud Solutions', desc: 'Cloud-native architectures using AWS, Azure, and GCP for scalability and reliability.', icon: Cloud, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
    { title: 'AI & Data Analytics', desc: 'Leverage machine learning and data analytics to gain actionable business insights.', icon: Cpu, color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { title: 'API Integration', desc: 'Seamless third-party API integrations to extend your software capabilities.', icon: Database, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { title: 'UI/UX Design', desc: 'User-centered design that creates intuitive, engaging, and beautiful interfaces.', icon: Palette, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
];

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="overflow-hidden pt-15">
            <SEO
                title="RemStack Technologies - Custom Software & Digital Transformation"
                description="Your trusted partner in building innovative software solutions that transform businesses and drive growth in Ethiopia and beyond."
            />
            <Hero />

            {/* Services Section */}
            <Services />

            {/* What Digital Solutions Your Business Need? */}
            <section className="py-24 bg-white dark:bg-[#1a2332] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30"></div>
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
                        {digitalSolutions.map((solution, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 ${solution.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <solution.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">{solution.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{solution.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack - Infinite Scroll */}
            <section className="py-20 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                    >
                        Technology Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-4"
                    >
                        Built With <span className="gradient-text">Modern Tech</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        We leverage cutting-edge technologies to build scalable, performant, and future-ready solutions.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* First row */}
                    <div className="flex animate-scroll-tech gap-6 py-4">
                        {[...techStackItems, ...techStackItems].map((tech, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all whitespace-nowrap"
                            >
                                <span className="text-2xl">{tech.icon}</span>
                                <span className="font-semibold text-gray-800 dark:text-gray-200">{tech.name}</span>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{tech.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrated Process - Redesigned */}
            <section className="py-24 bg-white dark:bg-[#1a2332] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30"></div>
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

            {/* Stats Section */}
            <section className="py-20 animated-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '20+', label: 'Projects Delivered', icon: Code2 },
                            { number: '12+', label: 'Happy Clients', icon: Users },
                            { number: '4+', label: 'Years Experience', icon: Award },
                            { number: '100%', label: 'Client Satisfaction', icon: TrendingUp },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center text-white"
                            >
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <stat.icon className="w-7 h-7" />
                                </div>
                                <p className="text-4xl font-black mb-1">{stat.number}</p>
                                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                        >
                            Testimonials
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-4"
                        >
                            What Our <span className="gradient-text">Clients Say</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                        >
                            Don't just take our word for it. Hear from the businesses we've helped transform.
                        </motion.p>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="section-divider mt-6"
                        ></motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative"
                            >
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                                    />
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white dark:bg-[#1a2332] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-wider uppercase mb-2 block text-sm"
                        >
                            FAQ
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-4"
                        >
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-500 dark:text-gray-400"
                        >
                            Everything you need to know about working with us.
                        </motion.p>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="section-divider mt-6"
                        ></motion.div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-secondary dark:text-white pr-4">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
                                            <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-secondary dark:bg-[#0a0f1a] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-5"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Partner with RemStack Technologies to build scalable, innovative solutions that drive growth and propel your business forward.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/contact"
                            className="px-10 py-4 bg-primary text-white rounded-xl font-semibold text-base hover:bg-primary-dark transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl inline-flex items-center gap-2"
                        >
                            Start Your Project
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-base hover:bg-white/20 transition-all"
                        >
                            View Our Work
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;