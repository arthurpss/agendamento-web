import React from "react"
import "./styles.css"

const especialidades = [
    {

        especialidade: "Pediatria",
        descricao: "Cuida de criança",
    },
    

];

const Especialidades = () => especialidades.map(response => (
    <li className="list-group-item" style={{marginTop: "20px"}}>
        <span><b>{response.especialidade}</b></span>
        <br/>
        <span style={{marginTop: "5px"}}>{especialidades.descricao}</span>
    </li>
));

export {Especialidades, especialidades};