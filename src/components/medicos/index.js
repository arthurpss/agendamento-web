import React from "react"
import medico_icone from "../../assets/icons/medico.svg";
import estrela_vazia from "../../assets/icons/estrela_vazia.svg";

const Medicos = () => (
    <div className="container" id="agendar">
        <div className="row">
            <div className="col-6">
                <img src={medico_icone} alt="Ícone do médico"/>
                <br/>
                <p> Dr. César</p>
            </div>
            <div className="col-6">
                <img src={estrela_vazia} alt="Estrela vazia"/>
                <img src={estrela_vazia} alt="Estrela vazia"/>
                <img src={estrela_vazia} alt="Estrela vazia"/>
            </div>
            <div className="col-6">
                <img src={medico_icone} alt="Ícone do médico"/>
                <br/>
                <p> Dr. Ricardo</p>
            </div>
            <div className="col-6">
                <img src={estrela_vazia} alt="Estrela vazia"/>
                <img src={estrela_vazia} alt="Estrela vazia"/>
                <img src={estrela_vazia} alt="Estrela vazia"/>
            </div>
            <div className="col-6">
                <img src={medico_icone} alt="Ícone do médico"/>
                <br/>
                <p> Dr. Arthur</p>
            </div>
            <div className="col-6">
                <img src={estrela_vazia} alt="Estrela vazia"/>
                <img src={estrela_vazia} alt="Estrela vazia"/>
                <img src={estrela_vazia} alt="Estrela vazia"/>
            </div>
        </div>
    </div>
);

export default Medicos;