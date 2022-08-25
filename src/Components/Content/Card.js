import React from 'react';
import {LayoutPaths} from "../../router";

const Card = (props) => {
    return (
        <div className="visa-card">
            <div className="visa-card-img">
                <a href={`${LayoutPaths.Blog}/${props.id}`}>
                    {" "}
                    <img src={props.image} alt="" className="img-fluid"/>
                </a>
            </div>
            <p className='visa-card-program'>{props.category}</p>
            <div className="visa-card-content">
                <h3 className="visa-card-title">
                    <a href={`${LayoutPaths.Blog}/${props.id}`} className="title">
                        {props.name}
                    </a>
                </h3>
                <p className='visacard-description'>
                    {props.description}
                </p>
                <a href={`${LayoutPaths.Blog}/${props.id}`} className="btn-link-primary">
                    Read More
                </a>
            </div>
            <div className="slanting-pattern-small"/>
        </div>
    )
};
export default Card;