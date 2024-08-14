import React from 'react';
import './base.css'; 

const FooterComponent = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cloud Hive. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
