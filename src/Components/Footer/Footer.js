
const Footer = ()=>{
  return (
    <div className="footer-dark">
    <div className="container">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-6">
          <div className="widget-footer">
            <h3 className="widget-title">Country</h3>
            <ul className="listnone arrow-footer">
              <li>
                <a href="#">Canada</a>
              </li>
              <li>
                <a href="#">United States</a>
              </li>
              <li>
                <a href="#">United Kingdom</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
              <li>
                <a href="#">New Zealand</a>
              </li>
              <li>
                <a href="#">Singapore</a>
              </li>
              <li>
                <a href="#">South Africa</a>
              </li>
              <li>
                <a href="#">Germany</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-6">
          <div className="widget-footer">
            <h3 className="widget-title">Visas</h3>
            <ul className="listnone arrow-footer">
              <li>
                <a href="#"> Students Visas</a>
              </li>
              <li>
                <a href="#">Business Visas</a>
              </li>
              <li>
                <a href="#">Family Visas</a>
              </li>
              <li>
                <a href="#">Travel Visas</a>
              </li>
              <li>
                <a href="#">Work Visas</a>
              </li>
              <li>
                <a href="#">Visitor Visas</a>
              </li>
              <li>
                <a href="#">Migrate Visas</a>
              </li>
              <li>
                <a href="#">PR Visas</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-6">
          <div className="widget-footer">
            <h3 className="widget-title">Contact Us</h3>
            <strong>Corporate Office</strong>
            <address>
              2279 Fire Access Road
              <br /> Greensboro, NC 27401
            </address>
            <p>
              1800 102 4150
              <br /> 1800 102 4151
            </p>
            <p>
              <a href="#">Schedule a Meeting</a>
              <br />
              <a href="#">Talk to our Expert</a>
            </p>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-2 col-6">
          <div className="widget-footer widget-social">
            <h3 className="widget-title">Connect</h3>
            <ul className="listnone">
              <li>
                <a href="#">
                  <i className="fa fa-facebook social-icon" /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter social-icon" /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram social-icon" /> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube social-icon" /> Youtube
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin social-icon" /> Linked In
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h3 className="widget-title">GET IMMIGRATION TIPS &amp; NEWS</h3>
            <p>Sign up for our Newsletter and join us on the path to success.</p>
            <form
              method="post"
              action="https://jituchauhan.com/visa/visapress/newsletter-email.php"
            >
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="newsletteremail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="newsletteremail"
                    name="newsletteremail"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-default">
                Sign UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )

}
export default Footer;