import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img3 from "images/blog/blog1.jpg";
import OWlCarouselComponent from "components/OwlCarousel";
const DetailsContainer = ()=>{
    return (
        <div className="blog-area pt-120 pb-100">
        {/* Container*/}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <div className="section-title">
                <h2 className="title">Liên kết dịch vụ đa lĩnh vực</h2>
                <div className="title-bdr">
                  <div className="left-bdr" />
                  <div className="right-bdr" />
                </div>
                {/* <p>You can see our clients feedback what you say</p> */}
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          {/* row */}
          <div className="row">
            <div className="news-carousel testimonial-item-wrap-1">
              <OWlCarouselComponent className="owl-theme"  loop margin={10} items={3}>
                <div className="news-item">
                  <div className="col-12">
                    <div className="blog-wrapper mb-30">
                      <div className="blog-img">
                        <a href="blog-single.html">
                          <img src={img3} alt="" />
                        </a>
                        <p className="category-news">Đặt lịch khám</p>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a href="blog-single.html">Title lorem</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo rerum, iste mollitia itaque expedita ex quos?
                          Aperiam magnam inventore, voluptatem deserunt quia dicta
                          ullam expedita illum quis. Repudiandae, quibusdam
                          ratione?
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
                <div className="news-item">
                  <div className="col-12">
                    <div className="blog-wrapper mb-30">
                      <div className="blog-img">
                        <a href="blog-single.html">
                          <img src={img3} alt="" />
                        </a>
                        <p className="category-news">Tư vấn khám</p>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a href="blog-single.html">Title lorem</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo rerum, iste mollitia itaque expedita ex quos?
                          Aperiam magnam inventore, voluptatem deserunt quia dicta
                          ullam expedita illum quis. Repudiandae, quibusdam
                          ratione?
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
                <div className="news-item">
                  <div className="col-12">
                    <div className="blog-wrapper mb-30">
                      <div className="blog-img">
                        <a href="blog-single.html">
                          <img src={img3} alt="" />
                        </a>
                        <p className="category-news">Vé nghệ thuật</p>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a href="blog-single.html">Title lorem</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo rerum, iste mollitia itaque expedita ex quos?
                          Aperiam magnam inventore, voluptatem deserunt quia dicta
                          ullam expedita illum quis. Repudiandae, quibusdam
                          ratione?
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