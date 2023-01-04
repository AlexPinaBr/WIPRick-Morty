import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const CardLocation = (props) => {
    console.log("props", props)
    const {store, actions} = useContext(Context);
	return (
       <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{store.locations[props.index].name}</h5>
            <p className="card-text">Type: {store.locations[props.index].type}</p>
            <p className="card-text">Dimesion: {store.locations[props.index].dimension}</p>
            <p className="card-text">{store.locations[props.index].residents}</p>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary">Learn More!</button>
                <button className="btn btn-outline-warning"><i className="fa-regular fa-heart "></i></button>
            </div>
            </div>
        </div>
	);
};