import React from "react"

const especialidades = [
    {

        titulo: "Pediatria",
        descricao: "Cuida de criança",
    },
    {
        titulo: "Urologia",
        descricao: "Cuida de pênis"
    },
    {
        titulo: "Neurologia",
        descricao: "Cuida de neurônio"
    },
    {
        titulo: "Geral",
        descricao: "Cuida do geral"
    }
];

const Especialidades = () => especialidades.map(especialidade => (
    <li className="list-group-item" style={{marginTop: "20px"}}>
        <span><b>{especialidade.titulo}</b></span>
        <br/>
        <span style={{marginTop: "5px"}}>{especialidade.descricao}</span>
    </li>
));

export {Especialidades, especialidades};