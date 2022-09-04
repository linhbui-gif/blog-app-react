import img9 from 'images/client-logo/logo-envato.png';

import OWlCarouselComponent from 'components/OwlCarousel';
const ClientContainer = ()=>{
 
    return (
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
              <OWlCarouselComponent className="owl-theme" loop margin={10} items={6} responsive={0} >
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
              </OWlCarouselComponent>
            </div>
            {/* /col */}
            {/* /col */}
          </div>
          {/* row */}
        </div>
        {/* /Container */}
      </div>
    )
}
export default ClientContainer;