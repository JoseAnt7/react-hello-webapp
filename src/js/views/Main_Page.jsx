import React, { useState } from "react";
import { Sidebar, Window_content } from "../component/Components_Main.jsx";

const Main = () => {
    const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);

    const handleMenuClick = (component) => {
        setComponenteSeleccionado(component);
    };

    return (
        <div className="d-flex">
            <Sidebar onMenuClick={handleMenuClick} />
            <Window_content componenteSeleccionado={componenteSeleccionado} />
        </div>
    );
}

export default Main;