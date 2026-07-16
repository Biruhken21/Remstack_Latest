import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SEO from '../components/SEO';

const Contact = () => {
    const { t } = useLanguage();
    const geolocationSupported = useMemo(() => typeof navigator !== 'undefined' && !!navigator.geolocation, []);
    const [location, setLocation] = useState(null);
    const [geoError, setGeoError] = useState(geolocationSupported ? null : 'Geolocation is not supported in this browser.');

    useEffect(() => {
        if (!geolocationSupported) return;

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setLocation(`${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`);
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    setGeoError('Location permission denied.');
                } else {
                    setGeoError('Unable to determine your location.');
                }
            },
            { timeout: 10000 }
        );
    }, [geolocationSupported]);

    return (
        <div className="bg-gray-50 pt-20">
            <SEO
                title="Contact RemStack Technologies - Start Your Project"
                description="Have a project in mind? Reach out to RemStack Technologies for a free consultation. We're here to help you scale with custom software solutions."
            />
            {/* Header */}
            <div className="relative bg-secondary py-16 sm:py-20 md:py-24 mb-12 sm:mb-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6"
                    >
                        {t(translations, 'contact.title')}
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3 }}
                        className="section-divider mb-4 sm:mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        {t(translations, 'contact.subtitle')}
                    </motion.p>
                </div>
            </div>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 -mt-8 sm:-mt-16 md:-mt-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border-2 border-gray-200 p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-2xl shadow-lg">
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-secondary mb-1.5 md:mb-2">{t(translations, 'contact.formTitle')}</h2>
                                <p className="text-gray-500 text-xs sm:text-sm">{t(translations, 'contact.formSubtitle')}</p>
                            </div>

                            <form action="https://formsubmit.co/remstackinfo@gmail.com" method="POST" className="space-y-4 sm:space-y-5">
                                <input type="hidden" name="_subject" value="New Business Inquiry from Website" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 sm:mb-1.5 uppercase tracking-wider">{t(translations, 'contact.fullName')}</label>
                                        <input
                                            type="text"
                                            name="Full Name"
                                            required
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-xs sm:text-sm"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 sm:mb-1.5 uppercase tracking-wider">{t(translations, 'contact.phone')}</label>
                                        <input
                                            type="tel"
                                            name="Phone Number"
                                            required
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-xs sm:text-sm"
                                            placeholder="+251 ..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{t(translations, 'contact.subject')}</label>
                                    <select
                                        name="Project Type"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="" selected disabled>Select project type</option>
                                        <option value="Custom Software">Custom Software</option>
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Startup Consulting">Startup Consulting</option>
                                        <option value="Graphics Design">Graphics Design</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Company Name (Optional)</label>
                                    <input
                                        type="text"
                                        name="Company Name"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        placeholder="Your company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{t(translations, 'contact.message')}</label>
                                    <textarea
                                        name="Message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-base hover:from-primary-dark hover:to-accent-light transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>{t(translations, 'contact.submit')}</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                            <h3 className="font-bold text-secondary mb-6">{t(translations, 'contact.detailsTitle')}</h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{t(translations, 'contact.callUs')}</p>
                                        <p className="text-sm font-semibold text-secondary">+251 946 038 646</p>
                                        <p className="text-sm font-semibold text-secondary">0953 632 216</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{t(translations, 'contact.emailUs')}</p>
                                        <a href="mailto:remstackinfo@gmail.com" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
                                            remstackinfo@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{t(translations, 'contact.visitUs')}</p>
                                        <p className="text-sm font-semibold text-secondary">Bole Gerji</p>
                                        <p className="text-sm font-semibold text-secondary">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {(location || geoError) && (
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-black text-secondary uppercase tracking-tight">Office proximity</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">Your browser location is:</p>
                                {location ? (
                                    <p className="text-sm font-semibold text-secondary">{location}</p>
                                ) : (
                                    <p className="text-sm font-semibold text-secondary">{geoError}</p>
                                )}
                            </div>
                        )}

                        {/* Business Hours */}
                        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="text-sm font-black text-secondary uppercase tracking-tight">{t(translations, 'contact.chatSupport')}</span>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Monday — Friday</span>
                                    <span className="font-semibold text-secondary">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold text-secondary">9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-secondary">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;