import React, { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import AppRoutes from "@/router/AppRoutes";
import SplashScreen from "@/components/SplashScreen"; // Import the SplashScreen component
import './App.css';
import Footer from '@/components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 700); // Splash screen will be visible for 0.5 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="App">
      {showSplash && <SplashScreen />}
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <NavBar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}
