import React from 'react';
import HeroSection from './HeroSection';
import OfferSection from './OfferSection';
import Testimonials from './Testimonials';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>      
        <HeroSection />
        <OfferSection />
        <Testimonials />
        <DownloadSection />
        <Footer />
        </div>
    );
    }

export default Homepage;