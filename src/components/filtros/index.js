import React from "react"
import "./styles.css"

const especialidades = [
    {
        titulo: "Pediatria",
    },
    {
        titulo: "Oftalmologia",
    },
    {
        titulo: "Urologia",
    },
    {
        titulo: "Cardiologia",
    }
];

const Filtros = () => (
    <div className="container" id="filtros">
        <div className="row">
            <div className="col-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="form-control">
                            Especialidade
                        </label>
                        <select className="form-control" id="form-control">
                            {
                                especialidades.map(especialidade =>
                                    <option>
                                        {especialidade.titulo}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </form>
            </div>
            <div className="col-6">
                <a href="#informacoes"><b>Informações</b></a>
            </div>
        </div>
    </div>
);

export default Filtros;