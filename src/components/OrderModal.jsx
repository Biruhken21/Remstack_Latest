import React, { useState } from 'react';
import { X, Send, CheckCircle, User, Phone, Mail, Package, FileText, Building, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const OrderModal = ({ isOpen, onClose, product }) => {
    const { t } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isPaperBag = product?.type === 'Paper Bag' || product?.category === 'Paper Bag';
    const isNonWovenBag = product?.type === 'Non-Woven Bag' || product?.category === 'Non-Woven Bag';
    const hasSize = isPaperBag || isNonWovenBag;

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-primary-dark p-5 flex flex-col items-center text-center text-white relative">
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-2 hover:bg-white/10 rounded-md transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <Package className="w-10 h-10 mb-2 opacity-90" />
                        <h2 className="text-xl font-black">{t(translations, 'modal.title')}</h2>
                        <p className="text-white/80 text-sm mt-1 font-medium">{product?.name}</p>
                    </div>

                    <div className="p-5 max-h-[70vh] overflow-y-auto">
                        {!isSubmitted ? (
                            <form
                                action="https://formsubmit.co/remstackinfo@gmail.com"
                                method="POST"
                                className="space-y-5"
                            >
                                {/* FormSubmit.co Hidden Fields */}
                                <input type="hidden" name="_subject" value={`New Order Request: ${product?.name}`} />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                                <input type="hidden" name="Product Name" value={product?.name} />
                                <input type="hidden" name="category" value={product?.category} />

                                {/* Customer Information */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center space-x-2">
                                        <User className="w-4 h-4" />
                                        <span>{t(translations, 'modal.customerInfo')}</span>
                                    </h3>

                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            name="Full Name"
                                            required
                                            placeholder={t(translations, 'modal.fullNamePlaceholder')}
                                            className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            name="Company Name"
                                            placeholder="Company Name (Optional)"
                                            className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="Phone Number"
                                            required
                                            placeholder={t(translations, 'modal.phonePlaceholder')}
                                            className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder={t(translations, 'modal.emailPlaceholder')}
                                            className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <textarea
                                            name="Delivery Address"
                                            rows="2"
                                            required
                                            placeholder="Delivery Address *"
                                            className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Order Details */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center space-x-2">
                                        <Package className="w-4 h-4" />
                                        <span>{t(translations, 'modal.customization')}</span>
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="col-span-2">
                                            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">{t(translations, 'modal.category')}</label>
                                            <select
                                                name="category"
                                                defaultValue={product?.category || ''}
                                                className="w-full px-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>{t(translations, 'modal.selectCategory')}</option>
                                                <option value="Digital Marketing">{t(translations, 'categories.digitalMarketing')}</option>
                                                <option value="Logo Design">{t(translations, 'categories.logoDesign')}</option>
                                                <option value="Website Development">{t(translations, 'categories.webDev')}</option>
                                                <option value="Paper Bag">{t(translations, 'categories.paperBag')}</option>
                                                <option value="Non-Woven Bag">{t(translations, 'categories.nonWovenBag')}</option>
                                                <option value="Raw Material">{t(translations, 'categories.rawMaterial')}</option>
                                                <option value="Machinery">{t(translations, 'categories.machinery')}</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                name="Quantity"
                                                defaultValue="100"
                                                min="1"
                                                placeholder={t(translations, 'modal.quantity')}
                                                className="w-full px-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                            />
                                        </div>
                                        {hasSize && (
                                            <select
                                                name="Size Selection"
                                                className="w-full px-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="Small">Small</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                            </select>
                                        )}
                                    </div>

                                    {(isPaperBag || isNonWovenBag) && (
                                        <input
                                            type="text"
                                            name="Options"
                                            placeholder="Color or Material"
                                            className="w-full px-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        />
                                    )}

                                    <div className="relative">
                                        <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <textarea
                                            name="Custom Requirements"
                                            rows="3"
                                            placeholder="Special requirements (Logo, Branding, etc.)"
                                            className="w-full pl-10 pr-3 py-2.5 bg-white border-2 border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col space-y-2 pt-2">
                                    <button
                                        type="submit"
                                        className="w-full px-5 py-3 bg-gradient-to-r from-primary to-accent text-white rounded font-bold text-sm hover:from-primary-dark hover:to-accent-light transition-all flex items-center justify-center space-x-2 shadow-lg active:scale-[0.98]"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{t(translations, 'modal.submit')}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="w-full px-5 py-2.5 bg-gray-100 text-gray-600 rounded font-semibold text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        {t(translations, 'modal.cancel')}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="py-8 text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-2">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t(translations, 'modal.successTitle')}</h3>
                                <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                                    {t(translations, 'modal.successDesc')}
                                </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded font-bold text-sm hover:from-primary-dark hover:to-accent-light transition-all"
                                    >
                                        {t(translations, 'modal.close')}
                                    </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default OrderModal;
