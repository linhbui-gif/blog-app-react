import React, {useEffect, useState} from 'react';
import Info from "../../Components/Content/Info";
import ApiHelper from '../../Service/services'
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from '@reach/router';
import './blogDetail.css'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const BlogDetail = () => {
    const [blogDetails, setBlogDetails] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        getBlogDetails();
    }, [])
    const getBlogDetails = async () => {
        try {
            setLoaded(true)
            const response = await ApiHelper.get({path: `news/show/${id}`, params: {}})
            if (response.success) {
                setBlogDetails(response.data);
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
                    <Info image={blogDetails.url_picture} name={blogDetails.name} description={blogDetails.description}
                          content={blogDetails.content}/>
                </div>
            </div>
        </div>
    )
}
export default BlogDetail;