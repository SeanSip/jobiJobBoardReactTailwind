import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobCategory from './components/JobCategory';
import ExpertsSection from './components/ExpertsSection';
import Footer from './components/Footer';
import JobListingPage from './pages/JobListingPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <JobCategory />
                <ExpertsSection />
              </>
            }
          ></Route>
          <Route path="/job-listing" element={<JobListingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
