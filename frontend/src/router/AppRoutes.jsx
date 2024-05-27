import BiographyPage from '@/pages/BiographyPage';
import ContactPage from '@/pages/ContactPage';
import EssaysReviewsPage from '@/pages/EssaysReviewsPage';
import FeedPage from '@/pages/FeedPage';
import PhotographyWorksPage from '@/pages/PhotographyWorksPage';
import TechProjectsPage from '@/pages/TechProjectsPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/photography-works" element={<PhotographyWorksPage />} />
        <Route path="/essays-reviews" element={<EssaysReviewsPage />} />
        <Route path="/tech-projects" element={<TechProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    // </Router>
  );
}
