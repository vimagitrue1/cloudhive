import React from 'react';
import './base.css'; 

const HeaderComponent = () => {
  return (
    <header className="header">
      <h1>Cloud Hive</h1>
      
      <nav>
        <ul>
          <li><a href="/login">Home</a></li>
          {/* <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;