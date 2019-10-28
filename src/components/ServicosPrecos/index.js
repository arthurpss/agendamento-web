import React from "react"

const Servicos = [
    {
        titulo: "Pilates",
        preco: 100
    },
    {
        titulo: "Ortopedia",
        preco: 200
    },
    {
        titulo: "Traumatologia",
        preco: 300
    },
    {
        titulo: "Fisioterapia",
        preco: 400
    },
    {
        titulo: "Fisiatria",
        preco: 500
    },    
    {
        titulo: "Exame de Eletroneuromiogfrafia",
        preco: 600
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
            <p className="card-text">{servico.preco}</p>
        </div>
    </div>
));

export default Services;