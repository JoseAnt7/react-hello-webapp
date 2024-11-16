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
                className="card text-light bg-dark"
                style={{
                    width: "24rem",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
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
    );
};
