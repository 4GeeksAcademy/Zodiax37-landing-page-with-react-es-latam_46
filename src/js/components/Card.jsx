import React from "react"
import PropTypes from "prop-types";

export const Card = (props) => {
    return (
        <div className="card col-3 d-flex flex-column" style={{ width: "18rem", height: "100%" }}>
            <div style={{ height: "200px", overflow: "hidden" }}>
                <img 
                    src={props.img_src} 
                    className="card-img-top h-100 w-100" 
                    alt="..." 
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <a href={props.btn_Url} className="btn btn-primary mt-auto" role="button">{props.btn_label}</a>
            </div>
        </div>
    );
};


Card.propTypes={
    title: PropTypes.string,
    description: PropTypes.string,
    btn_label: PropTypes.string,
    btn_Url: PropTypes.string,
    img_src: PropTypes.string
}

