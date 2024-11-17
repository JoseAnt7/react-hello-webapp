import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card_Template = ({ uid, nombre, img }) => {
    const navigate = useNavigate();

    const { store, actions } = useContext(Context);

    const handleLearnMore = () => {
        switch (actions.getOption()) {
            case 'PERSONAJES':
                actions.obtener_detalle_personaje(uid);
                navigate(`/people/${uid}`);
                break;
            case 'LOCALIZACIONES':
                actions.obtener_detalle_planeta(uid);
                navigate(`/planets/${uid}`);
                break;

            case 'ESPECIES':
                actions.obtener_detalle_especies(uid);
                navigate(`/species/${uid}`);
                break;

            case 'VEHICULOS':
                actions.obtener_detalles_vehiculos(uid);
                navigate(`/vehicles/${uid}`);
                break;

            case 'NAVES':
                actions.obtener_detalles_naves(uid);
                navigate(`/starships/${uid}`);
                break;
            default:
                break;
        }

    };

    return (
        <div className="card shadow-sm border-0 rounded" style={{ width: "13rem", height: "14rem", overflow: "hidden" }}>
            <img
                src={`${img}` + `${uid}` + `.jpg`}
                className="card-img-top"
                alt="Card image"
                style={{ height: "7rem", objectFit: "cover", borderRadius: "0.5rem 0.5rem 0 0" }}
            />
            <div className="card-body d-flex flex-column align-items-center" style={{ padding: "0.75rem", backgroundColor: "#f9f9f9" }}>
                <h5 className="card-title text-center mb-2" style={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}>{nombre}</h5>
                <a
                    href="#"
                    className="btn btn-outline-primary btn-sm mt-auto"
                    style={{ fontSize: "0.8rem", padding: "0.3rem 0.8rem", borderRadius: "20px" }}
                    onClick={handleLearnMore}
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};



