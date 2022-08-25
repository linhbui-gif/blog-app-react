import React, {useEffect, useState} from 'react';
import Card from "../../Components/Content/Card";
import ApiHelper from '../../Service/services';
import ClipLoader from "react-spinners/ClipLoader";
import  './bloglist.css';
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const BlogList = () => {
    const [blogList , setBlogList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        getBlogList();
    },[])
    const getBlogList = async () => {
        try {
            setLoaded(true)
            const response = await ApiHelper.get({ path:'news', params: {}})
            if(response.success){
                setBlogList(response.data);
                setLoaded(false)
            }
        } catch (e) {
            setLoaded(true)
        }
    }
    return (
        <div className="content">
             <div className={`loading ${loaded !== true ? 'hide' : ""}`}><ClipLoader color={"white"} loading={loaded}
                                                                                    cssOverride={override}/></div>

            <div className="container">
                <div className="row">
                    {blogList && blogList.map(element => {
                        return (
                            <div key={element.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-3 col-12 ">
                                <Card id={element.id} category={element.category.name} image = {element.url_picture} name={element.name} description={element.description} />
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
export default BlogList;