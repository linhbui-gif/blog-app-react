import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";
import TypoComponent from 'components/Typography';
const AboutContainer = () => {
  const [about,setAbout]= useState({});
  
  useEffect(()=>{
   getAbout();
  
},[]);
const getAbout = async ()=>{
   try {
       const response = await ApiHelper.get({ path:'common-data', params: {}});
       console.log(response);
       if(response.success){
           setAbout(response.data)
       }
   } catch (error) {
       console.log('error');
   }
}
  return (
    <div className="about-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image-warp">
              <a
                href="javascript::void(0)"
                data-src="https://www.youtube.com/embed/mHjdlO4JSsA"
                data-bs-toggle="modal"
                data-bs-target="#modalShowVideo"
                className="video-btn popup-youtube"
              >
                <i className="ri-play-fill" />
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content warp">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12 mb-50">
                  <TypoComponent name={about?.bannerAbout?.name} titleBdr></TypoComponent>
                  
                </div>
              </div>

              <p dangerouslySetInnerHTML={{ __html: about?.bannerAbout?.description }}>
               
              </p>
              <div className="about-btn justify-content-center text-center">
                <a href="#" className="btn theme-btn-1">
                 {about?.bannerAbout?.button_name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContainer;
