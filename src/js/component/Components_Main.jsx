import React, { useContext, useState } from "react";
import { Card_Template } from "./Widgets.jsx";
import { Vista_Content } from "../views/Vista_personalizada.jsx";
import { Context } from "../store/appContext.js";

export const Sidebar = ({ onMenuClick }) => {
    const { store, actions } = useContext(Context);


    const [activeOption, setActiveOption] = useState('PERSONAJES');

    // Función para manejar clics en el menú
    const handleMenuClick = (option, actionCallback, imgPath) => {
        setActiveOption(option);
        onMenuClick(option);
        actionCallback();
        actions.setOption(option);
        actions.setImg(imgPath);
    };

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: "280px", height: "100vh" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">STAR WARS WIKI</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a
                        href="#"
                        className={`nav-link ${activeOption === 'PERSONAJES' ? 'active' : 'text-white'}`}
                        onClick={() => handleMenuClick('PERSONAJES', actions.obtener_datos_personajes, `https://starwars-visualguide.com/assets/img/characters/`)}
                    >
                        PERSONAJES
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`nav-link ${activeOption === 'LOCALIZACIONES' ? 'active' : 'text-white'}`}
                        onClick={() => handleMenuClick('LOCALIZACIONES', actions.obtener_datos_planetas, `https://starwars-visualguide.com/assets/img/planets/`)}
                    >
                        LOCALIZACIONES
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`nav-link ${activeOption === 'ESPECIES' ? 'active' : 'text-white'}`}
                        onClick={() => handleMenuClick('ESPECIES', actions.obtener_datos_especies, `https://starwars-visualguide.com/assets/img/species/`)}
                    >
                        ESPECIES
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`nav-link ${activeOption === 'VEHICULOS' ? 'active' : 'text-white'}`}
                        onClick={() => handleMenuClick('VEHICULOS', actions.obtener_datos_vehiculos, `https://starwars-visualguide.com/assets/img/vehicles/`)}
                    >
                        VEHICULOS
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`nav-link ${activeOption === 'NAVES' ? 'active' : 'text-white'}`}
                        onClick={() => handleMenuClick('NAVES', actions.obtener_datos_naves, `https://starwars-visualguide.com/assets/img/starships/`)}
                    >
                        NAVES
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
            <div className="dropdown mt-3">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownFavoritos"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favoritos
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownFavoritos">
                    {store.favoritos.length > 0 ? (
                        store.favoritos.map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#">
                                    {item}
                                </a>
                            </li>
                        ))
                    ) : (
                        <li>
                            <span className="dropdown-item text-muted">No hay favoritos</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export const Window_content = ({ componenteSeleccionado }) => {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: "url('https://i.gifer.com/6njR.gif')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover",
                animation: "moveBackground 20s linear infinite",
                width: "100%",
                height: "100vh"
            }}
        >
            {componenteSeleccionado === 'PERSONAJES' && <Vista_Content />}
            {componenteSeleccionado === 'LOCALIZACIONES' && <Vista_Content />}
            {componenteSeleccionado === 'ESPECIES' && <Vista_Content />}
            {componenteSeleccionado === 'VEHICULOS' && <Vista_Content />}
            {componenteSeleccionado === 'NAVES' && <Vista_Content />}
            {componenteSeleccionado === 'PELICULAS' && <Vista_Content />}
        </div>
    );
};
