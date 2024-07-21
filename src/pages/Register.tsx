import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const Register: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
