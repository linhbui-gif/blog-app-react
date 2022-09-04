import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OWlCarouselComponent = ({responsive,loop,margin,items,children}) => {
   
    //   const responsive = {
    //         0: {
    //             items: 1,
    //         },
    //         450: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 3,
    //         },
    //         1000: {
    //             items: 6,
    //         },
    //     }
    
    return (
        <OwlCarousel className="owl-theme" loop={loop} margin={margin} items={items} responsive={responsive}  >
            {children}
        </OwlCarousel>
    )
}
export default OWlCarouselComponent;