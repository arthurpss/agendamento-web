import React, {Component} from 'react';
import Calendario from "../../components/calendario";
import "./styles.css";

export default class Agendar extends Component {

    render() {
        const agendamento = {
            medico: this.props.location.state.medico,
            horario: new Date(2019, 12, 29, 2, 2, 2),
            paciente: {
                nome: "X",
                idade: 10,
                peso: 80
            },
            primeira_consulta: true,
            plano: true,
            motivo: "xs"
        };

        const planos = [
            "Nenhum",
            "Amil",
            "Brasdesco",
            "GEAP",
            "X"
        ];

        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col">
                            <img src={agendamento.medico.icone} alt="Ícone do médico"/>
                            <span> {agendamento.medico.nome} </span>
                            <Calendario/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="form-control">
                                    Horário
                                </label>
                                <select className="form-control" id="form-control" required>
                                    {
                                        agendamento.medico.horarios_disponiveis.map(horario =>
                                            <option>
                                                {horario}
                                            </option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col centralizado">
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="checkbox" value=""
                                       id="primeira-consulta" required/>
                                <label className="form-check-label"
                                       htmlFor="primeira-consulta">Primeira consulta?</label>
                            </div>
                        </div>
                        <div className="col centralizado">
                            <button className="btn btn-primary">
                                Marcar
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="form-control">
                                Plano / Convênio
                            </label>
                            <select className="form-control" id="form-control" required>
                                {
                                    planos.map(plano =>
                                        <option>
                                            {plano}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="motivo">Motivo</label>
                                <input type="text" name="motivo" id="motivo"
                                       className="form-control" aria-describedby="motivo-help"/>
                                <small id="motivo-help" className="form-text text-muted">
                                    Se achar necessário, descreva o motivo da consulta
                                </small>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}