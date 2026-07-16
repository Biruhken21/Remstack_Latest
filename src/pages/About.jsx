import { motion } from 'framer-motion';
import { Target, Users, Award, Code, Rocket, Shield, Zap, Globe, Lightbulb, ArrowRight, Wifi, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const About = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-gray-50 pt-20">
            <SEO
                title="About RemStack Technologies - Remote IT Team"
                description="RemStack Technologies is a remote-first IT and software development team based in Ethiopia. We build digital solutions for global businesses with top-tier remote talent."
            />
            {/* Hero Section */}
            <section className="bg-secondary py-12 sm:py-16 md:py-20 lg:py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-6"
                    >
                        {t(translations, 'about.title')}
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3 }}
                        className="section-divider mb-4 sm:mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
                    >
                        {t(translations, 'about.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Our Story - Remote-First Team */}
            <section className="py-8 sm:py-12 md:py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">Our Story</span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mt-1 sm:mt-2 mb-2 sm:mb-4">A Remote Team with Global Impact</h2>
                                <div className="section-divider mb-4 sm:mb-6"></div>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-4">
                                    RemStack Technologies was founded by <span className="font-bold text-secondary">Biruhken Ayana</span>, a passionate and creative Software Engineer, alongside two dedicated co-founders. We operate as a <span className="font-bold text-primary">remote-first IT and software solutions team</span> — connecting global businesses with top Ethiopian tech talent without the limitations of geography.
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-4">
                                    Our remote model allows us to deliver high-quality software development, IT consulting, and digital transformation services to clients worldwide with flexibility, speed, and cost-effectiveness. We are not bound by office walls — our workspace is wherever innovation happens.
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                    While we currently operate as a fully remote team, <span className="font-bold text-secondary">we are actively planning to launch a physical office</span> in the near future to better serve our growing client base and expand our local presence in Addis Ababa. Our goal is to establish a world-class technology hub that will further strengthen our ability to deliver exceptional solutions.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:shadow-md transition-all">
                                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1 sm:mb-2 text-sm md:text-base">Remote-First, Global Reach</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">We build world-class software solutions from Ethiopia for clients around the globe. Our remote setup means faster delivery, lower costs, and access to top-tier talent without geographic barriers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:shadow-md transition-all">
                                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1 sm:mb-2 text-sm md:text-base">Future Plans: Office Launch</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">We are preparing to launch a physical office in Addis Ababa, Ethiopia to strengthen our local presence, facilitate client meetings, and create a collaborative innovation hub for our growing team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-lg sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl"
                            >
                                <img
                                    src="/about-remstack.png"
                                    className="w-full h-56 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                                    alt="RemStack Team - Remote IT Solutions"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-3 sm:p-4 md:p-6 lg:p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-lg sm:text-xl md:text-2xl">Remote Teams, Global Impact</p>
                                        <p className="text-white/70 text-xs sm:text-sm">Based in Ethiopia · Serving the World</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">Why Us</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mt-1 sm:mt-2 mb-2 sm:mb-4">Why Partner With RemStack?</h2>
                        <div className="section-divider"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-6 px-2">
                            We combine Ethiopian tech talent with global standards to deliver exceptional remote IT solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
                                title: 'Global Standards',
                                desc: 'Based in Ethiopia with international best practices and competitive global pricing.'
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:border-primary hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-sm font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where We Serve */}
            <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">Our Reach</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mt-1 sm:mt-2 mb-2 sm:mb-4">Where We Serve</h2>
                        <div className="section-divider"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-6 px-2">
                            Proudly delivering remote IT and software solutions across Africa with a growing footprint.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                        {[
                            { 
                                country: 'Ethiopia', 
                                flag: '🇪🇹', 
                                capital: 'Addis Ababa',
                                desc: 'Our headquarters and primary talent hub. Home to our founding team and core operations.',
                                color: 'from-green-500 to-yellow-500',
                                highlight: 'Headquarters'
                            },
                            { 
                                country: 'South Africa', 
                                flag: '🇿🇦', 
                                capital: 'Johannesburg',
                                desc: 'Expanding our client presence and partnerships in the Southern African market.',
                                color: 'from-red-500 to-blue-500',
                                highlight: 'Expanding'
                            },
                            { 
                                country: 'Kenya', 
                                flag: '🇰🇪', 
                                capital: 'Nairobi',
                                desc: 'Building strategic partnerships and client relationships in East Africa\'s tech hub.',
                                color: 'from-green-500 to-red-500',
                                highlight: 'Growing'
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:border-primary hover:shadow-lg transition-all group"
                            >
                                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                                <div className="p-5 sm:p-6 md:p-8 text-center">
                                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{item.flag}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-1">{item.country}</h3>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{item.capital}</p>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{item.desc}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                        i === 0 
                                            ? 'bg-primary/10 text-primary' 
                                            : i === 1 
                                                ? 'bg-amber-50 text-amber-600' 
                                                : 'bg-emerald-50 text-emerald-600'
                                    }`}>
                                        {item.highlight}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:mt-10 md:mt-12">
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                            🌍 Actively exploring new markets across Africa and beyond. 
                            <Link to="/contact" className="text-primary font-semibold hover:underline ml-1">Contact us</Link> to discuss opportunities in your region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-16 bg-white">
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
                                className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-md hover:border-primary hover:shadow-lg transition-all text-center"
                            >
                                <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br ${principle.gradient} rounded-lg sm:rounded-xl shadow-md flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4`}>
                                    <principle.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1.5 sm:mb-2 md:mb-3">{principle.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm font-medium">{principle.desc}</p>
                            </motion.div>
                        ))}                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 sm:py-12 md:py-16 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Ready to Work Together?</h2>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 px-2">
                        Let's discuss how RemStack Technologies can help bring your vision to life — remotely or on-site.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-white text-primary rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
                    >
                        Start a Project
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;