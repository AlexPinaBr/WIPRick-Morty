import React from "react";
import "../../styles/home.css";

export const CardEpisode = ({episode}) => {
	return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{episode.name}</h5>
                    <hr />
                    <p className="card-text">Air Date: {episode.air_date}</p>
                    <p className="card-text">Episode: {episode.episode}</p>
                </div>
            </div>
        </div>
	);
};