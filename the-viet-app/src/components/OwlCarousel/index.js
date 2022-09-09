import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OWlCarouselComponent = ({options,children}) => {
   

    return (
        <OwlCarousel className="owl-theme" {...options}  >
            {children}
        </OwlCarousel>
    )
}
export default OWlCarouselComponent;