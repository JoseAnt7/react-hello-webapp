const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			option: '',
			wars: [],
			people: {},
			ruta_img: '',
			img_card: '',
			favoritos: []

		},
		actions: {
			set_ImgCard: (texto) => {
				setStore({ img_card: texto })
				console.log(getStore().img_card);
			},
			get_ImgCard: () => {
				return getStore().img_card;
			},
			setImg: (texto) => {
				setStore({ ruta_img: texto })
				console.log(getStore().ruta_img);
			},
			getImg: () => {
				return getStore().ruta_img;
			},
			setOption: (texto) => {
				setStore({ option: texto })
				console.log(getStore().option);
			},
			getOption: () => {
				return getStore().option;
			},
			addFavorito: (nombre) => {
				const store = getStore();
				if (!store.favoritos.includes(nombre)) {
					setStore({ favoritos: [...store.favoritos, nombre] });
				}
			},
			removeFavorito: (nombre) => {
				const store = getStore();
				setStore({
					favoritos: store.favoritos.filter((item) => item !== nombre)
				});
			},
			obtener_datos_personajes: async () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ wars: data.results });
					})
					.catch(error => console.error("Ha ocurrido un error: " + error));
			},
			obtener_detalle_personaje: async (id) => {

				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.result.properties })
					})
					.catch(error => console.error("Error al obtener detalle:", error))
			},
			obtener_datos_planetas: async () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ wars: data.results });
					})
					.catch(error => console.error("Ha ocurrido un error" + error));
			},
			obtener_detalle_planeta: async (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.result.properties });
					})
					.catch(error => console.error("Ha ocurrido un error" + error))
			},
			obtener_datos_especies: async () => {
				fetch("https://www.swapi.tech/api/species/")
					.then(response => response.json())
					.then(data => { setStore({ wars: data.results }); })
					.catch(error => console.error("Ha ocurrido un error" + error)
					)
			},
			obtener_detalle_especies: async (id) => {
				fetch(`https://www.swapi.tech/api/species/${id}`)
					.then(response => response.json())
					.then(data => { setStore({ people: data.result.properties }); })
					.catch(error => console.error("Ha ocurrido un error" + error)
					)
			},
			obtener_datos_naves: async () => {
				fetch("https://www.swapi.tech/api/starships/")
					.then(response => response.json())
					.then(data => { setStore({ wars: data.results }); })
					.catch(error => console.error("Ha ocurrido un error" + error)
					)
			},
			obtener_detalles_naves: async (id) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(response => response.json())
					.then(data => { setStore({ people: data.result.properties }); })
					.catch(error => console.error("Ha ocurrido un error" + error)
					)
			},
			obtener_datos_vehiculos: async () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(data => { setStore({ wars: data.results }); })
					.catch(error => console.error("Ha ocurrido un error" + error)
					)
			},
			obtener_detalles_vehiculos: async (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(response => response.json())
					.then(data => { setStore({ people: data.result.properties }); })
					.catch(error => console.error("Ha ocurrido un error" + error)
					)
			}
		}
	};
};

export default getState;
