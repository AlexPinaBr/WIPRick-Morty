import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardLocation } from "../component/cardLocation"
import { CardEpisode } from "../component/cardEpisode";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getLocations();
		actions.getEpisodes();
	},[])

	return(
		<div className="container-fluid container-xl text-start mt-5">
			<h1>CHARACTERS</h1>
			<div className="container row flex-nowrap overflow-auto">
				{store.characters.map((character)=>{
					return (<CardCharacter key={character.id} character={character}/>)
				})}
			</div>
			<div className="text-start mt-5">
				<h1>LOCATIONS</h1>
				<div className="container row flex-nowrap overflow-auto">
					{store.locations.map((location)=>{
						return (<CardLocation key={location.id} location={location}/>)
					})}
				</div>
			</div>
			<div className="text-start mt-5">
				<h1>EPISODES</h1>
				<div className="container row flex-nowrap overflow-auto">
					{store.episodes.map((episode)=>{
						return (<CardEpisode key={episode.id} episode={episode}/>)
					})}
				</div>
			</div>
		</div>
		)
};

