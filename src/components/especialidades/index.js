import React from "react"

const especialidades = [
    {
        titulo: "Pediatria",
        descricao: "Cuida de criança"
    },
    {
        titulo: "Urologia",
        descricao: "Cuida de pinto"
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
    <li style={{marginTop: "20px"}}>
        <span>{especialidade.titulo}</span>
        <br/>
        <span style={{marginTop: "5px"}}>{especialidade.descricao}</span>
    </li>
));

export default Especialidades;