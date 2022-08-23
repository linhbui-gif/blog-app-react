import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const BlogLayout = ({ children }) => {
    return (
        <div className="Blog-layouts">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default BlogLayout;
