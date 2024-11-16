import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card_Template } from "../component/Widgets.jsx";

export const Vista_Content = () => {
    const { store } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="row">
                {Array.isArray(store.wars) && store.wars.length > 0 ? (
                    store.wars.map((data, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <Card_Template nombre={data.name} uid={data.uid} />
                        </div>
                    ))
                ) : (
                    <p>Sin datos de personajes</p>
                )}
            </div>
        </div>
    );
};
