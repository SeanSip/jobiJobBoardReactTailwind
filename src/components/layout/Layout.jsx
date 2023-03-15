import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
