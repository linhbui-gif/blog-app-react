import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
