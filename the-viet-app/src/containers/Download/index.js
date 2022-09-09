import img6 from 'images/svg/android.svg';
import img7 from 'images/bg/download.png';
import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";
const DownloadContainer = ()=>{
  const [download,setDownload]= useState({});
  
  useEffect(()=>{
   getDownload();
  
},[]);
const getDownload = async ()=>{
   try {
       const response = await ApiHelper.get({ path:'common-data', params: {}});
       console.log(response);
       if(response.success){
           setDownload(response.data)
       }
   } catch (error) {
       console.log('error');
   }
}
const bannerDownload = download?.bannerDownload;


    return (
        <div className="download-area">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row align-items-center justify-content-between">
            {/* col */}
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="download-1-content mt-50">
                <h2 className=" wow fadeInUp animated">
                {bannerDownload?.title}
                </h2>
                <ul>
                  <li className="wow fadeInUp animated" data-wow-delay="0.2s">
                    <i className="la la-check" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </li>
                  <li className="wow fadeInUp animated" data-wow-delay="0.4s">
                    <i className="la la-check" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </li>
                  <li className="wow fadeInUp animated" data-wow-delay="0.6s">
                    <i className="la la-check" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </li>
                </ul>
                <div className="mt-4 wow fadeInUp animated" data-wow-delay="0.6s">
                  <a href="#" className="btn theme-btn-1">
                    <img src={img6} alt="" />
                  </a>
                  <a href="#" className="btn theme-btn-1">
                    <img src={img6} alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* /col */}
            {/* col */}
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="download-1-img">
                <img className=" img-fluid" src={bannerDownload?.picture} alt="" />
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
    )
}
export default DownloadContainer;