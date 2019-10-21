import React from "react"
import medico_icone from "../../assets/icons/medico.svg";
import estrela_vazia from "../../assets/icons/estrela_vazia.svg";
import estrela_cheia from "../../assets/icons/estrela_cheia.svg";

const medicos = [
    {
        nome: "Dr. César",
        especialidade: "Pediatria",
        nota: 3,
        icone: medico_icone
    },
    {
        nome: "Dr. Rodrigo",
        especialidade: "Urologia",
        nota: 2,
        icone: medico_icone
    },
    {
        nome: "Dr. Arthur",
        especialidade: "Neurologia",
        nota: 3,
        icone: medico_icone
    },
    {
        nome: "Dr. Murilo",
        especialidade: "Geral",
        nota: 1,
        icone: medico_icone
    }
];

const Nota = (nota) => {
    switch (nota.nota) {
        case 1:
            return (
                <div>
                    <img src={estrela_vazia} alt="Estrela vazia"/>
                    <img src={estrela_vazia} alt="Estrela vazia"/>
                    <img src={estrela_cheia} alt="Estrela cheia"/>
                </div>
            );
        case 2:
            return (
                <div>
                    <img src={estrela_vazia} alt="Estrela vazia"/>
                    <img src={estrela_cheia} alt="Estrela cheia"/>
                    <img src={estrela_cheia} alt="Estrela cheia"/>
                </div>
            );
        case 3:
            return (
                <div>
                    <img src={estrela_cheia} alt="Estrela cheia"/>
                    <img src={estrela_cheia} alt="Estrela cheia"/>
                    <img src={estrela_cheia} alt="Estrela cheia"/>
                </div>
            );
        default:
            return (
                <div>
                    <span>Médico ainda não avaliado.</span>
                </div>
            );
    }
};

const Medicos = () => (
    medicos.map(medico =>
        (
            <div className="row" id="medicos">
                <div className="col-6">
                    <img src={medico.icone} alt="Ícone do médico"/>
                    <br/>
                    <p>{medico.nome}</p>
                </div>
                <div className="col-5">
                    <Nota nota={medico.nota}/>
                </div>
                <div className="col-1">
                    <a href={/agendar/}>
                        Agendar
                    </a>
                </div>
            </div>
        ))
);

export default Medicos;