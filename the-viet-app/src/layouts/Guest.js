import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Guest = ({ children }) => {
  return (
      <div className="Guest">
        <Header/>
        {children}
        <Footer/>
      </div>
  );
};

export default Guest;
