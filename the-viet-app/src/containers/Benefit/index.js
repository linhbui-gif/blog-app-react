import img5 from 'images/bg/choose-us.png';
const BenefitContainer = ()=>{
    return (
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
    )
}
export default BenefitContainer;