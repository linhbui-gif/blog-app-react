import Card from './Card';
import cardItem from "../../Service/cardItem";

const Content = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    {cardItem && cardItem.map(element => {
                        return (
                            <div key={element.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-3 col-12 ">
                                <Card image = {element.image} name={element.name} description={element.description} readMore={element.details}  />
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
export default Content;