import React from "react";
import Guest from "layouts/Guest";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "assets/css/style.css";
import BannerContainer from "containers/Banners";
import AboutContainer from "containers/About";
import CounterUpContainer from "containers/CounUp";
import ServiceLinkingContainer from "containers/ServiceLink";
import DownloadContainer from "containers/Download";
import ServiceArea from "containers/ServiceArea";
import ClientContainer from "containers/Client";
import BenefitContainer from "containers/Benefit";
import FeedbackContainer from "containers/Feedback";
import DetailsContainer from "containers/Details";
import ContactContainer from "containers/Contact";


const HomePage = () => {
 
  return (
    <Guest>
      <BannerContainer />
      <CounterUpContainer />
      <AboutContainer />
      <ServiceArea/>
      <DetailsContainer/>
      <FeedbackContainer/>
     <BenefitContainer/>                     
     <DownloadContainer/>
     <ServiceLinkingContainer/>                     
     <ClientContainer/>
     <ContactContainer/>
    </Guest>
  );
};
export default HomePage;