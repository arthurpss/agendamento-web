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
    <li>
        {especialidade.titulo}
        <br/>
        (especialidade.descricao}
    </li>
));

export default Especialidades;