import ButtonComponent from "../components/Button";
import InputComponent from "../components/Input";

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
                                            <InputComponent className="input-search" type="text" placeholder="Tra cứu thông tin..." />
                                            <button type="submit">
                                                <i className="uil uil-search-alt" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="option-item">
                                        <ButtonComponent iconClass="las la-angle-right" icon = {true} className="theme-btn-1" buttonType={true} name="Đăng ký ngay" />
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
                                            <ButtonComponent type="submit" iconClass="flaticon-loupe" icon = {true} className="theme-btn-1" buttonType={false} name="Get Started" />
                                        </form>
                                    </div>
                                    <div className="option-item">
                                        <ButtonComponent iconClass="las la-angle-right" icon = {true} className="theme-btn-1" buttonType={true} name="Get Started" />
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