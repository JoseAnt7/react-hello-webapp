import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const People = () => {
    const { store } = useContext(Context);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: "url('https://i.gifer.com/6njR.gif')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover",
                animation: "moveBackground 20s linear infinite",
                width: "100%",
                height: "100vh"
            }}
        >
            <div
                className="d-flex bg-dark text-light p-3"
                style={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                }}
            >
                <div
                    className="me-3 d-flex align-items-center"
                    style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                    }}
                >
                    <img
                        src={store.img_card}
                        alt={store.people && store.people.name ? store.people.name : "Character"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div
                    className="card bg-dark text-light"
                    style={{
                        width: "24rem"
                    }}
                >
                    <div className="card-header text-center">
                        <h2>{store.people && store.people.name ? store.people.name : "Loading..."}</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush bg-dark">
                            <li className="list-group-item bg-dark text-light">
                                <strong>Height:</strong> {store.people.height || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Mass:</strong> {store.people.mass || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Hair Color:</strong> {store.people.hair_color || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Skin Color:</strong> {store.people.skin_color || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Eye Color:</strong> {store.people.eye_color || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Birth Year:</strong> {store.people.birth_year || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Gender:</strong> {store.people.gender || "Unknown"}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer text-center">
                        <small>Character Sheet</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Planets = () => {
    const { store } = useContext(Context);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: "url('https://i.gifer.com/6njR.gif')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover",
                animation: "moveBackground 20s linear infinite",
                width: "100%",
                height: "100vh"
            }}
        >
            <div
                className="d-flex bg-dark text-light p-3"
                style={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                }}
            >
                <div
                    className="me-3 d-flex align-items-center"
                    style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                    }}
                >
                    <img
                        src={store.img_card}
                        alt={store.people?.name || "Planet"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div
                    className="card bg-dark text-light"
                    style={{
                        width: "24rem"
                    }}
                >
                    <div className="card-header text-center">
                        <h2>{store.people?.name || "Loading..."}</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush bg-dark">
                            <li className="list-group-item bg-dark text-light">
                                <strong>Diameter:</strong> {store.people?.diameter || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Rotation Period:</strong> {store.people?.rotation_period || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Orbital Period:</strong> {store.people?.orbital_period || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Gravity:</strong> {store.people?.gravity || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Population:</strong> {store.people?.population || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Climate:</strong> {store.people?.climate || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Terrain:</strong> {store.people?.terrain || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Surface Water:</strong> {store.people?.surface_water || "Unknown"}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer text-center">
                        <small>Planet Information</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Especies = () => {
    const { store } = useContext(Context);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: "url('https://i.gifer.com/6njR.gif')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover",
                animation: "moveBackground 20s linear infinite",
                width: "100%",
                height: "100vh"
            }}
        >
            <div
                className="d-flex bg-dark text-light p-3"
                style={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                }}
            >
                <div
                    className="me-3 d-flex align-items-center"
                    style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                    }}
                >
                    <img
                        src={store.img_card}
                        alt={store.people?.name || "Species"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div
                    className="card text-light bg-dark"
                    style={{
                        width: "30rem",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                    }}
                >
                    <div className="card-header text-center">
                        <h2>{store.people && store.people.name ? store.people.name : "Loading..."}</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush bg-dark">
                            <li className="list-group-item bg-dark text-light">
                                <strong>Classification:</strong> {store.people.classification || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Designation:</strong> {store.people.designation || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Average Height:</strong> {store.people.average_height || "Unknown"} cm
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Average Lifespan:</strong> {store.people.average_lifespan || "Unknown"} years
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Hair Colors:</strong> {store.people.hair_colors || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Skin Colors:</strong> {store.people.skin_colors || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Eye Colors:</strong> {store.people.eye_colors || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Language:</strong> {store.people.language || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Homeworld:</strong>{" "}
                                <a
                                    href={store.people.homeworld}
                                    className="text-warning"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Planet Link
                                </a>
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Related People:</strong>
                                <ul className="list-unstyled mt-2">
                                    {store.people.people && store.people.people.length > 0
                                        ? store.people.people.map((person, index) => (
                                            <li key={index}>
                                                <a
                                                    href={person}
                                                    className="text-warning"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Person {index + 1}
                                                </a>
                                            </li>
                                        ))
                                        : "No related people"}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer text-center">
                        <small>Species Information</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Vehiculos = () => {
    const { store } = useContext(Context);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: "url('https://i.gifer.com/6njR.gif')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover",
                animation: "moveBackground 20s linear infinite",
                width: "100%",
                height: "100vh"
            }}
        >
            <div
                className="d-flex bg-dark text-light p-3"
                style={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                }}
            >
                {/* Contenedor de la imagen */}
                <div
                    className="me-3 d-flex align-items-center"
                    style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                    }}
                >
                    <img
                        src={store.img_card}
                        alt={store.people?.name || "Vehicle"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                {/* Contenedor de la tarjeta */}
                <div
                    className="card text-light bg-dark"
                    style={{
                        width: "30rem",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                    }}
                >
                    <div className="card-header text-center">
                        <h2>{store.people?.name || "Loading..."}</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush bg-dark">
                            <li className="list-group-item bg-dark text-light">
                                <strong>Model:</strong> {store.people?.model || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Vehicle Class:</strong> {store.people?.vehicle_class || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Manufacturer:</strong> {store.people?.manufacturer || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Cost (credits):</strong> {store.people?.cost_in_credits || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Length:</strong> {store.people?.length || "Unknown"} m
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Crew:</strong> {store.people?.crew || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Passengers:</strong> {store.people?.passengers || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Max Speed:</strong> {store.people?.max_atmosphering_speed || "Unknown"} km/h
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Cargo Capacity:</strong> {store.people?.cargo_capacity || "Unknown"} kg
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Consumables:</strong> {store.people?.consumables || "Unknown"}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer text-center">
                        <small>Vehicle Information</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Naves = () => {
    const { store } = useContext(Context);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: "url('https://i.gifer.com/6njR.gif')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover",
                animation: "moveBackground 20s linear infinite",
                width: "100%",
                height: "100vh"
            }}
        >
            <div
                className="d-flex bg-dark text-light p-3"
                style={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                }}
            >
                {/* Contenedor de la imagen */}
                <div
                    className="me-3 d-flex align-items-center"
                    style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                    }}
                >
                    <img
                        src={store.img_card}
                        alt={store.people?.name || "Starship"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                {/* Contenedor de la tarjeta */}
                <div
                    className="card text-light bg-dark"
                    style={{
                        width: "30rem",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                    }}
                >
                    <div className="card-header text-center">
                        <h2>{store.people?.name || "Loading..."}</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush bg-dark">
                            <li className="list-group-item bg-dark text-light">
                                <strong>Model:</strong> {store.people?.model || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Starship Class:</strong> {store.people?.starship_class || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Manufacturer:</strong> {store.people?.manufacturer || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Cost (credits):</strong> {store.people?.cost_in_credits || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Length:</strong> {store.people?.length || "Unknown"} m
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Crew:</strong> {store.people?.crew || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Passengers:</strong> {store.people?.passengers || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Max Speed:</strong> {store.people?.max_atmosphering_speed || "Unknown"} km/h
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Hyperdrive Rating:</strong> {store.people?.hyperdrive_rating || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>MGLT:</strong> {store.people?.MGLT || "Unknown"}
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Cargo Capacity:</strong> {store.people?.cargo_capacity || "Unknown"} kg
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <strong>Consumables:</strong> {store.people?.consumables || "Unknown"}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer text-center">
                        <small>Starship Information</small>
                    </div>
                </div>
            </div>
        </div>
    );
};



