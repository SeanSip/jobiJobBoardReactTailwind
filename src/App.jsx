import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './pages/Home/Hero';
import JobCategory from './pages/Home/JobCategory';
import ExpertsSection from './pages/Home/ExpertsSection';
import JobListingPage from './pages/JobListingPage';
import Layout from './components/layout/Layout';
import HowItWorksSection from './pages/Home/HowItWorksSection';
import FindExpertsSection from './pages/Home/FindExpertsSection';
import ClientFeedbackSection from './pages/Home/ClientFeedbackSection';
import CollaborationSection from './pages/Home/CollaborationSection';
import JobiGuideSection from './pages/Home/JobiGuideSection';
import CvSection from './pages/Home/CvSection';
import AboutUsPage from './pages/AboutUsPage';
import Page404 from './pages/Page404';
import PostJobPage from './pages/PostJobPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import MembershipPage from './pages/MembershipPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <main>
                <Hero />
                <JobCategory />
                <ExpertsSection />
                <HowItWorksSection />
                <FindExpertsSection />
                <ClientFeedbackSection />
                <CollaborationSection />
                <JobiGuideSection />
                <CvSection />
              </main>
            }
          ></Route>
          <Route
            path="/job-listing"
            element={
              <main>
                <JobListingPage />
              </main>
            }
          />
          <Route
            path="/about-us"
            element={
              <main>
                <AboutUsPage />
              </main>
            }
          />
          <Route
            path="/pricing"
            element={
              <main>
                <MembershipPage />
              </main>
            }
          />
          <Route
            path="/404"
            element={
              <main>
                <Page404 />
              </main>
            }
          />
          <Route
            path="/job-listing/:id"
            element={
              <main>
                <JobDetailsPage />
              </main>
            }
          />
          <Route
            path="/post-job"
            element={
              <main>
                <PostJobPage />
              </main>
            }
          />
          <Route
            path="*"
            element={
              <main>
                <Page404 />
              </main>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
