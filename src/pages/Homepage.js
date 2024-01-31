import React from 'react';
import HeroSection from '../components/HeroSection';
import OfferSection from '../components/OfferSection';
import Testimonials from '../components/Testimonials';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

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