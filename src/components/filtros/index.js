import React from "react"
import "./styles.css"

const Filtros = () => (
    <div className="container" id="agendar">
        <div className="row">
            <div className="col-6 dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Especialidades
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item">Pediatria</button>
                    <button className="dropdown-item">Urologia</button>
                    <button className="dropdown-item">Neurologia</button>
                    <button className="dropdown-item">Geral</button>
                </div>
            </div>
            <div className="col-6">
                <a href="#informacoes"><b>Informações</b></a>
            </div>
        </div>
    </div>
);

export default Filtros;