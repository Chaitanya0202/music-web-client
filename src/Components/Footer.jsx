import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p className="h5 mb-3">Connect with us:</p>
        <div className="d-flex justify-content-center mb-3">
          <a href="#" className="text-white mx-2 text-decoration-none">
            Facebook
          </a>
          <a href="#" className="text-white mx-2 text-decoration-none">
            Twitter
          </a>
          <a href="#" className="text-white mx-2 text-decoration-none">
            LinkedIn
          </a>
          <a href="#" className="text-white mx-2 text-decoration-none">
            Instagram
          </a>
        </div>
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
