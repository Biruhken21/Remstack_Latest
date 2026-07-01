import { motion } from 'framer-motion';
import { Target, Users, Award, Code, Rocket, Shield, Zap, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const About = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-gray-50 pt-20">
            <SEO
                title="About RemStack Technologies - Our Vision & Mission"
                description="Learn about the journey of RemStack Technologies, our commitment to excellence, innovation, and how we empower businesses through technology in Ethiopia."
            />
            {/* Hero Section */}
            <section className="bg-secondary py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        {t(translations, 'about.title')}
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3 }}
                        className="section-divider mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-xl leading-relaxed"
                    >
                        {t(translations, 'about.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Story</span>
                                <h2 className="text-4xl font-black text-secondary mt-2 mb-4">From Vision to Reality</h2>
                                <div className="section-divider mb-6"></div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    RemStack Technologies was founded by <span className="font-bold text-secondary">Biruhken Ayana</span>, a highly motivated and creative Software Engineer, along with two dedicated co-founders. What began as a remote software development team has now transformed into a thriving office-based operation, bringing together talented developers, designers, and strategists.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    Our journey reached a significant milestone when we participated in the startup competition at Dire Dawa University's Business and Technology Incubation Center, where we earned certification for our innovative approach. We have successfully competed in the Biruh Ethiopia startup competition, receiving valuable feedback and insights that have shaped our vision.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    With tenacity and dedication to digital solutions, we are now preparing to launch our software startup soon. Our team's passion for innovation drives us to create transformative technology solutions that empower businesses to thrive in the digital age.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-2">Our Mission</h4>
                                        <p className="text-sm text-gray-600">To empower Ethiopian businesses with world-class software solutions, bridging the gap between innovative technology and practical business needs through custom development, strategic consulting, and dedicated support.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-2">Our Vision</h4>
                                        <p className="text-sm text-gray-600">To be the leading technology partner for African enterprises, fostering a digital-first ecosystem that drives innovation, creates opportunities, and positions Ethiopia at the forefront of technological advancement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/about-remstack.png"
                                    className="w-full h-[500px] object-cover"
                                    alt="RemStack Team"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-2xl">Building the Future</p>
                                        <p className="text-white/70">One Solution at a Time</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Why Us</span>
                        <h2 className="text-4xl font-black text-secondary mt-2 mb-4">Why Partner With RemStack?</h2>
                        <div className="section-divider"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-6">
                            We bring together technical expertise, local market knowledge, and a commitment to your success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Code,
                                title: 'Technical Excellence',
                                desc: 'Expert developers using modern frameworks and best practices to build robust solutions.'
                            },
                            {
                                icon: Rocket,
                                title: 'Rapid Delivery',
                                desc: 'Agile development process ensuring fast turnaround without compromising quality.'
                            },
                            {
                                icon: Shield,
                                title: 'Reliable Support',
                                desc: 'Dedicated support team available to assist with maintenance and updates.'
                            },
                            {
                                icon: Globe,
                                title: 'Local & Global',
                                desc: 'Based in Addis Ababa with global standards and international best practices.'
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                                    <feature.icon className="w-7 h-7 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Values</span>
                        <h2 className="text-4xl font-black text-secondary mt-2 mb-4">{t(translations, 'about.principlesTitle')}</h2>
                        <div className="section-divider"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-6">
                            Our guiding values that shape everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Lightbulb,
                                title: t(translations, 'about.innovTitle'),
                                desc: t(translations, 'about.innovDesc'),
                                gradient: 'from-amber-500 to-orange-500'
                            },
                            {
                                icon: Award,
                                title: t(translations, 'about.excellTitle'),
                                desc: t(translations, 'about.excellDesc'),
                                gradient: 'from-blue-500 to-indigo-500'
                            },
                            {
                                icon: Zap,
                                title: t(translations, 'about.sustainTitle'),
                                desc: t(translations, 'about.sustainDesc'),
                                gradient: 'from-emerald-500 to-teal-500'
                            }
                        ].map((principle, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-10 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all group border border-gray-100"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${principle.gradient} rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all`}>
                                    <principle.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-4">{principle.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
                    <p className="text-white/80 text-xl mb-10">
                        Let's discuss how RemStack Technologies can help bring your vision to life.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary rounded-xl font-semibold text-base hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
                    >
                        Start a Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;