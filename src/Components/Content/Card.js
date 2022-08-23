import React, { useState } from 'react';
const Card = (props) => {
    return (
          <div className="visa-card">
          <div className="visa-card-img">
            <a href="#">
              {" "}
              <img src={props.image} alt="" className="img-fluid" />
            </a>
          </div>
              <p>{props.category}</p>
          <div className="visa-card-content">
            <h3 className="visa-card-title">
              <a href="#" className="title">
                  {props.name}
              </a>
            </h3>
            <p>
                {props.description}
            </p>
            <a href="#" className="btn-link-primary">
                Read More
            </a>
          </div>
          <div className="slanting-pattern-small" />
        </div>
 
       
    )
};
export default Card;