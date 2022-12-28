import React from "react";
import "../../styles/home.css";

export const CardLocation = (props) => {
	return (
       <div className="card m-2" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Type: {props.type}</p>
            <p className="card-text">Dimesion: {props.dimension}</p>
            <p className="card-text">{props.residents}</p>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary">Learn More!</button>
                <button className="btn btn-outline-warning"><i className="fa-regular fa-heart "></i></button>
            </div>
            </div>
        </div>
	);
};