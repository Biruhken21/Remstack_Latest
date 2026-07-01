import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Code, Smartphone, Globe, Rocket, Palette, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const serviceData = {
    'custom-software': {
        icon: Code,
        title: 'Custom Software Development',
        subtitle: 'Tailored Solutions for Unique Business Challenges',
        description: 'We build bespoke software solutions designed specifically for your business needs. From enterprise applications to industry-specific tools, our custom development services ensure you get exactly what you need.',
        image: '/service-custom-software.png',
        features: [
            'Enterprise Resource Planning (ERP) Systems',
            'Customer Relationship Management (CRM) Tools',
            'Inventory Management Systems',
            'Custom APIs and Integrations',
            'Business Process Automation',
            'Legacy System Modernization'
        ],
        benefits: [
            'Scalable architecture that grows with your business',
            'Full ownership of the source code',
            'Seamless integration with existing systems',
            'Ongoing support and maintenance'
        ],
        process: [
            { step: 'Discovery', desc: 'We analyze your requirements and business processes' },
            { step: 'Design', desc: 'Creating architecture and user experience design' },
            { step: 'Development', desc: 'Agile development with regular updates' },
            { step: 'Testing', desc: 'Comprehensive QA and user acceptance testing' },
            { step: 'Deployment', desc: 'Smooth rollout and training' },
            { step: 'Support', desc: 'Continuous monitoring and optimization' }
        ]
    },
    'mobile-apps': {
        icon: Smartphone,
        title: 'Mobile App Development',
        subtitle: 'Native & Cross-Platform Mobile Solutions',
        description: 'Create engaging mobile experiences for iOS and Android. We develop high-performance mobile applications using Flutter, React Native, and native technologies to reach your customers wherever they are.',
        image: '/service-mobile-apps.png',
        features: [
            'iOS (Swift) and Android (Kotlin) Native Apps',
            'Cross-Platform Development with Flutter',
            'React Native Applications',
            'Progressive Web Apps (PWA)',
            'Mobile UI/UX Design',
            'App Store Deployment & Optimization'
        ],
        benefits: [
            'Reach billions of mobile users',
            'Offline-first capabilities',
            'Push notifications and real-time updates',
            'Seamless integration with device features'
        ],
        process: [
            { step: 'Strategy', desc: 'Define app goals and target audience' },
            { step: 'Wireframing', desc: 'Create app flow and user journeys' },
            { step: 'UI/UX Design', desc: 'Pixel-perfect designs for all screen sizes' },
            { step: 'Development', desc: 'Build with modern frameworks' },
            { step: 'Testing', desc: 'Test on real devices and simulators' },
            { step: 'Launch', desc: 'Deploy to App Store and Google Play' }
        ]
    },
    'web-development': {
        icon: Globe,
        title: 'Website Development',
        subtitle: 'Responsive, Fast, and SEO-Optimized Websites',
        description: 'Build a powerful online presence with modern, responsive websites. We create everything from landing pages to complex web applications using the latest technologies like React, Next.js, and Node.js.',
        image: '/service-web-dev.png',
        features: [
            'Responsive Website Design',
            'E-Commerce Platforms (Shopify, WooCommerce)',
            'Content Management Systems (WordPress, Strapi)',
            'Single Page Applications (React, Vue)',
            'Server-Side Rendering with Next.js',
            'Web Performance Optimization'
        ],
        benefits: [
            'Mobile-first responsive design',
            'SEO optimization for better visibility',
            'Fast loading times and performance',
            'Secure and scalable infrastructure'
        ],
        process: [
            { step: 'Planning', desc: 'Sitemap and content strategy' },
            { step: 'Design', desc: 'Visual design and branding' },
            { step: 'Development', desc: 'Clean, maintainable code' },
            { step: 'Content', desc: 'Content creation and migration' },
            { step: 'Testing', desc: 'Cross-browser and device testing' },
            { step: 'Launch', desc: 'Deployment and monitoring' }
        ]
    },
    'startup-consulting': {
        icon: Rocket,
        title: 'Startup Consulting',
        subtitle: 'Strategic Guidance from MVP to Scale',
        description: 'Navigate the startup journey with expert tech consulting. We help startups validate ideas, build MVPs, and scale efficiently with the right technology choices and development strategies.',
        image: '/service-startup-consulting.png',
        features: [
            'Tech Stack Recommendations',
            'MVP Development Strategy',
            'Product-Market Fit Analysis',
            'Scalability Planning',
            'Team Building & Hiring Guidance',
            'Investor Pitch Deck Review'
        ],
        benefits: [
            'Avoid costly technical mistakes',
            'Faster time to market',
            'Expert guidance on technology decisions',
            'Access to development best practices'
        ],
        process: [
            { step: 'Assessment', desc: 'Evaluate your current stage and goals' },
            { step: 'Strategy', desc: 'Define roadmap and milestones' },
            { step: 'Planning', desc: 'Tech stack and architecture planning' },
            { step: 'Execution', desc: 'Build MVP or improve existing product' },
            { step: 'Growth', desc: 'Scale infrastructure and team' },
            { step: 'Optimization', desc: 'Continuous improvement' }
        ]
    },
    'graphics-design': {
        icon: Palette,
        title: 'Graphics Solution',
        subtitle: 'Visual Identity & Creative Design',
        description: 'Create stunning visual assets that make your brand memorable. From logo design to complete brand identities, we deliver creative solutions that resonate with your audience.',
        image: '/service-web-dev.png', // Placeholder
        features: [
            'Logo Design & Branding',
            'UI/UX Design for Web & Mobile',
            'Marketing Collateral Design',
            'Social Media Graphics',
            'Infographics & Presentations',
            'Print Design'
        ],
        benefits: [
            'Professional brand identity',
            'Consistent visual language',
            'High-quality design assets',
            'Brand guidelines documentation'
        ],
        process: [
            { step: 'Brief', desc: 'Understand your brand and vision' },
            { step: 'Research', desc: 'Market and competitor analysis' },
            { step: 'Concepts', desc: 'Create multiple design directions' },
            { step: 'Refinement', desc: 'Iterate based on feedback' },
            { step: 'Delivery', desc: 'Final files in all formats' },
            { step: 'Guidelines', desc: 'Brand usage documentation' }
        ]
    },
    'digital-marketing': {
        icon: BarChart,
        title: 'Digital Marketing',
        subtitle: 'Data-Driven Marketing That Delivers Results',
        description: 'Grow your online presence and convert leads into customers with strategic digital marketing. We combine SEO, social media, content marketing, and paid advertising for maximum ROI.',
        image: '/service-custom-software.png', // Placeholder
        features: [
            'Search Engine Optimization (SEO)',
            'Social Media Marketing',
            'Content Marketing Strategy',
            'Pay-Per-Click (PPC) Advertising',
            'Email Marketing Campaigns',
            'Analytics & Reporting'
        ],
        benefits: [
            'Increased brand visibility',
            'Higher conversion rates',
            'Measurable ROI',
            'Targeted audience reach'
        ],
        process: [
            { step: 'Audit', desc: 'Analyze current digital presence' },
            { step: 'Strategy', desc: 'Define goals and channels' },
            { step: 'Setup', desc: 'Implement tracking and tools' },
            { step: 'Campaign', desc: 'Launch marketing campaigns' },
            { step: 'Optimize', desc: 'A/B testing and refinement' },
            { step: 'Report', desc: 'Monthly performance reviews' }
        ]
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceData[id];

    if (!service) {
        return (
            <div className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Link to="/" className="text-primary hover:text-primary-dark">Back to Home</Link>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="pt-24 pb-16 bg-white">
            <SEO
                title={`${service.title} - RemStack Technologies`}
                description={service.description}
                ogImage={service.image}
            />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors font-medium">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6`}>
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h1 className="text-5xl font-black text-gray-900 mb-4">{service.title}</h1>
                            <p className="text-2xl text-primary font-medium mb-6">{service.subtitle}</p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Get Started
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img src={service.image} alt={service.title} className="w-full h-auto" loading="lazy" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                            >
                                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700">{benefit}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-2">{item.step}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
