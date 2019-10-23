import React from "react"

const Serviços = [
    {
        titulo: "Pilates",
        preço: 100
    },
    {
        titulo: "Ortopedia",
        preço: 200
    },
    {
        titulo: "Traumatologia",
        preço: 300
    },
    {
        titulo: "Fisioterapia",
        preço: 400
    },
    {
        titulo: "Fisiatria",
        preço: 500
    },    
    {
        titulo: "Exame de Eletroneuromiogfrafia",
        preço: 600
    }
];

const Services = () => Serviços.map(serviço => (
    <li className="list-group-item" style={{marginTop: "20px"}}>
        <span><b>{serviço.titulo}</b></span>
        <br/>
        <span style={{marginTop: "5px"}}>{serviço.preço}</span>
    </li>
));

export default Services;