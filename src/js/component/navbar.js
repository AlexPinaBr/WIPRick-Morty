import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<div className="w-25 p-3">
					<Link to="/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" alt="RickAndMorty" width="170px" height="70px"/>
					</Link>
				</div>
				<div className="ml-auto">
				<div class="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-start">
						{store.favorites.map((index, i) => {
							return( 
							<li key={index} 
							className="d-flex justify-content-between align-items-center">
								{store.characters[index].name}
								<i 
									type='button' onClick={() => {
										setStore(store.filter((e,i) => i != index))
									}}
									className="fa-solid fa-trash"> 
                            	</i>
							
							</li>)
						})}
					</ul>
				</div>
				</div>
			</div>
		</nav>
	);
};
