import React, {useEffect, useState} from 'react';
import Info from "../../Components/Content/Info";
import ApiHelper from '../../Service/services'
const BlogList = () => {
    const [blogDetails , setBlogDetails] = useState({});
    useEffect(() => {
        getBlogDetails();
    }, [])
    const getBlogDetails = async () => {
        try {
            const response = await ApiHelper.get({ path:'news/show/97', params: {}})
            console.log(response);
            if(response.success){
                setBlogDetails(response.data);
            }
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className="content">
        <div className="container">
            <div className="row">
                {blogDetails && blogDetails.map(element => {
                    return (
                        <div key={element.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-3 col-12 ">
                            <Info category={element.category.name} image = {element.url_picture} name={element.name} description={element.description} />
                        </div>)
                })}
            </div>
        </div>
    </div>
    )
}
export default BlogList;