import React, { useContext } from "react";
import { Card_Template } from "./Widgets.jsx";
import { Vista_Content } from "../views/Vista_personalizada.jsx";
import { Context } from "../store/appContext.js";

export const Sidebar = ({ onMenuClick }) => {

    const { actions, store } = useContext(Context);

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: "280px", height: "100vh" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">STAR WARS WIKI</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" onClick={() => {
                        onMenuClick('PERSONAJES');
                        actions.obtener_datos_personajes();
                        actions.setOption('PERSONAJES');
                        actions.setImg(`https://starwars-visualguide.com/assets/img/characters/`);
                    }}>
                        PERSONAJES
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" onClick={() => {
                        onMenuClick('LOCALIZACIONES');
                        actions.obtener_datos_planetas();
                        actions.setOption('LOCALIZACIONES');
                        actions.setImg(`https://starwars-visualguide.com/assets/img/planets/`);

                    }}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                        LOCALIZACIONES
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" onClick={() => {
                        onMenuClick('ESPECIES');
                        actions.obtener_datos_especies();
                        actions.setOption('ESPECIES');
                        actions.setImg(`https://starwars-visualguide.com/assets/img/species/`);
                    }}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                        ESPECIES
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" onClick={() => {
                        onMenuClick('VEHICULOS');
                        actions.obtener_datos_vehiculos();
                        actions.setOption('VEHICULOS');
                        actions.setImg(`https://starwars-visualguide.com/assets/img/vehicles/`);

                    }}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                        VEHICULOS
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" onClick={() => {
                        onMenuClick('NAVES');
                        actions.obtener_datos_naves();
                        actions.setOption('NAVES');
                        actions.setImg(`https://starwars-visualguide.com/assets/img/starships/`);
                    }}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                        NAVES
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" onClick={() => {
                        onMenuClick('PELICULAS');
                        actions.obtener_datos_peliculas();
                        actions.setOption('PELICULAS');
                        actions.setImg(`https://starwars-visualguide.com/assets/img/films/`);
                    }}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                        PELÍCULAS
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
        </div>
    );
}

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
