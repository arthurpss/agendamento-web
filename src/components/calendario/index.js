import React from "react";
import Calendar from "react-calendar";
import "./styles.css";

const Calendario = () => {
    return (
        <div>
            <Calendar className="calendario"
                      locale="pt-BR"/>
            <div>
            </div>
        </div>
    );
};

export default Calendario;