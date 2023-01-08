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
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.length > 0 ? 
									store.favorites.map((favorite, i) =>{return <li key={i} className="dropdown-item d-flex justify-content-between">
											{favorite} <p onClick={() => actions.addFavorites(favorite)}><i className="fa-solid fa-trash"></i></p></li>
									}) : <li className="dropdown-item">EMPTY</li>}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
