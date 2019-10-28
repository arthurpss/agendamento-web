import React from "react";
import Calendar from "react-calendar";
import "./styles.css";

const Calendario = () => (
    <div>
    <Calendar className="calendario"
              locale="pt-BR"/>
        <div>
            Foto do médico
        </div>
    </div>
);

export default Calendario;