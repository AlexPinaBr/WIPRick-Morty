import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const CardCharacter = (props) => {
    const {store, actions} = useContext(Context);
	return (
        <div className="card" style={{width: "18rem"}}>
            <img src={store.characters[props.index].image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{store.characters[props.index].name}</h5>
            <p className="card-text text-start">{store.characters[props.index].status}</p>
            <p className="card-text text-start">Specie: {store.characters[props.index].species}</p>
            <p className="card-text text-start">Gender: {store.characters[props.index].gender}</p>
            <p className="card-text text-start">Origin: {store.characters[props.index].origin.name}</p>
            <p className="card-text text-start">{store.characters[props.index].description}</p>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary">Learn More!</button>
                <button 
                    className="btn btn-outline-warning"
                    onClick={(e)=>actions.addFavorites(props.index)} >
                        <i className="fa-regular fa-heart"></i>
                </button>
            </div>
            </div>
         </div>
	);
};