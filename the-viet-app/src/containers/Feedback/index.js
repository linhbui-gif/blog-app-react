import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img4 from 'images/testimonial/03.jpg';
import OWlCarouselComponent from "components/OwlCarousel";
const FeedbackContainer = ()=>{
    return (
        <div className="testimonial-area pt-100 pb-100">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <div className="section-title">
                <h2 className="title">Khách hàng nói gì về chúng tôi?</h2>
                <div className="title-bdr">
                  <div className="left-bdr" />
                  <div className="right-bdr" />
                </div>
                {/* <p>You can see our clients feedback what you say?</p> */}
              </div>
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
                <OWlCarouselComponent className="owl-theme"  loop margin={10} items={5} >
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Jack Hardson</h3>
                      <span className="author__meta">United States</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Mike Wood</h3>
                      <span className="author__meta">United Kingdom</span>

                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src="images/testimonial/05.jpg" alt="small-avatar" />
                      <h3 className="author__title">Mike Hardson</h3>
                      <span className="author__meta">Italy</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star-half-o"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Bernice Pease</h3>
                      <span className="author__meta">Germany</span>

                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Daniel Ward</h3>
                      <span className="author__meta">India</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Kamran Ahmed</h3>
                      <span className="author__meta">Bangladesh</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Jessica Brown</h3>
                      <span className="author__meta">Netherlands</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Mike Hardson</h3>
                      <span className="author__meta">Pakistan</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Bernice Pease</h3>
                      <span className="author__meta">Australia</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-author">
                      <img src={img4} alt="small-avatar" />
                      <h3 className="author__title">Daniel Ward</h3>
                      <span className="author__meta">Costa rica</span>
                      {/* <span class="author__rating">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                          </span> */}
                    </div>
                    <div className="testimonial-desc">
                      <p className="testimonial__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
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
}
 export default FeedbackContainer;