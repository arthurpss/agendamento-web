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

// const Services = () => Servicos.map(serviço => (
//     <li className="list-group-item" style={{marginTop: "20px"}}>
//         <span><b>{serviço.titulo}</b></span>
//         <br/>
//         <span style={{marginTop: "5px"}}>{serviço.preço}</span>
//     </li>
// ));

const Services = () => Servicos.map(servico => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{servico.titulo}</h5>
        </div>
        <a href="/saibamais" className="Info-Precos">saiba mais</a>     
    </div>
));

export default Services;