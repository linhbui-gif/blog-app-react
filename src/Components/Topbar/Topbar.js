const Topbar = () => {
    return (
        <div class="topbar">
        
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-none d-sm-none d-lg-block d-xl-block">
                    <p class="welcome-text">Welcome to visapress a immigration company website template</p>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="header-block">
                        <span class="header-link d-none d-xl-block"><a href="#" class="anchor-link">Talk to Our Expert</a></span>
                        <span class="header-link">+1 800 123 4567</span>
                        <span class="header-link"> <button type="submit" class="" data-toggle="modal" data-target="#searchModal"> <i class="fa fa-search"></i></button></span>
                        <span class="header-link"><a href="#" class="btn btn-default btn-sm">Apply Now</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

  export default Topbar;
