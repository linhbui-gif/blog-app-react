import OwlCarousel from "react-owl-carousel";
import img1 from "images/hero/hero-1.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OWlCarouselComponent from "components/OwlCarousel";
import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";
const BannerContainer = () => {
    const options = {
        loop:true,
        margin : 10,
        items :1,
        responsive:{
            0: {
                items:2
            },
            1200:{
                items:1
            }
        }
    }
    const [slider,setSlider] = useState([]);
    useEffect(()=>{
        getSlider();
    },[]);
    const getSlider = async ()=>{
        try {
            const response = await ApiHelper.get({ path:'slider-home', params: {}});
          
            if(response.success){
                setSlider(response.data)
            }
        } catch (error) {
            console.log('error');
        }
    }
    
    return (
        <div
            className="hero-1 oh pos-rel"
            style={{ background: 'url("images/hero/banner-bg.png")' }}
        >
            <OWlCarouselComponent options={options}>
                {slider && slider.map(element =>{
                    return(
                        <div className="hero-banner-carousel owl-loaded owl-carousel">
                        <div key ={element.id} className="hero-carousel-item ">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="hero-1-content wow fadeInLeft animated">
                                        <h5
                                            className="cate  wow fadeInUp animated"
                                            data-wow-delay="0.2s"
                                        >
                                            {element.name}
                                        </h5>
                                        <h1
                                            className="title  wow fadeInUp animated"
                                            data-wow-delay="0.4s"
                                        >
                                            {element.title}
                                        </h1>
                                        <p  dangerouslySetInnerHTML={{ __html: element.description }}
                                            className=" wow fadeInUp animated"
                                            data-wow-delay="0.6s"
                                        >
                                           
                                        </p>
                                        <div className="hero-1-button-group">
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalHomeSLider"
                                                className="btn theme-btn-1  wow fadeInUp animated"
                                                data-wow-delay="0.8s"
                                            >
                                                {element.button_name}
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
                                            src={element.picture}
                                            alt="hero-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })}
                
            </OWlCarouselComponent>
        </div>
    )
}
export default BannerContainer;