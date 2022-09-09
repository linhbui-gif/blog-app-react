import img2 from "images/services/001.jpg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img8 from 'images/blog/blog1.jpg';
import OWlCarouselComponent from "components/OwlCarousel";
import TypoComponent from "components/Typography";
const ServiceArea = ()=>{
  const options = {
    loop:true,
    margin : 10,
    items :1,
    responsive:{
        0: {
            items:1
        },
        1200:{
            items:3
        }
    }
}
    return (
        <div className="services-area">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <TypoComponent name={'Tiện ích thông minh'} titleBdr></TypoComponent>
              
            </div>

          </div>


          <div className="row">

            <div className="service-carousel testimonial-item-wrap-1">
              <OWlCarouselComponent options={options}>
                <div className="service-item">
                  <div className="col-12">
                    <div className="single-services-item">
                      <div className="image">
                        <a href="#">
                          <img src={img2} alt="image" />
                        </a>
                      </div>
                      <div className="content">
                        <h3>
                          <a href="#">Công nghệ bảo mật</a>
                        </h3>
                        {/* <span>Lorem ipsum</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-item">
                  <div className="col-12">
                    <div className="single-services-item">
                      <div className="image">
                        <a href="#">
                          <img src={img2} alt="image" />
                        </a>
                      </div>
                      <div className="content">
                        <h3>
                          <a href="#">Dễ dàng quản lý</a>
                        </h3>
                        {/* <span>Lorem ipsum</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-item">
                  <div className="col-12">
                    <div className="single-services-item">
                      <div className="image">
                        <a href="#">
                          <img src={img2} alt="image" />
                        </a>
                      </div>
                      <div className="content">
                        <h3>
                          <a href="#">Siêu tiết kiệm</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </OWlCarouselComponent>

            </div>

          </div>

        </div>
      </div>
    )
}
export default ServiceArea;