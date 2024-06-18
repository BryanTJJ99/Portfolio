import BiographyPage from '@/pages/BiographyPage';
import ContactPage from '@/pages/ContactPage';
import EssaysReviewsPage from '@/pages/EssaysReviewsPage';
import FeedPage from '@/pages/FeedPage';
import PhotographyWorksPage from '@/pages/PhotographyWorksPage';
import TechProjectsPage from '@/pages/TechProjectsPage';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PageAnimation from '@/animations/PageAnimation';
import { AnimatePresence } from "framer-motion";

export default function AppRoutes() {

  const location = useLocation();

  return (

    <>
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location.pathname}>
        <Route path="/" element={<PageAnimation><FeedPage /></PageAnimation>} />
        <Route path="/feed" element={<PageAnimation><FeedPage /></PageAnimation>} />
        <Route path="/biography" element={<PageAnimation><BiographyPage /></PageAnimation>} />
        <Route path="/photography-works" element={<PageAnimation><PhotographyWorksPage /></PageAnimation>} />
        <Route path="/essays-reviews" element={<PageAnimation><EssaysReviewsPage /></PageAnimation>} />
        <Route path="/tech-projects" element={<PageAnimation><TechProjectsPage /></PageAnimation>} />
        <Route path="/contact" element={<PageAnimation><ContactPage /></PageAnimation>} />
      </Routes>
    </AnimatePresence>
    </>
  );
}
