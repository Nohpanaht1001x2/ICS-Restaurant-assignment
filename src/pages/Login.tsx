import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
