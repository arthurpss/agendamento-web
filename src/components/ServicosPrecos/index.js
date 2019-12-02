import React from "react"
import "./styles.css"

const Servicos = [
    {
        
        titulo: "Pilates",
    },
    {
        titulo: "Ortopedia",
    },
    {
        titulo: "Traumatologia",
    },
    {
        titulo: "Fisioterapia",
    },
    {
        titulo: "Fisiatria",
    },    
    {
        titulo: "Psicodiagnóstico",
    }
];

const Services = () => Servicos.map(servico => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{servico.titulo}</h5>
        </div>
        <a href="/saibamais" className="Info-Precos">saiba mais</a>     
    </div>
));

export default Services;