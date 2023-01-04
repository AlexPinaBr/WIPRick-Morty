import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardLocation } from "../component/cardLocation"
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getLocations();
	},[])

	return(
		<div className="container-fluid container-xl text-start mt-5">
			<h1>CHARACTERS</h1>
			<div className="row gap-2">
				{store.characters.map((item, index)=>{
					console.log(item)
					return (<CardCharacter key={index} 
						index = {index}
					/>)
				})}
			</div>
			<div className="text-start mt-5">
				<h1>LOCATIONS</h1>
				<div className="row gap-2">
					{store.locations.map((item, index)=>{
						console.log(item)
						return (<CardLocation key={index} 
							index = {index}
						/>)
					})}
				</div>
			</div>
		</div>
		)
};

