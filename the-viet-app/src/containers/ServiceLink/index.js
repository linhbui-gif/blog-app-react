import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TypoComponent from "components/Typography";
import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";
import OWlCarouselComponent from "components/OwlCarousel";
const ServiceLinkingContainer = ()=>{
  const options = {
    loop:true,
    margin : 10,
    items :1,
    responsive:{
        0: {
            items:1
        },
        1200:{
            items:4
        }
    }
}
  const [serviceLinking,setServiceLinking] = useState({});
 

  useEffect(()=>{
    getServiceLinking();
  },[]);
  const getServiceLinking = async ()=>{
      try {
          const response = await ApiHelper.get({ path:'common-data', params: {}});
          console.log(response);
          if(response.success){
            setServiceLinking(response.data)
          }
      } catch (error) {
          console.log('error');
      }
  }
  const bannerServices = serviceLinking?.bannerServices;
  const isExitsBannerService = Array.isArray(bannerServices);
    return (
        <div className="blog-area pt-120 pb-100">
       
        <div className="container">
   
          <div className="row justify-content-center text-center">
        
            <div className="col-lg-8 col-md-12 mb-50">
              <TypoComponent name={'Liên kết dịch vụ đa lĩnh vực'} titleBdr></TypoComponent>
              
            </div>
          
          </div>
          
          <div className="row">
            <div className="news-carousel testimonial-item-wrap-1">
              <OWlCarouselComponent options={options}>
              {isExitsBannerService && bannerServices.map((item,index)=>{
               
               return (
                <div key={index} className="news-item">
                <div className="col-12">
                  <div className="blog-wrapper mb-30">
                    <div className="blog-img">
                      <a href="blog-single.html">
                        <img src={item?.picture} alt="" />
                      </a>
                      <p className="category-news">{item?.name}</p>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog-single.html">{item?.title}</a>
                      </h4>
                      <p dangerouslySetInnerHTML={{ __html: item?.description }}>

                      </p>
                      <a href="blog-single.html">
                        Read More <i className="ri-arrow-right-line" />
                      </a>
                      <div className="blog-meta">
                        <span>
                          {" "}
                          <i className="las la-calendar" /> 05 Feb 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
                
               
               )
             })};
               
          
              </OWlCarouselComponent>
            </div>
           
          </div>
         
        </div>
     
      </div>
    )
}
export default ServiceLinkingContainer;