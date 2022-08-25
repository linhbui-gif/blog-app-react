const HeaderLayout = () => {
    return (
        <>
            <div className="navbar-area">
                <div className="acavo-responsive-nav">
                    {/* Container */}
                    <div className="container">
                        <div className="acavo-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="./assets/images/logo-2.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* /Container */}
                </div>
                <div className="acavo-nav">
                    {/* Container */}
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="./assets/images/logo-2.png" alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse mean-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link active">
                                            Trang chủ{" "}
                                        </a>
                                        {/* <ul class="dropdown-menu">
                              <li class="nav-item"><a href="index.html" class="nav-link active">Home 1</a></li>
                              <li class="nav-item"><a href="index-2.html" class="nav-link">Home 2</a></li>
                              <li class="nav-item"><a href="index-3.html" class="nav-link">Home 3</a></li>
                          </ul> */}
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Giới thiệu
                                            <i className="las la-angle-down" />{" "}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="about-us-1.html" className="nav-link">
                                                    Về chúng tôi
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="congtacvien.html" className="nav-link">
                                                    Cộng tác{" "}
                                                </a>{" "}
                                            </li>
                                            <li className="nav-item">
                                                <a href="danhsachhuongdan.html" className="nav-link">
                                                    Hướng dẫn
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="service.html" className="nav-link">
                                            Dịch vụ{" "}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog.html" className="nav-link">
                                            Tin tức
                                        </a>
                                        {/* <ul class="dropdown-menu">
                              <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
                              <li class="nav-item"><a href="blog-grid.html" class="nav-link">Blog Grid</a></li>
                              <li class="nav-item"><a href="blog-single-sidebar.html" class="nav-link">Blog Single
                                      Sidebar</a>
                              </li>
                              <li class="nav-item"><a href="blog-single.html" class="nav-link">Blog Single</a>
                              </li>
                          </ul> */}
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">
                                            Liên Hệ
                                        </a>
                                    </li>
                                </ul>
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <form className="search-box">
                                            <input
                                                type="text"
                                                className="input-search"
                                                placeholder="Tra cứu thông tin..."
                                            />
                                            <button type="submit">
                                                <i className="uil uil-search-alt" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="option-item">
                                        <a href="contact.html" className="btn theme-btn-1">
                                            Đăng ký thẻ ngay <i className="las la-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* /Container */}
                </div>
                <div className="others-option-for-responsive">
                    {/* Container */}
                    <div className="container">
                        <div className="dot-menu">
                            <div className="inner">
                                <div className="circle circle-one" />
                                <div className="circle circle-two" />
                                <div className="circle circle-three" />
                            </div>
                        </div>
                        {/* Container */}
                        <div className="container">
                            <div className="option-inner">
                                <div className="others-option">
                                    <div className="option-item">
                                        <form className="search-box">
                                            <input
                                                type="text"
                                                className="input-search"
                                                placeholder="Search for anything"
                                            />
                                            <button type="submit">
                                                <i className="flaticon-loupe" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="option-item">
                                        <a href="contact.html" className="btn theme-btn-1">
                                            <i className="las la-angle-right" />
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Container */}
                    </div>
                    {/* /Container */}
                </div>
            </div>

        </>
    )
}
export default HeaderLayout;