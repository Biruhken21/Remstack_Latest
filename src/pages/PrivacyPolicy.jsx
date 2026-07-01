import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-gray-900 mb-8"
                >
                    Privacy Policy
                </motion.h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>Last updated: February 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                        <p>Welcome to RemStack Technologies. We respect your privacy and are committed to protecting your personal data.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                        <p>We may collect information you provide directly to us through contact forms, quote requests, and communication channels.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                        <p>We use your information to provide our services, respond to inquiries, and improve our website experience.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                        <p>We implement appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at support@remstack.tech.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
