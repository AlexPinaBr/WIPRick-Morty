const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			favorites: [],
			detailsInfo: {}
		},
		actions: {
			getCharacters: async () => {
				const response = await fetch('https://rickandmortyapi.com/api/character')
				const data = await response.json();
				setStore({characters: data.results});
			},
			getLocations: async () => {
				const response = await fetch('https://rickandmortyapi.com/api/location')
				const data = await response.json()
				setStore({locations: data.results})
			},
			
			addFavorites: (index) => {
			//	console.log(getStore())
			//	setStore({favorites:[...getStore().favorites, index]})
			//	console.log(getStore())
				if (getStore().favorites.indexOf(index) == -1){
				setStore({favorites:[...getStore().favorites, index]})
				}else { //fórmula para borrar si vuelves a dar al corazón
					const deleteFavorites = store.favorites(valor => {
					return valor != index;
					})
					setStore({favorites: deleteFavorites})
				}
			}
			
			
		}
	};
};

export default getState;