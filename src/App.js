import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Hero from './pages/Home/Hero';
import JobCategory from './pages/Home/JobCategory';
import ExpertsSection from './pages/Home/ExpertsSection';
import Footer from './components/ui/Footer';
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
