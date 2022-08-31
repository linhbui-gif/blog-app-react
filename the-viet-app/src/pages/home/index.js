import React from "react";
import Guest from "layouts/Guest";
import img2 from "images/services/001.jpg";
import img3 from "images/blog/blog1.jpg";
import img4 from 'images/testimonial/03.jpg';
import img5 from 'images/bg/choose-us.png';
import img6 from 'images/svg/android.svg';
import img7 from 'images/bg/download.png';
import img8 from 'images/blog/blog1.jpg';
import img9 from 'images/client-logo/logo-envato.png';
import img10 from 'images/logo-2.png';
import img11 from 'images/blog/blog1.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "assets/css/style.css";
import BannerContainer from "containers/Banners";
import AboutContainer from "containers/About";
import CounterUpContainer from "containers/CounUp";


const HomePage = () => {
  const options = {

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

    },
  }
  return (
    <Guest>
      <BannerContainer />
      <CounterUpContainer />
      <AboutContainer />
      <div className="services-area">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <div className="section-title">
                <h2 className="title">Tiện ích thông minh</h2>
                <div className="title-bdr">
                  <div className="left-bdr" />
                  <div className="right-bdr" />
                </div>
                <p>
                  Trải nghiệm siêu tiện ích thông minh trên các lĩnh vực trong
                  tầm tay
                </p>
              </div>
            </div>

          </div>


          <div className="row">

            <div className="service-carousel testimonial-item-wrap-1">
              <OwlCarousel className="owl-theme" {...options} loop margin={10} items={3}>
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
              </OwlCarousel>

            </div>

          </div>

        </div>
      </div>
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
              <OwlCarousel className="owl-theme" {...options} loop margin={10} items={3}>
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
              </OwlCarousel>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container*/}
      </div>
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
                <OwlCarousel className="owl-theme" {...options} loop margin={10} items={5}>
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
                </OwlCarousel>
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
      <div className="why-choose-us-area pb-100">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row align-items-center">
            {/* col */}
            <div className="col-lg-6">
              <div className="why-choose-us-img">
                <img src={img5} alt="Image" />
              </div>
            </div>
            {/* /col */}
            {/* col */}
            <div className="col-lg-6">
              <div className="why-choose-us-content mb-removed">
                {/* row */}
                <div className="row justify-content-center text-center">
                  {/* col */}
                  <div className="col-lg-8 col-md-12 mb-50">
                    <div className="section-title">
                      <h2 className="title">Dễ dàng hơn bao giờ hết</h2>
                      <div className="title-bdr">
                        <div className="left-bdr" />
                        <div className="right-bdr" />
                      </div>
                      <p>Đăng ký sử dụng tại nhà không còn phải xếp hàng chờ đợi</p>
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-line" />
                    <h3>Transparent</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    <h3>Proactive</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    <h3>Affordable</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    <h3>Flexible</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
      <div className="download-area">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row align-items-center justify-content-between">
            {/* col */}
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="download-1-content mt-50">
                <h2 className=" wow fadeInUp animated">
                  Tải ứng dụng về máy của bạn
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
                <img className=" img-fluid" src={img7} alt="" />
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
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
              <OwlCarousel className="owl-theme" {...options} loop margin={10} items={3}>
                <div className="news-item">
                  <div className="col-12">
                    <div className="blog-wrapper mb-30">
                      <div className="blog-img">
                        <a href="blog-single.html">
                          <img src={img11} alt="" />
                        </a>
                        <p className="category-news">Đặt lịch khám</p>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a href="blog-single.html">Title lorem</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                          rerum, iste mollitia itaque expedita ex quos? Aperiam magnam
                          inventore, voluptatem deserunt quia dicta ullam expedita illum
                          quis. Repudiandae, quibusdam ratione?
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
                          <img src={img11} alt="" />
                        </a>
                        <p className="category-news">Tư vấn khám</p>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a href="blog-single.html">Title lorem</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                          rerum, iste mollitia itaque expedita ex quos? Aperiam magnam
                          inventore, voluptatem deserunt quia dicta ullam expedita illum
                          quis. Repudiandae, quibusdam ratione?
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
                          <img src={img11} alt="" />
                        </a>
                        <p className="category-news">Vé nghệ thuật</p>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a href="blog-single.html">Title lorem</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                          rerum, iste mollitia itaque expedita ex quos? Aperiam magnam
                          inventore, voluptatem deserunt quia dicta ullam expedita illum
                          quis. Repudiandae, quibusdam ratione?
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
              </OwlCarousel>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container*/}
      </div>
      <div className="client-logo-area pb-100">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row justify-content-center text-center">
            {/* col */}
            <div className="col-lg-8 col-md-12 mb-50">
              <div className="section-title">
                <h2 className="title">Các đơn vị đang sử dụng dịch vụ</h2>
                <div className="title-bdr">
                  <div className="left-bdr" />
                  <div className="right-bdr" />
                </div>
                <p>Thẻ Việt là lựa chọn tuyệt vời với các đơn vị đang sử dụng</p>
              </div>
            </div>
            {/* /col */}
          </div>
          <div className="row">
            {/* col */}
            <div className="clients-carousel testimonial-item-wrap-1">
              <OwlCarousel className="owl-theme" {...options} loop margin={10} items={6}>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clients-item">
                  <div className="col-12 text-center">
                    <div className="client-logo">
                      <div
                        className="client-logo-img"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClient"
                      >
                        {" "}
                        <img
                          src={img9}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            {/* /col */}
            {/* /col */}
          </div>
          {/* row */}
        </div>
        {/* /Container */}
      </div>
      <div className="cta-area">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row align-items-center">
            {/* col */}
            <div className="col-lg-12">
              <div className="get-start-box">
                {/* col */}
                <div className="col-lg-8">
                  <div className="section-heading">
                    <h5 className="section__meta text-white">#get in touch</h5>
                    <h2 className="section__title">Sẵn sàng để bắt đầu ?</h2>
                    <p className="section__sub">
                      Speak to a specialist at (800-123-1234)
                    </p>
                  </div>
                </div>
                {/* /col */}
                {/* col */}
                <div className="col-lg-4">
                  <div className="button-shared text-end">
                    <a href="contact.html" className="btn cta-btn">
                      Liên Hệ với chúng tôi <span className="la la-caret-right" />
                    </a>
                  </div>
                </div>
                {/* /col */}
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
    </Guest>
  );
};
export default HomePage;
