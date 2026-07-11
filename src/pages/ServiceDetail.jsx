import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Code, Smartphone, Globe, Cloud, Server, Shield, HardDrive, Database, Camera } from 'lucide-react';

import SEO from '../components/SEO';

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
    'cloud-solutions': {
        icon: Cloud,
        title: 'Cloud Solutions',
        subtitle: 'Scalable Cloud Infrastructure & Migration',
        description: 'Leverage the power of cloud computing with our comprehensive cloud services. We help businesses migrate to the cloud, optimize infrastructure, and build scalable cloud-native applications on AWS, Azure, and GCP.',
        image: '/servicesandothers.png',
        features: [
            'Cloud Migration Strategy & Implementation',
            'AWS, Azure & GCP Architecture Design',
            'Serverless Application Development',
            'Cloud Security & Compliance',
            'Cost Optimization & Monitoring',
            'Disaster Recovery & Backup Solutions'
        ],
        benefits: [
            'Reduce infrastructure costs by up to 40%',
            'Auto-scaling for high availability',
            'Enhanced security and compliance',
            'Pay-as-you-go pricing model'
        ],
        process: [
            { step: 'Assessment', desc: 'Evaluate current infrastructure and requirements' },
            { step: 'Strategy', desc: 'Design cloud architecture and migration plan' },
            { step: 'Migration', desc: 'Execute migration with minimal downtime' },
            { step: 'Optimization', desc: 'Fine-tune performance and costs' },
            { step: 'Security', desc: 'Implement security best practices' },
            { step: 'Monitoring', desc: 'Set up monitoring and alerting systems' }
        ]
    },
    'devops-services': {
        icon: Server,
        title: 'DevOps Services',
        subtitle: 'Streamline Development with Automation',
        description: 'Accelerate your development lifecycle with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code, and automation tools to improve deployment frequency and system reliability.',
        image: '/servicesandothers.png',
        features: [
            'CI/CD Pipeline Implementation',
            'Infrastructure as Code (Terraform, CloudFormation)',
            'Containerization with Docker & Kubernetes',
            'Automated Testing & Deployment',
            'Monitoring & Logging Solutions',
            'Version Control & Collaboration Tools'
        ],
        benefits: [
            'Faster time to market',
            'Reduced deployment failures',
            'Improved team collaboration',
            'Automated repetitive tasks'
        ],
        process: [
            { step: 'Analysis', desc: 'Assess current development workflow' },
            { step: 'Design', desc: 'Design DevOps architecture and tools' },
            { step: 'Implementation', desc: 'Set up CI/CD pipelines and automation' },
            { step: 'Testing', desc: 'Test automation and deployment workflows' },
            { step: 'Training', desc: 'Train teams on new processes' },
            { step: 'Optimization', desc: 'Continuous improvement and scaling' }
        ]
    },
    'cybersecurity': {
        icon: Shield,
        title: 'Cybersecurity',
        subtitle: 'Comprehensive Security Solutions',
        description: 'Protect your business from evolving cyber threats with our comprehensive security services. We provide security audits, penetration testing, and robust security architecture to safeguard your digital assets.',
        image: '/servicesandothers.png',
        features: [
            'Security Audits & Vulnerability Assessment',
            'Penetration Testing & Ethical Hacking',
            'Security Architecture Design',
            'Incident Response & Recovery',
            'Compliance & Regulatory Standards',
            'Security Training & Awareness'
        ],
        benefits: [
            'Protect sensitive data and systems',
            'Prevent costly security breaches',
            'Ensure regulatory compliance',
            'Build customer trust and confidence'
        ],
        process: [
            { step: 'Assessment', desc: 'Identify security gaps and vulnerabilities' },
            { step: 'Planning', desc: 'Develop security strategy and roadmap' },
            { step: 'Implementation', desc: 'Deploy security tools and protocols' },
            { step: 'Testing', desc: 'Conduct penetration testing and audits' },
            { step: 'Training', desc: 'Train staff on security best practices' },
            { step: 'Monitoring', desc: 'Continuous security monitoring and updates' }
        ]
    },
    'server-installation': {
        icon: HardDrive,
        title: 'Server Installation & Setup',
        subtitle: 'Professional Server Deployment & Configuration',
        description: 'Get your infrastructure up and running with our professional server installation services. We handle everything from hardware setup to software configuration for on-premise and cloud environments.',
        image: '/servicesandothers.png',
        features: [
            'Physical Server Installation & Rack Mounting',
            'Operating System Installation & Configuration',
            'Network Setup & Security Configuration',
            'Virtualization Setup (VMware, Hyper-V)',
            'Database Server Installation & Tuning',
            'Backup & Disaster Recovery Setup'
        ],
        benefits: [
            'Professional setup by certified engineers',
            'Optimized performance from day one',
            'Secure configuration following best practices',
            'Ongoing monitoring and maintenance support'
        ],
        process: [
            { step: 'Assessment', desc: 'Evaluate infrastructure requirements and specifications' },
            { step: 'Planning', desc: 'Design server architecture and configuration plan' },
            { step: 'Installation', desc: 'Physical/virtual server setup and configuration' },
            { step: 'Testing', desc: 'Validate performance and security measures' },
            { step: 'Deployment', desc: 'Go-live with full system monitoring' },
            { step: 'Support', desc: 'Ongoing maintenance and optimization' }
        ]
    },
    'data-migration': {
        icon: Database,
        title: 'Data Migration Services',
        subtitle: 'Seamless Data Migration with Zero Data Loss',
        description: 'Migrate your data between systems with confidence. Our data migration services ensure zero data loss, minimal downtime, and complete data integrity throughout the entire migration process.',
        image: '/servicesandothers.png',
        features: [
            'Database Migration (SQL, NoSQL, Legacy Systems)',
            'Cloud-to-Cloud Data Migration',
            'On-Premise to Cloud Migration',
            'Data Cleansing & Validation',
            'ETL Pipeline Development',
            'Post-Migration Verification & Testing'
        ],
        benefits: [
            'Zero data loss guarantee',
            'Minimal system downtime',
            'Complete data integrity verification',
            'Comprehensive rollback planning'
        ],
        process: [
            { step: 'Discovery', desc: 'Analyze source data and target environment' },
            { step: 'Mapping', desc: 'Create detailed data mapping and transformation rules' },
            { step: 'Testing', desc: 'Run pilot migration with validation' },
            { step: 'Migration', desc: 'Execute full data migration' },
            { step: 'Verification', desc: 'Validate data integrity and completeness' },
            { step: 'Cutover', desc: 'Switch to new system with monitoring' }
        ]
    },
    'cctv-installation': {
        icon: Camera,
        title: 'CCTV Installation',
        subtitle: 'Complete Surveillance & Security Systems',
        description: 'Protect your property with professional CCTV installation services. We provide end-to-end surveillance solutions including HD cameras, NVR/DVR setup, remote monitoring, and maintenance support.',
        image: '/servicesandothers.png',
        features: [
            'HD & 4K Camera Installation',
            'NVR & DVR System Setup',
            'IP Camera Configuration',
            'Remote Viewing & Mobile Access Setup',
            'Motion Detection & Alert Systems',
            '24/7 Monitoring & Maintenance'
        ],
        benefits: [
            'Enhanced security and peace of mind',
            'Remote monitoring from anywhere',
            'High-quality video evidence',
            'Scalable system that grows with your needs'
        ],
        process: [
            { step: 'Assessment', desc: 'Evaluate site and security requirements' },
            { step: 'Design', desc: 'Design camera placement and system architecture' },
            { step: 'Installation', desc: 'Professional installation and wiring' },
            { step: 'Configuration', desc: 'System setup and network integration' },
            { step: 'Testing', desc: 'Test all cameras and remote access' },
            { step: 'Training', desc: 'Train staff on system operation' }
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
                <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
                <Link to="/" className="text-primary hover:text-primary-dark font-medium">Back to Home</Link>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="pt-24 pb-16 bg-[#ffffff]">
            <SEO
                title={`${service.title} - RemStack Technologies`}
                description={service.description}
                ogImage={service.image}
            />
            {/* Hero Section */}
            <section className="relative bg-[#ffffff] py-20 overflow-hidden">
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
                                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:from-primary-dark hover:to-accent-light transition-all shadow-lg"
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
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-auto" 
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/10', 'to-accent/10', 'p-12', 'flex', 'items-center', 'justify-center', 'min-h-[300px]');
                                        const fallback = document.createElement('div');
                                        fallback.className = 'text-center';
                                        fallback.innerHTML = `<div class="w-20 h-20 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-4"><svg class="w-10 h-10 text-primary" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><h3 class="text-xl font-bold text-gray-800">${service.title}</h3>`;
                                        e.target.parentElement.appendChild(fallback);
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#ffffff]">
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
                                className="flex items-start gap-4 bg-[#f0f0f0] p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                            >
                                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-[#ffffff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#f0f0f0] p-8 rounded-2xl border border-gray-100"
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
            <section className="py-20 bg-[#ffffff]">
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
                                className="relative bg-[#f0f0f0] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
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
                        className="inline-block px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;