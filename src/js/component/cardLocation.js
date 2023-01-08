import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CardLocation = ({location}) => {
	return (
        <div className="col">    
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <hr />
                    <p className="card-text">Type: {location.type}</p>
                    <p className="card-text">Dimesion: {location.dimension}</p>
                    <p className="card-text">Residents: {location.residents.length}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={"card-details/location/" + location.id}>
                            <button className="btn btn-outline-primary">Learn More!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
	);
};