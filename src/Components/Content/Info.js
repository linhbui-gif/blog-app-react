import React, { useState } from 'react';
const Info = (props) => {
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
              <div dangerouslySetInnerHTML={{ __html: props.content }}/>
          </div>
          <div className="slanting-pattern-small"  />
        </div>
 
       
    )
};
export default Info;