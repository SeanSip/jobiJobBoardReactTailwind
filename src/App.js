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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <section>
                <Hero />
                <JobCategory />
                <ExpertsSection />
                <HowItWorksSection />
                <FindExpertsSection />
                <ClientFeedbackSection />
                <CollaborationSection />
              </section>
            }
          ></Route>
          <Route path="/job-listing" element={<JobListingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
