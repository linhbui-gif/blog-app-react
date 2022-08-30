import React from "react";

import Guest from "layouts/Guest";
import img1 from "../../images/hero/hero-1.png";
import img2 from "../../images/services/001.jpg";
import img3 from "../../images/blog/blog1.jpg";
import img4 from '../../images/testimonial/03.jpg';
import img5 from '../../images/bg/choose-us.png';
import img6 from '../../images/svg/android.svg';
import img7 from '../../images/bg/download.png';
import img8 from '../../images/blog/blog1.jpg';
import img9 from '../../images/client-logo/logo-envato.png';
import img10 from '../../images/logo-2.png';
import img11 from '../../images/blog/blog1.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/css/style.css";


const HomePage = () => {
       const options= {
        
        responsive: {
            0: {
                items: 1,
            },
           
          
        },
    }
  return (
    <Guest>
      <div
        className="hero-1 oh pos-rel"
        style={{ background: 'url("images/hero/banner-bg.png")' }}
      >
        {/* container */}
        <OwlCarousel className="owl-theme"  loop margin={10} items={1}>
          <div className="hero-banner-carousel owl-loaded owl-carousel">
            <div className="hero-carousel-item ">
              <div className="container">
                {/* row */}
                <div className="row align-items-center">
                  {/* col */}
                  <div className="col-lg-5">
                    <div className="hero-1-content wow fadeInLeft animated">
                      <h5
                        className="cate  wow fadeInUp animated"
                        data-wow-delay="0.2s"
                      >
                        #Thẻ Việt
                      </h5>
                      <h1
                        className="title  wow fadeInUp animated"
                        data-wow-delay="0.4s"
                      >
                        Một Thẻ Quốc Gia
                      </h1>
                      <p
                        className=" wow fadeInUp animated"
                        data-wow-delay="0.6s"
                      >
                        Mở tài khoản miễn phí trong vài phút từ ứng dụng điện
                        thoại của bạn trải nghiệm vô vàn tiện ích thông minh
                      </p>
                      <div className="hero-1-button-group">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modalHomeSLider"
                          className="btn theme-btn-1  wow fadeInUp animated"
                          data-wow-delay="0.8s"
                        >
                          Tìm hiểu ngay
                          <i className="uil uil-angle-right-b ml-2 mb-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /col */}
                  {/* col */}
                  <div className="col-lg-7 d-lg-block">
                    <div
                      className="hero-1-thumb-15 wow fadeInUp animated"
                      data-wow-delay="0.4s"
                    >
                      <img
                        className="img-fluid wow fadeInRight animated"
                        src={img1}
                        alt="hero-1"
                      />
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /container */}
            </div>
          </div>
        </OwlCarousel>
      </div>
      <div className="counterup_aera d-flex flex-wrap pt-100 pb-100">
        <div className="counterup_text  mb-lm-30px">
          <h3 className="counterup">1.200</h3>
          <p>
            <i className="las la-user" />
          </p>
          <p>Người dùng</p>
        </div>
        <div className="counterup_text  mb-lm-30px">
          <h3 className="counterup">8.245</h3>
          <p>
            <i className="las la-ambulance" />
          </p>
          <p>Download</p>
        </div>
        <div className="counterup_text ">
          <h3 className="counterup">865</h3>
          <p>
            <i className="lab la-firefox" />
          </p>
          <p>Đánh giá</p>
        </div>
        <div className="counterup_text ">
          <h3 className="counterup">210</h3>
          <p>
            <i className="lab la-github-alt" />
          </p>
          <p>Đối tác</p>
        </div>
      </div>
      <div className="about-area pt-100 pb-100">
        {/* Container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-lg-6">
              <div className="about-image-warp">
                {/* <a href="https://www.youtube.com/watch?v=mHjdlO4JSsA" class="video-btn popup-youtube">
                      <i class="ri-play-fill"></i>
                  </a> */}
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
            {/* /col */}
            {/* col */}
            <div className="col-lg-6">
              <div className="about-content warp">
                {/* row */}
                <div className="row justify-content-center text-center">
                  {/* col */}
                  <div className="col-lg-8 col-md-12 mb-50">
                    <div className="section-title">
                      <h2 className="title">Thẻ Việt - Một thẻ quốc gia</h2>
                      <div className="title-bdr">
                        <div className="left-bdr" />
                        <div className="right-bdr" />
                      </div>
                      <p> Một tài khoản đa dịch vụ.</p>
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
                {/* <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt labore dolore magna aliqua.</strong> */}
                <p>
                  Thẻ Việt - Một thẻ quốc gia giúp cuộc sống đơn giản và tiện
                  lợi hơn. Với nền tảng công nghệ ưu việt và hệ thống bảo mật an
                  toàn liên kết đa lĩnh vực, sử dụng thẻ giúp người dùng: Đơn
                  giản hóa quá trình khám chữa bệnh có được số khám, tư vấn khám
                  ngay tại nhà, mua vé bus, vé du lịch, vé gửi xe... Thanh toán
                  không dùng tiền mặt, tích điểm với hằng ngàn ưu đãi hấp hẫn.
                </p>
                <div className="about-btn justify-content-center text-center">
                  <a href="#" className="btn theme-btn-1">
                    Xem Chi Tiết
                  </a>
                </div>
              </div>
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /Container */}
      </div>
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
              <OwlCarousel className="owl-theme"  loop margin={10} items={3}>
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
            <OwlCarousel className="owl-theme"  loop margin={10} items={3}>
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
        <OwlCarousel className="owl-theme" loop margin={10} items={5}>
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
      <OwlCarousel className="owl-theme"  loop margin={10} items={3}>
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
      <OwlCarousel className="owl-theme" loop margin={10} items={6}>
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
                  src= {img9}
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
    <footer className="footer-style bg-gray-100 pt-200">
  {/* Container */}
  <div className="container">
    {/* row */}
    <div className="row">
      {/* col */}
      <div className="col-xl-3 col-lg-3 col-md-4">
        <div className="footer-logo">
          <a href="index.html">
            <img src={img10} alt="" />
          </a>
        </div>
      </div>
      {/* /col */}
      {/* col */}
      <div className="col-xl-9 col-lg-9  col-md-8 mb-30">
        <div className="footer-top-wrapper">
          <ul className="footer-top-link text-end">
            <li>
              <a href="#">Layouts </a>
            </li>
            <li>
              <a href="#"> Pages</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Blog </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* /col */}
      {/* col */}
    </div>
    {/* /row */}
    <div className="footer-middle-area mt-30 pb-30 pt-60">
      {/* row */}
      <div className="row">
        {/* col */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="footer-wrapper mb-30">
            <h3 className="footer-title">Giới thiệu</h3>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed
                diam nonu mmy nibh euis{" "}
              </p>
            </div>
            <div className="footer-icon">
              <a href="#">
                <i className="uil uil-facebook-f" />
              </a>
              <a href="#">
                <i className="uil uil-twitter" />
              </a>
              <a href="#">
                <i className="uil uil-instagram-alt" />
              </a>
              <a href="#">
                <i className="uil uil-youtube" />
              </a>
            </div>
          </div>
        </div>
        {/* /col */}
        {/* col */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="footer-wrapper mb-30">
            <h3 className="footer-title">Dịch vụ</h3>
            <div className="footer-link">
              <ul>
                <li>
                  <a href="about.html">Conditions</a>
                </li>
                <li>
                  <a href="our-history.html">Terms of Use</a>
                </li>
                <li>
                  <a href="about.html">Our Services</a>
                </li>
                <li>
                  <a href="team.html">New Guests List</a>
                </li>
                <li>
                  <a href="about.html">The Team List</a>
                </li>
              </ul>
            </div>
            <div />
          </div>
        </div>
        {/* /col */}
        {/* col */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="footer-wrapper mb-30">
            <h3 className="footer-title">Thông tin hữu ích</h3>
            <div className="footer-link">
              <ul>
                <li>
                  <a href="services-01.html">Conditions</a>
                </li>
                <li>
                  <a href="contact.html">Terms of Use</a>
                </li>
                <li>
                  <a href="contact.html">Our Services</a>
                </li>
                <li>
                  <a href="blog.html">New Guests List</a>
                </li>
                <li>
                  <a href="about.html">The Team List</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /col */}
        {/* col */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="footer-wrapper mb-30">
            <h3 className="footer-title">Đăng ký và tham gia</h3>
            <div className="subscribes-form">
              <form action="#">
                <input placeholder="Enter email " type="email" />
                <button className="btn theme-btn-1 width-100 mt-10">
                  <i className="lab la-telegram-plane me-2" />
                  subscribe
                </button>
              </form>
            </div>
            <div className="footer-info">
              <p>
                Get the latest updates via email. Any time you may unsubscribe
              </p>
            </div>
          </div>
        </div>
        {/* /col */}
      </div>
      {/* /row */}
    </div>
    <div className="footer-bottom-area pt-25 pb-25">
      {/* row */}
      <div className="row">
        {/* col */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="copyright">
            <p>
              © Copyrights 2021 <a href="index.html">.</a> All rights reserved.
            </p>
          </div>
        </div>
        {/* col */}
        {/* /col */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="footer-bottom-link text-end">
            <ul>
              <li>
                <a href="#">Privacy </a>
              </li>
              <li>
                <a href="#"> Terms</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Help </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /col */}
      </div>
      {/* /row */}
    </div>
  </div>
  {/* /Container */}
    </footer>

    </Guest>
  );
};
export default HomePage;
