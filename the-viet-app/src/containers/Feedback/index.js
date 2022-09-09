import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img4 from 'images/testimonial/03.jpg';
import OWlCarouselComponent from "components/OwlCarousel";
import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";
import TypoComponent from "components/Typography";
const FeedbackContainer = ()=>{
  const options = {
    loop:true,
    margin : 10,
    items :1,
    responsive:{
        0: {
            items:2
        },
        1200:{
            items:3
        }
    }
}
  const [feedback,setFeedback] = useState({});
  console.log(feedback);

  useEffect(()=>{
      getFeedback();
  },[]);
  const getFeedback = async ()=>{
      try {
          const response = await ApiHelper.get({ path:'common-data', params: {}});
          console.log(response);
          if(response.success){
            setFeedback(response.data)
          }
      } catch (error) {
          console.log('error');
      }
  }
  const bannerTeam = feedback?.bannerTeam;
  const isExitsBannerTeam = Array.isArray(bannerTeam);
    return (

        <div className="testimonial-area pt-100 pb-100">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <TypoComponent name={'Khách hàng nói gì về chúng tôi?'} titleBdr></TypoComponent>
           
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
        {/* Container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-lg-12">
              <div className="testimonial-item-wrap-1 testimonial-carousel-1">
                <OWlCarouselComponent options={options} >
              
              {isExitsBannerTeam && bannerTeam.map((item,index)=>{
               
                return (
                      
        <div key={index} className="testimonial-item">
        <div className="testimonial-author">
          <img src={item?.picture} alt="small-avatar" />
          <h3 className="author__title">{item?.title}</h3>
          <span className="author__meta">{item?.name}</span>
          
        </div>
        <div className="testimonial-desc">
          <p className="testimonial__desc" dangerouslySetInnerHTML={{ __html: item?.description }}>
           
          </p>
        </div>
      </div>
                 
                
                )
              })};

           
                </OWlCarouselComponent>
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
     
    )
   
};

 export default FeedbackContainer;