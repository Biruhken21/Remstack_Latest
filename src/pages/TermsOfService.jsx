import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 sm:mb-8"
                >
                    Terms of Service
                </motion.h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>Last updated: February 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
                        <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on RemStack Technologies' website for personal, non-commercial transitory viewing only.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Disclaimer</h2>
                        <p>The materials on RemStack Technologies' website are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Governing Law</h2>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of Ethiopia.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
