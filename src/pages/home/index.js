import React from "react";
import Guest from "layouts/Guest";
const HomePage = () => {
    return (
        <Guest>
            <div
                className="hero-1 oh pos-rel"
                style={{ background: 'url("images/hero/banner-bg.png")' }}
            >
                {/* container */}
                <div className="hero-banner-carousel owl-loaded owl-carousel">
                    <div className="hero-carousel-item ">
                        <div className="container">
                            {/* row */}
                            <div className="row align-items-center">
                                {/* col */}
                                <div className="col-lg-5">
                                    <div className="hero-1-content wow fadeInLeft animated">
                                        <h5 className="cate  wow fadeInUp animated" data-wow-delay="0.2s">
                                            #Thẻ Việt
                                        </h5>
                                        <h1
                                            className="title  wow fadeInUp animated"
                                            data-wow-delay="0.4s"
                                        >
                                            Một Thẻ Quốc Gia
                                        </h1>
                                        <p className=" wow fadeInUp animated" data-wow-delay="0.6s">
                                            Mở tài khoản miễn phí trong vài phút từ ứng dụng điện thoại của
                                            bạn trải nghiệm vô vàn tiện ích thông minh
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
                                            src="images/hero/hero-1.png"
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

        </Guest>
    )
}
export default HomePage;