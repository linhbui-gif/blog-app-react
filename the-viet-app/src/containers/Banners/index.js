import OwlCarousel from "react-owl-carousel";
import img1 from "images/hero/hero-1.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OWlCarouselComponent from "components/OwlCarousel";
const BannerContainer = () => {
  
    return (
        <div
            className="hero-1 oh pos-rel"
            style={{ background: 'url("images/hero/banner-bg.png")' }}
        >
            <OWlCarouselComponent className="owl-theme"  loop margin={10} items={1}>
                <div className="hero-banner-carousel owl-loaded owl-carousel">
                    <div className="hero-carousel-item ">
                        <div className="container">
                            <div className="row align-items-center">
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
                            </div>
                        </div>
                    </div>
                </div>
            </OWlCarouselComponent>
        </div>
    )
}
export default BannerContainer;