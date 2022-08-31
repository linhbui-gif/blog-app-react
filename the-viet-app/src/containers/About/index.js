const AboutContainer = () => {
    return (
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
    )
}
export default AboutContainer;