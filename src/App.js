import React from 'react';
// import { FirebaseAuthProvider } from '@react-firebase/auth';
// import { auth, app } from './firebase';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import Testimonials from './components/Testimonials';
import History from './components/History';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <OfferSection />
      <Testimonials />
      <DownloadSection />
      <Footer />
      <History />
    </div>
  );
};

export default App;
