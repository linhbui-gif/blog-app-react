import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";

import OWlCarouselComponent from "components/OwlCarousel";
import TypoComponent from "components/Typography";
const DetailsContainer = ()=>{
  const options = {
    loop:true,
    margin : 10,
    items :1,
    responsive:{
        0: {
            items:2
        },
        1200:{
            items:6
        }
    }
}
  const [detailPartner,setDetailsPartner] = useState({});
 

  useEffect(()=>{
    getDetailsPartner();
  },[]);
  const getDetailsPartner = async ()=>{
      try {
          const response = await ApiHelper.get({ path:'common-data', params: {}});
          console.log(response);
          if(response.success){
            setDetailsPartner(response.data)
          }
      } catch (error) {
          console.log('error');
      }
  }
  const bannerDetailsPartner = detailPartner?.bannerPartner;
  const isExitsBannerDetailPartner = Array.isArray(bannerDetailsPartner);
    return (
        <div className="blog-area pt-120 pb-100">
        {/* Container*/}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <TypoComponent name={'Có thể dùng thẻ việt ở đâu'} titleBdr></TypoComponent>
              
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          {/* row */}
          <div className="row">
            <div className="news-carousel testimonial-item-wrap-1">
              <OWlCarouselComponent options={options}>
              {isExitsBannerDetailPartner && bannerDetailsPartner.map((item,index)=>{
               
               return (
                <div key={index} className="news-item">
                <div className="col-12">
                  <div className="blog-wrapper mb-30">
                    <div className="blog-img">
                      <a href="blog-single.html">
                        <img src={item?.picture} alt="" />
                      </a>
                     
                    </div>
                    
                  </div>
                </div>
              </div>
                
                
               
               )
             })};
               
          
              </OWlCarouselComponent>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container*/}
      </div>
    )
}
export default DetailsContainer;