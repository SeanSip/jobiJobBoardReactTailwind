import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobCategory from './components/JobCategory';
import ExpertsSection from './components/ExpertsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobCategory />
      <ExpertsSection />
      <Footer />
    </div>
  );
}

export default App;
