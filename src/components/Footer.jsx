import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import Logo from './Logo';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                    {/* Company Info */}
                    <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1 col-span-2">
                        <Link to="/" className="flex items-center space-x-2">
                            <Logo className="h-10 md:h-14" isDarkBg={true} />
                        </Link>
                        <p className="text-sm md:text-sm leading-relaxed text-gray-400">
                            {t(translations, 'footer.desc')}
                        </p>
                        <div className="flex space-x-3 md:space-x-3">
                            <a href="#" className="w-10 h-10 md:w-9 md:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4 md:w-4 md:h-4" /></a>
                            <a href="#" className="w-10 h-10 md:w-9 md:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4 md:w-4 md:h-4" /></a>
                            <a href="#" className="w-10 h-10 md:w-9 md:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4 md:w-4 md:h-4" /></a>
                            <a href="#" className="w-10 h-10 md:w-9 md:h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Linkedin"><Linkedin className="w-4 h-4 md:w-4 md:h-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-[10px] md:text-xs">{t(translations, 'footer.quickLinks')}</h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li><Link to="/" className="text-xs md:text-sm hover:text-primary transition-colors flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Home</Link></li>
                            <li><Link to="/about" className="text-xs md:text-sm hover:text-primary transition-colors flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> About Us</Link></li>
                            <li><Link to="/#services" className="text-xs md:text-sm hover:text-primary transition-colors flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Services</Link></li>
                            <li><Link to="/portfolio" className="text-xs md:text-sm hover:text-primary transition-colors flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Portfolio</Link></li>
                            <li><Link to="/contact" className="text-xs md:text-sm hover:text-primary transition-colors flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-[10px] md:text-xs">{t(translations, 'footer.productCats')}</h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li><Link to="/services/custom-software" className="text-xs md:text-sm hover:text-primary transition-colors">Custom Software</Link></li>
                            <li><Link to="/services/mobile-apps" className="text-xs md:text-sm hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/services/web-development" className="text-xs md:text-sm hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services/devops-services" className="text-xs md:text-sm hover:text-primary transition-colors">devops-services</Link></li>
                            <li><Link to="/services/cybersecurity" className="text-xs md:text-sm hover:text-primary transition-colors">cybersecurity</Link></li>
                            <li><Link to="/services/cloud-solutions" className="text-xs md:text-sm hover:text-primary transition-colors">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-[10px] md:text-xs">{t(translations, 'footer.contactUs')}</h3>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 shrink-0" />
                                <div className="text-xs md:text-sm">
                                    <p>+251 946 038 646</p>
                                    <p>0953 632 216</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                                <a href="mailto:remstackinfo@gmail.com" className="text-xs md:text-sm hover:text-primary transition-colors">remstackinfo@gmail.com</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 shrink-0" />
                                <span className="text-xs md:text-sm">Bole, Addis Ababa, Ethiopia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] md:text-xs text-gray-500">
                        &copy; {year} RemStack Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-4 md:space-x-6">
                        <Link to="/privacy" className="text-[10px] md:text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-[10px] md:text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;