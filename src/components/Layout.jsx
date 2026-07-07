import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#fdfdfb] relative">
            {/* Background image overlay for all pages and sections */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <img
                    src="/allpagesback.png"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.08] mix-blend-overlay"
                    aria-hidden="true"
                />
            </div>
            <Navbar />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
