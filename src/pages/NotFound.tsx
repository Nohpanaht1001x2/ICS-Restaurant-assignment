import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ErrorMessage from '../components/ErrorMessage';

const NotFound: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ErrorMessage />
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
