import AlbumPage from '@/pages/AlbumPage'; // Example sub-page
import BiographyPage from '@/pages/BiographyPage';
import ContactPage from '@/pages/ContactPage';
import EssaysReviewsPage from '@/pages/EssaysReviewsPage';
import PhotographyWorksPage from '@/pages/PhotographyWorksPage';
import TechProjectsPage from '@/pages/TechProjectsPage';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import FadeAnimation from '@/animations/FadeAnimation';
import SlideAnimation from '@/animations/SlideAnimation';
import { AnimatePresence } from 'framer-motion';

export default function AppRoutes() {
  const location = useLocation();

  // Determine if the current route should have page animation
  const shouldAnimate = (path) => {
    // Add more conditions if needed
    const noAnimationPaths = [
      // Add more paths that shouldn't have animation
    ];
    return !noAnimationPaths.includes(path);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={shouldAnimate(location.pathname) ? <SlideAnimation><BiographyPage /></SlideAnimation> : <BiographyPage />}
        />
        <Route
          path="/biography"
          element={shouldAnimate(location.pathname) ? <SlideAnimation><BiographyPage /></SlideAnimation> : <BiographyPage />}
        />
        <Route
          path="/photography-works"
          element={shouldAnimate(location.pathname) ? <SlideAnimation><PhotographyWorksPage /></SlideAnimation> : <PhotographyWorksPage />}
        />
        <Route
          path="/essays-reviews"
          element={shouldAnimate(location.pathname) ? <SlideAnimation><EssaysReviewsPage /></SlideAnimation> : <EssaysReviewsPage />}
        />
        <Route
          path="/tech-projects"
          element={shouldAnimate(location.pathname) ? <SlideAnimation><TechProjectsPage /></SlideAnimation> : <TechProjectsPage />}
        />
        <Route
          path="/contact"
          element={shouldAnimate(location.pathname) ? <SlideAnimation><ContactPage /></SlideAnimation> : <ContactPage />}
        />
        <Route
          path="/photography-works/:albumId"
          element={<FadeAnimation><AlbumPage /></FadeAnimation>}
        />
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
}
