import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
// import Partners from '../components/Partners';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TeamSection from '../components/sections/TeamSection';
import DigitalSolutions from '../components/sections/DigitalSolutions';
import TechStack from '../components/sections/TechStack';
import ProcessSection from '../components/sections/ProcessSection';
import StatsSection from '../components/sections/StatsSection';
import Testimonials from '../components/sections/Testimonials';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <SEO
                title="RemStack Technologies - Remote Software Development & Outsourced Projects"
                description="Your trusted remote software development partner. We deliver outsourced software projects with excellence, connecting global businesses with top-tier talent."
            />
            
            <Hero />
            <Services />
            {/* <Partners /> */}
            <WhyChooseUs />
            <DigitalSolutions />
            <TechStack />
            <ProcessSection />
            <StatsSection />
            <Testimonials />
            <FAQSection />
            <CTASection />
            <TeamSection />
        </div>
    );
};

export default Home;