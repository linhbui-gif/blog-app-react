import React, {useEffect, useState} from 'react';
import Card from "../../Components/Content/Card";
import ApiHelper from '../../Service/services'
const BlogList = () => {
    const [blogList , setBlogList] = useState([]);
    useEffect(() => {
        getBlogList();
    },[])
    const getBlogList = async () => {
        try {
            const response = await ApiHelper.get({ path:'news', params: {}})
            if(response.success){
                setBlogList(response.data);
            }
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className="content">
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