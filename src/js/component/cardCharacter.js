import React,{useContext}  from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacter = ({character}) => {
    const {store, actions} = useContext(Context);
	return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src={character.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <hr />
                    <p className="card-text text-start">{character.status}</p>
                    <p className="card-text text-start">Specie: {character.species}</p>
                    <p className="card-text text-start">Gender: {character.gender}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={"card-details/character/" + character.id}>
                            <button className="btn btn-outline-primary">Learn More!</button>
                        </Link>
                        <button className={store.favorites.includes(character.name) ? "btn btn-warning text-white" : "btn btn-outline-warning text-warning"} onClick={()=>actions.addFavorites(character.name)}>♥</button>
                    </div>
                </div>
            </div>
        </div>
	);
};